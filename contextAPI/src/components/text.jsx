import React from 'react';
import TextContext from '../context';

const ColorBox = () => {
    return(
        <TextContext.Consumer>
            {value => (
                <div>{value.text}</div>
            )}
        </TextContext.Consumer>
    )
}

export default ColorBox;