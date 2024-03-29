const express = require("express");
const cors = require("cors");
const rolesRoutes = require("./routes/rolesRouter");
const productosRoutes = require("./routes/productosRouter");
const authRoutes = require("./routes/authRouter");
const resourcesRoutes = require("./routes/resourcesRouter");
const clientesRoutes = require("./routes/clientesRouter");

const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/roles", rolesRoutes);
app.use("/api/productos", productosRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/resources", resourcesRoutes);
app.use("/api/clientes", clientesRoutes);
app.listen(PORT, () => console.log(`OK => PORT ${PORT}`));