import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div>
                <i className="fas fa-leaf"></i>
                <p>Habit Tracker</p>
                <span className="habit-count result-count">{this.props.resultCount}</span>
            </div>
        );
    }
}

export default NavBar;