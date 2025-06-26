import { NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'react-native';

import Routes  from "./src/Routes/routes"
import ThemeProvider from './src/contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer >
       <Routes/>
      </NavigationContainer>
    </ThemeProvider>
    
  );
}

