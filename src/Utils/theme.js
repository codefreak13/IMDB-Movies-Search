import * as React from 'react';
import {useColorScheme} from 'react-native';
import {lightColors, darkColors} from './colors';

export const ThemeContext = React.createContext({
  isDark: false,
  colors: lightColors,
  setScheme: () => {},
});

const ThemeProvider = props => {
  const colorScheme = useColorScheme();

  const [isDark, setIsDark] = React.useState(colorScheme === 'dark');

  React.useEffect(() => {
    setIsDark(colorScheme === 'dark');
  }, [colorScheme]);

  const defaultTheme = {
    isDark,
    colors: isDark ? darkColors : lightColors,
    setScheme: scheme => setIsDark(scheme === 'dark'),
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => React.useContext(ThemeContext);
