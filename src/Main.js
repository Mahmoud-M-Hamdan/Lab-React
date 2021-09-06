import { React, Component } from 'react'
import HornedBeasts from './HorendBeasts'
import Data from './Data.json'
import Parent from './Parent'
class Main extends Component {

   
    render() {
        let beasts=Data
      
            return (

                <div>

                    {
                        beasts.map(element => {
                            return (
                            <>
                            < HornedBeasts title={element.title} image_url={element.image_url} description={element.description}  />
                            <Parent/> 
                            </>)
                        })
                    }
                   
                   


                </div>
            )
        }
    }

export default Main
