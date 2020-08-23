const admin = require("firebase-admin")
const coupon = require("coupon-code")
const serviceAccount = require("./serviceAccount.json")
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://ice15-e33ad.firebaseio.com",
})

const codes = []
for (let i = 0; i < 80; i++)
    codes.push(coupon.generate({ parts: 2, partLen: 3 }).replace("-", ""))

const batch = admin.firestore().batch()
codes.forEach(code => {
    console.log(code)
    const couponRef = admin.firestore().collection("coupons").doc(code)
    batch.set(couponRef, { id: code, isUsed: false })
})
batch.commit()
