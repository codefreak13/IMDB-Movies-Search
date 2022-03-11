import React, {useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {checkNetwork} from '../redux/reducers';

const NetworkManager = () => {
  const dispatch = useDispatch();
  const {toggleNetwork} = useSelector(state => state.network);

  useEffect(() => {
    const subscription = NetInfo.addEventListener(state => {
      if (!state.isInternetReachable) {
        dispatch(checkNetwork(false));
      } else {
        dispatch(checkNetwork(true));
      }
    });
    const componentWillUnmount = () => {
      if (subscription) {
        subscription();
      }
    };
    return componentWillUnmount;
  }, []);
  return toggleNetwork ? null : (
    <View
      style={{
        backgroundColor: '#ff6347',
        justifyContent: 'center',
        padding: '5%',
      }}>
      <Text style={{fontWeight: 'bold', color: '#fff', textAlign: 'center'}}>
        You have lost internet connection
      </Text>
    </View>
  );
};

export default NetworkManager;
