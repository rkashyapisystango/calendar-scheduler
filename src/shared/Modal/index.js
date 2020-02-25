/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
// import { injectIntl } from 'react-intl';
import { Button, Modal } from 'react-bootstrap';
import { Wrapper } from './style';
function CustomModal(props) {
  const { open, toggle, modalHeader, children /* btnClassName */ } = props;
  return (
    <Wrapper>
      <Modal show={open} onHide={() => toggle(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{modalHeader}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => toggle(false)}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </Wrapper>
  );
}

CustomModal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
  open: PropTypes.bool,
  toggle: PropTypes.func,
  modalHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  buttonName: PropTypes.string,
  btnClassName: PropTypes.string,
  subTitle: PropTypes.string,
};

export default CustomModal;
