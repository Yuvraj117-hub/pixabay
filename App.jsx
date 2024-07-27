import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Login from './pages/Login' 
import Join from './pages/join'
import ImageInfo from './pages/imageInfo'
function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='*' element={<Error></Error>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/join' element={<Join></Join>}></Route>
                <Route path='/imageinfo' element={<ImageInfo></ImageInfo>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App;