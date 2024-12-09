import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { FIREBASE_AUTH } from '../firebaseConfig';
// import Config from 'react-native-config';

export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // const auth = FIREBASE_AUTH;

  // console.log(Config.API_KEY);

  const signUp = async () => {
    setLoading(true);

    try {
      alert('Check your email for verification');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const signIn = () => {};

  return (
    <SafeAreaView className='flex-1 flex justify-center mx-5'>
      <KeyboardAvoidingView behavior='padding'>
        <View className='mb-4'>
          <Text className='text-sm mb-1'>Email</Text>
          <TextInput value={email} onChangeText={setEmail} placeholder='Email' className='border h-[50px] text-md p-2' autoCapitalize='none' keyboardType='email-address' />
        </View>

        <View className='mb-4'>
          <Text className='text-sm mb-1'>Password</Text>
          <TextInput value={password} onChangeText={setPassword} placeholder='Password' className='border h-[50px] text-md p-2' secureTextEntry />
        </View>
        {loading ? (
          <ActivityIndicator size='small' className='m-5' />
        ) : (
          <>
            <Button onPress={signUp} title='Sign Up' />
            <Button onPress={signIn} title='Sign In' />
          </>
        )}
      </KeyboardAvoidingView>

      <StatusBar style='auto' />
    </SafeAreaView>
  );
}
