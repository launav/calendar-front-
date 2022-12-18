import React, { useState } from 'react'

import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { format, addHours, parse, startOfWeek, getDay } from 'date-fns'

import esEs from 'date-fns/locale/es'
import { translateMessages } from '../helpers/translateMessages'

import { EventBox, NavBar, CalendarModal } from '../components'
import { useUiStore, useCalendarStore } from '../hooks'
import { BtnAddEvent } from '../components/BtnAddEvent'
import { BtnDeleteEvent } from '../components/BtnDeleteEvent'

const locales = {
  'es': esEs,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// const eventsList = [
//   {
//     title: 'titulo desde event list',
//     description: 'descripcion desde event list',
//     start: new Date(),
//     end: addHours(new Date(), 2),
//     user: {
//       // _id porq mongo me devuelve el id con el guion bajo
//       _id: '1234',
//       name: 'usuario'
//     }
//   }
// ];




export const CalendarPages = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

  const { openModal } = useUiStore();

  const { events, setActiveEvent } = useCalendarStore();

  const eventStyleGetter = (event, start, end, isSelected) => {
    // console.log(event, start, end, isSelected)
    const style = {
      backgroundColor: 'green'
    };
    return style
  };

  const ondblClick = (ev) => {
    console.log(ev);
    openModal();
  };

  const onSelect = (ev) => {
    console.log({ click: ev });
    setActiveEvent(ev)
  };

  const onViewChange = (ev) => {
    console.log(ev);
    localStorage.setItem('lastView', ev);
  };


  return (
    <>
      <NavBar />

      <div className='container my-5'>
        <BtnAddEvent />
        <Calendar
          culture='es'
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          defaultView={lastView}
          eventPropGetter={eventStyleGetter}
          messages={translateMessages()}
          components={
            { event: EventBox }
          }
          onDoubleClickEvent={ondblClick}
          onSelectEvent={onSelect}
          onView={onViewChange}
        />
        <CalendarModal />

        <BtnDeleteEvent/>
        
      </div>
    </>
  )
}
