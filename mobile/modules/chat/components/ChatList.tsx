import React, { useCallback, useMemo } from 'react';
import type { SectionListData, SectionListRenderItem } from 'react-native';
import { ActivityIndicator, SectionList, View } from 'react-native';

import ReceiverBubble from './ReceiverBubble';
import SenderBubble from './SenderBubble';
import useQueryMessages from '../hooks/useQueryMessages';

import Text from '@/modules/shared/components/Text';
import type { GroupedMessagesByTime, Message } from '@/modules/shared/types/message';
import { formatDate } from '@/modules/shared/utils/date';
import { groupMessagesByTime } from '@/modules/shared/utils/message';

type ChatRenderItem = SectionListRenderItem<Message, GroupedMessagesByTime>;
type ChatSectionHeader = {
  section: SectionListData<Message, GroupedMessagesByTime>;
};

const ChatList = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useQueryMessages();

  const finalData = useMemo(() => groupMessagesByTime(data ?? []), [data]);

  const handleRenderItem = useCallback<ChatRenderItem>(({ item, section, index }) => {
    const isLastIndex = index === section.data.length - 1;

    if (item.receiverId === 1) {
      return <SenderBubble item={item} />;
    }

    return <ReceiverBubble item={item} isLastIndex={isLastIndex} />;
  }, []);

  const handleRenderSectionHeader = useCallback(({ section: { date } }: ChatSectionHeader) => {
    return (
      <View style={{ alignItems: 'center', marginBottom: 24, marginTop: 16 }}>
        <Text style={{ color: '#fff', fontSize: 13 }} fontFamily="Manrope-Bold">
          {formatDate(date)}
        </Text>
      </View>
    );
  }, []);

  const handleScrollEnd = () => {
    if (!hasNextPage) {
      return;
    }

    fetchNextPage();
  };

  return (
    <>
      <SectionList
        style={{ backgroundColor: 'transparent', width: '100%', paddingTop: 16 }}
        contentContainerStyle={{ paddingBottom: 32 }}
        sections={finalData}
        keyExtractor={(item) => item.id}
        renderItem={handleRenderItem}
        renderSectionHeader={handleRenderSectionHeader}
        onEndReached={handleScrollEnd}
        onEndReachedThreshold={0.3}
        stickySectionHeadersEnabled={false}
      />
      {isFetchingNextPage && <ActivityIndicator />}
    </>
  );
};

export default ChatList;
