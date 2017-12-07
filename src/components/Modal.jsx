import * as React from 'react';
import { Button, Modal as MTModal } from 'semantic-ui-react';

class Modal extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let { size, header, children, open, close } = this.props;
    return (
      <MTModal size={ size } open={ open } onClose={ close } >
        <MTModal.Header>{ header }</MTModal.Header>
        <MTModal.Content >
          { children }
        </MTModal.Content>
      </MTModal>
    );
  }
}

export default Modal;