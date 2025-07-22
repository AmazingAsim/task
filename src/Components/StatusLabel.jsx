import React, { useEffect } from 'react'

export default function StatusLabel(props) {
    const [color,setcolor] = React.useState('');

    useEffect(()=>{
       if(props.status === 'Completed')
       {
        setcolor('bg-success');
       }
       else if(props.status === 'Upcoming')
       {
        setcolor('bg-warning');
       }
       else if(props.status === 'Follow-up')
       {
        setcolor('bg-primary');
       }
       else if(props.status === 'Overdue')
       {
        setcolor('bg-danger');
       }
       else if(props.status === 'In-progress')
       {
        setcolor('bg-info');
       }
       else if(props.status === 'Ongoing')
       {
        setcolor('bg-dark text-white');
       }
       else if(props.status === 'Draft')
       {
        setcolor('bg-secondary');
       }
       else if(props.status === 'Archived')
       {
        setcolor('bg-danger-subtle text-danger border border-danger');
       }
       else if(props.status === 'Re-schedule')
       {
        setcolor('bgpurpledark bg-secondary');
       }
    },[])
    
  return (
    <span className={`badge ${color} p-2`}>{props.status}</span>
  )
}
