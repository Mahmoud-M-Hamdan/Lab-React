

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';
import BsModal from './BsModal';
import Header from './Header'
import Footer from './Footer'

class App extends Component {

  constructor(props){
    super(props);
    this.state={
        showModal:false,
        description:"",
        title:"",
        image_url:""
    }
}
  handleClose=()=>{
    this.setState({
      showModal:false
    })
  }
  handleOpen=(description, title,image_url)=>{
    this.setState({
      showModal:true,
      description:description,
      title:title,
      image_url:image_url,

    })
  }
  render() {
    return (
      <>
     <Header/>
        <Main handleOpen={this.handleOpen}/>

        <BsModal handleClose={this.handleClose} 
                showModal={this.state.showModal} 
                description={this.state.description} 
                title={this.state.title} 
                image_url={this.state.image_url} 
        />
        <Footer/>
      </>
    )
  }
}

export default App


