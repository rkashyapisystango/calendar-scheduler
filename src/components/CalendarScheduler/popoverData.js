import React from 'react';
import PropTypes from 'prop-types';
const popoverData = (info, props) => {
  const { popEventText, popEvent2Text, popEventClick, popEvent2Click } = props;
  return (
    <div>
      {popEventText && (
        <p onClick={() => popEventClick(info)}>{popEventText}</p>
      )}
      {popEvent2Text && (
        <p onClick={() => popEvent2Click(info)}>{popEvent2Text}</p>
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
