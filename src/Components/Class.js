import React ,{ Component } from "react";

class CounterApp extends Component{
    constructor(props){
    super(props);
    this.state ={
        count:0
    };
}


Add =()=>{
    this.setState(old=>({
        count : old +1
    })
    )
}

Sub =()=>{
    this.setState(old=>({
        count : old -1
    }));
}

render(){
    const { count } = this.state;

    return(
        <div>
            <h1>counter Page</h1>
            <h3>Count ={count}</h3>
            <button onClick={this.add}>Add</button>
            <button onClick={this.sub} >Sub</button>
        </div>
    )
}
}
export default CounterApp;