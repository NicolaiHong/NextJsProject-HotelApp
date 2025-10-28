import { Schema, model, models, Types, Document } from "mongoose";
import { unique } from "next/dist/build/utils";

export interface IUser extends Document {
  email: string;
  username?: string;
  image?: string;
  favoritesBookmark: Types.ObjectId[];
}
export const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: [true, "Email is required"],
    },
    username: {
      type: String,
      unique: [true, "Username already exists"],
    },
    image: {
      type: String,
    },
    favoritesBookmark: [
      {
        type: Schema.Types.ObjectId,
        ref: "Property",
      },
    ],
  },
  { timestamps: true }
);
const User = models.User<IUser> || model<IUser>("User", UserSchema);
export default User;
