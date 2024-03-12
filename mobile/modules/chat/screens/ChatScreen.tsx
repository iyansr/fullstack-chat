import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Dimensions } from 'react-native';

import background from '../../../assets/background.jpg';
import ChatFooter from '../components/ChatFooter';
import ChatList from '../components/ChatList';

import Header from '@/modules/shared/components/Header';

export default function ChatScreen() {
  return (
    <ImageBackground style={styles.container} source={background} resizeMode="cover">
      <StatusBar style="light" />
      <Header />
      <ChatList />
      <ChatFooter />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('screen').width + 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
