const SET_CELL = 'SET_CELL';
const SET_SELECTED = 'SET_SELECTED';
const SET_NO_SELECTED = 'SET_NO_SELECTED';
const SET_DELETE_CELL = 'SET_DELETE_CELL';
const SET_COLOR = 'SET_COLOR';

let initialState = {
    cell: [
        {
            row: "50px",
            col: "50px",
            backgroundColor: "#fff",
            selected: false,
            index: Math.round(new Date().getTime() * Math.random())
        },
        {
            row: "50px",
            col: "50px",
            backgroundColor: "#fff",
            selected: false,
            index: Math.round(new Date().getTime() * Math.random())
        },
        {
            row: "50px",
            col: "50px",
            backgroundColor: "#fff",
            selected: false,
            index: Math.round(new Date().getTime() * Math.random())
        },
    ]
}

const cellReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CELL: {
            let newCell = {
                row: "50px",
                col: "50px",
                backgroundColor: "#fff",
                selected: false,
                index: Math.round(new Date().getTime() * Math.random())
            }
            return {...state, cell: [...state.cell, newCell]}
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
                cell: state.cell.filter(c => c.selected === false)
            }
        }
        case SET_COLOR: {
            return {
                ...state,
                cell: state.cell.map((c, i) => {
                    if (c.selected) {
                        return {...c, backgroundColor: action.color, selected: false}
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

export default cellReducer;