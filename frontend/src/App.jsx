import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import PrivateRoute from './routes/PrivateRoute'
import Dashboard from './pages/admin/Dashboard'
import ManageTask from './pages/admin/ManageTask'
import CreateTask from './pages/admin/CreateTask'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import UserDashboard from './user/UserDashboard'
import MyTasks from './user/MyTasks'
import TaskDetails from './user/TaskDetails'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<SignUp/>}/>

        {/* ADMIN */}
        <Route element={<PrivateRoute allowedRoles={["admin"]}/>}>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/tasks' element={<ManageTask/>}/>
        <Route path='/admin/user' element={<ManageTask/>}/>
        <Route path='/admin/create' element={<CreateTask/>}/>
        </Route>

        {/* User */}
        <Route element={<PrivateRoute allowedRoles={["user"]}/>}/>
        <Route path='/user/dashboard' element={<UserDashboard/>}/>
        <Route path='/user/task' element={<MyTasks/>}/>
        <Route path='/user/details/:id' element={<TaskDetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
