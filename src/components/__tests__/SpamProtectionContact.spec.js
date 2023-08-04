import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ContactComponent from "@/components/ContactComponent.vue";



function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function fillAndSubmitForm(testName, wrapper, name, email, message, wait = 0) {
  const nameInput = wrapper.find('#name');
  const emailInput = wrapper.find('#email')
  const infoInput = wrapper.find('#info');
  const messageInput = wrapper.find('#message');
  const submitButton = wrapper.find('input[type="submit"]');

  // Wait for the form to be visible and interactive
  await wrapper.vm.$nextTick();

  // Set values for the form inputs
  await nameInput.setValue(name);
  await emailInput.setValue(email);
  await messageInput.setValue(message);

  // Set value for the honeypot input if test name contains 'honeypot'
  if (testName.includes('honeypot')) {
    await infoInput.setValue('This is a info message');
  }

  // Simulate a delay before submitting the form
  await delay(wait);

  // Submit the form
  await submitButton.trigger('submit');

  // Wait for the form submission to complete
  await wrapper.vm.$nextTick();
}

test('Submit contact form quickly', async () => {
  const wrapper = mount(ContactComponent);
  await fillAndSubmitForm('Submit contact form quickly', wrapper, 'John Doe', 'testingemail@mail.com', 'This is a test message');
  expect(wrapper.html()).toContain('submitMessageFalse');
});

test('Submit contact form after delay', async () => {
  const wrapper = mount(ContactComponent);
  await fillAndSubmitForm('Submit contact form after delay', wrapper, 'John Doe', 'testingemail@mail.com', 'This is a test message', 4100);
  expect(wrapper.html()).toContain('submitMessageRight');
});

test('Submit contact form with honeypot after delay', async () => {
  const wrapper = mount(ContactComponent);
  await fillAndSubmitForm('Submit contact form with honeypot after delay', wrapper, 'John Doe', 'testingemail@mail.com', 'This is a test message', 4100);
  expect(wrapper.html()).toContain('submitMessageFalse');
});

test('Submit contact form with honeypot quickly', async () => {
  const wrapper = mount(ContactComponent);
  await fillAndSubmitForm('Submit contact form with honeypot quickly', wrapper, 'John Doe', 'testingemail@mail.com', 'This is a test message');
  expect(wrapper.html()).toContain('submitMessageFalse');
});
