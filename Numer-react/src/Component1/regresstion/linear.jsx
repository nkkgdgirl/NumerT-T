import React, { useState,useEffect } from 'react';
import { TextInput, Button } from "@mantine/core"
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Scatter, Line } from 'react-chartjs-2';

const LinearRe = () => {
    const [x, setX] = useState('');
    const [y, setY] = useState('');
    const [slope, setSlope] = useState(null);
    const [intercept, setIntercept] = useState(null);
    const [result, setResult] = useState('');
    const [data, setData] = useState();

    const [eqa, setNeweqa] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/linear')
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setNeweqa(result)
            })
    }, [])

    const handleButtonClick = () => {
        let item = eqa[Math.floor(Math.random() * eqa.length)];
        console.log(item.inputX)
        setX(item.inputX)
        setY(item.inputY)
        // let i = 0
        // let arr = [];
        // console.log(eqa)
        // let item = eqa[Math.floor(Math.random() * eqa.length)];
        // console.log(item)
        // setEquation(item.equation);
        // setXL(item.xl)
        // setXR(item.xr)
    };

    const calculate = () => {
        const xVals = x.split(',').map(Number);
        const yVals = y.split(',').map(Number);
        console.log(xVals)
        console.log(yVals)
        console.log(xVals.length)
        console.log(yVals.length)
        if (xVals.length == yVals.length) {
            console.log("x , y is true")
            const n = xVals.length;
            let xSum = 0, ySum = 0, xySum = 0, xSquaredSum = 0
            let i = 0
            for (i = 0; i < xVals.length; i++) {
                xSum += xVals[i]
                ySum += yVals[i]
                xySum += (xVals[i] * yVals[i])
                xSquaredSum += (xVals[i] ** 2)
            }
            console.log('xSum', xSum)
            console.log('ySum', ySum)
            console.log('xySum', xySum)
            console.log('x^2Sum', xSquaredSum)

            const slope = (n * xySum - xSum * ySum) / (n * xSquaredSum - xSum ** 2);
            const intercept = (ySum - slope * xSum) / n;

            console.log(slope)
            console.log(intercept)
            setSlope(slope);
            setIntercept(intercept);
            setResult(`y = ${slope.toFixed(2)}x + ${intercept.toFixed(2)}`);

            const show = () => {
                console.log('Hello')
                console.log(dataGraph)
                return (
                    <Scatter data={dataGraph} />
                )
            }

            const yReal = []
            let item
            for (i = 0; i < xVals.length; i++) {
                item = slope * xVals[i] + intercept;
                console.log(item)
            }

            const dataGraph = {
                labels: xVals,
                datasets: [
                    {
                        type: 'scatter',
                        label: 'A dataset',
                        data: yVals,
                        backgroundColor: 'rgba(255, 99, 132, 1)',
                    },
                    {
                        type: 'line',
                        label: 'Linear Regression',
                        data: xVals.map((val) => slope * val + intercept),
                        borderColor: 'rgba(255,0,0,1)',
                        backgroundColor: 'rgba(255,0,0,0.4)',
                    },
                ],
            };

            setData(show())

        }
        else {
            console.log('x , y is not smae')
            setResult(`x is ${xVals.length} y is ${yVals.length} length of x y are not equal.`);
        }

    }

    return (
        <div className="linear-regression-calculator">
            <h2>Linear Regression </h2>
            <div className="input-container">
                <label>
                    X Values:
                    <TextInput value={x} onChange={(e) => setX(e.target.value)} />
                </label>
                <br />
                <label>
                    Y Values:
                    <TextInput value={y} onChange={(e) => setY(e.target.value)} />
                </label>
                <br />
            </div>
            <br />
            <Button onClick={handleButtonClick}>Random</Button>
            <Button variant="gradient" gradient={{ from: 'purple', to: 'red' }} onClick={calculate}>Calculate</Button>
            <br />
            {result && <div className="result-container"> {result}</div>}
            {slope && intercept &&
                <div className="slope-intercept-container">
                    <div>Slope (a0): {slope.toFixed(2)}</div>
                    <div>Intercept (a1): {intercept.toFixed(2)}</div>
                </div>
            }
            {data}
        </div>
    );
}

export default LinearRe;
