import React from 'react';
import PropTypes from 'prop-types';
import IconFile from './iconFile';
import { iconFileCasesForPopOver } from './iconFileCases';

const popoverData = (info, props, dateDifference) => {
  const 
    { popEventText, 
      popEvent2Text, 
      popEventClick, 
      popEvent2Click, 
      eventIconClick, 
      eventIconJson 
    } = props;
    let displayIconLink = false;
    if(eventIconJson !== undefined) {
      displayIconLink = iconFileCasesForPopOver(eventIconJson, dateDifference);
    }
  return (
    <div className="fc-popover-wrap">
      {
        displayIconLink && 
        eventIconJson !== undefined  &&
        <IconFile 
          eventIconJson={eventIconJson}
          eventIconClick={eventIconClick}
          info={info}
        />  
      }
     
        
      {popEventText && (
        <p
          className="curosr-pointer calender-inner-event"
          onClick={() => popEventClick(info)}
        >
          {popEventText}
        </p>
      )}
      {popEvent2Text && (
        <p
          className="curosr-pointer calender-inner-event"
          onClick={() => popEvent2Click(info)}
        >
          {popEvent2Text}
        </p>
      )}
    </div>
  );
};
popoverData.propTypes = {
  popEventText: PropTypes.string,
  popEvent2Text: PropTypes.string,
  popEventClick: PropTypes.func,
  popEvent2Click: PropTypes.func,
};
export { popoverData };
