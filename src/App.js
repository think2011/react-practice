import './index.css';

import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import TodoMain from './TodoMain';

class App extends Component {
    constructor () {
        super();

        this.state = {
            todos       : [],
            isAllChecked: false
        };
    }

    allChecked () {
        let isAllChecked = false;

        if (this.state.todos.every(todo => todo.isDone)) {
            isAllChecked = true;
        }

        this.setState({todos: this.state.todos, isAllChecked});
    }

    addTodo (todoItem) {
        this.state.todos.push(todoItem);
        this.allChecked();
    }

    changeTodoState (index, isDone, isChangeAll = false) {
        if (isChangeAll) {
            this.setState({
                todos       : this.state.todos.map(function (todo) {
                    todo.isDone = isDone;
                    return todo;
                }),
                isAllChecked: isDone
            });
        } else {
            this.state.todos[index].isDone = isDone;
            this.allChecked();
        }
    }

    clearDone () {
        let todos = this.state.todos.filter(todo => !todo.isDone);
        this.setState({
            todos       : todos,
            isAllChecked: false
        });
    }

    deleteTodo (index) {
        this.state.todos.splice(index, 1);
        this.setState({todos: this.state.todos});
    }

    render () {
        let props = {
            todoCount    : this.state.todos.length || 0,
            todoDoneCount: (this.state.todos && this.state.todos.filter(todo => todo.isDone)).length || 0
        };

        return (
            <section>
                <h1 className="text-center">Todos</h1>
                <hr/>

                <div className="col-xs-8 col-xs-offset-2">
                    <TodoHeader
                        addTodo={this.addTodo.bind(this)}
                    />

                    <TodoMain
                        {...props}
                        todos={this.state.todos}
                        isAllChecked={this.state.isAllChecked}
                        changeTodoState={this.changeTodoState.bind(this)}
                        deleteTodo={this.deleteTodo.bind(this)}
                        clearDone={this.clearDone.bind(this)}
                    />
                </div>
            </section>
        );
    }
}

export default App;


