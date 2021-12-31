import Home from "./containers/Home";
import ResultPage from "./containers/ResultPage";
import {Route, BrowserRouter, Routes} from "react-router-dom"


export default function NavRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/results/' element={<ResultPage />} />
            </Routes>
        </BrowserRouter>
    )
}