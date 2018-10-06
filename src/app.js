import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill", amount: 100, createdAt: 200 }));
store.dispatch(addExpense({ description: "Gas bill", amount: 1000, createdAt: -10000 }));
store.dispatch(addExpense({ description: "Rent bill", amount: 300, createdAt: -1000 }));
// store.dispatch(setTextFilter("water"));
// addExpense => Water bill
// add Expense => Gas bill
// setTextFilter => bill (2 items) => water(1 item)
// getVisibleExpenses => print visibles ones to screen

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
