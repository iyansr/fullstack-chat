const devConfig = {
  API_URL: 'http://192.168.0.104:8765/v1',
};

const productionConfig = {
  API_URL: 'http://localhost:8765/v1',
};

export const config = __DEV__ ? devConfig : productionConfig;
