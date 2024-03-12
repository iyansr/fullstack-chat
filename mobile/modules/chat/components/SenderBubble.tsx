import React from 'react';
import { StyleSheet, View } from 'react-native';

import Text from '@/modules/shared/components/Text';
import type { Message } from '@/modules/shared/types/message';

type SenderBubbleProps = {
  item: Message;
};

const SenderBubble = ({ item }: SenderBubbleProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text fontFamily="Manrope-Medium" style={styles.content}>
          {item.content}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    alignItems: 'flex-end',
  },
  contentContainer: {
    backgroundColor: '#884FE5',
    paddingHorizontal: 10,
    paddingVertical: 8,
    maxWidth: '78%',
    borderRadius: 16,
    marginLeft: 16,
  },
  content: {
    fontSize: 14,
    color: '#fff',
  },
});

export default SenderBubble;
