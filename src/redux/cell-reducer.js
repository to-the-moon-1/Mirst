const SET_CELL = 'SET_CELL';
const SET_SELECTED = 'SET_SELECTED';
const SET_NO_SELECTED = 'SET_NO_SELECTED';
const SET_DELETE_CELL = 'SET_DELETE_CELL';
const SET_COLOR = 'SET_COLOR';
const SET_COMBINE = 'SET_COMBINE';

let numCol = 1

let initialState = {
    cell: [
        {
            backgroundColor: "#fff",
            selected: false,
            index: Math.round(new Date().getTime() * Math.random())
        },
        {
            backgroundColor: "#fff",
            selected: false,
            index: Math.round(new Date().getTime() * Math.random())
        },
        {
            backgroundColor: "#fff",
            selected: false,
            index: Math.round(new Date().getTime() * Math.random())
        },
        // ].map((c, i) => {return {...c, id: i, row: i === 0 ? numRow : Number.isInteger(i / 15) ? numRow = numRow + 1 : numRow, col: Number.isInteger(i / 15) ? numCol = 1 : numCol = i + 1}})
    ].map((c, i) => {
        return {...c, id: i, row: 1, col: Number.isInteger(i / 15) ? numCol = 1 : numCol = i + 1}
    })
}

const cellReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CELL: {
            let newCell = {
                backgroundColor: "#fff",
                selected: false,
                index: Math.round(new Date().getTime() * Math.random())
            }
            // return {...state, cell: [...state.cell, newCell].map((c, i) => {return {...c, id: i, row: i === 0 ? numRow : Number.isInteger(i / 15) ? numRow = numRow + 1 : numRow, col: Number.isInteger(i / 15) ? numCol = 1 : numCol = i + 1}})}
            return {
                ...state, cell: [...state.cell, newCell].map((c, i) => {
                    return {
                        ...c,
                        id: i,
                        row: Math.ceil((i + 1) / 15),
                        col: Number.isInteger(i / 15) ? numCol = 1 : numCol = i + 1
                    }
                })
            }
        }
        case SET_SELECTED: {
            return {
                ...state,
                cell: state.cell.map((c, i) => {
                    if (i === action.i) {
                        return {...c, selected: true}
                    }
                    return c
                })
            }
        }
        case SET_NO_SELECTED: {
            return {
                ...state,
                cell: state.cell.map((c, i) => {
                    if (i === action.i) {
                        return {...c, selected: false}
                    }
                    return c
                })
            }
        }
        case SET_DELETE_CELL: {
            return {
                ...state,
                cell: state.cell.filter(c => c.selected === false).map((c, i) => {
                    return {
                        ...c,
                        id: i,
                        row: Math.ceil((i + 1) / 15),
                        col: Number.isInteger(i / 15) ? numCol = 1 : numCol = i + 1
                    }
                })
            }
        }
        case SET_COLOR: {
            return {
                ...state,
                cell: state.cell.map(c => {
                    if (c.selected) {
                        return {...c, backgroundColor: action.color, selected: false}
                    }
                    return c
                })
            }
        }
        case SET_COMBINE: {
            let arr = []
            // console.log(arr)

            // ВИБРАНІ ДЛЯ ОБ'ЄДНАННЯ КЛІТИНКИ ПОВИННІ БУТИ В ОДНОМУ МАСИВІ, ЩОБ БУЛА ЗМОГА ВИБИРАТИ ЇХ РАЗОМ ОДНИМ КЛІКОМ (?)
            // АЛЕ ЦЕ ПРИЗВОДИТЬ ДО ТОГО, ЩО ЕЛЕМЕНТИ ЗАВЖДИ БУДУТЬ ОДНЕ БІЛЯ ОДНОГО (В ОДНОМУ РЯДКУ)

            // ЧИ ПОТРІБНО ЗАЛИШАТИ ОДИН ДІЮЧИЙ МАСИВ, А ІНШІ (КОПІЇ) ПРИХОВУВАТИ? І ЗАМІСТЬ НЬОГО ВІДМАЛЬОВУВАТИ

            return {
                ...state,
                cell: state.cell.map(c => {
                    if (c.selected) {
                        arr.push(c)
                        return arr
                    }
                    return c
                })
            }
        }
        default: {
            return state;
        }
    }
}

export const setCellAC = () => ({type: SET_CELL});
export const setSelectedAC = (i) => ({type: SET_SELECTED, i});
export const setNoSelectedAC = (i) => ({type: SET_NO_SELECTED, i});
export const setDeleteCellAC = () => ({type: SET_DELETE_CELL});
export const setColorAC = (color) => ({type: SET_COLOR, color});
export const setCombineAC = () => ({type: SET_COMBINE});

export default cellReducer;