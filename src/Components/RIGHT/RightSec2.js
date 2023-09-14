import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default function RightSec2() {
  const startDate = '2023-09-01';
  const endDate = '2023-09-05';

  const eventRender = (arg) => {
    if (arg.event.start >= startDate && arg.event.end <= endDate) {
      arg.el.style.backgroundColor = 'green';
    }
  };

  useEffect(() => {
    
    const calendarHeader = document.querySelector('.fc-header-toolbar .fc-center');
    if (calendarHeader) {
      calendarHeader.style.fontSize = '14px'; 
    }
  }, []); 

  return (
    <div className="w-auto h-auto">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          {
            title: 'Event 1',
            start: '2023-09-01',
            end: '2023-09-05',
          },
          {
            title: 'Event 2',
            start: '2023-09-20',
            end: '2023-09-25',
          },
          
        ]}
        eventContent={(arg) => {
          return <div>{arg.event.title}</div>;
        }}
        eventDidMount={eventRender}
        className="invisible" 
      />
    </div>
  );
}
