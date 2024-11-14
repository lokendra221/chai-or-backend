import mongoose from "mongoose";
import jwt from "jsonwebtoken"; // ek bearan  token hai
import bcrypt from "bcrypt";
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true, // searching field enable it is optimaized
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, //cloudly url
      required: true,
    },
    coverImage: {
      type: String, // cloudally url
    },
    watchHistory: [
      {
        type: Schema.Type.ObjectId,
        ref: "Video",
      },
    ],

    password: {
      type: String,
      required: [true, "password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  // password encryption
  if (!this.isModified("password")) return next();

  this.password = bcrypt.hash(this.password, 10);
  next();
});
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.methods.generateAccessToken = function () {
 return  jwt.sign({
                _id: this._id, // get from mongoodb
                email: this.email,
                username: this.username,
                fullName: this.fullName,
  },
  process.env.ACCESS_TOKEN_SECRET,{
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY
  }
)
};
userSchema.methods.methods.generateRefreshToken = function () {
    return  jwt.sign({
        _id: this._id, // get from mongoodb
    },
process.env.REFRESH_TOKEN_SECRET,{
expiresIn: process.env.REFRESH_TOKEN__EXPIRY
}
)
};

export const User = mongoose.model("User", userSchema);
