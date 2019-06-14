import React, { Component } from 'react'
import posed from 'react-pose';
import { blockStatement } from '@babel/types';
const Animation=posed.div(
   { visible:{
       opacity:1,
       applyAtStart:{
           display:"block"
       }
   },
   hidden:{
       opacity:0,
       applyAtEnd:{
           display:"none"
       }
   }
}
)
class AddUser extends Component {
    state = {
        visible: false
    }
  onClickEvent(e) {
     this.setState({
      visible:!this.state.visible   
     }) 
  }  
    render() {
        const {visible}=this.state
        return (
            <div className="col-md-8 mb-4 mx-auto">
                <button  onClick={this.onClickEvent.bind(this)} className="btn btn-dark btn-block mb-2">{visible?"Hide":"Show"}</button>
               <Animation pose={visible?"visible":"hidden"}>
               <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h3 className="card-title">Add User</h3>
                    </div>
                   
                    <div className="card-body">
                        <form >
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                         <input type="text" name="name" id="id" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="department">Department:</label>
                         <input type="text" name="department" id="id" className="form-control" placeholder="Department"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="salary">Salary:</label>
                         <input type="number" name="salary" id="id" className="form-control" placeholder="Salary"/>
                        </div>
                        <button  type="submit" className="btn btn-success btn-block">Add User</button>
                        </form>
                    </div>
                </div></Animation> 
            </div>



        )
    }
}
export default AddUser;
