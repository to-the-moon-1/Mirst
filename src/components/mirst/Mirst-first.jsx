// import React from "react";
// import {Button} from "@material-ui/core";
// import { Row, Col } from 'antd';
//
// const Mirst = (props) => {
//
//     console.log(props.cell)
//
//     const handleChangeColor = (color) => {
//         props.setColor(color)
//     }
//
//     const handleClick = (c, i) => {
//         c.selected === false ? props.setSelected(i) : props.setNoSelected(i)
//     }
//
//     const combineCell = () => {
//         props.cell.map((c, i) => () => props.setCombine(i))
//     }
//
//     // const a = []
//
//     // let i = props.cell.length
//
//     // for (let i = 1; props.cell.length <= 15; i++) {
//     //     a.push(props.cell.length[i])
//     //     console.log(a)
//     // }
//
//     // console.log(a)
//
//     return <>
//         <div className="buttonContainer">
//             <Button onClick={props.setCell} variant="contained" color="primary" className="btn addBtn">
//                 Add new cell
//             </Button>
//             <Button onClick={props.setDeleteCell} variant="contained" color="secondary" className="btn deleteBtn">
//                 Delete cell
//             </Button>
//             <Button onClick={() => props.setCombine(props.cell.filter(c => c.selected).map((a, i) => a.i))} variant="outlined" color="primary" className="btn">
//                 Combine cells
//             </Button>
//             <Button variant="outlined" color="primary" className="btn">
//                 Separate cells
//             </Button>
//         </div>
//
//         <div className="colorContainer">
//             <Button onClick={() => handleChangeColor("#a4e7aa")} variant="contained" color="primary"
//                     className="color colorOne"/>
//             <Button onClick={() => handleChangeColor("lightblue")} variant="contained" color="primary"
//                     className="color colorTwo"/>
//             <Button onClick={() => handleChangeColor("#aaa7ff")} variant="contained" color="primary"
//                     className="color colorThree"/>
//             <Button onClick={() => handleChangeColor("lightcoral")} variant="contained" color="primary"
//                     className="color colorFour"/>
//             <Button onClick={() => handleChangeColor("burlywood")} variant="contained" color="primary"
//                     className="color colorFive"/>
//             <Button onClick={() => handleChangeColor("thistle")} variant="contained" color="primary"
//                     className="color colorSix"/>
//         </div>
//
//         <div className="cellContainer">
//             {props.cell.map((c, i) =>
//                 // <Row key={`id_${i}`} id={i}>
//                     <Button span={1} onClick={() => handleClick(c, i)} variant="outlined" color="primary" key={`id_${i}`} id={c.index}
//                          style={{width: c.row, height: c.col, backgroundColor: c.backgroundColor}}
//                          className={c.selected ? "activeCell cell" : "cell"} />
//                 // </Row>
//             )}
//         </div>
//     </>
// }
//
// export default Mirst