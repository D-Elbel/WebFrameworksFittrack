/* GET home page */
const registration = function (req, res) {
  res.render("index", { title: "Registration" });
};

const login = function (req, res) {
  res.render("login", { title: "Login" });
};

module.exports = {
  registration,
  login
};
