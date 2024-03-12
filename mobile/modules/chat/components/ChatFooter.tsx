import React from 'react';
import { SafeAreaView, View } from 'react-native';

import ChatTextInput from './ChatTextInput';

import PlusIcon from '@/modules/shared/icons/PlusIcon';

const ChatFooter = () => {
  return (
    <SafeAreaView style={{ width: '100%' }}>
      <View
        style={{
          paddingHorizontal: 24,
          paddingVertical: 16,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <PlusIcon />
        <ChatTextInput />
      </View>
    </SafeAreaView>
  );
};

export default ChatFooter;
