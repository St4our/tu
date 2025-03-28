// Copyright (c) 2015-present TeamUp, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React from 'react';
import Svg, {Path, Ellipse} from 'react-native-svg';

import {useTheme} from '@context/theme';

import type {ViewStyle} from 'react-native';

type Props = {
    style: ViewStyle;
}

function MentionIcon({style}: Props) {
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
                d='M70.27 59.771h59.439a8.307 8.307 0 0 1 5.874 2.405 8.274 8.274 0 0 1 2.449 5.845v37.697a8.271 8.271 0 0 1-5.147 7.63 8.31 8.31 0 0 1-3.176.619h-8.772v14.111l-13.158-14.111H70.291a8.315 8.315 0 0 1-5.873-2.404 8.279 8.279 0 0 1-2.45-5.845V68.021a8.269 8.269 0 0 1 2.442-5.838 8.303 8.303 0 0 1 5.86-2.412Z'
                fill='#1E325C'
            />
            <Path
                d='M107.779 113.967H70.291a8.315 8.315 0 0 1-5.873-2.404 8.276 8.276 0 0 1-2.45-5.845V82.832s2.618 21.163 3.088 23.026c.47 1.863 1.403 4.65 5.825 5.112 4.42.462 36.898 2.997 36.898 2.997Z'
                fill='#0A111F'
            />
            <Path
                d='M131.863 75.556a16.796 16.796 0 0 0-3.004-5.864 16.836 16.836 0 0 0-5.031-4.262.585.585 0 0 1-.306-.642.577.577 0 0 1 .545-.458c3.747-.224 11.312.575 8.94 11.17a.591.591 0 0 1-1.144.056Z'
                fill='#32539A'
            />
            <Path
                d='M107.838 26.436h-75.65a10.576 10.576 0 0 0-7.475 3.06 10.535 10.535 0 0 0-3.117 7.44v47.977a10.516 10.516 0 0 0 3.117 7.44 10.558 10.558 0 0 0 7.475 3.06h11.165v17.959l16.746-17.96h47.712a10.575 10.575 0 0 0 7.476-3.06 10.52 10.52 0 0 0 3.117-7.439V36.937a10.521 10.521 0 0 0-3.108-7.43 10.567 10.567 0 0 0-7.458-3.07Z'
                fill={theme.buttonBg}
            />
            <Path
                d='M60.1 95.413h47.711a10.573 10.573 0 0 0 7.476-3.06 10.53 10.53 0 0 0 3.117-7.44V55.786s-3.331 26.935-3.93 29.306c-.598 2.37-1.786 5.918-7.413 6.506-5.627.588-46.962 3.815-46.962 3.815Z'
                fill='#000'
                fillOpacity={0.16}
            />
            <Path
                d='M29.447 46.526a21.375 21.375 0 0 1 3.823-7.464 21.426 21.426 0 0 1 6.403-5.424.74.74 0 0 0-.303-1.4c-4.77-.285-14.398.731-11.38 14.217a.749.749 0 0 0 1.171.469.748.748 0 0 0 .286-.398Z'
                fill='#fff'
                fillOpacity={0.16}
            />
            <Path
                d='M70.393 66.965c1.645 0 3.105-.62 4.38-1.863 1.277-1.276 1.915-2.753 1.915-4.432 0-1.712-.622-3.189-1.864-4.431s-2.72-1.864-4.431-1.864c-1.68 0-3.156.638-4.432 1.914-1.242 1.276-1.863 2.736-1.863 4.381 0 1.612.62 3.09 1.863 4.432 1.343 1.242 2.82 1.863 4.432 1.863Zm0-27.295c5.74 0 10.676 2.065 14.805 6.195 4.13 4.13 6.195 9.064 6.195 14.805v3.022c0 2.014-.706 3.81-2.115 5.389-1.41 1.376-3.156 2.064-5.238 2.064-2.518 0-4.583-1.04-6.194-3.122-2.082 2.082-4.55 3.122-7.403 3.122-2.854 0-5.321-1.04-7.403-3.122-2.081-2.082-3.122-4.532-3.122-7.353 0-2.82 1.024-5.304 3.072-7.453 2.081-2.014 4.549-3.021 7.403-3.021 2.853 0 5.338 1.007 7.453 3.021 2.014 2.115 3.021 4.6 3.021 7.453v3.022c0 .84.32 1.595.957 2.266.638.672 1.377 1.007 2.216 1.007.873 0 1.612-.319 2.216-.957.604-.637.906-1.41.906-2.316V60.67c0-4.633-1.645-8.578-4.935-11.834-3.257-3.29-7.201-4.935-11.834-4.935s-8.595 1.645-11.885 4.935c-3.257 3.257-4.885 7.201-4.885 11.834s1.628 8.595 4.885 11.885c3.29 3.257 7.252 4.885 11.885 4.885h10.474v4.23H70.393c-5.674 0-10.593-2.081-14.756-6.244s-6.244-9.099-6.244-14.806c0-5.707 2.081-10.626 6.244-14.755 4.163-4.13 9.082-6.195 14.756-6.195Z'
                fill={theme.centerChannelBg}
            />
        </Svg>
    );
}

export default MentionIcon;
