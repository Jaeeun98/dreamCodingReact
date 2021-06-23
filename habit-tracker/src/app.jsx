import React, { Component } from 'react';
import './app.css';
import NavBar from './components/navBar';
import Habits from './components/habits';

class App extends Component {
  state = {
    habits : [
        { id :1 , name : 'Reading', count:0 },
        { id :2 , name : 'Running', count:0 },
        { id :3 , name : 'Coding', count:0 },
    ],
  };
  //업데이트 될 데이터가 있는 곳에서 함수를 만드는 것이 좋음

  handleIncrement = habit => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        return { ...habit, count:habit.count + 1 } //카운트를 가져오고, 그 위에 다시 덮어씀
      }
      return item;  //기존에 받은 item 리턴
    })
    this.setState({ habits });
  }
  handleDecrement = habit => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        const count = habit.count - 1
        return { ...habit, count: count < 0 ? 0 : count } 
      }
      return item;
    })
    this.setState({ habits });
  } 
  handleDelete = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  }
  handleAdd = value => {
    const habits = [...this.state.habits, {id : Date.now(), name:value, count:0}];
    this.setState({ habits });
  }
  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if(habit.count !== 0){
        return { ...habit, count: 0 }; 
      }
        return habit;
    });
    this.setState({ habits })
  }
  
  render(){
    return (
      <div>
        <NavBar 
          resultCount={this.state.habits.filter(item => item.count > 0).length} 
        /> 
        <Habits 
            habits={this.state.habits}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
            onReset={this.handleReset}
        />
      </div>
    )
  }
}

export default App;
