require("dotenv").config();
const mongoose = require("mongoose");
const Charity = require("./models/Charity");

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Charity.deleteMany({});

    await Charity.insertMany([
      {
        name: "Food Aid Foundation",
        city: "Astana",
        description: "Помогаем людям с продуктами и горячими обедами. Фокус: голод, кризис, нужда.",
        tags: ["голод", "еда", "помощь"],
        imageQuery: "hunger charity food aid"
      },
      {
        name: "Kids Future Fund",
        city: "Almaty",
        description: "Поддержка детей: обучение, одежда, медицина, социальные программы.",
        tags: ["дети", "образование", "медицина"],
        imageQuery: "children charity education"
      },
      {
        name: "Health & Hope",
        city: "Shymkent",
        description: "Сбор на лечение и реабилитацию. Помощь больницам и пациентам.",
        tags: ["здоровье", "лечение", "донат"],
        imageQuery: "hospital charity medical help"
      }
    ]);

    console.log("✅ Seed done: charities inserted");
    process.exit(0);
  } catch (e) {
    console.error("❌ Seed error:", e.message);
    process.exit(1);
  }
})();