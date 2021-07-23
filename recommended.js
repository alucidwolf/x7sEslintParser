/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

const restrictedGlobals = require('eslint-restricted-globals');

module.exports = {
    plugins: [
        'import', // https://github.com/benmosher/eslint-plugin-import
        'jest', // https://github.com/jest-community/eslint-plugin-jest
        '@salesforce/eslint-plugin-lightning', // https://github.com/salesforce/eslint-plugin-lightning
    ],

    extends: [
        require.resolve('./base'),
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:jest/recommended',
    ],

    env: {
        jest: true,
    },

    globals: {
        // used to mock calls to global variables in jest tests
        global: true,
    },

    rules: {
        // 7S Eslint Rules
        'no-console': [
            'error',
            {
                allow: ['warn', 'error'],
            },
        ],
    },
};
