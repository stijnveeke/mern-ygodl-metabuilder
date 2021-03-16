let User = require("../models/user");
let crypto = require('crypto');
const db = require("../models/index");

function userindex(req, res, next) {
    return res.send("User index");
}

function userdetails(req, res, next) {
    return res.send("User details");
}

function usercreate(req, res, next) {
    console.log(req.method);
    if (req.method === "POST") {
        console.log(req.body.username);
        const username = req.body.username;
        const password = req.body.password;
        const confirmpassword = req.body.confirmpassword;
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const phonenumber = req.body.phonenumber;

        if (password != confirmpassword) {
            return res.send("Passwords are not the same");
        }

        // Auto generated
        const salt = crypto.createHash('sha1').update(crypto.randomBytes(16)).digest('base64');
        const hash = crypto.createHash('sha1');
        hash.update(salt);
        hash.update(password);

        const hashedpassword = hash.digest('base64');

        const newUser = db.sequelize.models.User.build({
            username: username,
            password: hashedpassword,
            salt: salt,
            firstname: firstname,
            lastname: lastname,
            email: email,
            confirmedEmail: false,
            phonenumber: phonenumber
        })

        newUser.save();
        
        return res.send("User create");        
    }

    return res.send("User create form");      
}

function userupdate(req, res, next) {
    return res.send("User UPDATE");
}

function userdelete(req, res, next) {
    return res.send("User delete");
}

module.exports = {userindex, userdetails, usercreate, userupdate, userdelete};