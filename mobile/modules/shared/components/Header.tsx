import { SafeAreaView, StyleSheet, View } from 'react-native';

import Avatar from './Avatar';
import Text from './Text';
import ChevronLeftIcon from '../icons/ChevronLeftIcon';

const Header = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={{ padding: 16 }}>
        <View style={styles.container}>
          <ChevronLeftIcon />
          <Avatar size={40} style={{ marginLeft: 16 }} />
          <Text style={styles.title} fontFamily="Manrope-Bold">
            Kim Ji-Soo
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#4E4E4E',
  },
  container: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    marginLeft: 16,
    fontSize: 24,
  },
});

export default Header;
