const Manager = require("../models/managerModel");
const Joi = require("joi");

const loginValidation = (data) => {
  console.log("in login validation ", data);
  const schema = Joi.object({
    user_id: Joi.string().min(6).required().email(),
    password: Joi.string().min(5).required(),
  });
  return schema.validate(data);
};

const loginUser = async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) {
    console.log("error in login is", error);
    return res
      .status(400)
      .json({ error: true, message: error.details[0].message });
  }

  const userData = await Manager.findOne({ manager_user_id: req.body.user_id });
  if (!userData) {
    return res.status(400).json({ error: true, message: "User not exists" });
  }

  if (userData) {
    if (userData.manager_password === req.body.password) {
      res.status(200).json({
        error: false,
        userData,
        message: "Login Successful",
      });
    } else {
      return res
        .status(400)
        .json({ error: true, message: "incorrect password" });
    }
  } else {
    return res.status(400).json({ error: true, message: "Manager Not found" });
  }
};

module.exports = {
  loginUser,
};
