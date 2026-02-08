const Charity = require("../models/Charity");

exports.getAll = async (req, res, next) => {
  try {
    const q = (req.query.search || "").trim();

    let filter = {};
    if (q) {
      filter = {
        $or: [
          { name: { $regex: q, $options: "i" } },
          { description: { $regex: q, $options: "i" } },
          { tags: { $in: [new RegExp(q, "i")] } },
        ],
      };
    }

    const charities = await Charity.find(filter).sort({ createdAt: -1 });

    const withImages = charities.map((c) => {
      const seed = encodeURIComponent(
        ((c.imageQuery || c.name) + "").replace(/\s+/g, "-")
      );

      return {
        ...c.toObject(),
        imageUrl: `https://picsum.photos/seed/${seed}/800/600`,
      };
    });

    res.json({ ok: true, charities: withImages });
  } catch (e) {
    next(e);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const charity = await Charity.findById(req.params.id);
    if (!charity) return res.status(404).json({ ok: false, message: "Charity not found" });

    const seed = encodeURIComponent(
      ((charity.imageQuery || charity.name) + "").replace(/\s+/g, "-")
    );

    res.json({
      ok: true,
      charity: {
        ...charity.toObject(),
        imageUrl: `https://picsum.photos/seed/${seed}/1000/700`,
      },
    });
  } catch (e) {
    next(e);
  }
};