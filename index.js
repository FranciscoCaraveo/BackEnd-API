const express = require("express")
const app = express();
const port = 30004;

app.use(express.json());

const route = require("./routes");

const db = require("./db");

app.use("/FakestoreAPI", route)


app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});