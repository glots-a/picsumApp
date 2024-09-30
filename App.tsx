import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {persitor, store} from './src/redux/store';
import {Theme} from './src/navigators';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persitor}>
        <Theme />
      </PersistGate>
    </Provider>
  );
};

export default App;
