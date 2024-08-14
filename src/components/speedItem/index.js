import { Component } from "react";
import './index.css'

class Speed extends Component{
    state = {count:0}
    onIncrement = () => {
        const {count} = this.state
        if(count < 200){
            this.setState((prevState) => ({
                count: prevState.count + 10
            }))
        }   
    }
    onDecrement = () => {
        const {count} = this.state
        if(count > 0){
            this.setState((prevState) => ({
                count: prevState.count - 10
            }))
        }   
    }
    render(){
        const {count} = this.state
        return(
            <div className="bg-container">
                <h1 className="heading">SPEEDOMETER</h1>
                <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt="speesometer" className="image"/>
                <p className="speed">Speed is {count}mph</p>
                <p className="description">Min limit is 0mph, Max limit is 200mph</p>
                <div>
                    <button className="acceleration" onClick={this.onIncrement}>Acceleration</button>
                    <button className="break" onClick={this.onDecrement}> Apply break</button>
                </div>
            </div>
        )
    }
}
export default Speed;