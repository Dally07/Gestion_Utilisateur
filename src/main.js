const express = require ('express');
const app  = express();
const port = 3000;
const localhost = "127.0.0.1";

app.get("/", (req, res) => {
    res.send("Serveur demarer");
})

app.listen(port,localhost, () => {
    console.log(`Serveur demarer sur le port ${port}`);
})