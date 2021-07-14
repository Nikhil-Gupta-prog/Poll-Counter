var postmark = require("postmark");

// Send an email:
const client = new postmark.ServerClient( process.env.MAIL || "ffc907fc-5cd8-4569-b748-2216721368d4");

const sendMail = async (name, mail) => {
    try {
    const mssg = `Welcome to Poll Counter, we are pleased to have you with us ${name}.

We Know that you are as excited as us and are ready to provide your precious opinion on 
some of the really important and  hot surveys around the web.

We hope that you will have a good time with us..

Regards:-  Poll Counter dev team..`
     const resp = await client.sendEmail({
        "From": "2018pietcsbalvinder33@poornima.org",
        "To": mail,
        "Subject": "Welcome To Poll Counter",
        "TextBody": mssg,
        "MessageStream": "outbound"
      })
    }
    catch(err) {
        console.log(err);
    }
}

module.exports = {sendMail};