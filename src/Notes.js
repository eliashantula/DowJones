import React, { Component } from "react";
import {
 Button, Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";

class Notes extends Component {
constructor(props){
	super(props)
	this.state = {
      modal: false
    };
  this.toggle=this.toggle.bind(this)  
}
toggle(){
	this.setState({modal: !this.state.modal})
}

render() {
	const {notes} = this.props
return (<div>
	<Button color="black" onClick={this.toggle} size="sm">View Notes</Button>
<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Notes</ModalHeader>
          <ModalBody>
         {notes}
                
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
        </div>



)
}

}
export default Notes