import React from 'react'
import Navbar from '../Components/Navar'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'
export default function Dashboard() {
  return (
    <div id="dashboard">
        <Navbar />
        <div id="wrapper">
            <aside><Sidebar /></aside>
            <main>
                <Outlet/>
            </main>
        </div>
    </div>
  )
}
