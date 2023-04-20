// import { useState } from "react"
// import { Button, Container, Form, Table } from "react-bootstrap";
// import math, { evaluate , all } from 'mathjs'

// const Sample =()=>{
//     const print = () =>{
//         console.log(data)
//         setValueIter(data.map((x)=>x.iteration));
//         setValueX1(data.map((x)=>x.X1));
//         setValueX0(data.map((x)=>x.X0));
//         return(
//             <Container>
//                 <Table striped bordered hover variant="dark">
//                     <thead>
//                         <tr>
//                             <th width="10%">Iteration</th>
//                             <th width="30%">XL</th>
//                             <th width="30%">XM</th>
//                             <th width="30%">XR</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((element, index)=>{
//                             return  (
//                             <tr key={index}>
//                                 <td>{element.iteration}</td>
//                                 <td>{element.Xl}</td>
//                                 <td>{element.Xm}</td>
//                                 <td>{element.Xr}</td>
//                             </tr>)
//                         })}
//                     </tbody>
//                 </Table>
//             </Container>
           
//         );
//     }

//     const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;
//     const funcF=(x)=>math.pow(x,2)-7;
//     const funcFdiff=(x)=>math.diff(X0);
   
//     const Calbisection = (X1, X0) => {
//         var X0,X1,ea;
//         var iter = 0;
//         var obj={};
//         do
//         {
//             X1=X0-(funcF(X0)/funcFdiff(X0));
//             ea = error(X1, X0);
//             X0=X0
//         }
//     }

//     const data =[];
//     const [valueIter, setValueIter] = useState([]);
//     const [valueX1, setValueX1] = useState([]);
//     const [valueX0, setValueX0] = useState([]);
     
   
//     const [html, setHtml] = useState(null);
//     const [Equation,setEquation] = useState("(x^4)-13")
//     const [X,setX] = useState(0)
//     const [X1,setX1] = useState(0)
//     const [X0,setX0] = useState(0)

//     const inputEquation = (event) =>{
//         console.log(event.target.value)
//         setEquation(event.target.value)
//     }

//     const inputX1 = (event) =>{
//         console.log(event.target.value)
//         setX1(event.target.value)
//     }

//     const inputX0= (event) =>{
//         console.log(event.target.value)
//         setX0(event.target.value)
//     }

//     const calculateRoot = () =>{
//         const xlnum = parseFloat(X1)
//         const xrnum = parseFloat(X0)
//         Calbisection(xlnum,xrnum);
     
//         setHtml(print());
           
//         console.log(valueIter)
//         console.log(valueXl)
//     }

//     return (
//             <Container>
//                 <Form >
//                     <Form.Group className="mb-3">
//                     <Form.Label>Input f(x)</Form.Label>
//                         <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
//                         <Form.Label>Input X1</Form.Label>
//                         <input type="number" id="XL" onChange={inputX1} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
//                         <Form.Label>Input X0</Form.Label>
//                         <input type="number" id="XR" onChange={inputX0} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
//                     </Form.Group>
//                     <Button variant="dark" onClick={calculateRoot}>
//                         Calculate
//                     </Button>
//                 </Form>
//                 <br></br>
//                 <h5>Answer = {X.toPrecision(7)}</h5>
//                 <Container>
//                 {html}
//                 </Container>
               
//             </Container>
           
//     )
// }

// export default Sample
