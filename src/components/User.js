import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from '../context'
class User extends Component {
    state={
        isVisible:false
    }
    
    static defaultProps = {
        name: "Name dont sended me",
        department: "Dontsende me",
        salary: 100
    
    }

    onclickEvent=(e) =>{
        this.setState({
          isVisible:!this.state.isVisible
        })
    }
    // constructor(props){
    //     super(props)
    //     this.state={
    //         isVisible:false

    //     }
    // }
    onDeleteUser=(dispatch,e)=>{
        const {id}=this.props;
        dispatch({type:"DELETE_USER",payload:id})
    }
    render() {
        const { name, department, salary } = this.props
        const {isVisible}=this.state
        return(<UserConsumer>
         {
             value=>{
                 const {dispatch}=value
                 return (
                    <div className="col-md-8 mb-4 mx-auto">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between">
                                <h4 className="d-inline" onClick={this.onclickEvent.bind(this)}>{name}</h4>
                                <i onClick={this.onDeleteUser.bind(this,dispatch)} className="fas fa-trash-alt" style={{ cursor: 'pointer' }}></i>
                            </div>
                            {
                                isVisible?
                                <div className="card-body">
                            <p className="card-text">Salary :{salary}</p>
                            <p className="card-text">Department :{department}</p>
                            <p>{this.state.test}</p>
                            </div>:null
                            }
                            
                        </div>
        
                    </div>
                )
             }
         }
        </UserConsumer>)
     
    }
}
User.propType={
    name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
   
}
export default User;
