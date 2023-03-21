import  Express  from "express";
import {
    getAll,
    getDetail,
    create,
    update,
    remove,
    updatePath
} from "../controllers/user.js";

const router = Express.Router();

router.get("/users", getAll);
router.get("/user/:id", getDetail);
router.post("/user", create),
router.put("/user/:id", update);
router.patch("/user/:id", updatePath);
router.delete("/user/:id", remove);


export default router;