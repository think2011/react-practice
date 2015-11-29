import './index.css';

import React, { Component } from 'react';

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            loading: null,
            err    : null,
            data   : null
        };
    }

    handleLoad () {
        let that = this;

        that.setState({loading: true});

        $.ajax({
            url     : 'http://api.douban.com/v2/movie/top250',
            dataType: 'jsonp'
        }).then(function (rst) {
            that.setState({
                loading: false,
                data   : rst
            });
        })
    }

    render () {
        let state = this.state;

        if (state.err) {
            return <span>出错了,请重试..</span>;
        }

        if (state.loading) {
            return <span>正在加载中..</span>;
        }

        if (!state.loading) {
            var list = state.data && state.data.subjects.map((v, k) => {
                    return <div id={k} key={k}>{v.title}</div>;
                });

            return (
                <section>
                    <button onClick={this.handleLoad.bind(this)}>获取列表</button>

                    <br/>
                    {list}
                </section>
            );
        }
    }
}

export default App;
