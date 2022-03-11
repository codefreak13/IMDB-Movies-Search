import React, {useMemo} from 'react';
import {View, ActivityIndicator} from 'react-native';

import {useTheme} from '../../Utils/theme';
import createStyles from './styles';

export default Loading = ({active}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <>
      {active ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" />
        </View>
      ) : null}
    </>
  );
};
