import React from 'react';
import ReactDOM from 'react-dom';
// import Popover from 'react-awesome-popover';
// import { EventIconWrp, OverLayDesign } from './style';
import { Popover } from 'antd';
import { popoverData } from './popoverData';

export const EventDetail = (info, props) => {
  const { event, el } = info;
  const content = (
    <Popover content={popoverData(info, ...[props])} title={event.title}>
      <div className="fc-title-wrap">
        {event.title}
        <div className="fc-resizer fc-start-resizer" />
        <div className="fc-resizer fc-end-resizer" />
      </div>
    </Popover>
  );
  ReactDOM.render(content, el);
  return el;
};
