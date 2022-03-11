import {StyleSheet} from 'react-native';

export default createStyles = theme =>
  StyleSheet.create({
    loader: {
      flex: 1,
      position: 'absolute',
      top: 0,
      bottom: 0,
      backgroundColor: theme.colors.primary,
      zIndex: 999999999999999,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
