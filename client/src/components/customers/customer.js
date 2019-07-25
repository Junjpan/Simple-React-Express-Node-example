import React, { Component } from 'react';
import './customer.css';

class Customers extends Component {
  constructor(){
      super();
      this.state={
          customers:[]
      }
  }   
//because we set a proxy in the client's package.json folder, when we run the fetch function it will be default to go to the route whatever we put into the proxy
 componentDidMount(){
     fetch("/api/customers")
         .then(res=>res.json())//return promoise
         .then(customers=>this.setState({customers},()=>{console.log(customers)}))// it is equal to this.setState({customers:customers}),but in ES6 you can do this way.
 } 
  render() {
    return (
      <div>
        <ul>
          {this.state.customers.map(customer=>{
           return <li key={customer.id}>{customer.first}{customer.last}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default Customers;
