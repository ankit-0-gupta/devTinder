const express = require("express");
const app = express();

app.get("/user/:userId/:age", (req, res)=>{
    console.log(req.params.userId);
    res.send({userName: 'Ankit Gupta', age: 21});
});

app.listen(3000, () => {
    console.log("Server is successfully listening on port 3000...")
});