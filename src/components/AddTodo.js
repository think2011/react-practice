import React, {Component, PropTypes} from 'react';


class AddTodo extends React.Component {
    handleClick (event) {
        const node = this.refs.input,
              text = node.value.trim();

        this.props.onAddClick(text);
        node.value = '';
    }

    render () {
        return (
            <section>
                <input type="text" ref="input"/>
                <button onClick={this.handleClick.bind(this)}>Add</button>
            </section>
        );
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
};

export default AddTodo;