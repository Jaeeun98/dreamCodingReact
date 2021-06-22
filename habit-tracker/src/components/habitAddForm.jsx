import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
    inputRef = React.createRef();

    onSubmit = e => {
        e.preventDefault();
        // 아래와 같은 경우 console.log(e.target[0].value);
        const value = this.inputRef.current.value;
        value && this.props.onAdd(value);
        this.inputRef.current.value = '';
    }
    
    render() {
        console.log('render, form')
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    className="inputText" 
                    placeholder="Habit" 
                    ref={this.inputRef}
                />
                <button className="addBtn">ADD</button>
            </form>

        );
    }
}

export default HabitAddForm;