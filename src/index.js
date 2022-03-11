import React from 'react';
import {StatusBar, View, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store, {persistor} from './redux';
import Screens from './navigation';
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={{flex: 1}}>
          <SafeAreaView style={{flex: 1, paddingTop: 20}}>
            <StatusBar
              barStyle="light-content"
              hidden={false}
              backgroundColor="rgb(18,18,18)"
              translucent={true}
            />
            <Screens />
          </SafeAreaView>
        </View>
      </PersistGate>
    </Provider>
  );
}
