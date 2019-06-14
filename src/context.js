import React, { Component } from 'react';


const UserContext = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter(user =>action.payload!==user.id)
      }
  }
}
export class UserProvider extends Component {

  state = {
    users: [
      {
        id: 1,
        name: 'Goshgar',
        department: 'IT',
        salary: '2000'
      },
      {
        id: 2,
        name: 'Ahmad',
        department: 'IT',
        salary: '2000'
      }, {
        id: 3,
        name: 'Aliabbas',
        department: 'IT',
        salary: '2000'
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action))
    }
  }
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
const UserConsumer = UserContext.Consumer;
export default UserConsumer;