import {combineReducers, createStore} from 'redux';
import * as reducers from './reducers';

import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions';


let store = createStore(combineReducers(reducers));


// 监听 state 更新时，打印日志
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

// 发起一系列 action
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(completeTodo(0));
store.dispatch(completeTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// 停止监听 state 更新
unsubscribe();