"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 9001;
app.use((0, cors_1.default)());
app.use(index_1.default);
const uri = "mongodb://localhost:27017/";
mongoose_1.default
    .connect(uri)
    .then(() => app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`)))
    .catch((error) => {
    throw error;
});
