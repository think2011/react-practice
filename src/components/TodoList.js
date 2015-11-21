import React, {Component, PropTypes} from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    onClick (index) {
        this.props.onTodoClick(index);
    }

    render () {
        return (
            <ul>
                {this.props.todos.map((todo, index) =>
                    <Todo {...todo}
                        key={index}
                        onClick={this.onClick.bind(this, index)}
                    />
                )}
            </ul>
        );
    }
}

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos      : PropTypes.arrayOf(PropTypes.shape({
        text     : PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
};

export default TodoList;