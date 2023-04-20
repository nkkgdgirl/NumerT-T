import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Bisection from './Component1/RootOfEquation/Bisection'
import Navhome from './Component/Navhome';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import FalsePosition from './Component1/RootOfEquation/FalsePosition';
import Cramer from './Component1/LinarAlgebraic/Cramer';
import LinearRe from './Component1/regresstion/linear';

function App() {
  // const [equation, setEquation] = useState([])
  // useEffect(() => {
  //   fetch('http://localhost:5000/equation')
  //     .then(res => res.json())
  //     .then(result => {
  //       setEquation(result)
  //     })
  // }, [])
  

  return (
    <div className="App">
      {/* <div>
        {equation.map(equation => (
          <div>{equation.id}</div>
        ))
        }
      </div> */}
      <Navhome />
      <BrowserRouter>
        <Routes>
          <Route path="/Bisection" element={<Bisection />} />
          <Route path="/False-Position" element={<FalsePosition />} />
          <Route path="/Cramer" element={<Cramer />} />
          <Route path="/LinearRe" element={<LinearRe />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
