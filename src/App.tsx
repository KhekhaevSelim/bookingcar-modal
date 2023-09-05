
import { Route, Routes } from "react-router-dom";
import SearchModal from "./pages/searchModal/searchModal";
import CarList from "./pages/carList/CarList";


function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/bookingcar-modal" element={<SearchModal/>}/>
        <Route path="/bookingcar-modal/carlist" element={<CarList/>}/>
      </Routes>
    </div>
     
  )
}

export default App
