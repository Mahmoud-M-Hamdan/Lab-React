
import React, { Component } from 'react'

class Form extends Component {
    render() {

        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    
                    <select onChange={(e)=>{this.props.handleSelect(e);}}>
                        <option value="">Number of horns</option>
                        <option value="1"> one horns</option>
                        <option value="2">two horns</option>
                        <option value="3">three horns</option>
                        <option value="100">hundred horns</option>
                    </select>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
export default Form