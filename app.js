const express = require("express");

const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));


app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/index.html", (req, res) => {
  res.redirect("/");
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});
app.get("/about.html", (req, res) => {
  res.redirect("/about");
});

app.get("/clubs", (req, res) => {
  res.sendFile("./views/clubs.html", { root: __dirname });
});
app.get("/clubs.html", (req, res) => {
  res.redirect("/clubs");
});

app.get("/contact", (req, res) => {
  res.sendFile("./views/contact.html", { root: __dirname });
});
app.get("/contact.html", (req, res) => {
  res.redirect("/contact");
});

app.get("/gallery", (req, res) => {
  res.sendFile("./views/gallery.html", { root: __dirname });
});
app.get("/gallery.html", (req, res) => {
  res.redirect("/gallery");
});

app.get("/theTeam", (req, res) => {
  res.sendFile("./views/theTeam.html", { root: __dirname });
});
app.get("/theTeam.html", (req, res) => {
  res.redirect("/theTeam");
});

app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
