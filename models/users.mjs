import mongooose from "mongoose";
const userSchema = new mongooose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongooose.model("User", userSchema);
export default User;
