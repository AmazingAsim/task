import React from 'react'
import Tasktab from './Tasktab'
export default function Sidebar() {
  let tasklist = [
  { title: "Dashboard", options: false },
  { title: "Tasks", options: false },
  { title: "Buyer Meeting", options: false },
  { title: "Quick Costing", options: false },
  { title: "Pre Order Costing", options: false },
  { title: "Style Library", options: false },
  { title: "Requisitions", options: true },
  { title: "Buyer Purchase", options: true },
  { title: "Inventory", options: true },
  { title: "Sample Development", options: true },
  { title: "Production", options: true },
  { title: "Master Admin", options: true },
  { title: "Users", options: true },
]
  return (
    <div className='d-flex flex-column gap-2 p-2 mt-3'>
        {
            tasklist.map((item)=>
            <div className={"list-group"}>
               <Tasktab  title={item.title} options={item.options} />
            </div>
            )
        }
    </div>
  )
}
