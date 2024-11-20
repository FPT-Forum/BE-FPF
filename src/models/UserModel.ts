import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    username: {
        type: String,
        require: true
    },
}, {
    timestamps: true,
})

export const UserModel = mongoose.model('User', UserSchema)