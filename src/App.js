import './index.css';
import React, { Component } from 'react';

class ProductCategoryRow extends Component {
    render () {
        return (
            <tr>
                <th colSpan="2">{this.props.category}</th>
            </tr>
        );
    }
}

class ProductRow extends Component {
    render () {
        var name = this.props.product.stocked
            ? this.props.product.name
            : (
            <span style={{color:'red'}}>
                {this.props.product.name}
            </span>
        );

        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
}

class ProductTable extends Component {
    render () {
        var rows         = [];
        var lastCategory = null;

        this.props.products.forEach(product => {
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }

            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
            }

            rows.push(<ProductRow product={product} key={product.name}/>);
            lastCategory = product.category;
        });

        return (
            <table>
                <thead>
                {rows.length === 0
                    ? ''
                    : (
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                )}
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

class SearchBar extends Component {
    handleChange () {
        this.props.onUserInput(
            this.refs.filterTextInput.value,
            this.refs.inStockOnlyInput.checked
        );
    }

    render () {
        return (<form>
            <input type="search"
                   value={this.props.filterText}
                   ref="filterTextInput"
                   onChange={this.handleChange.bind(this)}
                   placeholder="Search..."/>
            <p>
                <label>
                    <input type="checkbox"
                           ref="inStockOnlyInput"
                           onChange={this.handleChange.bind(this)}
                           checked={this.props.inStockOnly}/>
                    {' '}
                    Only show products in stock
                </label>
            </p>
        </form>);
    }
}

export default class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            filterText : '',
            inStockOnly: false
        };
    }

    handleUserInput (filterText, inStockOnly) {
        this.setState({filterText, inStockOnly});
    }

    render () {
        return (
            <div>
                <SearchBar filterText={this.state.filterText}
                           inStockOnly={this.state.inStockOnly}
                           onUserInput={this.handleUserInput.bind(this)}/>

                <ProductTable products={this.props.products}
                              filterText={this.state.filterText}
                              inStockOnly={this.state.inStockOnly}/>
            </div>
        );
    }
}