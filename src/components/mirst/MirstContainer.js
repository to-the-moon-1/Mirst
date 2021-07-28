import {connect} from "react-redux";
import Mirst from "./Mirst";
import {setCellAC} from "../../redux/cell-reducer";

let mapStateToProps = (state) => {
    return {
        cell: state.cellPage.cell,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCell: (cell) => {
            dispatch(setCellAC(cell))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Mirst)