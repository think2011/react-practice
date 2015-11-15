import React, { Component } from 'react';

class TodoItem extends Component {
    handlerChange () {
        let isDone = !this.props.isDone;
        this.props.changeTodoState(this.props.index, isDone);
    }

    handlerDelete () {
        this.props.deleteTodo(this.props.index);
    }

    render () {
        var doneStyle = this.props.isDone
            ? {textDecoration: 'line-through'}
            : {textDecoration: 'none'};

        return (
            <li className="item">
                <div className="pull-right">
                    <button
                        onClick={this.handlerDelete.bind(this)}
                        className="btn btn-default btn-xs">
                        清除
                    </button>
                </div>
                <label>
                    <input
                        checked={this.props.isDone}
                        onClick={this.handlerChange.bind(this)}
                        type="checkbox"/>
                    <span style={doneStyle}>{this.props.text}</span>
                </label>
            </li>
        );
    }
}

export default TodoItem;
