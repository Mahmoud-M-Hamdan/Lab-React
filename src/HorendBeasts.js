import  { React,Component } from 'react'
class HornedBeasts extends Component {
    render() {
        
        return (
            <div>
                <h2>Title: {this.props.title}</h2>
                <img src={`${this.props.imgUrl}`} alt={'imagee'}/>
                <p>Description:{this.props.desc}</p>
            </div>
        )
    }
}

export default HornedBeasts


