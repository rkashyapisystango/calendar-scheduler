import React from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import resourceTimeGrid from '@fullcalendar/resource-timegrid';
import resourceDayGridPlugin from '@fullcalendar/resource-daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import momentPlugin from '@fullcalendar/moment';
import PropTypes from 'prop-types';
import { EventDetail } from './setEvent';
// import ReactTooltip from 'react-tooltip';
import 'assets/css/popover.css';
import 'assets/css/common.css';
// import dayGridPlugin from '@fullcalendar/daygrid';
//timeGrid, resourceTimeline
const CalendarScheduler = props => {
  const {
    events,
    resources,
    moveEvent,
    headerData,
    defaultView,
    defaultViewData,
    renderCustomEvent,
    schedulerLicenseKey,
    eventItemClick,
    eventItemResize,
    eventColor,
    eventBackgroundColor,
    eventTextColor,
    eventBorderColor,
    contentHeight,
    aspectRatio,
  } = props;
  const firstDay = 0;

  return (
    <>
      <FullCalendar
        timeZone="UTC"
        nextDayThreshold="00:00:00"
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
        displayEventTime={true}
        eventRender={info => {
          if (renderCustomEvent) {
            setTimeout(() => {
              EventDetail(info, ...[props]);
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
        eventOverlap={true}
        slotEventOverlap={false}
        selectHelper={true}
        eventClick={eventItemClick}
        eventResize={eventItemResize}
        eventColor={eventColor}
        eventBackgroundColor={eventBackgroundColor}
        eventTextColor={eventTextColor}
        eventBorderColor={eventBorderColor}
        scrollTime="00:00:00"
        contentHeight={contentHeight ? contentHeight : '500'}
        aspectRatio={aspectRatio ? aspectRatio : '1:5'}
        dayClick={() => console.log('testing')}
      />
    </>
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
  renderCustomEvent: PropTypes.bool,
  eventItemClick: PropTypes.func,
  eventItemResize: PropTypes.func,
  eventColor: PropTypes.string,
  eventBackgroundColor: PropTypes.string,
  eventTextColor: PropTypes.string,
  eventBorderColor: PropTypes.string,
  contentHeight: PropTypes.string,
  aspectRatio: PropTypes.string,
};

export default CalendarScheduler;
