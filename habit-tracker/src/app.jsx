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

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const idx = habits.indexOf(habit); 
    habits[idx].count++;
    this.setState({ habits });
  }
  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const idx = habits.indexOf(habit); 

    if(habit.count <= 0) {
        habits[idx].count = 0
    } else {
        habits[idx].count--;
    }
    this.setState({ habits });
  } 
  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });

  }
  handleAdd = value => {
    const habits = [...this.state.habits, {id : Date.now(), name:value, count:0}];
    this.setState({ habits });
  }

  render(){
    return (
      <>
        <header className="navBar">
          <NavBar resultCount={this.state.habits.filter(item => item.count > 0).length} /> 
        </header>
        <Habits 
            habits={this.state.habits}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
        />
      </>
    )
  }
}

export default App;