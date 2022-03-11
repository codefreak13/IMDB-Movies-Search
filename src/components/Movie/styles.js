import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default createStyles = theme =>
  StyleSheet.create({
    image: {
      aspectRatio: 1.3,
      resizeMode: 'contain',
      width: '100%',
    },
    productDetails: {
      paddingVertical: RFValue(15),
      paddingLeft: RFValue(10),
      backgroundColor: theme.colors.border,
      alignItems: 'center',
    },
    ratingContainer: {
      paddingBottom: RFValue(20),
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
      paddingVertical: RFValue(10),
    },
    cartText: {
      color: 'white',
      fontWeight: '600',
    },
    buttonMain: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });
