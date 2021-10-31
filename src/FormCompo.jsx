import React from "react";

 
export  default function FormCompo(props){
    return ( 
        <>
        <form onSubmit={props.onSubmitFrom}>
          <div>
          <label>
            Name:
            <input type="text" name='name' class="form-control" value={props.record.name} onChange={props.handleChange} />
          </label>
          </div>
          <div>
          <label>
            Email:
            <input type="text" name='email' class="form-control" value={props.record.email} onChange={props.handleChange} />
          </label>
          </div>
          <div>
          <label>
            City:
            <input type="text" name='city' class="form-control" value={props.record.city} onChange={props.handleChange} />
          </label>
          </div>
          <div>
          <label>
          Mobile:
            <input type="text" name='mobile' class="form-control" value={props.record.mobile} onChange={props.handleChange} />
          </label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
         
      
        </>

    );
}