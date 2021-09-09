
import React, { Component } from 'react'

class Form extends Component {
    handleSubmit = (e)=>{this.props.handleSelect(e)}
    render() {
        return (
            <div>
                <form onChange={this.props.handleSubmit}>
                    
                    <select onChange={this.handleSubmit}>
                        <option value="">Number of horns</option>
                        <option value="1"> one horns</option>
                        <option value="2">two horns</option>
                        <option value="3">three horns</option>
                        <option value="100">hundred horns</option>
                    </select>
                   
                </form>
            </div>
        )
    }
}
export default Form