import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  test('createsa profile via POST', async () => {
    const res = await request(app)
      .post('/api/v1/profiles')
      .send({
        email: 'test@test.com',
        accountId: 'Kara.testnet',
      });

    expect(res.body).toEqual({
      id: '1',
      email: 'test@test.com',
      accountId: 'kara.testnet',
    });
  });
});
