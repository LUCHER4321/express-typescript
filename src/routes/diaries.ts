import express from "express";
import * as DiaryServices from "../services/diary";
import { toNewDiaryEntry } from "../utils";

const router = express.Router();

router.get("/", (_, res) => {
    res.send(DiaryServices.getDiariesWithoutSensitiveInfo());
});

router.get("/:id", (req, res) => {
    const diary = DiaryServices.findById(+req.params.id);
    diary ? res.send(diary) : res.sendStatus(404);
});

router.post("/", (req, res) => {
    try{
        const newDiary = toNewDiaryEntry(req.body);
        const addedDiary = DiaryServices.addDiary(newDiary)
        res.json(addedDiary);
    } catch(error: any){
        res.status(400).send(error.message);
    }
});

export default router;