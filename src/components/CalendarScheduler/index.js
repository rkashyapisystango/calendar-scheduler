import React from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import resourceTimeGrid from '@fullcalendar/resource-timegrid';
import resourceDayGridPlugin from '@fullcalendar/resource-daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import momentPlugin from '@fullcalendar/moment';
import PropTypes from 'prop-types';
import { eventDetail } from './setEvent';

// import dayGridPlugin from '@fullcalendar/daygrid';
// import './main.scss'; // webpack must be configured to do this
//timeGrid, resourceTimeline
const CalendarScheduler = props => {
  const { eventIconClick, events, resources } = props;
  const firstDay = 0;
  console.log('events');
  console.log(events);
  console.log('events');
  return (
    <FullCalendar
      timeZone="UTC"
      header={{
        left: 'prev,next today',
        center: 'title',
        right: 'resourceTimelineWeek,resourceTimelineDay,resourceTimelineMonth',
      }}
      defaultView="resourceTimelineMonth"
      views={{
        resourceTimelineWeek: {
          type: 'resourceTimeline',
          firstDay: { firstDay },
          slotLabelFormat: 'ddd',
          slotDuration: { days: 1 },
        },
        resourceTimelineDay: {
          type: 'resourceTimeline',
          slotDuration: '01:00',
        },
        resourceTimelineMonth: {
          slotLabelFormat: 'ddd DD',
        },
      }}
      droppable={true}
      editable={true}
      schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
      plugins={[
        resourceTimelinePlugin,
        resourceDayGridPlugin,
        resourceTimeGrid,
        momentPlugin,
        interactionPlugin,
      ]}
      resourceGroupField="building"
      events={events}
      resources={resources}
      eventRender={info => eventDetail(info, eventIconClick)}
      eventDrop={(event, dayDelta, minuteDelta, allDay, revertFunc) => {
        console.log(event, 'event');
        // alert(
        //   event.title +
        //     ' was moved ' +
        //     dayDelta +
        //     ' days and ' +
        //     minuteDelta +
        //     ' minutes.',
        // );

        // if (allDay) {
        //   alert('Event is now all-day');
        // } else {
        //   alert('Event has a time-of-day');
        // }

        // // if (!confirm('Are you sure about this change?')) {
        // //   revertFunc();
        // // }
      }}
    />
  );
};

CalendarScheduler.propTypes = {
  eventIconClick: PropTypes.func,
  events: PropTypes.array,
  resources: PropTypes.array,
};

export default CalendarScheduler;
