import type { AWS } from '@serverless/typescript';

import newMessageAdded from '@controllers/http/newMessageAdded';

const serverlessConfiguration: AWS = {
  service: 'jeylanis-footy-functions',
  frameworkVersion: '2',
  custom: {},
  plugins: ['serverless-webpack', 'serverless-offline', 'serverless-dotenv-plugin'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1'
    },
    lambdaHashingVersion: '20201221'
  },
  // import the function via paths
  functions: { newMessageAdded }
};

module.exports = serverlessConfiguration;
