import React, { Component } from 'react';
import FormCompo from './FormCompo';
import ShowUser from './ShowUser';
 export default class Form extends Component {
 
    state ={
      showUser:false,
        record:{name:'',
        email :'',
        city:'',
        mobile :''
    },
    
    }
    
  

    handleChange =(e)=> {
      const{name,value}=e.target;
      const record = {...this.state.record ,[name]:value}; 
      this.setState({record});
  }
  


  onSubmitFrom=(e) => {
      e.preventDefault();
       this.setState({showUser:true});
      
  }
   resetDetail=()=>{
     this.setState({
       showUser:false,
       record:{name:'',email:'', city:'', mobile:''},
     });
   }

  

  render() {
    return( this.state.showUser? (
      <div>
      <ShowUser record={this.state.record} 
      handleResetDetails={this.resetDetail}/>
       </div>
    ):(
      <div>
    <FormCompo
    record={this.state.record}
    onSubmitFrom={this.onSubmitFrom}
    handleChange={this.handleChange}
    />
    </div>
    )
    )}
    }
