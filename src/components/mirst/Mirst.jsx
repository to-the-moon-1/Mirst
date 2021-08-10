import React, {useState} from "react";
import {Button} from "@material-ui/core";

const Mirst = (props) => {

    console.log(props.cell)

    const handleChangeColor = (color) => {
        props.setColor(color)
    }

    const handleClick = (c, i) => {
        Array.isArray(c) ? c.flatMap(combine => combine.selected)[0] === false ? props.setSelected(i) : props.setNoSelected(i)
        : c.selected === false ? props.setSelected(i) : props.setNoSelected(i)
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
                    // return <span key={`id_${i}`} className={Array.isArray(c) ? "combine" : ""}
                    //              onClick={Array.isArray(c) ? () => handleClick(c, i) : null}
                    //              style={Array.isArray(c) ? {backgroundColor: 'gold'} : null}>
                    return Array.isArray(c) ? <Button key={`id_${i}`} className={c.flatMap(combine => combine.selected)[0] === true ? "combine activeCell" : "combine"} id={c.index}
                                                    onClick={() => handleClick(c, i)}
                                                    style={{backgroundColor: c.map(combine => combine.backgroundColor)}}
                                                    // style={c.flatMap(combine => combine.selected)[0] === true ? {backgroundColor: 'gold', minWidth: 'unset !important'} : {minWidth: '0 !important', border: '0 !important', padding: '0 !important'}}
                        >
                {
                    c.map((combine, i) =>
                        <span key={`id_${i}`}
                                style={{
                                    // Array.isArray(c) ? c.slice(-1) && <span onClick={() => handleClick(c, i)} style={{
                                    //  ? <span style={{backgroundColor: 'lime', padding: '1.93% 3%'}}>
                                    // c.map(cc => Array.isArray(c) ? cc[0] && <span onClick={() => handleClick(c, i)} style={{
                                    // Array.isArray(c) ? <span onClick={() => handleClick(c, i)} style={{
                                    // a.map(cc => Array.isArray(cc) ? <span onClick={() => handleClick(c, i)} style={{
                                    // backgroundColor: 'lime',
                                    // padding: `${width}% ${height}%`,
                                    // padding: width + '%' + height + '%',
                                    // padding: combine.row * 2.93 + '% ' + combine.col * 2.93 + '%',
                                    padding: '1.93% 3%', margin: '0.4%',
                                    display: 'none'
                                }}
                        />)
                }
            </Button>
                        // style={{float: 'left'}}
                : <span key={`id_${i}`}>
                <Button span={1} onClick={() => handleClick(c, i)} variant="outlined" color="primary"
                        key={`id_${i}`}
                        id={c.index}
                        style={{backgroundColor: c.backgroundColor}}
                        className={c.selected ? "activeCell cell" : "cell"}/>
            </span>
                }
            )}
        </div>
    </>
}

export default Mirst