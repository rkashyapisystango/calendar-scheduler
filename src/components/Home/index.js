import React from 'react';
import Layout from 'shared/Layout';
import CalendarScheduler from '../CalendarScheduler';
import { events, resources } from './constant';

const Home = () => (
  <Layout>
    <CalendarScheduler
      eventIconClick={data => console.log(data)}
      events={events}
      resources={resources}
    />
  </Layout>
);

Home.propTypes = {};

export default Home;
