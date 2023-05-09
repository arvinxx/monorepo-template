import { join } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  esbuild: {
    jsxInject: "import React from 'react'",
  },
  test: {
    setupFiles: join(__dirname, './tests/test-setup.ts'),
    environment: 'jsdom',
    globals: true,
    alias: {
      '@arvinxu/foo': join(__dirname, '/packages/foo/src'),
      '@arvinxu/bar': join(__dirname, '/packages/bar/src'),
    },
    coverage: {
      provider: 'c8',
      reporter: ['text', 'json', 'lcov', 'text-summary'],
    },
  },
});
