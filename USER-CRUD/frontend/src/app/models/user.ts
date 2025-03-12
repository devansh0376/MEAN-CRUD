export default interface User
{
    _id?: string;  // Add this if using MongoDB ObjectId
    __id?: string; // If your backend sends __id, keep this
    name:String,
    email:String,
    age:Number,
    address:String,
    password:String
}