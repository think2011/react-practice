import React, { Component } from 'react';

class TodoHeader extends Component {
    handleKeyUp (event) {
        let value = event.target.value;

        if (!value || event.keyCode !== 13) return false;

        let newTodoItem = {
            text  : value,
            isDone: false
        };

        event.target.value = '';
        this.props.addTodo(newTodoItem);
    }

    render () {
        return (
            <section>
                <input
                    onKeyUp={this.handleKeyUp.bind(this)}
                    className="form-control"
                    type="text"
                    placeholder="input your task"/>
            </section>
        );
    }
}

export default TodoHeader;
