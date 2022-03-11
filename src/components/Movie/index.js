import React, {useMemo} from 'react';
import {View, Text, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Rating} from 'react-native-elements';

import {useTheme} from '../../Utils/theme';
import createStyles from './styles';

export default Movie = ({
  title,
  image,
  rating,
  description,
  removeText,
  removePress,
  searchText,
  searchPress,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {border} = theme.colors;

  return (
    <View>
      <FastImage
        style={styles.image}
        source={{
          uri: image,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.productDetails}>
        <Text style={styles.countText}>{title}</Text>
        <Text style={styles.countText}>{description}</Text>
        <View style={styles.ratingContainer}>
          <Rating
            startingValue={rating}
            ratingCount={10}
            imageSize={15}
            showRating
            tintColor={border}
            readonly
          />
        </View>
        <View style={styles.buttonMain}>
          <Pressable style={styles.cartButton} onPress={removePress}>
            <Text style={styles.cartText}>{removeText}</Text>
          </Pressable>
          <Pressable style={styles.cartButton} onPress={searchPress}>
            <Text style={styles.cartText}>{searchText}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
