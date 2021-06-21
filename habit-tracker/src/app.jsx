import React, { Component } from 'react';
import './app.css';
import Habit from './components/habit';

class App extends Component {
  state = {
    habits : [
        { id :1 , name : 'Reading', count:0 },
        { id :2 , name : 'Running', count:0 },
        { id :3 , name : 'Coding', count:0 },
    ],
    resultCount : 0,
  };

  inputRef = React.createRef();

  //업데이트 될 데이터가 있는 곳에서 함수를 만드는 것이 좋음
  handleResultCount = (text) => {
    text == 'add' ? this.state.resultCount++ : this.state.resultCount--;
    this.setState();
  }

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const idx = habits.indexOf(habit); 
    habits[idx].count++;
    this.setState({ habits });

    if(habit.count == 1) this.handleResultCount('add');
  }
  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const idx = habits.indexOf(habit); 
    
    if(habit.count == 1) this.handleResultCount('minu');

    if(habit.count <= 0) {
        habits[idx].count = 0
    } else {
        habits[idx].count--;
    }
    this.setState({ habits });
  } 
  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);

    if(habit.count > 0) this.handleResultCount('minu'); 
    this.setState({ habits });

  }

  handleHabitAdd = () => {
    const value = this.inputRef.current.value;
    const habits = [...this.state.habits];
    habits.push({ id :habits.length+1 , name : value, count:0 });

    this.inputRef.current.value = '';
    this.setState({ habits });
    
  }

  handleReset = () => {
    const habits = [...this.state.habits];
    
    habits.map(habit => {
      habit.count = 0;
    });
    this.state.resultCount = 0;

    this.setState({ habits });
  }

  render(){
    return (
      <>
        <header className="navBar">
          <i className="fas fa-leaf"></i>
          <p>Habit Tracker</p>
          <span className="habit-count result-count">{this.state.resultCount}</span>
        </header>
        <section>
          <form>
            <input type="text" placeholder="Habit" className="inputText" ref={this.inputRef}/>
            <input type="button" value="Add" className="addBtn" onClick={this.handleHabitAdd}/>
          </form>
          <ul>
                {this.state.habits.map(habit => 
                    <Habit 
                        key={habit.id}   //key는 props에 해당되지x
                        habit={habit} 
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                    />
                )}
            </ul>
          <button className="resetBtn" onClick={this.handleReset}>Reset All</button>
        </section>
        

      </>
      
    
    
    
    )
  
  
  
  
  
  }
  
  
}

export default App;
