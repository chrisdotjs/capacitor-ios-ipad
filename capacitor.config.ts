import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cap1.app',
  appName: 'cap1',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.0.23:3000',
    cleartext: true
  }
};

export default config;
