const SET_CELL = 'SET_CELL';
const SET_SELECTED = 'SET_SELECTED';
const SET_NO_SELECTED = 'SET_NO_SELECTED';

let initialState = {
    cell: [
        {
            row: "50px",
            col: "50px",
            backgroundColor: "#fff",
            selected: false
        },
        {
            row: "50px",
            col: "50px",
            backgroundColor: "#fff",
            selected: false
        },
        {
            row: "50px",
            col: "50px",
            backgroundColor: "#fff",
            selected: false
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
                selected: false
            }
            return {...state, cell: [...state.cell, newCell]}
        }
        // case SET_CELL: {
        //     return {...state, cell: action.cell}
        // }
        // case SET_SELECTED:
        //     return {...state, cell: {...state.cell, selected: action.selected}}
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
        default: {
            return state;
        }
    }
}

export const setCellAC = () => ({type: SET_CELL});
// export const setCellAC = (cell) => ({type: SET_CELL, cell});
// export const setSelectedAC = (selected) => ({type: SET_SELECTED, selected});
export const setSelectedAC = (i) => ({type: SET_SELECTED, i});
export const setNoSelectedAC = (i) => ({type: SET_NO_SELECTED, i});

export default cellReducer;