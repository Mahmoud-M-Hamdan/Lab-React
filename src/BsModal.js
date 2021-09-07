
import React, { Component } from 'react'
import {
    Modal,
    Button
} from "react-bootstrap";
 class BsModal extends Component {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title><h2>{this.props.title}</h2></Modal.Title>
            </Modal.Header>
            <Modal.Body><><img className="img-fluid" src={this.props.image_url} alt="no "/>
            <h4>{this.props.description}</h4>
             </></Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>        
        )
    }
}

export default BsModal