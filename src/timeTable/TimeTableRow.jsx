import React from 'react'
import TimeTableCell from './TimeTableCell'

function TimeTableRow({...props}) {
  return (
    <>
    <TimeTableCell day="mon" {...props}/>
    <TimeTableCell day="tue" {...props}/>
    <TimeTableCell day="wen" {...props}/>
    <TimeTableCell day="thu" {...props}/>
    <TimeTableCell day="fri" {...props}/>
    </>
  )
}

export default TimeTableRow