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
                // col: Number.isInteger(i / 15) ? numCol = 1 : numCol = i + 1
                col: i + 1
                // col: Math.ceil((numCol = i + 1) / (Math.ceil((i + 1) / 15)))
            }
            return {
                ...state, cell: [...state.cell, newCell].map((c, i) => {
                    return !Array.isArray(c) ? {
                            ...c,
                            id: i,
                            row: Math.ceil((i + 1) / 15),
                            // col: Number.isInteger(i / 15) ? numCol = 1 : numCol = i + 1
                            col: i + 1
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
                                // col: Number.isInteger((i + ind) / 15) ? numCol = 1 : numCol = i + ind + 1,
                                col: i + ind + 1,
                            }))
                        })

                        for (let value of c) {
                            // Порівнює кожен елемент зі всіма іншими по черзі
                            const a = value === c[0].id
                            console.log(arr)
                            console.log(value)
                            console.log(c[0].id)
                            tried.push(a)
                        }

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
                        // col: Number.isInteger(i / 15) ? numCol = 1 : numCol = i + 1
                        col: i + 1
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

            let testCol = []
            let testRow = []
            let testFigure = []

            let idRows = []
            let obj = {}

            const cell = state.cell.map((c, i) => {
                if (c.selected && state.cell.filter(c => c.selected).length >= 2) {
                    // Пропускає масиви
                    arr.push({...c, selected: false})
                    ind.push(arr.map(combine => {
                        return combine.id
                    }))
                    audit = []

                    idRows = arr.map(c => c.row)

                    for (let value of arr.map(c => c)) {
                        const valCol = value.col
                        const valRow = value.row

                        // LINE
                        const line = valCol + 1 === c.col
                        audit.push(line)

                        const test1 = valRow === c.row
                        testCol.push(test1)

                        // ROW
                        // const lastRow = state.cell.filter(c => c.selected)[state.cell.filter(c => c.selected).length - 1].row
                        // const countCol = state.cell.filter(c => c.selected).length
                        // const r = valCol > 15 ? valCol - 15 : valCol
                        const r = valCol > 15 ? valCol - (15 * (valRow - 1)) : valCol
                        const s = c.col > 15 ? c.col - (15 * (c.row - 1)) : c.col

                        const row = valRow + 1 === c.row && r === s
                        audit.push(row)

                        const test2 = r === s
                        testRow.push(test2)

                        // К-СТЬ КЛІТИНОК В КОЖНОМУ РЯДКУ РІВНА
                        // console.log(Number.isInteger(countCol / lastRow) ? 'yes' : 'no')
                    }

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

            idRows.forEach(value => obj[value] ? obj[value]++ : obj[value] = 1)
            const objVal = Object.values(obj)

            for (let value of objVal) {
                testFigure.push(value === objVal[0])
                console.log(value === objVal[0])
                // console.log(audit.some(col => col === true))
                // console.log(audit.filter(col => col === true).length)
            }

            console.log(audit)
            console.log(idRows)

            return {
                ...state,
                // cell: testCol.every(col => col === true) && audit.some(col => col === true) ? cell : testRow.every(row => row === true) && audit.some(col => col === true) ? cell : state.cell.map(c => c)
                cell: testCol.every(col => col === true) && audit.some(col => col === true) ? cell
                    : testRow.every(row => row === true) && audit.some(col => col === true) ? cell
                    // : testFigure.every(figure => figure === true) && audit.some(col => col === true) ? cell
                    : testFigure.every(figure => figure === true) ? cell
                    : state.cell.map(c => c)
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
                            // col: Number.isInteger(i / 15) ? numCol = 1 : numCol = i + 1
                            col: i + 1
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