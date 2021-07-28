import {connect} from "react-redux";
import Mirst from "./Mirst";
import {setCellAC, setNoSelectedAC, setSelectedAC} from "../../redux/cell-reducer";

let mapStateToProps = (state) => {
    return {
        cell: state.cellPage.cell,
        // selected: state.cellPage.selected,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCell: () => {
            dispatch(setCellAC())
        },
        // setCell: (cell) => {
        //     dispatch(setCellAC(cell))
        // },
        // setSelected: (selected) => {
        //     dispatch(setSelectedAC(selected))
        // },
        setSelected: (i) => {
            dispatch(setSelectedAC(i))
        },
        setNoSelected: (i) => {
            dispatch(setNoSelectedAC(i))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Mirst)