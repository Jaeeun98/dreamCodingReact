import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {

    handleAdd = value => {
        this.props.onAdd(value);
    } 
    render() {
        console.log('render, habits')
        return (
            <>
                <HabitAddForm onAdd={this.handleAdd}/>
                <ul>
                    {this.props.habits.map(habit => 
                        <Habit 
                            key={habit.id}   //key는 props에 해당되지x
                            habit={habit} 
                            onIncrement={this.props.onIncrement}
                            onDecrement={this.props.onDecrement}
                            onDelete={this.props.onDelete}
                        />
                    )}
                </ul>
                <button className="resetBtn" onClick={this.props.onReset}>Reset</button>
            </>
            
        )
    }
}

export default Habits;