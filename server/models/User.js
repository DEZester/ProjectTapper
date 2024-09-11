import mongoose, {Schema} from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false
    },
    game_user_id: {
      type: Number,
      required: true,
      unique: true,
    },
    posts: [{
      type: Schema.Types.ObjectId,
      ref: 'Post',
      default: []
    }],
    friends: [Number],
    achievements: [{
      type: Schema.Types.ObjectId,
      ref: 'Achievement',
      default: []
    }],
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user"
    },
    blocked_users: [Number],
    last_login_at: Date,
    created_at: Date,
    updated_at: Date,
  }, {timestamps: true}
)

const User = mongoose.model("User", UserSchema);
export default User;