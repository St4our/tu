// Copyright (c) 2015-present TeamUp, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {Text} from 'react-native';

import {makeStyleSheetFromTheme} from '@utils/theme';
import {typography} from '@utils/typography';

type State = {
    hasError: boolean;
}

type Props = {
    children: JSX.Element;
    error: string;
    theme: Theme;
}

const getStyleSheet = makeStyleSheetFromTheme((theme: Theme) => ({
    error: {
        color: theme.errorTextColor,
        flexDirection: 'row',
        flexWrap: 'wrap',
        fontStyle: 'italic',
        ...typography('Body', 100),
    },
}));

class ErrorBoundary extends React.PureComponent<Props, State, any> {
    constructor(props: Props) {
        super(props);
        this.state = {hasError: false};
    }

    componentDidCatch() {
        this.setState({hasError: true});
    }

    render() {
        // eslint-disable-next-line react/prop-types
        const {children, error, theme} = this.props;
        const {hasError} = this.state;
        const style = getStyleSheet(theme);

        if (hasError) {
            return (
                <Text style={style.error}>
                    {error}
                </Text>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
