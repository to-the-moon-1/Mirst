import React from "react";
import {Button} from "@material-ui/core";

const Mirst = (props) => {

    console.log(props.cell)

    const handleClick = (c, i) => {
            c.selected === false ? props.setSelected(i) : props.setNoSelected(i)
    }

    return <>
        <div className="buttonContainer">
            <Button onClick={props.setCell} variant="contained" color="primary" className="btn addBtn">
                Add new cell
            </Button>
            <Button onClick={props.setDeleteCell} variant="contained" color="secondary" className="btn deleteBtn">
                Delete cell
            </Button>
            <Button variant="outlined" color="primary" className="btn">
                Combine cells
            </Button>
            <Button variant="outlined" color="primary" className="btn">
                Separate cells
            </Button>
        </div>

        <div className="cellContainer">
            {props.cell.map((c, i) =>
                <Button onClick={() => handleClick(c, i)} variant="outlined" color="primary" name={`btn_${i}`} key={`id_${i}`} id={i}
                        style={{width: c.row, height: c.col, backgroundColor: c.backgroundColor}}
                        className={c.selected ? "activeCell cell" : "cell"}>{c.index}</Button>
            )}
        </div>
    </>
}

export default Mirst