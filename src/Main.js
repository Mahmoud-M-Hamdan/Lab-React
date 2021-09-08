import React, { Component } from 'react'
import userData from "./Data.json";
import HorendBeasts from './HorendBeasts'
class Main extends Component {
    
  
    render() {
        let  ddata=userData.filter(e=>e.horns===2)

        return (
            <div className="row" >
                {
                    ddata.map(Beasts=>{
                        return <HorendBeasts 
                                    handleOpen={this.props.handleOpen} 
                                    description={Beasts.description} 
                                    title={Beasts.title} 
                                    image_url={Beasts.image_url}
                                />
                    })
                }
            </div>
        )
    }
}

export default Main
