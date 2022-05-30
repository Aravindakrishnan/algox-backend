const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json()) 

const PORT = 5002;

app.post("/analyze",(req,res)=>{

    // special method
    res.send({
        name : "linear search",
        variables : [{}],
		operations : [{}],
		controls : [{}],
		boundRules : []
    });
});

app.get("/admin",(req,res)=> {
    res.sendFile(path.join(__dirname,"./public/admin.html"))
});

app.listen(PORT,()=> {
    console.log(`Server is connected http://localhost:${PORT}`);
})