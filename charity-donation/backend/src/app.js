const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const charityRoutes = require("./routes/charity.routes");
const donationRoutes = require("./routes/donation.routes");

const { notFound, errorHandler } = require("./middleware/errorHandler");

const app = express();
// CORS updated for localhost frontend

app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => res.json({ ok: true, message: "Charity Donation API" }));

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/charities", charityRoutes);
app.use("/donations", donationRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;