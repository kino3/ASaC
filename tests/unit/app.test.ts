import { describe, expect, test, afterAll } from '@jest/globals';
import supertest from 'supertest';
import server from '../../src/app';
const request = supertest(server);

import params from '../../ac/paramsOfAssuranceCaseOnUsabilityOfX.json';

afterAll(() => {
  server.close();
});

describe('GET /', () => {
  test('ID_001 : should respond in X (milli)seconds', async () => {
    let time: number = 0;
    if (process.env.TEST_RESPONSE_TIME_MS !== undefined) {
      time = parseInt(process.env.TEST_RESPONSE_TIME_MS, 10);
    }
    if (typeof(params["RESPONSE_TIME_MS_A"]) === "string") {
      time = parseInt(params["RESPONSE_TIME_MS_A"]);
    } else if (typeof(params["RESPONSE_TIME_MS_A"]) === "number") {
      time = params["RESPONSE_TIME_MS_A"];
    }
    const startTime = new Date().getTime();
    const response = await request.get('/');
    const endTime = new Date().getTime();
    const duration = endTime - startTime;
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
    if (time > 0) {
      expect(duration).toBeLessThan(time);
    }
  });
});
