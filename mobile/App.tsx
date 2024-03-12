import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  FlatList,
  View,
  SafeAreaView,
} from 'react-native';

import ChevronLeftIcon from '@/modules/shared/icons/ChevronLeftIcon';
import PlusIcon from '@/modules/shared/icons/PlusIcon';

const Header = () => {
  return (
    <SafeAreaView style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: '#4E4E4E' }}>
      <View style={{ padding: 16 }}>
        <View
          style={{
            height: 40,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <ChevronLeftIcon />
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              backgroundColor: '#FC9393',
              marginLeft: 16,
            }}
          />
          <Text style={{ color: '#fff', marginLeft: 16, fontSize: 24, fontWeight: '700' }}>
            Header
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <ImageBackground
      style={styles.container}
      source={require('./assets/background.jpg')}
      resizeMode="cover">
      <StatusBar style="light" />
      <Header />
      <FlatList
        style={{ backgroundColor: 'transparent', width: '100%', paddingTop: 16 }}
        data={[1, 2, 3]}
        renderItem={({ item }) => {
          if (item % 2 === 0) {
            return (
              <View
                style={{
                  paddingHorizontal: 16,
                  paddingBottom: 8,
                  alignItems: 'flex-end',
                }}>
                <View
                  style={{
                    backgroundColor: '#C973FF',
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                    maxWidth: '78%',
                    borderRadius: 16,
                    marginLeft: 16,
                  }}>
                  <Text>Lorem ipsum dolor sit amet</Text>
                </View>
              </View>
            );
          }

          return (
            <View
              style={{
                paddingHorizontal: 16,
                paddingBottom: 8,
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}>
              <View
                style={{ height: 32, width: 32, borderRadius: 16, backgroundColor: '#FC9393' }}
              />
              <View
                style={{
                  backgroundColor: '#F5F6FB',
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                  maxWidth: '78%',
                  borderRadius: 16,
                  marginLeft: 16,
                }}>
                <Text style={{ color: '#1B1B1B', fontSize: 14, fontWeight: '500' }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat unde labore
                  voluptatibus non esse harum exercitationem temporibus magni numquam. Sunt iste
                  adipisci quas voluptate atque nisi accusantium explicabo tempora vitae.
                </Text>
              </View>
            </View>
          );
        }}
      />
      <SafeAreaView style={{ width: '100%' }}>
        <View style={{ paddingHorizontal: 24, paddingVertical: 16 }}>
          <PlusIcon />
        </View>
      </SafeAreaView>
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
