const nodemailer = require('nodemailer');
const config ={
    service:" Gmail",
    host:"smtp.gmail.com",
    port:587,
    auth:{
        user:"hahuuhoang732004@gmail.com",
        pass:"qejomaersxglecpn",
    }
}
const transport = nodemailer.createTransport(config);
module.exports = transport;