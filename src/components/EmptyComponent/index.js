import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useTheme} from '../../Utils/theme';
import createStyles from './styles';

export default EmptyContent = ({text}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={styles.main}>
      <Icon name="cup-off-outline" size={55} style={styles.emptyIcon} />
      <Text style={styles.bodyText}>{text}</Text>
    </View>
  );
};
