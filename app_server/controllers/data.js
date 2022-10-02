/* GET home page */
const workouts = function (req, res) {
  res.render("workouts", { title: "Workouts" });
};

module.exports = {
 workouts
};
