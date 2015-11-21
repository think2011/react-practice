import React, {Component, PropTypes} from 'react';


class Todo extends React.Component {
    render () {
        return (
            <li
                onClick={this.props.onClick}
                style={{
            textDecoration: this.props.completed ? 'line-through' : 'done',
            cursor: this.props.completed ? 'default' : 'pointer'
            }}
            >
                {this.props.text}
            </li>
        );
    }
}

Todo.propTypes = {
    onClick  : PropTypes.func.isRequired,
    text     : PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
};

export default Todo;