import { React, Component } from 'react'
import HornedBeasts from './HorendBeasts'
class Main extends Component {
    render() {
        let beasts = [{
            title: 'UniWhal',
            imgUrl: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
            desc: 'A unicorn and a narwhal nuzzling their horns'
        },
        {
            title: 'Rhino Family',
            imgUrl: 'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80',
            desc: 'Mother (or father) rhino with two babies'
        },
        {
            title: 'Unicorn Head',
            imgUrl: 'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg',
            desc: 'Someone wearing a creepy unicorn head mask'



        }]
        return (

            <div>

                {
                    beasts.map(element => {
                        return <HornedBeasts title={element.title} imgUrl={element.imgUrl} desc={element.desc} />
                    })
                }



            </div>
        )
    }
}

export default Main
