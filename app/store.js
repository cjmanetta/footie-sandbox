// import Todos from './reducers/todo_app';
import ScoresApp from './reducers/scores';
import { createStore } from 'redux';


// const init = [{

// }]
// const store = createStore(Todos);
// const store = createStore(ScoresApp);


export default function configureStore(initialState) {
  const store = createStore(ScoresApp, initialState,
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

