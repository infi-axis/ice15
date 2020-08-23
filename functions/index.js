const functions = require("firebase-functions")
const admin = require("firebase-admin")
const coupon = require("coupon-code")
const { google } = require("googleapis")
const config = functions.config()
const sheets = google.sheets("v4")

admin.initializeApp()
const jwtClient = new google.auth.JWT({
    email: config.google.client_email,
    key: config.google.private_key.replace(new RegExp("\\\\n", "g"), "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
})

exports.generateCode = functions.https.onRequest(async (req, res) => {
    res.set("Access-Control-Allow-Origin", "*")
    res.set("Access-Control-Allow-Methods", "GET, POST")
    res.set("Access-Control-Allow-Headers", "Content-Type")
    res.setHeader("Content-Type", "application/json")
    if (req.method === "POST") {
        const { secret } = req.body
        if (secret !== config.secret.generate)
            return res.status(401).send("Unauthorized")
        const couponId = coupon
            .generate({ parts: 2, partLen: 3 })
            .replace("-", "")
        const couponRef = admin.firestore().collection("coupons").doc(couponId)
        await couponRef.set({ id: couponId, isUsed: false })
        return res.status(200).send({ couponId })
    } else {
        return res.send(":P")
    }
})

exports.verifyCode = functions.https.onRequest((req, res) => {
    res.set("Access-Control-Allow-Origin", "*")
    res.set("Access-Control-Allow-Methods", "GET, POST")
    res.set("Access-Control-Allow-Headers", "Content-Type")
    res.setHeader("Content-Type", "application/json")
    if (req.method === "POST") {
        const { couponId } = req.body
        const couponRef = admin.firestore().collection("coupons").doc(couponId)
        couponRef
            .get()
            .then(couponDoc => {
                if (couponDoc.exists) {
                    const coupon = couponDoc.data()
                    if (coupon.isUsed)
                        return res.status(404).send("Already redeemed")
                    return res.status(200).send("OK")
                }
                return res.status(404).send("Invalid coupon")
            })
            .catch(err => res.status(500).send(err.message))
    } else return res.send(":P")
})

exports.vote = functions.https.onRequest((req, res) => {
    res.set("Access-Control-Allow-Origin", "*")
    res.set("Access-Control-Allow-Methods", "GET, POST")
    res.set("Access-Control-Allow-Headers", "Content-Type")
    res.setHeader("Content-Type", "application/json")
    if (req.method === "POST") {
        const { couponId, male, female } = req.body
        const couponRef = admin.firestore().collection("coupons").doc(couponId)
        couponRef
            .get()
            .then(couponDoc => {
                if (couponDoc.exists) {
                    const coupon = couponDoc.data()
                    if (coupon.isUsed)
                        return res.status(404).send("Already redeemed")
                    const maleRef = admin
                        .firestore()
                        .collection("m-candidates")
                        .doc(male)
                    const femaleRef = admin
                        .firestore()
                        .collection("f-candidates")
                        .doc(female)
                    maleRef.update({
                        votes: admin.firestore.FieldValue.increment(1),
                    })
                    femaleRef.update({
                        votes: admin.firestore.FieldValue.increment(1),
                    })
                    couponRef.update({ isUsed: true })
                    return res.status(200).send("Success")
                }
                return res.status(404).send("Invalid coupon")
            })
            .catch(err => res.status(500).send(err.message))
    } else return res.send(":P")
})

exports.result = functions.https.onRequest((req, res) => {
    res.set("Access-Control-Allow-Origin", "*")
    res.set("Access-Control-Allow-Methods", "GET, POST")
    res.set("Access-Control-Allow-Headers", "Content-Type")
    res.setHeader("Content-Type", "application/json")
    if (req.method === "POST") {
        const { secret } = req.body
        if (secret !== config.secret.generate)
            return res.status(401).send("Unauthorized")
        const mCandidatesRef = admin.firestore().collection("m-candidates")
        const fCandidatesRef = admin.firestore().collection("f-candidates")
        const mResults = []
        const fResults = []
        admin
            .firestore()
            .runTransaction(t => {
                return t.get(mCandidatesRef).then(mSnapshot => {
                    mSnapshot.forEach(mDoc => {
                        mResults.push(mDoc.data())
                    })
                    return t.get(fCandidatesRef).then(fSnapshot => {
                        fSnapshot.forEach(fDoc => {
                            fResults.push(fDoc.data())
                        })
                        return res
                            .status(200)
                            .send({ M: mResults, F: fResults })
                    })
                })
            })
            .catch(err => res.status(500).send(err.message))
    } else return res.send(":P")
})

exports.mrealtimeUpdate = functions.firestore
    .document("m-candidates/{id}")
    .onUpdate(async (change, context) => {
        const after = change.after.data()
        await jwtClient.authorize()
        let request = {
            auth: jwtClient,
            spreadsheetId: "15Ajw85WGz0AUd8yjzVNExy6Ys6RnwDqutWvPfN0u7s4",
            range: `Sheet1!C${parseInt(after.id) + 2}`,
            valueInputOption: "RAW",
            requestBody: {
                values: [[after.votes]],
            },
        }
        await sheets.spreadsheets.values.update(request, {})
    })

exports.frealtimeUpdate = functions.firestore
    .document("f-candidates/{id}")
    .onUpdate(async (change, context) => {
        const after = change.after.data()
        await jwtClient.authorize()
        let request = {
            auth: jwtClient,
            spreadsheetId: "15Ajw85WGz0AUd8yjzVNExy6Ys6RnwDqutWvPfN0u7s4",
            range: `Sheet1!G${parseInt(after.id) + 2}`,
            valueInputOption: "RAW",
            requestBody: {
                values: [[after.votes]],
            },
        }
        await sheets.spreadsheets.values.update(request, {})
    })
