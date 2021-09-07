
import React, { Component } from 'react'
import userData from "./Data.json";
import HorendBeasts from './HorendBeasts'
class Main extends Component {
    render() {
        return (
            <div className="row">
                {
                    userData.map(Beasts=>{
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