"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos"));
const PORT = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', todos_1.default);
app.listen(PORT, () => console.log(`Running at Port ${PORT}`));
