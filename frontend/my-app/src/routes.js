import Home from "./containers/Home";
import ResultList from "./components/ResultList";
import {Route, BrowserRouter, Routes} from "react-router-dom"


export default function NavRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/results/' element={<ResultList />} />
            </Routes>
        </BrowserRouter>
    )
}