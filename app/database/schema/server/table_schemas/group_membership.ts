// Copyright (c) 2015-present TeamUp, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {tableSchema} from '@nozbe/watermelondb';

import {MM_TABLES} from '@constants/database';

const {GROUP_MEMBERSHIP} = MM_TABLES.SERVER;

export default tableSchema({
    name: GROUP_MEMBERSHIP,
    columns: [
        {name: 'group_id', type: 'string', isIndexed: true},
        {name: 'user_id', type: 'string', isIndexed: true},
        {name: 'created_at', type: 'number'},
        {name: 'updated_at', type: 'number'},
        {name: 'deleted_at', type: 'number'},
    ],
});
