import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View className='flex-1 flex justify-center items-center'>
      <Text>Hi there!</Text>

      <StatusBar style='auto' />
    </View>
  );
}
