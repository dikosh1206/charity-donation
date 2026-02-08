const Joi = require("joi");

exports.createDonationSchema = Joi.object({
  charityId: Joi.string().required(),
  amountKZT: Joi.number().min(100).required(),
  message: Joi.string().allow("").max(200)
});