import React from "react";
import {Button} from "@material-ui/core";

const Mirst = (props) => {

    console.log(props.cell)

    // const row = props.cell.filter(c => Array.isArray(c)).map(combine => combine[0].arr[combine[0].arr.length - 1].row)[0]
    // const col = props.cell.filter(c => Array.isArray(c)).map(combine => combine[0].arr).length

    // let array = []

    // Кожного разу збирає до купи всі масиви
    // Одноразово встановлює розміри елементу

    // props.cell.filter(c => Array.isArray(c)).map((combine, i, arr) => {
    //     for (let value of arr[0][0].arr.map(c => c.row)) {
    //         // Порівнює кожен елемент зі всіма іншими по черзі (к-сть true множиться на 2)
    //         const a = value === combine[0].arr[i].row
    //         array.push(a)
    //     }
    // })

    // row next === row + 1 ? row.length : row next === row ? row.filter(true) : row[0]
    // якщо наступний рядок більше, ніж попередній, то один ряд : якщо деякі рядки сходяться (це квадрат), то відкидаємо непотрібні

    // const rowLength = props.cell.filter(c => Array.isArray(c)).map((cc, i) => cc[0].arr[i]).length
    // const colQ = Math.floor(array.filter(cc => cc === true).length / rowLength)
    // const rowQ = Math.floor(rowLength / colQ)
    //
    // console.log('true', array.filter(cc => cc === true).length)
    // console.log('false', array.filter(cc => cc === false).length)
    // console.log('length', rowLength)
    // console.log('col', colQ)
    // console.log('row', rowQ)

    const handleChangeColor = (color) => {
        props.setColor(color)
    }

    const handleClick = (c, i) => {
        Array.isArray(c) ? c.flatMap(combine => combine.selected)[0] === false ? props.setSelectedArr(i) : props.setNoSelectedArr(i)
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
                    return Array.isArray(c)
                        ? c.map((combine, index) => {
                            return i === combine.arr[index].id
                                ? <span key={`id_${i}`}><Button className={c.flatMap(combine => combine.selected)[0] === true ? "combine activeCell" : "combine"}
                                            onClick={() => handleClick(c, i)}
                                            style={{
                                                backgroundColor: c.map(combine => combine.backgroundColor),
                                                // padding: ((2.925 * row) + (0.4 * (row - 1))) + '% ' + (Math.floor(col / row) * 2.925 + (Math.floor(col / row) - 1) * 0.4) + '% '
                                                // padding: ((2.925 * rowQ) + (0.4 * (rowQ - 1))) + '% ' + ((2.925 * colQ) + (0.4 * (colQ - 1))) + '% '
                                                padding: c.map((combine, index, arr) => {
                                                    let array = []
                                                    for (let value of arr[0].arr.map(c => c.row)) {
                                                        // Порівнює кожен елемент зі всіма іншими по черзі
                                                        const a = value === combine.arr[index].row
                                                        array.push(a)
                                                    }
                                                    // const rowLength = props.cell.filter(c => Array.isArray(c)).map((cc, i) => cc[0].arr[i]).length
                                                    const rowLength = combine.arr.length
                                                    const colQ = Math.floor(array.filter(cc => cc === true).length * rowLength / rowLength)
                                                    const rowQ = Math.floor(rowLength / colQ)
                                                    // console.log('true', Math.floor(array.filter(cc => cc === true).length * rowLength))
                                                    // console.log('false', Math.floor(array.filter(cc => cc === false).length))
                                                    // console.log('length', rowLength)
                                                    // console.log('col', colQ)
                                                    // console.log('row', rowQ)

                                                    // console.log(combine.arr[index].id)
                                                    // console.log(combine.arr[index].id + 1)
                                                    // return i === combine.arr[index].id ? ((2.925 * rowQ) + (0.4 * (rowQ - 1))) + '% ' + ((2.925 * colQ) + (0.4 * (colQ - 1))) + '% ' : 0
                                                    // return i === combine.arr[index].id ? ((2.0 * rowQ) + (0.22 * (rowQ - 1))) + '% ' + ((2.0 * colQ) + (0.22 * (colQ - 1))) + '% ' : 0
                                                    // return i === combine.arr[index].id ? ((2.012 * rowQ) + (0.27 * (rowQ - 1))) + '% ' + ((2.012 * colQ) + (0.27 * (colQ - 1))) + '% ' : 0
                                                    return i === combine.arr[index].id ? ((1.943 * rowQ) + (0.27 * (rowQ - 1))) + '% ' + ((1.943 * colQ) + (0.27 * (colQ - 1))) + '% ' : 0
                                                }),
                                                margin: c.map((combine, index) => {
                                                    // return i === combine.arr[index].id ? 0.4 + '%' : 0
                                                    // return i === combine.arr[index].id ? 0.22 + '%' : 0
                                                    return i === combine.arr[index].id ? 0.27 + '%' : 0
                                                }),
                                                position: c.map((combine, index) => {
                                                    return i === combine.arr[index].id ? 'absolute' : 'relative'
                                                }),
                                                zIndex: c.map((combine, index) => {
                                                    return i === combine.arr[index].id ? 9 : 1
                                                })
                                            }}
                                />
                                    <Button
                                        className="cell"
                                        style={{
                                            opacity: 0
                                        }}/>
                                </span>
                                : <Button
                                    key={`id_${i}`}
                                    className="cell"
                                    style={{
                                        opacity: 0
                                    }}/>
                        })
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