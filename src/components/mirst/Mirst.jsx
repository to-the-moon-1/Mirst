import React from "react";
import {Button} from "@material-ui/core";

const Mirst = (props) => {

    console.log(props.cell)

    // console.log(props.cell.map(c => Array.isArray(c) ? c.map(p => p) : c))
    // const a = props.cell.filter(c => Array.isArray(c))
    // console.log(a.map(p => p))

    // console.log(Number.isInteger(props.cell.length / 15))
    // console.log(Math.ceil(props.cell.length / 15))

    // console.log(props.cell.map((c, i) => c.selected? 1 : 2))

    const handleChangeColor = (color) => {
        props.setColor(color)
    }

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
            <Button onClick={props.setCombine} variant="outlined" color="primary" className="btn">
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
            {props.cell.map((c, i) => {
                    // const height = c.row * 2.93
                    // const width = c.col * 2.93
                    // console.log(c.row * 2.93 + '% ' + c.col * 2.93 + '%')
                    // console.log([c.row].length, c.col)
                    return < span
                        key={`id_${i}`
                        }>
                {
                    // Array.isArray(c) ? <span onClick={() => handleClick(c, i)} style={{
                    //         backgroundColor: 'lime',
                    //         // padding: `${width}% ${height}%`,
                    //         // padding: width + '%' + height + '%',
                    //         padding: c.row + 'px',
                    //         margin: '0.4%'
                    //     }}/> :
                    Array.isArray(c) ? c.map(combine => <span onClick={() => handleClick(c, i)} style={{
                            backgroundColor: 'lime',
                            // padding: `${width}% ${height}%`,
                            // padding: width + '%' + height + '%',
                            // padding: combine.row * 2.93 + '% ' + combine.col * 2.93 + '%',
                            padding: '1.93% 3%',
                            margin: '0.4%'
                        }}/>) :
                        <Button span={1} onClick={() => handleClick(c, i)} variant="outlined" color="primary"
                                key={`id_${i}`}
                                id={c.index}
                                style={{backgroundColor: c.backgroundColor}}
                                className={c.selected ? "activeCell cell" : "cell"}/>
                }
            </span>
                }
            )}
        </div>
    </>
}

export default Mirst