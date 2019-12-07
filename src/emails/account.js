const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// sgMail.setApiKey(sendgridAPIKey)

// sgMail.send({
//     to: "choi.soyoung@gmail.com",
//     from: "choi.soyoung@gmail.com",
//     subject: "This is my first creation",
//     text: "hope this works!"
// })

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "choi.soyoung@gmail.com",
        subject: "Thanks for joining in!",
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
    // sgMail.send({
    //     to: email,
    //     from: "no-reply.movierewards@gmail.com",
    //     subject: `${name}, you won $1000 for entering the Jurassic Park Sweepstakes!`,
    //     text: "Just joking around with software my mom developed - Brady"
    // })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "choi.soyoung@gmail.com",
        subject: `${name}, we are sad to see you go.`,
        text: "Goodbye!"
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}