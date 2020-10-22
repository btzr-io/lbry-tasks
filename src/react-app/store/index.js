import createStore from 'unistore';
import defaultState from '@app/store/defaultState';
import actions from '@app/store/actions';

const store = createStore(defaultState);

// // DEBUG:
store.subscribe((state) => {
  console.info(state)
});

export default store;
