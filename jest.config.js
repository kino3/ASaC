import 'dotenv/config';

export default {
  transform: {
    '\\.[jt]sx?$': 'babel-jest'
  },
  testEnvironment: 'node'
};