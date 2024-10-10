const express = require("express");
const app = express();

app.use("/user", (req, res)=>{
    res.send("User!!");
});

// This will only handle GET call to /user
app.get("/user", (req, res)=>{
    res.send({userName: 'Ankit Gupta', age: 21});
});

app.post("/user", (req, res)=>{
    // saving data to DB
    res.send("Data successfully saved to the database");
});

app.delete("/user", (req, res)=>{
    res.send("Deleted Successfully!");
});


// This will match all the HTTP method API calls to /test
app.use("/test", (req, res)=>{
    res.send("Testing!!");
});

app.listen(3000, () => {
    console.log("Server is successfully listening on port 3000...")
});