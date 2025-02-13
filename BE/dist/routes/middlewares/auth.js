"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const schema_1 = require("../userRoutes.ts/schema/schema");
function authMiddleware(req, res, next) {
    const username = req.body.username, fName = req.body.fName, lName = req.body.lName, password = req.body.password;
    const result = schema_1.signupSchema.safeParse({
        username,
        fName,
        lName,
        password
    });
    if (!result.success) {
        console.log(result.error);
        return;
    }
    next();
}
