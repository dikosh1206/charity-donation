const ApiError = require("../utils/ApiError");
const Donation = require("../models/Donation");
const Charity = require("../models/Charity");

exports.create = async (req, res, next) => {
  try {
    const { charityId, amountKZT, message } = req.body;

    const charity = await Charity.findById(charityId);
    if (!charity) throw new ApiError(404, "Charity not found");

    const donation = await Donation.create({
      owner: req.user._id,
      charity: charityId,
      amountKZT,
      message,
      status: "paid"
    });

    res.json({ ok: true, donation });
  } catch (e) {
    next(e);
  }
};

exports.getMine = async (req, res, next) => {
  try {
    const donations = await Donation.find({ owner: req.user._id })
      .populate("charity", "name city imageQuery")
      .sort({ createdAt: -1 });

    const mapped = donations.map((d) => {
      const charity = d.charity; // может быть null

      if (charity) {
        const seed = encodeURIComponent(
          (charity.imageQuery || charity.name).replace(/\s+/g, "-")
        );

        return {
          ...d.toObject(),
          charity: {
            ...charity.toObject(),
            imageUrl: `https://picsum.photos/seed/${seed}/800/600`,
          },
        };
      }

      // если charity удалили/не найдено
      return {
        ...d.toObject(),
        charity: {
          name: "Unknown charity",
          city: "",
          imageUrl: "https://picsum.photos/seed/unknown-charity/800/600",
        },
      };
    });

    res.json({ ok: true, donations: mapped });
  } catch (e) {
    next(e);
  }
};