import { Router } from "express";
import userRoutes from "./userRoutes.js";
import chatRoutes from "./chatRoutes.js";
const appRouter = Router();
appRouter.use("/user", userRoutes); //domain/api/v1/user
appRouter.use("/user", chatRoutes); //domain/api/v1/chats
export default appRouter;
//# sourceMappingURL=index.js.map