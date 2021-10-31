import React from "react";
import{Button} from 'react-bootstrap';
export default class Counter extends React.Component{
  state={count:0}

  OnIncreament=()=>{
    this.setState({count:this.state.count+1});
  }

  OnDecreament=()=>{
    this.setState({count:this.state.count-1});
  }

  OnReset=()=>{
    this.setState({count:this.state.count=0 });
  }
    render() {
      return(
        <div className="marg">
          <pre>
             <Button className="btn btn-info"> {this.state.count}</Button>
             <Button onClick={this.OnIncreament}>Increament</Button>
             <Button onClick={this.OnDecreament}>Decreament</Button>
             <Button onClick={this.OnReset}>Reset</Button>
             
            </pre>
          </div>
        )
        
    }
}