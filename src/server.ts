/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

import express from 'express';
import 'dotenv/config';
import getEnv from './config/getEnv';

// Constants
const PORT = getEnv({ key: 'PORT', value: '3000' });
const HOST = getEnv({ key: 'PORT', value: '0.0.0.0' });

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello remote world!\n');
});

app.listen(Number(PORT), HOST);
console.log(`Running on http://${HOST}:${PORT}`);
