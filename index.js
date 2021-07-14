const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/nodeservices", (req, res) => {

    let script = req.body.script;

    script = script.replace('return ', '');

    const result = eval(script);

    res.json(result);
    
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
