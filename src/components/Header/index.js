import React, {useMemo} from 'react';
import {View, Text, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';

import {useTheme} from '../../Utils/theme';
import createStyles from './styles';

export default Header = ({title, navigation, home}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {text} = theme.colors;

  const {
    cart: {cart},
  } = useSelector(state => state);

  const {setScheme, isDark} = useTheme();

  const toggleScheme = () => {
    isDark ? setScheme('light') : setScheme('dark');
  };
  return (
    <View style={styles.main}>
      {home ? (
        <View />
      ) : (
        <Icon
          name="chevron-left"
          size={20}
          onPress={() => navigation.goBack()}
        />
      )}
      <Text style={styles.title}>{title}</Text>
      <Switch value={isDark} onValueChange={toggleScheme} />
    </View>
  );
};
