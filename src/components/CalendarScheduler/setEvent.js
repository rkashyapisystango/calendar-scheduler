import React from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from 'react-tooltip';
import { EventIconWrp } from './style';
import Popover from 'react-awesome-popover';
export const eventDetail = (info, eventIconClick) => {
  const { event, el } = info;
  ReactTooltip.rebuild();
  const content = (
    <span
      className="fc-title-wrap"
      onMouseOver={() => console.log('testing')}
      onMouseLeave={() => console.log('mouse leave event')}
    >
      {/* <ReactTooltip /> */}
      {/* <Popover action="hover">
        <button>The Target</button>
        <div>The content</div>
      </Popover> */}
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

export const customEventDom = (info, eventIconClick) => {
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
