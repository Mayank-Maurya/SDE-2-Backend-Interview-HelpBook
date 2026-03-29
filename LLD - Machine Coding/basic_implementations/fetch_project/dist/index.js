"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fetch_1 = __importDefault(require("./controllers/fetch"));
const app = (0, express_1.default)();
app.use("/health", (req, res, next) => {
    return res.send("Ok");
});
// routes
app.use('/api/v1/fetch', fetch_1.default);
app.listen(3001, () => {
    console.log("server listening on 3000");
});
//# sourceMappingURL=index.js.map