import React from 'react';
import { StyleSheet, View } from 'react-native';

import Avatar from '@/modules/shared/components/Avatar';
import Text from '@/modules/shared/components/Text';
import type { Message } from '@/modules/shared/types/message';

type ReceiverBubbleProps = {
  item: Message;
  isLastIndex: boolean;
};

const ReceiverBubble = ({ item, isLastIndex }: ReceiverBubbleProps) => {
  return (
    <View style={styles.container}>
      <Avatar
        style={{
          opacity: isLastIndex ? 1 : 0,
        }}
      />
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
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  contentContainer: {
    backgroundColor: '#F5F6FB',
    paddingHorizontal: 10,
    paddingVertical: 8,
    maxWidth: '78%',
    borderRadius: 16,
    marginLeft: 16,
  },
  content: {
    color: '#1B1B1B',
    fontSize: 14,
  },
});

export default ReceiverBubble;
