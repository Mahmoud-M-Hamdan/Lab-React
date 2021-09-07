

import React, { Component } from 'react'
import {
    Card,
    Button,
    Col,
} from 'react-bootstrap';

class HorendBeasts extends Component {

    getHandleOpen=()=>{
        let description=this.props.description;
        let title=this.props.title;
        let image_url=this.props.image_url ;
        this.props.handleOpen(description,title,image_url);
    }
    render() {
        
        return (
            <>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.image_url} style={{ height: '18rem'}} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            {this.props.title}
                            
                        </Card.Text>
                        <Button 
                                onClick={this.getHandleOpen}
                                variant="primary"
                        >
                                Go somewhere
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
           
        </>
        )

    }
}

export default HorendBeasts