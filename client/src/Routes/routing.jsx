import {Route,Routes} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import SignIn from '../pages/Signin'
import SignOut from '../pages/SignOut'
import Profile from '../pages/Profile'

export default function routing() {
  return (
    <>
      <Routes>
        <Route path = '/' element={<Home/>}></Route>
        <Route path = '/About' element={<About/>}></Route>
        <Route path = '/sign-in' element={<SignIn/>}></Route>
        <Route path = '/sign-out' element={<SignOut/>}></Route>
        <Route path = '/profile' element={<Profile/>}></Route>
      </Routes>
    </>
  )
}
