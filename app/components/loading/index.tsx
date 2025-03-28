// Copyright (c) 2015-present TeamUp, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {ActivityIndicator, type StyleProp, View, type ViewStyle, Text, type TextStyle} from 'react-native';

import {useTheme} from '@context/theme';

type LoadingProps = {
    containerStyle?: StyleProp<ViewStyle>;
    size?: number | 'small' | 'large';
    color?: string;
    themeColor?: keyof Theme;
    footerText?: string;
    footerTextStyles?: TextStyle;
    testID?: string;
}

const Loading = ({
    containerStyle,
    size,
    color,
    themeColor,
    footerText,
    footerTextStyles,
    testID,
}: LoadingProps) => {
    const theme = useTheme();
    const indicatorColor = themeColor ? theme[themeColor] : color;

    return (
        <View
            style={containerStyle}
            testID={testID}
        >
            <ActivityIndicator
                color={indicatorColor}
                size={size}
            />
            {
                footerText &&
                <Text style={footerTextStyles}>{footerText}</Text>
            }
        </View>
    );
};

export default Loading;
