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
    ].map((c, i) => {
        return {...c, id: i, row: 1, col: Number.isInteger(i / 15) ? numCol = 1 : numCol = i + 1}
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
            }
            return {
                ...state, cell: [...state.cell, newCell].map((c, i) => {
                    return !Array.isArray(c) ? {
                            ...c,
                            id: i,
                            row: Math.ceil((i + 1) / 15),
                            col: Number.isInteger(i / 15) ? numCol = 1 : numCol = i + 1
                        }
                        : [...c]
                })
            }
        }
        case SET_SELECTED: {
            return {
                ...state,
                cell: state.cell.map((c, i) => {
                    return Array.isArray(c) ? i === action.i ? [{...c['0'], selected: true}].flat() : c
                        : i === action.i ? {...c, selected: true} : c
                })
            }
        }
        case SET_NO_SELECTED: {
            return {
                ...state,
                cell: state.cell.map((c, i) => {
                    return Array.isArray(c) ? i === action.i ? [{...c['0'], selected: false}].flat() : c
                        :
                        i === action.i ? {...c, selected: false} : c
                })
            }
        }
        case SET_DELETE_CELL: {
            return {
                ...state,
                cell: state.cell.filter(c => c.selected === false).map((c, i) => {
                    return Array.isArray(c) ? c
                        : {
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
            return {
                ...state,
                cell: state.cell.map((c, i) => {
                    if (c.selected) {
                        arr.push({...c, selected: false})
                        return [{arr, backgroundColor: '#fff', selected: false}].flat()
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