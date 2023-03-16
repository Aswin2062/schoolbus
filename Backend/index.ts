import express from "express"
import mongoose, { ConnectOptions } from "mongoose";
import Model from "./Model/loginUser"


const app = express()
app.listen(5000, () => console.log("listening on http://localhost:5000"));


const mongoUrl =
  "mongodb+srv://ASWIN2062:ASWIN2062@cluster0.cqkjges.mongodb.net/?retryWrites=true&w=majority";
 

  const connection = mongoose.connection;


  app.get("/", (_, res) => {
    res.send("hello world");
  });

  app.post("/create", async (req, res) => {
    const { username, password } = req.body;

    const newUser = new Model({
      username,
      password,
    });
    console.log(newUser);

    await newUser.save();

    res.json(newUser);
  });