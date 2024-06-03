/* eslint-disable react/no-unescaped-entities */

import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import store from '../store/store'

function App() {
  
  return (
    <>
    <Provider store={store}>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Home/>}/>
   </Routes>
   </BrowserRouter>
   </Provider>
    </>
  )
}

export default App
