const Code = require("../models/codeModel.js");

// Login User
const loginUser = async (req, res, next) => {
  const { code, name } = req.body;
  console.log("login ", code, name);

  // checking if the user has name and password both

  if (!code || !name) {
    return res.status(400).json({
      message: "Fill the empty fields",
    });
  }

  const user = await Code.findOne({ code });
  console.log(user);

  if (!user) {
    const isActive = true;
    const userCode = new Code({
      name,
      code,
      isActive,
    });
    const selfCode = await userCode.save();

    const token = await selfCode.getJWTToken();
    const userId = selfCode._id;
    return res.status(200).json({
      success: true,
      info: selfCode,
      token,
      userId: userId,
    });
  }
  user.name = name;
  user.isActive = true;
  await user.save();
  const token = await user.getJWTToken();
  const userId = user._id;
  res.status(200).json({
    success: true,
    info: user,
    token,
    userId: userId,
  });
};

const alredyLoggedIn = async (req, res) => {
  const user = await Code.findById(req.id);
  if (!user)
    return res.status(400).json({
      error: "User not found",
    });
  res.status(200).json({
    success: true,
    user: user,
  });
};

module.exports = { loginUser, alredyLoggedIn };
