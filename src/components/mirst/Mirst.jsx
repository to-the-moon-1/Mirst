import React from "react";
import {Button} from "@material-ui/core";

const Mirst = (props) => {

    console.log(props.cell)

    const row = props.cell.filter(c => Array.isArray(c)).map(combine => combine[0].arr[combine[0].arr.length - 1].row)[0]
    // console.log(row)

    const col = props.cell.filter(c => Array.isArray(c)).map(combine => combine[0].arr).length
    // console.log(col)

    const handleChangeColor = (color) => {
        props.setColor(color)
    }

    const handleClick = (c, i) => {
        Array.isArray(c) ? c.flatMap(combine => combine.selected)[0] === false ? props.setSelectedArr() : props.setNoSelectedArr()
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
            <Button onClick={props.setSeparate} variant="outlined" color="primary" className="btn">
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
                    return Array.isArray(c) ? <Button key={`id_${i}`}
                                                      className={c.flatMap(combine => combine.selected)[0] === true ? "combine activeCell" : "combine"}
                                                      id={c.index}
                                                      onClick={() => handleClick(c, i)}
                                                      style={{
                                                          backgroundColor: c.map(combine => combine.backgroundColor),
                                                          padding: ((2.925 * row) + (0.4 * (row - 1))) + '% ' + (Math.floor(col / row) * 2.925 + (Math.floor(col / row) - 1) * 0.4) + '% '
                                                      }}
                        >
                            {
                                c.map((combine, i) =>
                                    <span key={`id_${i}`}
                                          style={{
                                              // display: 'none'
                                          }}
                                    />)
                            }
                        </Button>
                        : <Button key={`id_${i}`} onClick={() => handleClick(c, i)} id={c.index}
                                  style={{backgroundColor: c.backgroundColor}}
                                  className={c.selected ? "activeCell cell" : "cell"}/>
                    // : <span key={`id_${i}`}>
                    //     <Button span={1} onClick={() => handleClick(c, i)} variant="outlined" color="primary"
                    //             key={`id_${i}`}
                    //             id={c.index}
                    //             style={{backgroundColor: c.backgroundColor}}
                    //             className={c.selected ? "activeCell cell" : "cell"}/>
                    // </span>
                }
            )}
        </div>
    </>
}

export default Mirst