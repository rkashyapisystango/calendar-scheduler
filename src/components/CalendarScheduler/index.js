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
  const {
    eventIconClick,
    events,
    resources,
    moveEvent,
    headerData,
    defaultViewData,
  } = props;
  const firstDay = 0;
  return (
    <FullCalendar
      timeZone="UTC"
      header={
        headerData || {
          left: 'prev,next today',
          center: 'title',
          right:
            'resourceTimelineWeek,resourceTimelineDay,resourceTimelineMonth',
        }
      }
      defaultView={defaultViewData || 'resourceTimelineWeek'}
      views={{
        resourceTimelineWeek: {
          type: 'resourceTimeline',
          firstDay: { firstDay },
          slotLabelFormat: 'ddd',
          slotDuration: { days: 1 },
          allDay: true,
        },
        resourceTimelineDay: {
          type: 'resourceTimeline',
          slotDuration: '01:00',
          allDay: true,
        },
        resourceTimelineMonth: {
          slotLabelFormat: 'ddd DD',
          allDay: true,
        },
      }}
      droppable={true}
      editable={true}
      eventResizableFromStart={true}
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
      businessHours={true}
      selectable={true}
      eventRender={info => {
        setTimeout(() => {
          eventDetail(info, eventIconClick);
        });
      }}
      eventDrop={info => moveEvent(info)}
      eventOverlap={false}
      slotEventOverlap={false}
    />
  );
};

CalendarScheduler.propTypes = {
  eventIconClick: PropTypes.func,
  events: PropTypes.array,
  resources: PropTypes.array,
  moveEvent: PropTypes.func,
  firstTimeOut: PropTypes.bool,
  headerData: PropTypes.object,
  defaultViewData: PropTypes.string,
};

export default CalendarScheduler;
