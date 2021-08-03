const SET_CELL = 'SET_CELL';
const SET_SELECTED = 'SET_SELECTED';
const SET_NO_SELECTED = 'SET_NO_SELECTED';
const SET_DELETE_CELL = 'SET_DELETE_CELL';
const SET_COLOR = 'SET_COLOR';
// const SET_COMBINE = 'SET_COMBINE';

let initialState = {
    table: [
        {
            row: [
                {
                    index: Math.round(new Date().getTime() * Math.random()),
                    selected: false,
                    backgroundColor: "#fff"
                },
                {
                    index: Math.round(new Date().getTime() * Math.random()),
                    selected: false,
                    backgroundColor: "#fff"
                },
                {
                    index: Math.round(new Date().getTime() * Math.random()),
                    selected: false,
                    backgroundColor: "#fff"
                },
                {
                    index: Math.round(new Date().getTime() * Math.random()),
                    selected: false,
                    backgroundColor: "#fff"
                },
                {
                    index: Math.round(new Date().getTime() * Math.random()),
                    selected: false,
                    backgroundColor: "#fff"
                },
                {
                    index: Math.round(new Date().getTime() * Math.random()),
                    selected: false,
                    backgroundColor: "#fff"
                },
                {
                    index: Math.round(new Date().getTime() * Math.random()),
                    selected: false,
                    backgroundColor: "#fff"
                },
                {
                    index: Math.round(new Date().getTime() * Math.random()),
                    selected: false,
                    backgroundColor: "#fff"
                },
                {
                    index: Math.round(new Date().getTime() * Math.random()),
                    selected: false,
                    backgroundColor: "#fff"
                },
                {
                    index: Math.round(new Date().getTime() * Math.random()),
                    selected: false,
                    backgroundColor: "#fff"
                },
                {
                    index: Math.round(new Date().getTime() * Math.random()),
                    selected: false,
                    backgroundColor: "#fff"
                },
                {
                    index: Math.round(new Date().getTime() * Math.random()),
                    selected: false,
                    backgroundColor: "#fff"
                },
                {
                    index: Math.round(new Date().getTime() * Math.random()),
                    selected: false,
                    backgroundColor: "#fff"
                },
                {
                    index: Math.round(new Date().getTime() * Math.random()),
                    selected: false,
                    backgroundColor: "#fff"
                },
                {
                    index: Math.round(new Date().getTime() * Math.random()),
                    selected: false,
                    backgroundColor: "#fff"
                }
            ]
        }
    ]
}

const cellReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CELL: {
            if (state.table[state.table.length - 1].row.length >= 15) {
                let newRow = [{
                    index: Math.round(new Date().getTime() * Math.random()),
                    selected: false,
                    backgroundColor: "#fff"
                }];
                return {...state, table: [...state.table, {row: newRow}]};
            }

            return {
                ...state,
                table: state.table.map((r, i) => {
                    let col = {
                        index: Math.round(new Date().getTime() * Math.random()),
                        selected: false,
                        backgroundColor: "#fff"
                    }
                    if (r.row.length >= 15) return {row: [...r.row]}
                    else return {row: [...r.row, col]}
                })
            }
        }
        case SET_SELECTED: {
            return {
                ...state,
                table: state.table.flatMap((r, id) => {
                        const select = r.row.flatMap((c, i) => {
                            if (i === action.i && id === action.id) {
                                return {...c, selected: true}
                            }
                            return c
                        })
                        // При кожному натисканні допушує до рядків в кінець весь масив
                        // return {row: [...r.row, select]}

                        // До кожного рядка додає новий стейт з двох попередніх рядків
                        // return {row: [r.row, select]}

                        // Перезатирає стейт рядків (П.С. ЕКШН ІД МОЖЕ СПІВПАДАТИ З ІД КОЛОНОК КОЖНОГО РЯДКА)

                        //DONE
                        return {row: [select].flat()}
                    }
                )
            }
        }
        case
        SET_NO_SELECTED: {
            return {
                ...state,
                table: state.table.flatMap((r, id) => {
                        const select = r.row.flatMap((c, i) => {
                            if (i === action.i && id === action.id) {
                                return {...c, selected: false}
                            }
                            return c
                        })
                        return {row: [select].flat()}
                    }
                )
            }
        }
        case
        SET_DELETE_CELL: {
            return {
                ...state,
                table: state.table.flatMap(r => {
                    const deleted = r.row.filter(c => c.selected === false)
                    return [{row: [deleted].flat()}]
                })
            }
            // let deleted = state.table.flatMap(r => r.row.filter(c => c.selected === false))
            // console.log(deleted)
            // return {
            //     ...state,
            //     // table: [{row: {...state.table.map(r => r.row.filter(c => c.selected === false))}}]
            //     table: [{row: [deleted].flat()}]
            // }
        }
        case
        SET_COLOR: {
            return {
                ...state,
                table: state.table.flatMap(r => {
                    const color = r.row.flatMap(c => {
                        if (c.selected) {
                            return {...c, backgroundColor: action.color, selected: false}
                        }
                        return c
                    })
                    return {row: [color].flat()}
                })
            }
        }
        // case SET_COMBINE: {
        //     return {
        //         ...state,
        //         cell: state.cell.map((c, i) => {
        //             if (c.selected) {
        //                 if (i === action.i) {
        //                     // ОКРЕМО ALL
        //                     return <div>ddd</div>
        //                 } else return alert("Error")
        //             }
        //             return c
        //         })
        //     }
        // }
        default: {
            return state;
        }
    }
}

export const setCellAC = () => ({type: SET_CELL});
export const setSelectedAC = (i, id) => ({type: SET_SELECTED, i, id});
export const setNoSelectedAC = (i, id) => ({type: SET_NO_SELECTED, i, id});
export const setDeleteCellAC = () => ({type: SET_DELETE_CELL});
export const setColorAC = (color) => ({type: SET_COLOR, color});
// export const setCombineAC = (i) => ({type: SET_COMBINE, i});

export default cellReducer;