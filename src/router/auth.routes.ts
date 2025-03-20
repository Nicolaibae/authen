import { Router } from "express";
import { authenticateJWT } from "../middleware/auth.middleware";
import{
    register,
    login
} from "../controller/auth.controller"

const router = Router()

router.post("/register",register);
router.post("/login",login)
router.get("/profile", authenticateJWT, (req, res) => {
    res.json({ message: "Welcome!", user: (req as any).user });
  });

export default router