import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from "../types";
import diaryData from "./diaries.json";

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

export const getDiaries = () => diaries;

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
    const diary = diaries.find(d => d.id === id);
    if(diary){
        const { comment, ...seqDiary } = diary;
        return seqDiary;
    }
    return undefined;
}

export const getDiariesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => diaries.map(d => {
    const {comment, ...seqDiary} = d;
    return seqDiary;
});

export const addDiary = ( newDiaryEntry: NewDiaryEntry): DiaryEntry => {
    const newDiary = {
        id: Math.max(...diaries.map(d => d.id)) + 1,
        ...newDiaryEntry
    }
    diaries.push(newDiary);
    return newDiary;
};