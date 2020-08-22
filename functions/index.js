const functions = require("firebase-functions")
const admin = require("firebase-admin")
const coupon = require("coupon-code")

admin.initializeApp()
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.generateCode = functions.https.onRequest((req, res) => {
    res.set("Access-Control-Allow-Origin", "*")
    res.set("Access-Control-Allow-Methods", "GET, POST")
    res.set("Access-Control-Allow-Headers", "Content-Type")
    res.setHeader("Content-Type", "application/json")
    if (req.method === "POST") {
        const { secret } = req.body
        if (secret !== process.env.SECRET)
            return res.status(401).send("Unauthorized")
        const couponId = coupon
            .generate({ parts: 2, partLen: 3 })
            .replace("-", "")
        const couponRef = admin.firestore().collection("coupons").doc(couponId)
        couponRef.set({ id: couponId, isUsed: false })
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
                        return res.status(404).send("Already reedemed")
                    return res.status(200).send("OK")
                }
                return res.status(404).send("Not Found")
            })
            .catch(err => res.status(500).send(err.message))
    } else return res.send(":P")
})

exports.vote = functions.https.onRequest((req, res) => {
    const { couponId, male, female } = req.body
    const couponRef = admin.firestore().collection("coupons").doc(couponId)
    couponRef
        .get()
        .then(couponDoc => {
            if (couponDoc.exists) {
                const coupon = couponDoc.data()
                if (coupon.isUsed)
                    return res.status(404).send("Already reedemed")
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
                return res.status(200).send("Success")
            }
            return res.status(404).send("Not Found")
        })
        .catch(err => res.status(500).send(err.message))
})
