import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'monorepo-template',
  // 部署在非根目录时, base 和 publicPath 都需要配置
  base: '/',
  publicPath: '/',
  themeConfig: {
    name: '@arvinxx/monorepo-template',
  },
});
