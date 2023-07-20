import React, { useMemo } from 'react'
import { useRecoilState } from 'recoil'
import { timeTableState } from '../store/store'
import { TableCell } from '@mui/material'

function TimeTableCell({day,timeNum}) {
 const [timeTableData,setTimeTableData]= useRecoilState(timeTableState)
const timeData=useMemo(()=>{
  return timeTableData[day].find((time)=>time.start<=timeNum && timeNum <time.end)
},[day,timeNum])
  return (
   <>
  {
    timeData?.start===timeNum?
    <TableCell style={{backgroundColor:timeData.color,position:"relative"}} align="center" rowSpan={timeData.end-timeData.start}>
      {timeData.name}
      </TableCell>
    : timeData?.start<timeNum && timeNum<timeData?.end?null:<TableCell />
}
</>
  )
}

export default TimeTableCell