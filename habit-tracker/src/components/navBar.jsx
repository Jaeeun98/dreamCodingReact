import React, { PureComponent } from 'react';

class NavBar extends PureComponent {
    render() {
        return (
            <div className="navBar">
                <i className="fas fa-leaf"></i>
                <p>Habit Tracker</p>
                <span className="habit-count result-count">{this.props.resultCount}</span>
            </div>
        );
    }
}

export default NavBar;