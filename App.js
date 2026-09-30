import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigations/Navigations';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}