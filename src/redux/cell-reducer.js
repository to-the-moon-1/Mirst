import {light} from "@material-ui/core/styles/createPalette";

const SET_CELL = 'SET_CELL';
const SET_SELECTED = 'SET_SELECTED';
const SET_NO_SELECTED = 'SET_NO_SELECTED';
const SET_SELECTED_ARR = 'SET_SELECTED_ARR';
const SET_NO_SELECTED_ARR = 'SET_NO_SELECTED_ARR';
const SET_DELETE_CELL = 'SET_DELETE_CELL';
const SET_COLOR = 'SET_COLOR';
const SET_COMBINE = 'SET_COMBINE';
const SET_SEPARATE = 'SET_SEPARATE';

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
    ].map((c, i) => {
        return {...c, id: i, row: 1, col: Number.isInteger(i / 15) ? numCol = 1 : numCol = i + 1}
        // return {...c, id: i, row: 1, col: Math.ceil((numCol = i + 1) / Math.ceil((i + 1) / 15))}
    })
}

const cellReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CELL: {
            let i = state.cell.length
            let newCell = {
                backgroundColor: "#fff",
                selected: false,
                index: Math.round(new Date().getTime() * Math.random()),
                id: i,
                row: Math.ceil((i + 1) / 15),
                col: Number.isInteger(i / 15) ? numCol = 1 : numCol = i + 1
                // col: Math.ceil((numCol = i + 1) / (Math.ceil((i + 1) / 15)))
            }
            return {
                ...state, cell: [...state.cell, newCell].map((c, i) => {
                    return !Array.isArray(c) ? {
                            ...c,
                            id: i,
                            row: Math.ceil((i + 1) / 15),
                            col: Number.isInteger(i / 15) ? numCol = 1 : numCol = i + 1
                            // col: Math.ceil((numCol = i + 1) / Math.ceil((i + 1) / 15))
                        }
                        : [...c]
                })
            }
        }
        case SET_SELECTED: {
            return {
                ...state,
                cell: state.cell.map((c, i) => {
                    // If only first array
                    // return Array.isArray(c) ? i === action.i ? [{...c['0'], selected: true}].flat() : c
                    //     : i === action.i ? {...c, selected: true} : c
                    if (i === action.i) {
                        return {...c, selected: true}
                    }
                    return c;
                })
            }
        }
        case SET_NO_SELECTED: {
            return {
                ...state,
                cell: state.cell.map((c, i) => {
                    // If only first array
                    // return Array.isArray(c) ? i === action.i ? [{...c['0'], selected: false}].flat() : c
                    //     : i === action.i ? {...c, selected: false} : c
                    if (i === action.i) {
                        return {...c, selected: false}
                    }
                    return c;
                })
            }
        }
        case SET_SELECTED_ARR: {
            return {
                ...state,
                cell: state.cell.map(c => {
                    if (Array.isArray(c)) {
                        if (c[0].id === action.i) {
                            return [{...c['0'], selected: true}].flat()
                        }
                    }
                    return c
                })
            }
            // return {
            //     ...state,
            //     cell: state.cell.map((c, i) => {
            //         if(Array.isArray(c)){
            //             console.log(c)
            //         }
            //         return Array.isArray(c) ? [{...c['0'], selected: true}].flat()
            //             : c
            //     })
            // }
        }
        case SET_NO_SELECTED_ARR: {
            return {
                ...state,
                cell: state.cell.map(c => {
                    if (Array.isArray(c)) {
                        if (c[0].id === action.i) {
                            return [{...c['0'], selected: false}].flat()
                        }
                    }
                    return c
                })
            }
        }
        case SET_DELETE_CELL: {
            let arr = []
            let ind = []
            let tried = []
            return {
                ...state,
                cell: state.cell.filter(c => Array.isArray(c) ? c[0].selected === false : c.selected === false).map((c, i) => {
                    if (Array.isArray(c)) {
                        arr.push({
                            arr: c[0].arr.map((el, ind) => ({
                                ...el,
                                id: i + ind,
                                row: Math.ceil((i + ind + 1) / 15),
                                col: Number.isInteger((i + ind) / 15) ? numCol = 1 : numCol = i + ind + 1,
                            }))
                        })

                        // console.log(c)
                        // якщо масиви рівні, то брати індекс 0 елементу
                        for (let value of c) {
                            // Порівнює кожен елемент зі всіма іншими по черзі
                            const a = value === c[0].id
                            console.log(arr)
                            console.log(value)
                            console.log(c[0].id)
                            // console.log(i)
                            // console.log(Math.min(i))
                            tried.push(a)
                        }

                        // tried.push(i)
                        // console.log(tried)

                        ind.push(c.map((combine, index) => {
                            // console.log(i)
                            // console.log(combine.arr[index].id)
                            // console.log(i === combine.arr[index].id)

                            // зберігає і повертає минулий ід (який був до видалення)
                            return i === combine.arr[index].id && combine.arr[index].id
                        }))
                        // console.log(arr.map(cc => cc.arr[0].id))
                        // ind.push(arr[0].arr.map(cc => {
                        //     return cc.id
                        // }))
                        // console.log(arr[0].arr.map(cc => {
                        //     return cc.id
                        // }))

                        // console.log(arr.map(cc => cc.arr[0].id))

                        // console.log(ind)
                        // ind.push(arr.map(cc => {
                        //     return cc.arr[0].id
                        // }))

                        // console.log(ind[ind.length - 1])

                        // console.log(ind.indexOf(i))
                        // console.log(i)
                        // return [{...arr['0'], backgroundColor: '#fff', selected: false, id: ind[0][0]}].flat()
                        return [{...arr['0'], backgroundColor: '#fff', selected: false, id: Math.min(i)}]
                        // return [{...arr['0'], backgroundColor: '#fff', selected: false, id: c.map((combine, index) => {
                        //         // console.log(i)
                        //         // console.log(combine.arr[index].id)
                        //         // console.log(i === combine.arr[index].id)
                        //
                        //         // зберігає і повертає минулий ід (який був до видалення)
                        //         return combine.arr[index].id
                        //     })[0]}].flat()
                    }
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
                    if (Array.isArray(c)) {
                        if (c[0].selected) {
                            return [{...c[0], backgroundColor: action.color, selected: false}]
                        }
                        return [c[0]]
                    } else {
                        if (c.selected) {
                            return {...c, backgroundColor: action.color, selected: false}
                        }
                        return c
                    }
                })
            }
        }
        case SET_COMBINE: {
            let arr = []
            let ind = []

            let audit = []

            const cell = state.cell.map((c, i) => {
                if (c.selected && state.cell.filter(c => c.selected).length >= 2) {
                    // Пропускає масиви
                    arr.push({...c, selected: false})
                    ind.push(arr.map(combine => {
                        return combine.id
                    }))
                    audit = []

                    for (let value of arr.map(c => c)) {
                        const valCol = value.col
                        const valRow = value.row

                        // LINE
                        const line = valCol + 1 === c.col
                        audit.push(line)

                        // ROW
                        const lastRow = state.cell.filter(c => c.selected)[state.cell.filter(c => c.selected).length - 1].row
                        // const r = valCol > 15 ? valCol - 15 : valCol
                        const r = valCol > 15 ? valCol - (15 * (valRow - 1)) : valCol
                        const s = c.col > 15 ? c.col - (15 * (lastRow - 1)) : c.col
                        // console.log(r)
                        // console.log(s)

                        const row = valRow + 1 === c.row && r === s
                        audit.push(row)

                        // FIGURE
                        // Наступний рядок завжди буде дорівнювати попередньому + 1
                        // Наступна клітинка завжди буде дорівнювати попередній + 1
                        // Через рядок клітинка завжди буде дорівнювати попередній
                        const k = valRow + 1 === c.row
                        const l = valCol + 1 === c.col
                        // const e = valRow + 1 === c.row && valCol + 1 === c.col
                        const e = k && l

                        // Рівняти кожен елемент наступного рядку з нульовим теперішнім (чи збігаються колонки)
                        console.log('Наступний рядок', valRow === c.row)
                        console.log('Наступна клітинка', valCol + 1 === c.col)
                        console.log('Через рядок клітинка', valRow + 1 === c.row)
                        // console.log(e)
                    }

                    // for (let value of arr.map(c => c.col)) {
                    //     // const valCol = value.col
                    //     const line = value + 1 === c.col
                    //     // audit = []
                    //     audit.push(line)
                    // }

                    return [{
                        arr,
                        backgroundColor: '#fff',
                        selected: false,
                        id: ind[0][0],
                        // Перший і, всі решта і + 1
                        // index: i !== ind[0][0] ? ind[0][0] + 1 : i
                    }].flat()
                }
                return c
                // return {...c, selected: false}
            })

            console.log(audit)
            // console.log(audit.some(col => col === true))

            return {
                ...state,
                cell: audit.some(col => col === true) ? cell : state.cell.map(c => c)
            }
        }
        case SET_SEPARATE: {
            return {
                ...state,
                cell: state.cell.map((c, i) => {
                    if (Array.isArray(c) && c.flatMap(combine => combine.selected)[0] === true) {
                        const element = c[0].arr.map(cc => cc.id)
                        const index = element.indexOf(i)
                        const separate = c[0].arr[index]
                        return {
                            ...separate,
                            backgroundColor: c[0].backgroundColor,
                            selected: false,
                            id: i,
                            row: Math.ceil((i + 1) / 15),
                            col: Number.isInteger(i / 15) ? numCol = 1 : numCol = i + 1
                        }
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
export const setSelectedArrAC = (i) => ({type: SET_SELECTED_ARR, i});
export const setNoSelectedArrAC = (i) => ({type: SET_NO_SELECTED_ARR, i});
export const setDeleteCellAC = () => ({type: SET_DELETE_CELL});
export const setColorAC = (color) => ({type: SET_COLOR, color});
export const setCombineAC = () => ({type: SET_COMBINE});
export const setSeparateAC = () => ({type: SET_SEPARATE});

export default cellReducer;