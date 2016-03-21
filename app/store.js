// import Todos from './reducers/todo_app';
import scores from './reducers/scores';
import { createStore } from 'redux';


// const init = [{

// }]
// const store = createStore(Todos);
const store = createStore(scores);


export default function configureStore(initialState) {
  const store = createStore(scores, initialState,
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  return store;
}

//original config store function - could import an initial state function that stubs initial state of the app
// export default function configureStore(initialState) {
//   const store = createStore(scores, initialState, 
//     window.devToolsExtension ? window.devToolsExtension() : undefined
//   );
//   return store;
// }

