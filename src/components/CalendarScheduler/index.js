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
    defaultView,
    defaultViewData,
    renderCustomEvent,
    schedulerLicenseKey,
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
      defaultView={defaultView || 'resourceTimelineWeek'}
      views={
        defaultViewData || {
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
        }
      }
      eventRender={info => {
        if (renderCustomEvent) {
          setTimeout(() => {
            eventDetail(info, eventIconClick);
          });
        }
      }}
      droppable={true}
      editable={true}
      eventResizableFromStart={true}
      schedulerLicenseKey={schedulerLicenseKey}
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
      eventDrop={info => moveEvent(info)}
      eventOverlap={false}
      slotEventOverlap={false}
      selectHelper={true}
      eventMouseover={(event, jsEvent, view) =>{
        console.log('testing')
      }}
      eventMouseout={() => console.log('testing')}
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
  defaultView: PropTypes.string,
  renderEvent: PropTypes.bool,
  defaultViewData: PropTypes.object,
  schedulerLicenseKey: PropTypes.string,
};

export default CalendarScheduler;
