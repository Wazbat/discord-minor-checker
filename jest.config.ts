import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => ({
    preset: 'ts-jest',
    testEnvironment: 'node',
    modulePathIgnorePatterns: [
        '<rootDir>/dist/',
        '<rootDir>/node_modules/'
    ],
    verbose: true,
    clearMocks: true

});
