import {BrowserRouter as Router, Route, Link } from "react-router-dom"
import Button from "./Components/Button";
import landing from "./pages/landingPage.jsx"

function App() {
  return (
    <div>
      <Button variant="primary" onClick={() => alert("Button Clicked!")}>
        Save Evidence
      </Button>
    </div>
  )
}

export default App;