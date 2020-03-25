import React, { useState } from 'react';
import Layout from 'shared/Layout';
import Modal from 'shared/Modal';

import CalendarScheduler from '../CalendarScheduler';
import { events, resources } from './constant';
import { CalendarContainer } from './style';
import { popEventClick, popEvent2Click, eventClicked } from './calendarSupport';

const Home = () => {
  const [open, setOpen] = useState(false);

  const setOpenToggle = () => {
    setOpen(!open);
  };
  // const firstDay = 0;

  return (
    <Layout>
      <CalendarContainer>
        <CalendarScheduler
          // headerData={{
          //   left: 'prev,next today',
          //   center: 'title',
          //   right:
          //     'resourceTimelineWeek,resourceTimelineDay,resourceTimelineMonth',
          // }}
          //defaultView="resourceTimelineDay"
          // defaultViewData={{
          //   resourceTimelineWeek: {
          //     type: 'resourceTimeline',
          //     firstDay: { firstDay },
          //     slotLabelFormat: 'ddd',
          //     slotDuration: { days: 1 },
          //     allDay: true,
          //   },
          //   resourceTimelineDay: {
          //     type: 'resourceTimeline',
          //     slotDuration: '01:00',
          //     allDay: true,
          //   },
          //   resourceTimelineMonth: {
          //     slotLabelFormat: 'ddd DD',
          //     allDay: true,
          //   },
          // }}
          renderCustomEvent={true}
          events={events}
          resources={resources}
          schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
          eventItemClick={eventClicked}
          popEventClick={popEventClick}
          popEventText="Ops 1"
          popEvent2Text="Ops 2"
          popEvent2Click={popEvent2Click}
          moveEvent={info => {
            if (
              !window.confirm(`Do you want to adjust the start of the event?`)
            ) {
              info.revert();
            }
          }}
          eventItemResize={info => {
            if (!window.confirm(`Do you want to resize the event?`)) {
              info.revert();
            }
          }}
          eventColor="green"
          eventBackgroundColor="green"
          eventTextColor="white"
          eventBorderColor="yellow"
          contentHeight="500"
          aspectRatio="1:5"
        />
      </CalendarContainer>
      <Modal
        open={open}
        toggle={() => setOpenToggle(!open)}
        modalHeader="Title"
        btnClassName="Submit"
      >
        <div>Abc</div>
      </Modal>
    </Layout>
  );
};

Home.propTypes = {};

export default Home;
