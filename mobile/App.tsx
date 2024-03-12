import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect } from 'react';

import ChatScreen from './modules/chat/screens/ChatScreen';
import { RQProvider } from './modules/shared/libs/react-query';

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Manrope-Regular': require('./assets/fonts/Manrope-Regular.ttf'),
    'Manrope-Bold': require('./assets/fonts/Manrope-Bold.ttf'),
    'Manrope-Medium': require('./assets/fonts/Manrope-Medium.ttf'),
  });

  const onLoad = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    onLoad();
  }, []);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <RQProvider>
      <ChatScreen />
    </RQProvider>
  );
};

export default App;
