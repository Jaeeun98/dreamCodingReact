import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits : [
            { id :1 , name : 'Reading', count:0 },
            { id :2 , name : 'Running', count:0 },
            { id :3 , name : 'Coding', count:0 },
        ],
    };
    //업데이트 될 데이터가 있는 곳에서 함수를 만드는 것이 좋음
    handleIncrement = (habit) => {
        habit.count++; 
        this.setState(this.state);
        
    }
    handleDecrement = (habit) => {
        console.log(habit.name);
    }
    handleDelete = (habit) => {
        console.log(`${habit.name}`);
    }

    render() {
        return (
            <ul>
                {this.state.habits.map(habit => 
                    <Habit 
                        key={habit.id} 
                        habit={habit} 
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                    />
                )}
            </ul>
        );
    }
}

export default Habits;