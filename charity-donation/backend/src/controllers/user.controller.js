const User = require("../models/User");
const ApiError = require("../utils/ApiError");

exports.getProfile = async (req, res) => {
  res.json({ ok: true, user: req.user });
};

exports.updateProfile = async (req, res, next) => {
  try {
    const { username, email } = req.body;

    if (email && email !== req.user.email) {
      const exists = await User.findOne({ email });
      if (exists) throw new ApiError(400, "Email already used");
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { ...(username ? { username } : {}), ...(email ? { email } : {}) },
      { new: true }
    ).select("-passwordHash");

    res.json({ ok: true, user });
  } catch (e) {
    next(e);
  }
};