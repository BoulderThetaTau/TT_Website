const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@/app': path.resolve(__dirname, 'src/app'),
      '@/pages': path.resolve(__dirname, 'src/pages'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/hooks': path.resolve(__dirname, 'src/hooks'),
      '@/utils': path.resolve(__dirname, 'src/utils'),
      '@/config': path.resolve(__dirname, 'src/config'),
      '@/types': path.resolve(__dirname, 'src/types'),
      '@/data': path.resolve(__dirname, 'src/data'),
      '@/assets': path.resolve(__dirname, 'src/assets'),
    },
  },
};
