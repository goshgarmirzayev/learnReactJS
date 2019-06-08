import React, { Component } from 'react'
const UserContext=React.createContext();
export  class UserProvider extends Component {
    state = {
        users:[
          {
            id: 1,
            name: 'Goshgar',
            department: 'IT',
            salary:'2000'
          },
           {
            id: 2,
            name: 'Ahmad',
            department: 'IT',
            salary:'2000'
          }, {
            id: 3,
            name: 'Aliabbas',
            department: 'IT',
            salary:'2000'
          }
        ]
      }
    render() {
        return (
           <UserContext.Provider value={this.state}>
               {this.props.children}
           </UserContext.Provider>
        )
    }
}
const UserConsumer= UserContext.Consumer;
export default UserConsumer;