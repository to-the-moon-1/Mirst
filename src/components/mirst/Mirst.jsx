// import { DataGrid } from '@material-ui/data-grid';
// import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import {Button} from "@material-ui/core";

const Mirst = (props) => {
    console.log(props.cell)
    return <>
        <div className="buttonContainer">
            <Button variant="contained" color="primary" className="btn addBtn">
                Primary
            </Button>
            <Button variant="contained" color="secondary" className="btn deleteBtn">
                Secondary
            </Button>
            <Button variant="outlined" color="primary" className="btn">
                Primary
            </Button>
            <Button variant="outlined" color="secondary" className="btn">
                Secondary
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

        {props.cell.map((c, i) =>
            <span key={`id_${i}`} id={i} style={{width: c.row, height: c.col, backgroundColor: c.backgroundColor, margin: 0, padding: 0}} className="cellContainer" />
        )}
    </>
}

export default Mirst