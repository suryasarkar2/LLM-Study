'use strict';

import { defineConfig } from 'vite';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env,
  },
});