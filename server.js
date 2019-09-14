const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const mailer = require("./mailer");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.post("/contact", (req, res) => {
        const { email = "", name = "", message = "" } = req.body;
        mailer({ email, name, text: message })
            .then(() => {
                console.log("success");
                res.send("success");
            })
            .catch(error => {
                console.log("failed", error);
                res.send("badddd");
            });
    });

    server.post("/checkout", (req, res) => {
        const {
            country,
            city,
            zipcode,
            address,
            name,
            companyName,
            phone,
            email,
            last4CardNum,
            selectedItems
        } = req.body;
        mailer({
            country,
            city,
            zipcode,
            address,
            name,
            companyName,
            phone,
            email,
            last4CardNum,
            selectedItems
        })
            .then(() => {
                console.log("success");
                res.send("success");
            })
            .catch(error => {
                console.log("failed", error);
                res.send("badddd");
            });
    });

    // server.get("/item/:id", (req, res) => {
    //     app.render(req, res, "/item", req.params);
    // });

    // server.get("/blog/:id", (req, res) => {
    //     app.render(req, res, "/blog/[id]", req.params);
    // });

    server.get("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(3003, err => {
        if (err) throw err;
        console.log("Two Halves Sucre now serving on localhost:3003");
    });
});
