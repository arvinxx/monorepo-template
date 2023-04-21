import { defineConfig } from 'vitest/config';
import { join } from 'path';

export default defineConfig({
  esbuild: {
    jsxInject: "import React from 'react'",
  },
  test: {
    setupFiles: './tests/test-setup.ts',
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
