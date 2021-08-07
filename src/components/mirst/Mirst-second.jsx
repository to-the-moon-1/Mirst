// import React, {useState} from "react";
// import {Button} from "@material-ui/core";
// import {Row} from "antd";
//
// const Mirst = (props) => {
//
//     // const [combine, setCombine] = useState(false)
//
//     console.log(props.table)
//
//     // const onCombine = () => props.table.flatMap(r => {
//     //     const select = r.row.filter(c => c.selected)
//     //     const slice = select.flat().slice(-1)
//     //     const test = r.row.find(c => c.selected)
//     //     setCombine(true)
//     //     console.log(test)
//     //     // return [{row: [select].flat()}]
//     // })
//
//     // const returnCombine = () => {
//     //     if(combine) {
//     //         props.table.flatMap(r => r.row.filter(c => c.selected).flat().slice(-1))
//     //         return <span style={{backgroundColor: "black"}}>Span</span>
//     //     }
//     // }
//
//     // const select = props.table.map((r, id) => r.row.filter((c, i) => c.selected))
//     // const slice = select.flat().slice(-1)
//     // console.log(slice)
//
//     // let arr = []
//
//     // props.table.map((r, id) => {
//     //     // r.row.filter((c, i) => c.selected)
//     //     r.row.map((c, i) => {
//     //         if(c.selected) {
//     //             // console.log(c)
//     //         }
//     //     })
//     // })
//     // console.log(arr.push(id), arr, arr.length)
//     // console.log(arr)
//
//     const handleChangeColor = (color) => {
//         props.setColor(color)
//     }
//
//     const handleClick = (c, i, r, id) => {
//         c.selected === false ? props.setSelected(i, id) : props.setNoSelected(i, id)
//     }
//
//     return <>
//         <div className="buttonContainer">
//             <Button onClick={props.setCell} variant="contained" color="primary" className="btn addBtn">
//                 Add new cell
//             </Button>
//             <Button onClick={props.setDeleteCell} variant="contained" color="secondary" className="btn deleteBtn">
//                 Delete cell
//             </Button>
//             <Button onClick={props.setCombine} variant="outlined" color="primary" className="btn">
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
//             {props.table.map((r, id) =>
//                 <Row key={`id_${id}`} id={id}>
//                     {r.row.map((c, i) =>
//                         // c.selected && combine ? c.selected.flat().slice(-1) && <span style={{backgroundColor: "black"}}>Span</span> :
//                         // c.selected && combine ? (returnCombine && <span style={{backgroundColor: "black"}}>Span</span>) :
//                         <Button onClick={() => handleClick(c, i, r, id)} variant="outlined" color="primary"
//                                 key={`id_${i}`}
//                                 id={c.index}
//                                 style={{backgroundColor: c.backgroundColor}}
//                                 className={c.selected ? "activeCell cell" : "cell"}/>
//                         )}
//                     {/*{combine ? <span style={{backgroundColor: "black"}}>Span</span>*/}
//                     {/*    : null}*/}
//                 </Row>
//             )}
//         </div>
//     </>
// }
//
// export default Mirst