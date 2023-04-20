import { evaluate } from "mathjs";
import { useState } from "react";
import { Button, Container, Table, Form } from "react-bootstrap";
import './Root.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const FalsePosition = () => {

    const print =() =>{
        console.log(state)
        setValueIter(state.map((x) => x.iteration));
        setValueXi(state.map((x) => x.Xn));
        setValueXl(state.map((x) => x.Xl));
        setValueXr(state.map((x) => x.Xr));
        setValueXe(state.map((x) => x.Xe));
        return (
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th width="10%">Iteration</th>
                            <th width="30%">XL</th>
                            <th width="30%">XR</th>
                            <th width="30%">Error</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.Iteration}</td>
                                <td>{element.Xl}</td>
                                <td>{element.Xr}</td>
                                <td>{element.Xe}</td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
            </Container>
            
        )
    }

    const Calfalsepos = (xl, xr) => {
        
        var xi,fXi,fXl,fXr,ea,scope;
        var iter = 0;
        var xstring = ""+iter;
        var MAX = 50;
        const e = 0.00001;
        var obj={};

        do
        {
            scope = {
                x:xl,
            }
            fXl = evaluate(Equation, scope)
            scope = {
                x:xr,
            }
            fXr = evaluate(Equation, scope)
            xi = (xl*(fXr)-xr*(fXl))/(fXr-fXl);
            scope = {
                x:xi,
            }
            fXi = evaluate(Equation, scope)
            iter ++;
            xstring = "X"+iter;
            if (fXi*fXr > 0)
            {
                ea = error(xr, xi);
                obj = {
                    Iteration:iter,
                    Xn:xstring,
                    Xi:xi,
                    Xl:xl,
                    Xr:xr,
                    Xe:ea
                }
                data.push(obj)
                xr = xi;
            }
            else if (fXi*fXr < 0)
            {
                ea = error(xl, xi);
                obj = {
                    Iteration:iter,
                    Xn:xstring,
                    Xi:xi,
                    Xl:xl,
                    Xr:xr,
                    Xe:ea
                }
                data.push(obj)
                xl = xi;
            }
        }while(ea>e && iter<MAX)
        setX(xi)
    }
    

    const data = [];
    const [state,setstate] = useState([]);
    const [valueIter, setValueIter] = useState([]);
    const [valueXi, setValueXi] = useState([]);
    const [valueXl, setValueXl] = useState([]);
    const [valueXr, setValueXr] = useState([]);
    const [valueXe, setValueXe] = useState([]);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    const dataA = {
        labels: valueXe.map((x, index) => index),
        datasets: [
            {
                label: 'Error',
                data: valueXe,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'XR',
                data: valueXr,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'XL',
                data: valueXl,
                borderColor: 'rgb(186, 0, 244)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    const [html, setHtml] = useState(null);
    const [Equation, setEquation] = useState("x^4-13");
    const [X, setX] = useState(0);
    const [XL, setXL] = useState(0);
    const [XR, setXR] = useState(0);
    const [XE, setXE] = useState(0);
    const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;

    const inputEquation = (event) => {
        console.log(event.target.value)
        setEquation(event.target.value)
    }

    const inputXL = (event) => {
        console.log(event.target.value)
        setXL(event.target.value)
    }

    const inputXR = (event) => {
        console.log(event.target.value)
        setXR(event.target.value)
    }

    const calculateRoot = () => {
        const xlnum = parseFloat(XL)
        const xrnum = parseFloat(XR)
        Calfalsepos(xlnum, xrnum);
        setHtml(print());
        setstate(data);
    }

    return(
        <Container>
            <h2>False-Position</h2>
            <Form >
                <Form.Group className="mb-3">
                    <Form.Label>Input f(x)</Form.Label>
                        <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label>Input XL</Form.Label>
                        <input type="number" id="XL" onChange={inputXL} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label>Input XR</Form.Label>
                        <input type="number" id="XR" onChange={inputXR} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                    </Form.Group>
                    <Button className ="mb-3" variant="dark" onClick={calculateRoot}>
                        Calculate
                    </Button>
                </Form>
                <br></br>
                <h5>Answer = {X.toPrecision(7)}</h5>
                {html}
                {valueXr.length>0 && <Line options={options} data={dataA} />}
        </Container>
    )
}

export default FalsePosition