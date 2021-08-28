import {connect} from "react-redux";
import Mirst from "./Mirst";
import {
    setCellAC,
    setColorAC, setCombineAC,
    setDeleteCellAC,
    setNoSelectedAC, setNoSelectedArrAC,
    setSelectedAC, setSelectedArrAC, setSeparateAC
} from "../../redux/cell-reducer";

let mapStateToProps = (state) => {
    return {
        cell: state.cellPage.cell,
        // table: state.cellPage.table,
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
        setSelectedArr: (i) => {
            dispatch(setSelectedArrAC(i))
        },
        setNoSelectedArr: (i) => {
            dispatch(setNoSelectedArrAC(i))
        },
        setDeleteCell: () => {
            dispatch(setDeleteCellAC())
        },
        setColor: (color) => {
            dispatch(setColorAC(color))
        },
        setCombine: () => {
            dispatch(setCombineAC())
        },
        setSeparate: () => {
            dispatch(setSeparateAC())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Mirst)