import { User } from "../models/user.js";
import ErrorHandler from "../utils/utility-class.js";
import { TryCatch } from "./error.js";
export const adminOnly = TryCatch(async (req, res, next) => {
    // req.query does api/v1/user?id=123
    const { id } = req.query;
    if (!id)
        return next(new ErrorHandler("Please Login First", 401));
    const user = await User.findById(id);
    if (!user)
        return next(new ErrorHandler("User Id does not Found", 401));
    if (user.role !== "admin")
        return next(new ErrorHandler("User should be an admin", 401));
    next();
});
