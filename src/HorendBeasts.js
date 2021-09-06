import  { React,Component } from 'react'
class HornedBeasts extends Component {
    render() {
        
        return (
            <div>
                <h2>Title: {this.props.title}</h2>
                <img src={`${this.props.image_url}`} width={600} alt={'imagee'}/>
                 <h1>{this.props.stateMoney}</h1>
                <p>Description:{this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeasts


