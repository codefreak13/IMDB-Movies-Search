import React, {useEffect, useState, useMemo, useCallback} from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  Text,
  Keyboard,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import debounce from 'lodash.debounce';

import {Header, EmptyContent} from '../../components';
import {sagaActions} from '../../redux/sagaActions';
import {useTheme} from '../../Utils/theme';
import createStyles from './styles';
import Movie from './Movie';
import {clearMovies, clearFilter} from '../../redux/reducers';

const Home = ({navigation}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {search, primary} = theme.colors;

  const dispatch = useDispatch();
  const {
    products: {data, filter},
    cart: {cart},
  } = useSelector(state => state);

  const [value, setvalue] = useState('');

  const fetchData = async expression => {
    Keyboard.dismiss();
    dispatch({type: sagaActions.FETCH_MOVIES, payload: {expression}});
  };

  useEffect(() => {}, [data, filter]);

  const renderItem = ({item}) => (
    <Movie
      movie={item}
      navigation={navigation}
      dispatch={dispatch}
      filter={filter}
      setvalue={setvalue}
    />
  );

  const onChangeText = text => {
    text === '' && dispatch(clearMovies());
    setvalue(text);
    debouncedSave(text);
  };

  const debouncedSave = useCallback(
    debounce(nextValue => fetchData(nextValue), 1000),
    [],
  );

  const ListItem = ({item}) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={async () => {
        setvalue('');
        dispatch({
          type: sagaActions.FETCH_MOVIE_RATING,
          payload: {item},
        });
        dispatch(clearMovies());
      }}>
      <Text
        style={{
          color: search,
        }}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
  return (
    <>
      <Header icon title="Movies" navigation={navigation} home />
      <View style={styles.main}>
        <View style={styles.filterBar}>
          <TextInput
            placeholder="Search movie..."
            placeholderTextColor={search}
            onChangeText={text => onChangeText(text)}
            value={value}
            style={styles.input}
          />
        </View>
        {!!value && (
          <FlatList
            data={data}
            keyExtractor={item => data.indexOf(item).toString()}
            renderItem={({item}) => <ListItem item={item} />}
            showsVerticalScrollIndicator={false}
            style={styles.listDisplay}
          />
        )}
        {filter.length > 0 && (
          <TouchableOpacity
            style={styles.blackList}
            onPress={() => {
              dispatch(clearFilter());
            }}>
            <Text style={{color: primary}}>Clear Blacklist</Text>
          </TouchableOpacity>
        )}
        <FlatList
          keyExtractor={item => cart.indexOf(item).toString()}
          data={cart}
          renderItem={renderItem}
          style={styles.list}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyContent text="No movie" />}
        />
      </View>
    </>
  );
};

export default Home;
