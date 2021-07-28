import {connect} from "react-redux";
import Mirst from "./Mirst";
import {setCellAC, setColorAC, setDeleteCellAC, setNoSelectedAC, setSelectedAC} from "../../redux/cell-reducer";

let mapStateToProps = (state) => {
    return {
        cell: state.cellPage.cell,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCell: () => {
            dispatch(setCellAC())
        },
        setSelected: (i) => {
            dispatch(setSelectedAC(i))
        },
        setNoSelected: (i) => {
            dispatch(setNoSelectedAC(i))
        },
        setDeleteCell: () => {
            dispatch(setDeleteCellAC())
        },
        setColor: (color) => {
            dispatch(setColorAC(color))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Mirst)