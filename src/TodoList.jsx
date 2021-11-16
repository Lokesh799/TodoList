import { element } from "prop-types";
import { Component } from "react";

export default class TodoList extends Component {
      state ={
      item:[],
      addtitle:'',
      adddescription:'',
   // editItem:'false',
    };
  
    handleChange=(e) =>{
      this.setState({[e.target.name]:e.target.value})  
  };
    addItem=(e)=>{  
      if(this.state.addtitle && this.state.adddescription!==""){
        const item=[...this.state.item, [this.state.addtitle],this.state.adddescription];
        this.setState({
          item:item,
          addtitle:'',
          adddescription:'',
        });
      }   
  }
      deleteItem=(id)=>{
    // console.log(id);
        const updateItem=this.state.item.filter(element=> this.index!==id)
        this.setState({
        item:updateItem
      }); 
    }  
      UpdateItem=(id)=>{
        console.log(id);
        const filterItem=this.state.item.filter((element,id)=>{

        })
         selectItem=this.state.item.find(element=> this.index===id)
       
    }  

  render(){
    return(
      <>
        <div className="input-group">
          <input type="text" name='addtitle' value={this.state.addtitle} onChange={this.handleChange} placeholder='Add item' />
          <input type="text" name='adddescription' value={this.state.adddescription} onChange={this.handleChange} placeholder='Add Description' />
          <button type="button" className="btn btn-primary" onDoubleClick={this.addItem}>Add</button>
        </div>
        <div>
          {
            <div>
              <div className="input-group">
                <h5 >tittle</h5><br />
                <h5>Descriptio</h5>
              </div>
        {this.state.item.map((item,index)=>{
          return(
            <div key={this.index}>
              <div className="input-group">
                <h5 className >{item}</h5>
              </div>
                <button type="button" className="btn btn-primary" onDoubleClick={()=>this.deleteItem(this.index)}>Del</button>
                <button type="button" className="btn btn-primary" onDoubleClick={()=>this.UpdateItem(this.index)}>Edit</button>
            </div> 
          )
        }
      )}
      </div>
      }
      </div>
    </>
    )
  }  
}