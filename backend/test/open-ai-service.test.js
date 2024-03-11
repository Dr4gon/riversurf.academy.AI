const request = require('supertest');
const app = require('../src/index');

test(`Send chat message and verify its storage`, async () => {
  await request(app).post('/api/openai').send({ text: 'Test', uuid: 'Test-UUID' }).expect(200);
  const response = await request(app).get('/api/openai/Test-UUID').expect(200);
  expect(response.body[0]).toEqual({ content: 'Test', role: 'user' });
});

test('Beginner asks for river wave to start in Munich and answer must include Floßlände', async () => {
  const response = await request(app)
    .post('/api/openai')
    .send({ text: 'Wo kann ich in München das riversurfen anfangen?', uuid: 'Test-UUID' })
    .expect(200);
  expect(response.body.reply).toContain('Floßlände');
});

afterEach(async () => {
  await request(app).delete('/admin/conversation/Test-UUID').expect(200);
});
