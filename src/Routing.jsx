import { Route, Routes } from "react-router-dom"
import App from "./App"
import Home from "./pages/Home"
import Vote from "./pages/Vote"

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/vote" element={<Vote />}/>
      </Route>
    </Routes>
  )
}

export default Routing