// CREATE SERVER
const express = require("express");
const app = express();
const _PORT = process.env.PORT;
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
// for hashed password
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
// CONNECT TO DB
const username = process.env.USERNAME,
  password = process.env.PASSWORD,
  database = process.env.DB;

const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://${username}:${password}@cluster0.d4ket7g.mongodb.net/${database}?retryWrites=true&w=majority`
);

// USER MODEL
// const UserModel = require("./models/Users");

// get request
// app.get("/users", async (req, res) => {
//   const users = await UserModel.find();
//   res.json(users);
// });

// create user
// app.post("/createUser", async (req, res) => {
//   const newUser = new UserModel(req.body);
//   await newUser.save();
//   res.json(req.body);
// });

// Admin MODEL  && REGISTER
const AdminModel = require("./models/Admins");
app.post("/register", async (req, res) => {
  const {
    username,
    password,
    firstName,
    lastName,
    email,
    address,
    phoneNumber,
  zip} = req.body;
  // search for admin is exists or not
  const admin = await AdminModel.findOne({ username });
  admin && res.send(admin.address);
  // if admin exist
  //   if (admin) {
  //     return res.json({ message: "Admin already exists!" });
  //   }

  // for hached password
  const hashedPassword = bcrypt.hashSync("password", 10);

  //   if admin not exist
  const newAdmin = new AdminModel({
    username,
    password: hashedPassword,
    firstName,
    lastName,
    email,
    address,
    phoneNumber,
    zip,
  });
  await newAdmin.save();
  return res.json({ message: "Admin created succefully" });
});

// LOGIN

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const admin = await AdminModel.findOne({ username });
  !admin && res.json({ message: "Admin dosen't exists!" });

  await bcrypt.compare(password, admin.password, (req, res) => {
    if (password != admin.password) {
      res.json({ success: false, message: "passwords do not match" });
    }
  });
  //   !isPasswordValid && res.json({ message: "username or password incorrect" });
  // json web token
  const token = jwt.sign({ id: admin._id }, process.env.SECRET);

  return res.json({ token, adminId: admin._id });
});

app.listen(_PORT, () => {
  console.log("Server Works");
});
