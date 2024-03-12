import React, { useCallback } from 'react';
import type { SectionListData, SectionListRenderItem } from 'react-native';
import { SectionList, View } from 'react-native';

import ReceiverBubble from './ReceiverBubble';
import SenderBubble from './SenderBubble';

import Text from '@/modules/shared/components/Text';
import type { Message } from '@/modules/shared/types/message';
import { formatDate } from '@/modules/shared/utils/date';

const apiData = [
  {
    date: '2024-03-12T13:53',
    data: [
      {
        id: 'cltofnm9j0000wmlz95eq5r2u',
        content: 'hello',
        createdAt: '2024-03-12T13:53:38.167Z',
        senderId: 1,
        receiverId: 2,
      },
    ],
  },
  {
    date: '2024-03-12T14:08',
    data: [
      {
        id: 'cltog781t0003wmlzswrrvf7i',
        content: 'lorem ipsum',
        createdAt: '2024-03-12T14:08:52.866Z',
        senderId: 1,
        receiverId: 2,
      },
      {
        id: 'cltog781t0004wmlzywuqfd17',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
        createdAt: '2024-03-12T14:08:52.866Z',
        senderId: 1,
        receiverId: 2,
      },
    ],
  },
  {
    date: '2024-03-12T14:12',
    data: [
      {
        id: 'cltofnm9j0001wmlzclb0vql4',
        content: 'whazzup',
        createdAt: '2024-03-12T14:12:38.167Z',
        senderId: 2,
        receiverId: 1,
      },
      {
        id: 'cltofnm9j0002wmlz40s7ddfz',
        content: 'long time no see eh?',
        createdAt: '2024-03-12T14:12:50.167Z',
        senderId: 2,
        receiverId: 1,
      },
    ],
  },
];

type ChatRenderItem = SectionListRenderItem<Message, { date: string; data: Message[] }>;
type ChatSectionHeader = {
  section: SectionListData<
    Message,
    {
      date: string;
      data: Message[];
    }
  >;
};

const ChatList = () => {
  const handleRenderItem = useCallback<ChatRenderItem>(({ item, section, index }) => {
    const isLastIndex = index === section.data.length - 1;

    if (item.receiverId === 1) {
      return <SenderBubble item={item} />;
    }

    return <ReceiverBubble item={item} isLastIndex={isLastIndex} />;
  }, []);

  const handleRenderSectionHeader = useCallback(
    ({ section: { data, date } }: ChatSectionHeader) => {
      if (data.length === 1) {
        return <View style={{ height: 8 }} />;
      }

      return (
        <View style={{ alignItems: 'center', marginBottom: 24, marginTop: 16 }}>
          <Text style={{ color: '#fff', fontSize: 13 }} fontFamily="Manrope-Bold">
            {formatDate(date)}
          </Text>
        </View>
      );
    },
    [],
  );

  return (
    <SectionList
      style={{ backgroundColor: 'transparent', width: '100%', paddingTop: 16 }}
      sections={apiData}
      keyExtractor={(item) => item.id}
      renderItem={handleRenderItem}
      renderSectionHeader={handleRenderSectionHeader}
    />
  );
};

export default ChatList;
