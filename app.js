const express = require('express');
const app = express();
const port = 3000;
const productsRouter = require("./routes/productsrouter.js");
const connect = require("./schemas/index");
connect();

app.use(express.json());


app.use("/api", productsRouter); // app /api, 

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
});