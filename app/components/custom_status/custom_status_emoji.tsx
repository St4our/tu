// Copyright (c) 2015-present TeamUp, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import Emoji from '@components/emoji';

import type {EmojiCommonStyle} from '@typings/components/emoji';
import type {StyleProp} from 'react-native';

interface ComponentProps {
    customStatus: UserCustomStatus;
    emojiSize?: number;
    style?: StyleProp<EmojiCommonStyle>;
}

const CustomStatusEmoji = ({customStatus, emojiSize = 16, style}: ComponentProps) => {
    if (customStatus.emoji) {
        return (
            <Emoji
                size={emojiSize}
                emojiName={customStatus.emoji}
                commonStyle={style}
            />
        );
    }

    return null;
};

export default CustomStatusEmoji;
