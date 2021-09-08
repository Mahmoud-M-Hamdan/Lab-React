

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';
import BsModal from './BsModal';
import Header from './Header'
import Footer from './Footer'
import Form from './Form';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      description: "",
      title: "",
      image_url: "",
      
      horns:"",
      showUser: false
    }
  }
  handleClose = () => {
    this.setState({
      showModal: false
    })
  }
  handleOpen = (description, title, image_url,horns) => {
    this.setState({
      showModal: true,
      description: description,
      title: title,
      image_url: image_url,
      horns:horns,

    })}
    handleSelect = (e) => {
      let speciality = e.target.value;
      this.setState({
        speciality: speciality
      });
      console.log(this.state.speciality);
    
    }
    handleSubmit = (e) => {
      e.preventDefault();
      
      this.setState({
        
        showUser: true
      })
    }
  
  
  render() {
    return (
      <>
        <Header />
        {
          this.state.showUser ? <>
            <BsModal handleClose={this.handleClose}
              showModal={this.state.showModal}
              description={this.state.description}
              title={this.state.title}
              image_url={this.state.image_url} 
              />
              <Main handleOpen={this.handleOpen} />
              
          </> :
            ''
        }
        



        <Form handleSubmit={this.handleSubmit}
          handleSelect={this.handleSelect} />
        <Footer />
      </>
    )
  }
}

export default App


