"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router({ mergeParams: true });
router.get('', async (req, res, next) => {
    const url = 'https://dummyjson.com/users';
    console.log('came here');
    let ans = {};
    await fetch(url)
        .then(async (res) => {
        ans = await res.json();
    }).catch((err) => {
        ans = err;
        console.log(err);
    });
    return res.status(200).json(ans);
});
exports.default = router;
//# sourceMappingURL=fetch.js.map