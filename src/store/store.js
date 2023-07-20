import { atom } from "recoil"

export const timeTableState = atom({
  key: 'timeTableState',
  default: {
    mon: [

      { start: 9, end: 11, name: 'math', color: 'red', id: 1 },
      { start: 13, end: 14, name: 'math', color: 'blue', id: 2 },
      { start: 15, end: 16, name: 'math', color: 'gray', id: 3 },
    ],
    tue: [
      { start: 9, end: 10, name: 'math', color: 'yellow', id: 4 },
      { start: 11, end: 12, name: 'math', color: 'red', id: 5 },
      { start: 14, end: 15, name: 'math', color: 'pink', id: 6 },
    ],
    wen: [
      { start: 9, end: 11, name: 'math', color: 'green', id: 7 },
      { start: 11, end: 12, name: 'math', color: 'gray', id: 8 },
      { start: 13, end: 14, name: 'math', color: 'red', id: 9 },
    ],
    thu: [
      { start: 9, end: 11, name: 'math', color: 'yellow', id: 11 },
      { start: 12, end: 14, name: 'math', color: 'blue', id: 12 },
      { start: 15, end: 16, name: 'math', color: 'tomato', id: 13 },
    ],
    fri: [
      { start: 9, end: 11, name: 'math', color: 'teal', id: 21 },
      { start: 13, end: 14, name: 'math', color: 'gray', id: 22 },
      { start: 15, end: 17, name: 'math', color: 'red', id: 23 },
    ],
  }
})