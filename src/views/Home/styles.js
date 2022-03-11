import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default createStyles = theme =>
  StyleSheet.create({
    main: {
      flex: 1,
      paddingTop: RFValue(5),
      backgroundColor: theme.colors.primary,
    },
    filterBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: RFValue(15),
      backgroundColor: theme.colors.primary,
    },
    pickerMain: {
      flexDirection: 'row',
      width: '80%',
      alignItems: 'center',
    },
    picker: {
      width: '80%',
      marginLeft: RFValue(-5),
      color: theme.colors.text,
    },
    list: {
      flex: 1,
      width: '100%',
      marginTop: RFValue(10),
    },
    input: {
      flex: 1,
      borderWidth: 0.5,
      borderRadius: 10,
      paddingHorizontal: 10,
      fontSize: 15,
      borderColor: theme.colors.text,
      color: theme.colors.text,
    },
    listDisplay: {
      backgroundColor: theme.colors.loginBorder,
      position: 'absolute',
      top: 55,
      left: 20,
      zIndex: 100,
      width: '90%',
      flex: 1,
    },
    listItem: {
      paddingVertical: 5,
      marginLeft: 10,
    },
    blackList: {
      alignSelf: 'flex-end',
      backgroundColor: theme.colors.text,
      padding: 10,
      borderRadius: 5,
      margin: 10,
    },
  });
