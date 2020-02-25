import React from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from 'react-tooltip';
import { EventIconWrp } from './style';
export const eventDetail = (info, eventIconClick) => {
  const { event, el } = info;
  ReactTooltip.rebuild();
  const content = (
    <span className="fc-title-wrap">
      {/* <ReactTooltip /> */}
      <EventIconWrp>
        <i
          className="fa fa-cut"
          onClick={() => eventIconClick('first click', event)}
        />
        <i
          className="fa fa-bold"
          onClick={() => eventIconClick('second click', event)}
        />
        <i
          className="fa fa-align-left"
          onClick={() => eventIconClick('third click', event)}
        />
        <i
          className="fa fa-plus"
          onClick={() => eventIconClick('add new', event)}
        />
      </EventIconWrp>
      <div className="fc-resizer fc-start-resizer" />
      <div className="fc-resizer fc-end-resizer" />
    </span>
  );
  ReactDOM.render(content, el);
  return el;
};
