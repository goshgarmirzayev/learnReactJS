import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from '../context'
var uniqid = require('uniqid');
const Animation = posed.div(
    {
        visible: {
            opacity: 1,
            applyAtStart: {
                display: "block"
            }
        },
        hidden: {
            opacity: 0,
            applyAtEnd: {
                display: "none"
            }
        }
    }
)

class AddUser extends Component {
    state = {
        visible: false,
        name: "",
        department: "",
        salary: ""
    }
    changeVisibilityEvent = (e) => {
        this.setState({
            visible: !this.state.visible
        })

    }
   
    changeInput = (e) => {
        this.setState({

            [e.target.name]: e.target.value
        })
    }

    addUser = (dispatch, e) => {
        e.preventDefault();
        const { name, department, salary } = this.state;
        const newUSer = {
            id: uniqid(),
            name,
            department,
            salary
        }
        dispatch({ type: "ADD_USER", payload: newUSer })
    }


    render() {
        const { visible, name, department, salary } = this.state
        return (
            <UserConsumer>
                {
                    value => {
                        const { dispatch } = value;
                        return (
                            <div className="col-md-8 mb-4 mx-auto">
                                <button onClick={this.changeVisibilityEvent.bind(this)} className="btn btn-dark btn-block mb-2">{visible ? "Hide" : "Show"}</button>
                                <Animation pose={visible ? "visible" : "hidden"}>
                                    {visible ?
                                        <div className="card">
                                            <div className="card-header d-flex justify-content-between">
                                                <h3 className="card-title">Add User</h3>
                                            </div>

                                            <div className="card-body">
                                                <form onSubmit={this.addUser.bind(this, dispatch)} >
                                                    <div className="form-group">
                                                        <label htmlFor="name">Name:</label>
                                                        <input type="text"
                                                            name="name" id="id"
                                                            className="form-control"
                                                            placeholder="Name"
                                                            value={name}
                                                            onChange={this.changeInput} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="department">Department:</label>
                                                        <input type="text"
                                                            name="department"
                                                            id="id"
                                                            className="form-control"
                                                            placeholder="Department"
                                                            value={department}
                                                            onChange={this.changeInput} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="salary">Salary:</label>
                                                        <input type="number"
                                                            name="salary"
                                                            id="id"
                                                            className="form-control"
                                                            placeholder="Salary"
                                                            value={salary}
                                                            onChange={this.changeInput} />
                                                    </div>
                                                    <button type="submit" className="btn btn-success btn-block">Add User</button>
                                                </form>
                                            </div>
                                        </div> : null}</Animation>
                            </div>

                        )
                    }
                }
            </UserConsumer>
        )

    }

}
export default AddUser
