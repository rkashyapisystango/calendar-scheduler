import React, { Component } from 'react';
import { ModalWrapper, ModalBoxSetup, ModalBg } from '../GeneralStyle';
import PropTypes from 'prop-types';

class CustomModal extends Component {
  render() {
    const { visible, dismiss, children, client } = this.props;
    return (
      <React.Fragment>
        {visible ? (
          <ModalWrapper>
            <ModalBoxSetup width={client}>{children} </ModalBoxSetup>
            <ModalBg onClick={dismiss} />
          </ModalWrapper>
        ) : null}
      </React.Fragment>
    );
  }
}

CustomModal.propTypes = {
  visible: PropTypes.bool,
  dismiss: PropTypes.func,
  children: PropTypes.object,
  client: PropTypes.string,
};
