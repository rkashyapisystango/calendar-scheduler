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
            defaultViewData="resourceTimelineDay"
            events={events}
            resources={resources}
            eventIconClick={(data, event) => {
              this.setOpen(!open);
            }}
            moveEvent={info => console.log(info.evnet)}
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
