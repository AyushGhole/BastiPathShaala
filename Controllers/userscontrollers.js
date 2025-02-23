const BastiUser = require("../models/User");
const BastiDonation = require("../models/transaction");

//  Rendering Login Page
module.exports.getLoginPage = (req, res) => {
  res.render("login.ejs");
};

//Rendering SignUp Page
module.exports.getSignUpPage = (req, res) => {
  res.render("signup.ejs");
};

//LoggedIn User
module.exports.postLoginRoute = async (req, res) => {
  // await req.alert("success", "Welcome back to Pay Way!!");
  res.redirect("/dashboard");
};

//SignUp User Details and Saving in the databases
module.exports.postSignUpRoute = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new BastiUser({ email, username });
    console.log("newUsers : ", newUser);
    const registeredUser = await BastiUser.register(newUser, password);
    console.log("Registered Users : ", registeredUser);
    // req.alert("success", `${username} registered successfully!`);
    res.redirect("/dashboard");
  } catch (err) {
    // req.flash("error", err.message);
    console.log(err.message);
    res.redirect("/signup");
  }
};
//Rendering dashboard page
module.exports.getDashboardPage = (req, res) => {
  res.render("dashboard.ejs");
};

//Rendering the modal page
module.exports.getModalPage = (req, res) => {
  res.render("modal.ejs");
};

//Save Donated amount
module.exports.payment = async (req, res) => {
  try {
    let { id } = req.params;
    let { amount, method } = req.body;
    let user = await BastiUser.findById(id);
    let transactions = new BastiDonation({ amount, method });
    transactions.status = "success";
    let status = transactions.status;
    console.log(transactions);

    await user.BastiDonation.push(transactions);
    await user.save();
    console.log(user);

    res.render("receipt.ejs", { transactions, user, status });
  } catch (err) {
    console.log(err);
    res.redirect("/donate/id");
  }
};

module.exports.transactionPage = async (req, res) => {
  try {
    let { id } = req.params;

    // Find user and populate BastiDonation
    let user = await BastiUser.findById(id);
    let transactions = await user.BastiDonation;
    res.render("transactions.ejs", { user, transactions });
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).send("Internal Server Error");
  }
};
