import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Link, Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';



export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });
  const router = useRouter()

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (  
   <GestureHandlerRootView style={{ flex: 1 }}>
  <Stack>
    <Stack.Screen name="index" options={{ headerShown: false }} />
  
    <Stack.Screen name="signup" options={{ 
      title: "",
      headerBackTitle: "",
      headerShadowVisible: false,
      headerStyle: {backgroundColor: Colors.background},
      headerLeft: () => (
        <TouchableOpacity  onPress={router.back}>
          <Ionicons name='arrow-back' size={24} color={Colors.dark} />
        </TouchableOpacity>
      )
     }} />

<Stack.Screen name="login" options={{ 
      title: "",
      headerBackTitle: "",
      headerShadowVisible: false,
      headerStyle: {backgroundColor: Colors.background},
      headerLeft: () => (
        <TouchableOpacity  onPress={router.back}>
          <Ionicons name='arrow-back' size={24} color={Colors.dark} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <Link href={"/help"} asChild>
        <TouchableOpacity>
          <Ionicons name='help-circle-outline' size={24} color={Colors.dark} />
        </TouchableOpacity>
        </Link>
      )
     }} />
    

    <Stack.Screen name='help' options={{title: "Help", presentation: "modal"}}/> 





  </Stack>
</GestureHandlerRootView>
)}

const RootLayoutNav =() => {




  return (
    <GestureHandlerRootView style={{ flex: 1}}>
 
    <InitialLayout/>
    </GestureHandlerRootView>

   
  );
}

export default RootLayoutNav;