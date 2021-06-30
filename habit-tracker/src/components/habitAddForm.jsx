import React, { memo } from 'react';

const HabitAddForm = memo(props => {

    const inputRef = React.createRef();

    const onSubmit = e => {
        e.preventDefault();
        // 아래와 같은 경우 console.log(e.target[0].value);
        const value = inputRef.current.value;
        value && props.onAdd(value);
        inputRef.current.value = '';
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                className="inputText" 
                placeholder="Habit" 
                ref={inputRef}
            />
            <button className="addBtn">ADD</button>
        </form>
    );
})

export default HabitAddForm;
