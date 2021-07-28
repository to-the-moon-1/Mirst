// import { DataGrid } from '@material-ui/data-grid';
// import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import React from "react";
import {Button} from "@material-ui/core";

const Mirst = (props) => {

    console.log(props.cell)

    // const selectedBtn = (button) => {
    //     console.log(button.target.attributes.id)
    //     console.log(props.cell.selected)
    //     props.setSelected(button.target.attributes.id)
    // }

    // const newCell = () => {
    //     return <Button />
    // }

    const addNewCell = () => {
        props.setCell()
    }

    const handleClick = (c, i) => {
            c.selected === false ? props.setSelected(i) : props.setNoSelected(i)
    }

    return <>
        <div className="buttonContainer">
            <Button onClick={addNewCell} variant="contained" color="primary" className="btn addBtn">
                Add new cell
            </Button>
            <Button variant="contained" color="secondary" className="btn deleteBtn">
                Delete cell
            </Button>
            <Button variant="outlined" color="primary" className="btn">
                Combine cells
            </Button>
            <Button variant="outlined" color="primary" className="btn">
                Separate cells
            </Button>
        </div>

        {/*{props.cell.map((c, i) =>*/}
        {/*    <DataGrid key={i}  rows={{width: 200}} columns={{width: 200}} className='cellContainer'/>*/}
        {/*)}*/}

        {/*{props.cell.map((c, i) =>*/}
        {/*    <AgGridReact key={i}>*/}
        {/*        <AgGridColumn rowSpan={c.row} colSpan={c.col}></AgGridColumn>*/}
        {/*    </AgGridReact>*/}
        {/*)}*/}

        <div className="cellContainer">
            {props.cell.map((c, i) =>
                <Button onClick={() => handleClick(c, i)} variant="outlined" color="primary" name={`btn_${i}`} key={`id_${i}`} id={i}
                        style={{width: c.row, height: c.col, backgroundColor: c.backgroundColor}}
                        className={c.selected ? "activeCell cell" : "cell"} />
            )}
        </div>
    </>
}

export default Mirst