const express = require("express");
const cors = require("cors");
const rolesRoutes = require("./routes/rolesRouter");

const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/roles", rolesRoutes);
app.listen(PORT, () => console.log(`OK => PORT ${PORT}`));