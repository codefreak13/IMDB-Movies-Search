import React, {useMemo} from 'react';
import {View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Header, Loading, MovieContainer} from '../../components';
import {add, addToFilter, removeFromFilter} from '../../redux/reducers';
import {useTheme} from '../../Utils/theme';
import createStyles from './styles';

export default Movie = ({
  route: {
    params: {movie},
  },
  navigation,
}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {
    products: {loading, filter},
  } = useSelector(state => state);
  const dispatch = useDispatch();
  const exists = filter.includes(movie.id);
  return (
    <>
      <Header icon title="Movie Details" navigation={navigation} />
      <ScrollView style={styles.main}>
        <View style={styles.productContainer}>
          <MovieContainer
            {...movie}
            removeText="Add to Favourite"
            removePress={() => {
              dispatch(add(movie));
              navigation.navigate('Home');
            }}
            searchText={exists ? 'Show in Search' : 'Hide from Search'}
            searchPress={() => {
              exists
                ? dispatch(removeFromFilter(movie))
                : dispatch(addToFilter(movie));
            }}
          />
        </View>
        <Loading active={loading} />
      </ScrollView>
    </>
  );
};
