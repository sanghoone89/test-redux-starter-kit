import { createAction, handleActions } from 'redux-actions'

const INCREMENT = 'count/INCREMENT';
const DECREMENT = 'count/DECREMENT';

export const onIncrease = createAction(INCREMENT);
export const onDecrease = createAction(DECREMENT);

const initState = {
    number: 0
}

const reducer = handleActions({
    [INCREMENT]: (state, action) => ({
        ...state,
        number: state.number + 1
    }),
    [DECREMENT]: (state, action) => ({
        ...state,
        number: state.number - 1
    })
}, initState)

export default reducer;