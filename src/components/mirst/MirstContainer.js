import {connect} from "react-redux";
import Mirst from "./Mirst";
import {
    setCellAC,
    setColorAC,
    setDeleteCellAC,
    setNoSelectedAC,
    setSelectedAC
} from "../../redux/cell-reducer";

let mapStateToProps = (state) => {
    return {
        // cell: state.cellPage.cell,
        table: state.cellPage.table,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCell: () => {
            dispatch(setCellAC())
        },
        setSelected: (i, id) => {
            dispatch(setSelectedAC(i, id))
        },
        setNoSelected: (i, id) => {
            dispatch(setNoSelectedAC(i, id))
        },
        setDeleteCell: () => {
            dispatch(setDeleteCellAC())
        },
        setColor: (color) => {
            dispatch(setColorAC(color))
        },
        // setCombine: (i) => {
        //     dispatch(setCombineAC(i))
        // },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Mirst)