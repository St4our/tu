// Copyright (c) 2015-present TeamUp, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {withDatabase, withObservables} from '@nozbe/watermelondb/react';
import {of as of$} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {observeChannel, observeChannelInfo} from '@queries/servers/channel';

import ChannelFiles from './channel_files';

import type {WithDatabaseArgs} from '@typings/database/database';

type Props = WithDatabaseArgs & {
    channelId: string;
}

const enhanced = withObservables(['channelId'], ({channelId, database}: Props) => {
    const channel = observeChannel(database, channelId);
    const info = observeChannelInfo(database, channelId);
    const count = info.pipe(
        switchMap((i) => of$(i?.filesCount || 0)),
    );
    const displayName = channel.pipe(switchMap((c) => of$(c?.displayName)));

    return {
        count,
        displayName,
    };
});

export default withDatabase(enhanced(ChannelFiles));
