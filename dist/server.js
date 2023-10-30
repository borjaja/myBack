/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
// Constants
const PORT = (_a = Number(process.env.PORT)) !== null && _a !== void 0 ? _a : 3000;
const HOST = (_b = process.env.HOST) !== null && _b !== void 0 ? _b : '0.0.0.0';
// App
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Hello remote world!\n');
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
