import React from 'react'
import {createStore} from 'redux'

const initState = {count: 0}

function counterReducer(state=initState, action) {
    switch(action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1 };
        case 'DECREMENT':
            return {...state, count: state.count - 1};
        default:
            return state;
    }
}

const store = createStore(counterReducer);

function ReduxDemo1() {
    const [state, setState] = React.useState(store.getState());

    const onIncrement = () => {store.dispatch({type: 'INCREMENT'})};
    const deIncrement = () => {store.dispatch({type: 'DECREMENT'})};

    React.useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setState(store.getState());
        });
        return () => unsubscribe();
    }, []);

    return (
        <div>
            <p>Count:{state.count}</p>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={deIncrement}>DeIncrement</button>
        </div>
    );
};
export default ReduxDemo1;
