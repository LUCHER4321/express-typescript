import { Visibility, Weather } from "./enums";
import { NewDiaryEntry } from "./types";

const isString = (str: any): boolean => (typeof str === "string" || str instanceof String);

const isDate = (date: string): boolean => Boolean(Date.parse(date));

const isWeather = (wth: any): boolean => Object.values(Weather).includes(wth);

const isVisibility = (vsb: any): boolean => Object.values(Visibility).includes(vsb);

const parseComment = (comment: any): string => {
    if(!isString(comment)) throw new Error("Incorrect or missing comment");
    return comment;
}

const parseDate = (date: any): string => {
    if(!isString(date) || !isDate(date)) throw new Error("Incorrect or missing date");
    return date;
}

const parseWeather = (weather: any): Weather => {
    if(!isString(weather) || !isWeather(weather)) throw new Error("Incorrect or missing weather");
    return weather;
}

const parseVisibility = (visibility: any): Visibility => {
    if(!isString(visibility) || !isVisibility(visibility)) throw new Error("Incorrect or missing visibility");
    return visibility;
}

export const toNewDiaryEntry = (object: any): NewDiaryEntry => {
    const newEntry: NewDiaryEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
    }
    return newEntry;
};