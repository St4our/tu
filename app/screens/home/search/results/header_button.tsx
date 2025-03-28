// Copyright (c) 2015-present TeamUp, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {Button} from '@rneui/base';
import React from 'react';
import {Text} from 'react-native';

import {useTheme} from '@context/theme';
import {changeOpacity, makeStyleSheetFromTheme} from '@utils/theme';
import {typography} from '@utils/typography';

const getStyleFromTheme = makeStyleSheetFromTheme((theme) => {
    return {
        button: {
            alignItems: 'center',
            borderRadius: 4,
            backgroundColor: 'transparent',
            padding: 0,
        },
        text: {
            paddingHorizontal: 12,
            paddingVertical: 8,
            ...typography('Body', 200, 'SemiBold'),
        },
        selectedButton: {
            backgroundColor: changeOpacity(theme.buttonBg, 0.1),
        },
        selectedText: {
            color: theme.buttonBg,
        },
        unselectedText: {
            color: changeOpacity(theme.centerChannelColor, 0.56),
        },
    };
});

type ButtonProps = {
    onPress: () => void;
    selected: boolean;
    text: string;
}

const SelectButton = ({selected, onPress, text}: ButtonProps) => {
    const theme = useTheme();
    const styles = getStyleFromTheme(theme);

    return (
        <Button
            buttonStyle={[styles.button, selected && styles.selectedButton]}
            onPress={onPress}
        >
            <Text
                style={[styles.text, selected ? styles.selectedText : styles.unselectedText]}
            >
                {text}
            </Text >
        </Button>
    );
};

export default SelectButton;
