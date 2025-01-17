import { writeFileSync } from 'node:fs';
import path from 'node:path';

import { describe, expect, it, vi } from 'vitest';

import { writeClientIndex } from '../index';

vi.mock('node:fs');

describe('writeClientIndex', () => {
    it('should write to filesystem', async () => {
        const client: Parameters<typeof writeClientIndex>[0] = {
            enumNames: [],
            models: [],
            server: 'http://localhost:8080',
            services: [],
            version: '1.0',
        };

        await writeClientIndex(client, '/', {
            client: 'fetch',
            debug: false,
            enums: 'javascript',
            experimental: false,
            exportCore: true,
            exportModels: true,
            exportServices: true,
            format: false,
            input: '',
            lint: false,
            operationId: true,
            output: '',
            postfixServices: 'Service',
            schemas: true,
            serviceResponse: 'body',
            useDateType: false,
            useOptions: true,
            write: true,
        });

        expect(writeFileSync).toHaveBeenCalledWith(path.resolve('/', '/index.ts'), expect.anything());
    });
});
