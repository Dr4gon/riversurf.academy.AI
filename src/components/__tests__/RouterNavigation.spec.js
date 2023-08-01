import {test, expect} from 'vitest';
import router from '@/router/index';

test('routing /welcome', async () => {
  await router.push('/welcome');
  await router.isReady();
  expect(router.currentRoute.value.path).toBe('/welcome');
});

test('routing /convincer', async () => {
  await router.push('/convincer');
  await router.isReady();
  expect(router.currentRoute.value.path).toBe('/convincer');
});

test('routing /contact', async () => {
  await router.push('/contact');
  await router.isReady();
  expect(router.currentRoute.value.path).toBe('/contact');
});

test('routing /sales', async () => {
  await router.push('/sales');
  await router.isReady();
  expect(router.currentRoute.value.path).toBe('/sales');
});

test('routing /about', async () => {
  await router.push('/about');
  await router.isReady();
  expect(router.currentRoute.value.path).toBe('/about');
});
