import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    constructor(props){
        super(props);
        this.state={
                stateLike:0,
        }
    }
    raiseMoney=()=>{
        this.setState({
            stateLike:this.state.stateLike+1
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.raiseMoney}> Like </button>
                <Child childMoney={this.state.stateLike}/>
            </div>
        )
    }
}

export default Parent