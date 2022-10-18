import React, { Component } from 'react'


class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empName: "Samir Kumar Parimal",
      empId: this.props.empId
    }
  }
  
changeEmpDetail = () => {
  this.setState({empId: "1234"});
  this.setState({empName: "S K Parimal"});
}
  render() {
    return (
      <div>
        <h1>Hello,{this.state.empName} Emp Id is {this.state.empId} </h1>
        <button  type="button" onClick={this.changeEmpDetail} >Change Emp Detail</button>
      </div>
    )
  }
}
export default Employee;