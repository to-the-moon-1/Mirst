import React from "react";
import {Button} from "@material-ui/core";
import {Row} from "antd";

const Mirst = (props) => {

    console.log(props.table)

    const handleChangeColor = (color) => {
        props.setColor(color)
    }

    const handleClick = (c, i, r, id) => {
        c.selected === false ? props.setSelected(i, id) : props.setNoSelected(i, id)
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

        <div className="colorContainer">
            <Button onClick={() => handleChangeColor("#a4e7aa")} variant="contained" color="primary"
                    className="color colorOne"/>
            <Button onClick={() => handleChangeColor("lightblue")} variant="contained" color="primary"
                    className="color colorTwo"/>
            <Button onClick={() => handleChangeColor("#aaa7ff")} variant="contained" color="primary"
                    className="color colorThree"/>
            <Button onClick={() => handleChangeColor("lightcoral")} variant="contained" color="primary"
                    className="color colorFour"/>
            <Button onClick={() => handleChangeColor("burlywood")} variant="contained" color="primary"
                    className="color colorFive"/>
            <Button onClick={() => handleChangeColor("thistle")} variant="contained" color="primary"
                    className="color colorSix"/>
        </div>

        <div className="cellContainer">
            {props.table.map((r, id) =>
                <Row key={`id_${id}`} id={id}>
                    {/*{r[i].row.map((c, i) =>*/}
                    {r.row.map((c, i) =>
                        <Button onClick={() => handleClick(c, i, r, id)} variant="outlined" color="primary" key={`id_${i}`}
                                id={c.index}
                                style={{backgroundColor: c.backgroundColor}}
                                className={c.selected ? "activeCell cell" : "cell"}/>
                    )}
                </Row>
            )}
        </div>
    </>
}

export default Mirst