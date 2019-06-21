import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from '../context'
import posed from 'react-pose'

const Animation = posed.div({
    visible: {
        opacity: 1,
        applyAtStart: {
            display: "block"
        }
    },
    hidden: {
        opacity: 0,
        transition: { duration: 300 },
        applyAtEnd: {
            display: "none"
        }
    }
});
class User extends Component {
    state = {
        isVisible: false
    }

    static defaultProps = {
        name: "Name dont sended me",
        department: "Dontsende me",
        salary: 100

    }

    onclickEvent = (e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    onDeleteUser = (dispatch, e) => {
        const { id } = this.props;
        dispatch({ type: "DELETE_USER", payload: id })
    }
    render() {
        const { name, department, salary } = this.props
        const { isVisible } = this.state
        return (<UserConsumer>
            {
                value => {
                    const { dispatch } = value
                    return (
                        <div className="col-md-8 mb-4 mx-auto" onLoad={this.onclickEvent.bind(this)}>

                            <div className="card" style={isVisible ? { backgroundColor: "#344051", color: "white" } : null}>
                             <div className="card-header d-flex justify-content-between">
                                    <h4 className="d-inline" onClick={this.onclickEvent.bind(this)}>{name}</h4>
                                    <i onClick={this.onDeleteUser.bind(this, dispatch)} className="fas fa-trash-alt" style={{ cursor: 'pointer' }}></i>
                                </div>
                                <Animation pose={isVisible ? "visible" : "hidden"}>  
                                    {
                                        isVisible ?
                                            <div className="card-body">
                                                <p className="card-text">Salary :{salary}</p>
                                                <p className="card-text">Department :{department}</p>
                                                <p>{this.state.test}</p>
                                            </div> : null
                                    }
                                </Animation>
                            </div>

                        </div>
                    )
                }
            }
        </UserConsumer>)

    }
}
User.propType = {
    name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,

}
export default User;
