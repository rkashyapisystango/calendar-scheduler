import React from 'react';
import Layout from 'shared/Layout';
import Modal from 'shared/Modal';
import CalendarScheduler from '../CalendarScheduler';
import { events, resources } from './constant';
import { CalendarContainer } from './style';
// import CustomModal from 'shared/Modal';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.setOpen = this.setOpen.bind(this);
  }

  setOpen() {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  render() {
    const { open } = this.state;
    const firstDay = 0;
    return (
      <Layout>
        <CalendarContainer>
          <CalendarScheduler
            headerData={{
              left: 'prev,next today',
              center: 'title',
              right:
                'resourceTimelineWeek,resourceTimelineDay,resourceTimelineMonth',
            }}
            defaultView="resourceTimelineDay"
            defaultViewData={{
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
            renderCustomEvent={true}
            renderCustomEventData
            events={events}
            resources={resources}
            eventIconClick={(data, event) => {
              this.setOpen(!open);
            }}
            moveEvent={info => console.log(info.evnet)}
            schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
          />
        </CalendarContainer>
        {/* <CustomModal visible={open} dismiss={() => setOpen(!open)}>Abc</CustomModal> */}
        <Modal
          open={open}
          toggle={() => this.setOpen(!open)}
          modalHeader="Title"
          btnClassName="Submit"
        >
          <div>Abc</div>
        </Modal>
      </Layout>
    );
  }
}

Home.propTypes = {};

export default Home;
