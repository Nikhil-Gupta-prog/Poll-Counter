const mongoose = require("mongoose");
const crypto = require("crypto");
const { v1: uuidv1 } = require('uuid');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength:32,
        trim: true,
    },
    lastname: {
        type: String,
        required:true,
        trim:true,
        maxlength:32,
    },
    email: {
        type: String,
        required: true,
        maxlength:32,
        trim:true,
        unique: true,
    },
    phone: {
        type: Number,
        required:true,
        maxlength: 12,
        trim : true,
        unique: true,
    },
    userinfo: {
        type: String,
        trim: true,
    },
    encry_password: {
        type: String,
        required: true,
    },
    salt: String,


},
{timestamps: true}
);

userSchema.virtual("password")
    .set(function(password){
        this._password = password;
        this.salt = uuidv1();
        this.encry_password = this.securePassword(password);
    })
    .get(function(){
        return this._password
    })



userSchema.methods = {
    authenticate : function(plainpassword){
        return this.securePassword(plainpassword) === this.encry_password
     },
 
     securePassword: function(plainpassword){
         if(!plainpassword) return "";
         try {
            return crypto.createHmac('sha256',this.salt)
            .update(plainpassword)
            .digest('hex');
         } 
         catch (err) {
            return "";    
         }
     }
}





module.exports = mongoose.model("User",userSchema);
