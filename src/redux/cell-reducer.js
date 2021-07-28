const SET_CELL = 'SET_CELL';

let initialState = {
    cell: [
        {
            row: "50px",
            col: "50px",
            backgroundColor: "#fff"
        },
        {
            row: "50px",
            col: "50px",
            backgroundColor: "#fff"
        },
        {
            row: "50px",
            col: "50px",
            backgroundColor: "#fff"
        },
        {
            row: "50px",
            col: "50px",
            backgroundColor: "#fff"
        },
        {
            row: "50px",
            col: "50px",
            backgroundColor: "#fff"
        },
        {
            row: "50px",
            col: "50px",
            backgroundColor: "#fff"
        },
        {
            row: "50px",
            col: "50px",
            backgroundColor: "#fff"
        },
        {
            row: "50px",
            col: "50px",
            backgroundColor: "#fff"
        },
        {
            row: "50px",
            col: "50px",
            backgroundColor: "#fff"
        }
    ]
}

const cellReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CELL:
            return {...state, cell: action.cell}
        default: {
            return state;
        }
    }
}

export const setCellAC = (cell) => ({type: SET_CELL, cell});

export default cellReducer;