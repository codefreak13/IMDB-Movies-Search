import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default createStyles = theme =>
  StyleSheet.create({
    main: {
      flex: 1,
      marginTop: RFValue(250),
    },
    bodyText: {
      color: theme.colors.icon,
      fontFamily: 'Muli-Regular',
      fontSize: RFValue(16),
      marginBottom: RFValue(30),
      textAlign: 'center',
      marginHorizontal: RFValue(20),
    },
    emptyIcon: {
      alignSelf: 'center',
      marginTop: RFValue(20),
    },
  });
