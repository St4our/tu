// Copyright (c) 2015-present TeamUp, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {useEffect, useState} from 'react';
import {DeviceEventEmitter} from 'react-native';

import {Events} from '@constants';

export const useChannelSwitch = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        let time: NodeJS.Timeout | undefined;
        const l = DeviceEventEmitter.addListener(Events.CHANNEL_SWITCH, (switching: boolean) => {
            if (time) {
                clearTimeout(time);
            }
            if (switching) {
                setLoading(true);
            } else {
                // eslint-disable-next-line max-nested-callbacks
                time = setTimeout(() => setLoading(false), 0);
            }
        });
        return () => {
            l.remove();
            if (time) {
                clearTimeout(time);
            }
        };
    }, []);

    return loading;
};
