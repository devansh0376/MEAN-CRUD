const User = require('../models/user')

async function addUser(req,res) 
{
    const { name, email, age, address, password } = req.body;
    const newUser= await User.create({
    name,
    email,
    age,
    address,
    password,
  });
  return res.status(201).json(newUser);
}

//get all users
async function getUser(req,res) {
  const users=await User.find()
  return res.status(201).json(users);
}

//get user by ID
async function getUserById(req,res) {
  const user=await User.findById(req.params.id)
  if(!user)
    return res.status(404).json({ message: 'User not found' });

  return res.status(201).json(user);
}

// update user by id 
async function updateUser(req,res) {
  const user=await User.findByIdAndUpdate(req.params.id,req.body,{ new: true })
  if (!user) 
  return res.status(404).json({ message: 'User not found' });

  return res.status(200).json({message: 'Updated Successfully' , user});

}
//delete user by id 
async function deleteUser(req,res) {
  const user=await User.findByIdAndDelete(req.params.id)
  if (!user) 
    return res.status(404).json({ message: 'User not found' });

  return res.status(200).json({message: 'Delete user Successfully'});
  
}

module.exports ={addUser,getUser,getUserById,updateUser,deleteUser}