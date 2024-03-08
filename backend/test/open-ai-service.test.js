const request = require('supertest');
const app = require('../src/index');

test(`Send chat message and verify it's storage`, async () => {
  await request(app).post('/api/openai').send({ text: 'Test', uuid: 'Test-UUID' }).expect(200);
  const response = await request(app).get('/api/openai/Test-UUID').expect(200);
});
