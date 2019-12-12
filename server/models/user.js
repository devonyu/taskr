import dynamoose, { Schema } from "dynamoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 32
  }
});
export default dynamoose.model("User", userSchema);
