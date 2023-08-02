import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ContactComponent from "@/components/ContactComponent.vue";

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

test('Submit contact form quickly', async () => {
  const wrapper = mount(ContactComponent);
  const nameInput = wrapper.find('#name');
  const messageInput = wrapper.find('#message');
  const submitButton = wrapper.find('input[type="submit"]');

  // Wait for the form to be visible and interactive
  await wrapper.vm.$nextTick();

  // Set values for the form inputs
  await nameInput.setValue('John Doe');
  await messageInput.setValue('This is a test message');

  // Submit the form
  await submitButton.trigger('submit');

  // Wait for the form submission to complete
  await wrapper.vm.$nextTick();

  // Assert that the error message is displayed
  expect(wrapper.html()).toContain('Hier ist etwas schief gelaufen John Doe, bitte probiere es erneut.');
});

test('Submit contact form after delay', async () => {
  const wrapper = mount(ContactComponent);
  const nameInput = wrapper.find('#name');
  const messageInput = wrapper.find('#message');
  const submitButton = wrapper.find('input[type="submit"]');

  // Wait for the form to be visible and interactive
  await wrapper.vm.$nextTick();

  // Set values for the form inputs
  await nameInput.setValue('John Doe');
  await messageInput.setValue('This is a test message');

  // Simulate a delay before submitting the form
  await delay(4100);

  // Submit the form
  await submitButton.trigger('submit');

  // Wait for the form submission to complete
  await wrapper.vm.$nextTick();

  // Assert that the submit message is displayed
  expect(wrapper.html()).toContain('Danke für deine Nachricht John Doe, ich melde mich bei dir 🤙');
});

test('Submit contact form with honeypot after delay', async () => {
  const wrapper = mount(ContactComponent);
  const nameInput = wrapper.find('#name');
  const messageInput = wrapper.find('#message');
  const infoInput = wrapper.find('#info');
  const submitButton = wrapper.find('input[type="submit"]');

  // Wait for the form to be visible and interactive
  await wrapper.vm.$nextTick();

  // Set values for the form inputs
  await nameInput.setValue('John Doe');
  await messageInput.setValue('This is a test message');
  await infoInput.setValue('This is a info message');

  // Simulate a delay before submitting the form
  await delay(4100);

  // Submit the form
  await submitButton.trigger('submit');

  // Wait for the form submission to complete
  await wrapper.vm.$nextTick();

  // Assert that the error message is displayed
  expect(wrapper.html()).toContain('Hier ist etwas schief gelaufen John Doe, bitte probiere es erneut.');
});

test('Submit contact form with honeypot quickly', async () => {
  const wrapper = mount(ContactComponent);
  const nameInput = wrapper.find('#name');
  const messageInput = wrapper.find('#message');
  const infoInput = wrapper.find('#info');
  const submitButton = wrapper.find('input[type="submit"]');

  // Wait for the form to be visible and interactive
  await wrapper.vm.$nextTick();

  // Set values for the form inputs
  await nameInput.setValue('John Doe');
  await messageInput.setValue('This is a test message');
  await infoInput.setValue('This is a info message');

  // Submit the form
  await submitButton.trigger('submit');

  // Wait for the form submission to complete
  await wrapper.vm.$nextTick();

  // Assert that the error message is displayed
  expect(wrapper.html()).toContain('Hier ist etwas schief gelaufen John Doe, bitte probiere es erneut.');
});
