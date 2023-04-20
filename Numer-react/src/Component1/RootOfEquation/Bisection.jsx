import { useState, useEffect } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";
import { evaluate } from 'mathjs'
import { Calbisection } from "../../CalBisec";
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

const Bisection = () => {
    let data = [];
    const [valueIter, setValueIter] = useState([]);
    const [valueXl, setValueXl] = useState([]);
    const [valueXm, setValueXm] = useState([]);
    const [valueXr, setValueXr] = useState([]);

    const [eqa, setNeweqa] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/equation')
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result)
    //             setNeweqa(result)
    //         })
    // }, [])

    const [token, setToken] = useState([]);

    const print = () => {
        console.log(data)
        setValueIter(data.map((x) => x.iteration));
        setValueXl(data.map((x) => x.Xl));
        setValueXm(data.map((x) => x.Xm));
        setValueXr(data.map((x) => x.Xr));
        return (
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th width="10%">Iteration</th>
                            <th width="30%">XL</th>
                            <th width="30%">XM</th>
                            <th width="30%">XR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>{element.iteration}</td>
                                    <td>{element.Xl}</td>
                                    <td>{element.Xm}</td>
                                    <td>{element.Xr}</td>
                                </tr>)
                        })}
                    </tbody>
                </Table>
            </Container>

        );
    }

    const error = (xold, xnew) => Math.abs((xnew - xold) / xnew) * 100;

    // const Calbisection = (xl, xr) => {
    //     var xm, fXm, fXr, ea, scope;
    //     var iter = 0;
    //     var MAX = 50;
    //     const e = 0.00001;
    //     var obj = {};
    //     do {
    //         xm = (xl + xr) / 2.0;
    //         scope = {
    //             x: xr,
    //         }
    //         fXr = evaluate(Equation, scope)

    //         scope = {
    //             x: xm,
    //         }
    //         fXm = evaluate(Equation, scope)

    //         iter++;
    //         if (fXm * fXr > 0) {
    //             ea = error(xr, xm);
    //             obj = {
    //                 iteration: iter,
    //                 Xl: xl,
    //                 Xm: xm,
    //                 Xr: xr
    //             }
    //             data.push(obj)
    //             xr = xm;
    //         }
    //         else if (fXm * fXr < 0) {
    //             ea = error(xl, xm);
    //             obj = {
    //                 iteration: iter,
    //                 Xl: xl,
    //                 Xm: xm,
    //                 Xr: xr
    //             }
    //             data.push(obj)
    //             xl = xm;
    //         }
    //     } while (ea > e && iter < MAX)
    //     setX(xm)
    // }

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
        labels: valueXm.map((x, index) => index),
        datasets: [
            {
                label: 'XM',
                data: valueXm,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
    const [Equation, setEquation] = useState("(x^4)-13")
    const [X, setX] = useState(0)
    const [XL, setXL] = useState(0)
    const [XR, setXR] = useState(0)

    const inputEquation = (event) => {
        console.log(event.target.value)
        setEquation(event.target.value)
    }

    const inputtoken = (event) => {
        console.log(event.target.value)
        setToken(event.target.value)
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
        const {datanew,xnew} = Calbisection(xlnum, xrnum ,Equation);
        data=datanew
        setX(xnew)
        setHtml(print());

        console.log(valueIter)
        console.log(valueXl)
    }

    const handleButtonClick = () => {
        let i = 0
        let arr = [];
        console.log(eqa)
        let item = eqa[Math.floor(Math.random() * eqa.length)];
        console.log(item)
        setEquation(item.equation);
        setXL(item.xl)
        setXR(item.xr)
    };

    const gettoken = () => {
        console.log(token[1])
        fetch('http://localhost:5000/login')
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setToken(result.token)
            })  
    }

    const senttoken = () =>{
        fetch('http://localhost:5000/equation', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json()) 
            .then(result => {
                console.log(result);
                setNeweqa(result)
            })
            .catch(err => console.log(err));
        }
       
    return (
        <Container>
            <h2>Bisection</h2>
            <Form >
                <Form.Group className="mb-3">
                    <Button onClick={gettoken}>Get Token</Button> <br /> <br />
                    <Button onClick={senttoken}>Sent Token</Button> <br />
                    {/* <input type="text"
                        id="input"
                        value={token}
                        onChange={inputtoken} style={{ width: "80%", margin: "0 auto" }} className="form-control"></input> */}
                    <Form.Label>Input f(x)</Form.Label> <br />
                    <input data-testid="Equation"
                        type="text"
                        id="input"
                        value={Equation}
                        onChange={inputEquation} style={{ width: "20%", margin: "0 auto" }} className="form-control"></input> <br />
                    <Button onClick={handleButtonClick} >Random equation</Button> <br />
                    <Form.Label>Input XL</Form.Label>
                    <input data-testid="XL" type="number" id="XL" value={XL} onChange={inputXL} style={{ width: "20%", margin: "0 auto" }} className="form-control"></input>
                    <Form.Label>Input XR</Form.Label>
                    <input  data-testid="XR" type="number" id="XR" value={XR} onChange={inputXR} style={{ width: "20%", margin: "0 auto" }} className="form-control"></input>
                </Form.Group>
                <Button data-testid="myBtn" variant="dark" onClick={calculateRoot}>
                    Calculate
                </Button>
            </Form>
            <br></br>
            <h5 data-testid="ans">Answer = {X.toPrecision(7)}</h5>
            <Container>
                {html}
            </Container>
            {valueXm.length > 0 && <Line options={options} data={dataA} />}
        </Container>

    )
}

export default Bisection
