// Copyright (c) 2015-present TeamUp, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React from 'react';
import Svg, {Path, Ellipse} from 'react-native-svg';

import {useTheme} from '@context/theme';

import type {ViewStyle} from 'react-native';

type Props = {
    style: ViewStyle;
}

export default function SavedPostsIcon({style}: Props) {
    const theme = useTheme();

    return (
        <Svg
            width={155}
            height={153}
            fill='none'
            style={style}
        >
            <Ellipse
                cx={80.5}
                cy={133}
                rx={54.5}
                ry={3}
                fill='#000'
                fillOpacity={0.06}
            />
            <Path
                d='M70.27 59.771h59.439a8.307 8.307 0 0 1 5.874 2.405 8.274 8.274 0 0 1 2.449 5.845v37.697a8.271 8.271 0 0 1-5.147 7.63 8.31 8.31 0 0 1-3.176.619h-8.772v14.111l-13.158-14.111H70.291a8.315 8.315 0 0 1-5.873-2.404 8.276 8.276 0 0 1-2.45-5.845V68.021a8.27 8.27 0 0 1 2.442-5.838 8.303 8.303 0 0 1 5.86-2.412Z'
                fill={theme.buttonBg}
            />
            <Path
                d='M107.779 113.967H70.291a8.315 8.315 0 0 1-5.874-2.404 8.279 8.279 0 0 1-2.449-5.845V82.832s2.618 21.163 3.088 23.026c.47 1.863 1.403 4.65 5.824 5.112 4.422.462 36.899 2.997 36.899 2.997Z'
                fill='#000'
                fillOpacity={0.16}
            />
            <Path
                d='M131.863 75.556a16.796 16.796 0 0 0-3.004-5.864 16.836 16.836 0 0 0-5.031-4.262.585.585 0 0 1-.306-.642.577.577 0 0 1 .545-.458c3.747-.224 11.312.575 8.94 11.17a.591.591 0 0 1-1.144.056Z'
                fill='#fff'
                fillOpacity={0.16}
            />
            <Path
                d='M107.838 26.436h-75.65a10.577 10.577 0 0 0-7.475 3.06 10.533 10.533 0 0 0-3.117 7.44v47.977a10.516 10.516 0 0 0 3.117 7.44 10.56 10.56 0 0 0 7.475 3.06h11.165v17.959l16.746-17.96h47.712a10.578 10.578 0 0 0 7.476-3.06 10.52 10.52 0 0 0 3.117-7.439V36.937a10.521 10.521 0 0 0-3.108-7.43 10.567 10.567 0 0 0-7.458-3.07Z'
                fill='#FFBC1F'
            />
            <Path
                d='M60.1 95.413h47.711a10.573 10.573 0 0 0 7.476-3.06 10.53 10.53 0 0 0 3.117-7.44V55.787s-3.331 26.935-3.93 29.306c-.598 2.37-1.786 5.918-7.413 6.506-5.627.588-46.962 3.815-46.962 3.815Z'
                fill='#CC8F00'
            />
            <Path
                d='M29.447 46.526a21.375 21.375 0 0 1 3.823-7.464 21.426 21.426 0 0 1 6.403-5.424.74.74 0 0 0-.303-1.4c-4.77-.285-14.398.731-11.38 14.217a.749.749 0 0 0 1.171.469.748.748 0 0 0 .286-.398Z'
                fill='#FFD470'
            />
            <Path
                d='M81.253 75.167 69.5 70.192l-11.753 4.975v-29.63h23.506v29.63Zm0-34.167H57.747c-1.319 0-2.45.456-3.39 1.367-.905.874-1.357 1.931-1.357 3.17V82l16.5-6.833L86 82V45.537c0-1.239-.47-2.296-1.413-3.17-.904-.911-2.015-1.367-3.334-1.367Z'
                fill={theme.centerChannelBg}
            />
        </Svg>
    );
}
