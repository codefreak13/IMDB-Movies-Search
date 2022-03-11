import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default createStyles = theme =>
  StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: theme.colors.border,
      paddingBottom: RFValue(50),
      paddingHorizontal: RFValue(10),
      paddingTop: RFValue(20),
    },
    productContainer: {
      borderRadius: RFValue(8),
      overflow: 'hidden',
      borderWidth: RFValue(1),
      borderColor: theme.colors.border,
    },
    image: {
      aspectRatio: 1.2,
      resizeMode: 'contain',
      width: '100%',
    },
    productDetails: {
      paddingTop: RFValue(15),
      paddingLeft: RFValue(10),
      backgroundColor: theme.colors.border,
    },
    productText: {
      marginVertical: RFValue(10),
      fontSize: RFValue(15),
      color: theme.colors.text,
      fontWeight: '500',
    },
    ratingContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '50%',
      marginBottom: RFValue(20),
      paddingRight: RFValue(10),
    },
    count: {
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: RFValue(10),
      height: RFValue(68),
    },
    countText: {
      color: theme.colors.text,
      fontWeight: '500',
    },
    cartButton: {
      backgroundColor: 'black',
      width: '40%',
      borderRadius: RFValue(5),
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      paddingVertical: RFValue(20),
    },
    cartText: {
      color: 'white',
      fontWeight: '600',
    },
  });
