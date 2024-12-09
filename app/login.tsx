import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    // Po pomyślnym logowaniu przekierowujesz użytkownika np. na stronę główną:
    router.replace('/');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Strona logowania</Text>
      <Button title='Zaloguj' onPress={handleLogin} />
    </View>
  );
}
