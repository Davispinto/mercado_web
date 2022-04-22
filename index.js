const express = require("express");
const exphbs = require("hbs");
const app = express();
const port = 3000;

exphbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

// middlewares
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));
app.use("/js", express.static(__dirname + "/public/js"));

// index
app.get("/", (req, res) => {
    res.render("index", {
        stock: ["Banana", "Cebollas", "Lechuga", "Papas", "Pimenton", "Tomate"]
    });
});

app.listen(3000, () => console.log(`Your app listening on port: ${port} and PID: ${process.pid}`));