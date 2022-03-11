import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default createStyles = theme =>
  StyleSheet.create({
    main: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: RFValue(15),
      paddingVertical: RFValue(20),
      backgroundColor: theme.colors.bar,
    },
    title: {
      fontWeight: 'bold',
      fontSize: RFValue(17),
      color: theme.colors.text,
    },
    overlay: {
      borderRadius: 20,
      width: 20,
      height: RFValue(20),
      backgroundColor: theme.colors.cart,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left: RFValue(10),
      bottom: RFValue(10),
    },
    value: {
      color: theme.colors.text,
      fontWeight: '500',
    },
  });
