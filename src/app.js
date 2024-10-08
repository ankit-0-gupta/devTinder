const express = require("express");
const app = express();


// app.use("/", (req, res)=>{
//     res.send("Hello from the server !");
// });

app.use("/home", (req, res) => {
    res.send("Home Route !")
});

app.use("/test", (req, res)=>{
    res.send("Test Route !");
});

app.use("/demo", (req, res) => {
    res.send("Demo Route !");
});


app.listen(3000, () => {
    console.log("Server is successfully listening on port 3000...")
});