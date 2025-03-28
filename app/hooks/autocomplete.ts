// Copyright (c) 2015-present TeamUp, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {useEffect} from 'react';
import {useSharedValue} from 'react-native-reanimated';

export const useAutocompleteDefaultAnimatedValues = (position: number, availableSpace: number) => {
    const animatedPosition = useSharedValue(position);
    const animatedAvailableSpace = useSharedValue(availableSpace);

    useEffect(() => {
        animatedPosition.value = position;
    }, [position]);

    useEffect(() => {
        animatedAvailableSpace.value = availableSpace;
    }, [availableSpace]);

    return [animatedPosition, animatedAvailableSpace];
};
