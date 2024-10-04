import { Router } from "express";
import { getAllUsers, userLogin, userSignup, verifyUser } from "../controllers/userControllers.js";
import { loginValidator, signupValidator, validate } from "../utils/validator.js";
import { verifyToken } from "../utils/tokenManager.js";
const userRoutes = Router();
userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignup);
userRoutes.post("/login", validate(loginValidator), userLogin);
userRoutes.get("/auth-status", verifyToken, verifyUser);
export default userRoutes;
//# sourceMappingURL=userRoutes.js.map