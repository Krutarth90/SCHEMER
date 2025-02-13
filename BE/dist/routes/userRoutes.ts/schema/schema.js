"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupSchema = void 0;
const zod_1 = require("zod");
exports.signupSchema = zod_1.z.object({
    username: (0, zod_1.string)().email(),
    fName: (0, zod_1.string)(),
    lName: (0, zod_1.string)(),
    password: (0, zod_1.string)().min(6)
});
