import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
// import Popover from 'react-awesome-popover';
// import { EventIconWrp, OverLayDesign } from './style';
import { Popover } from 'antd';
import { popoverData } from './popoverData';
import IconFile from './iconFile';
import { iconFileCases } from './iconFileCases';

export const EventDetail = (info, props) => {
  const { event, el, view } = info;
  const { eventIconClick, eventIconJson } = props;
  const { activeStart, activeEnd } =  view;    
  const activeStartData = moment(activeStart);
  const activeEndData = moment(activeEnd);
  const dateDifference = activeEndData.diff(activeStartData, 'days');
  let displayIconLink = false;
  if(eventIconJson !== undefined) {
    displayIconLink = iconFileCases(eventIconJson, dateDifference);
  }  
  const content = (
    <Popover content={popoverData(info, ...[props], dateDifference)} title={event.title}>
      <div className="fc-title-wrap">
        <div className="fc-title">{event.title}</div>
        {
          displayIconLink && 
          eventIconJson !== undefined && <IconFile 
            eventIconJson={eventIconJson}
            eventIconClick={eventIconClick}
            info={info}
          />  
        }
              
        <div className="fc-resizer fc-start-resizer" />
        <div className="fc-resizer fc-end-resizer" />
      </div>
    </Popover>
  );
  ReactDOM.render(content, el);
  return el;
};
