import React from 'react'
import moment from 'moment'
import Card from '../components/Card'
interface Props {
  matches?: Match[]
  date?: string
}

const DateTitle = ({ date }: Props) => {
  const day = moment(date).format("ddd")
  const _date = moment(date).format("Do MMM YYYY")
  const isToday = moment(date).isSame(moment(),'day')
  return <div>
    {isToday ? <span className='font-bold text-2xl'>Hari Ini</span> : <span className='font-bold'>{day}</span>}
    <span>,{_date}</span>
  </div>
}

export default function SectionRow({ matches, date }: Props) {
  const isToday = moment(date).isSame(moment(),'day')
  return (
    <div className='mt-[40px]'>
      <DateTitle date={date}/>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] mt-[10px]'>
          {matches?.map((match,index)=>(
            <Card key={index} match={match} isToday={isToday}/>
          ))}
      </div>
    </div>
  )
}
