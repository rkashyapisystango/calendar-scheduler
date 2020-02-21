import React from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from 'react-tooltip';
import { EventIconWrp } from './style';
export const eventDetail = (info, eventIconClick) => {
  const { event, el } = info;
  ReactTooltip.rebuild();
  const content = (
    <div
      data-tip={`<div><p>${event.title}</p><p>${event.extendedProps
        .description || ''}<strong>test</strong></p></div>`}
      data-html={true}
    >
      <ReactTooltip />
      <EventIconWrp>
        <i
          className="fa fa-cut"
          onClick={() => eventIconClick('first click')}
        />
        <i
          className="fa fa-bold"
          onClick={() => eventIconClick('second click')}
        />
        <i
          className="fa fa-align-left"
          onClick={() => eventIconClick('third click')}
        />
        <i className="fa fa-plus" onClick={() => eventIconClick('add new')} />
      </EventIconWrp>
      {event.title}
    </div>
  );
  ReactDOM.render(content, el);
  return el;
};
