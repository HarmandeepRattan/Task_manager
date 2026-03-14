import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import Dashboard from './pages/admin/Dashboard'
import ManageTask from './pages/admin/ManageTask'
import ManageUsers from './pages/admin/ManageUsers'
import CreateTask from './pages/admin/CreateTask'
import PrivateRoute from './routes/PrivateRoute'
import UserDashboard from './user/UserDashboard'
import MyTasks from './user/MyTasks'
import TaskDetails from './user/TaskDetails'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>

        {/* ADMIN ROUTES */}
        <Route element={<PrivateRoute allowedRoles={["admin"]}/>}>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path= '/admin/tasks' element={<ManageTask/>}/>
        <Route path='/admin/users' element={<ManageUsers/>}/>
        <Route path='/admin/create' element={<CreateTask/>}/>
        </Route>

        {/* USER ROUTES */}
        <Route element={<PrivateRoute allowedRoles={["user"]}/>}>
        <Route path='/user/dashboard' element={<UserDashboard/>}/>
        <Route path='/user/tasks' element={<MyTasks/>}/>
        <Route path='/user/details/:id  ' element={<TaskDetails/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
