import express from "express";
import showjogadores from "./function/ShowJogadores";


const router = express.Router();


router.get("/showjogadores", showjogadores);


router.get("/show", )

export default router;