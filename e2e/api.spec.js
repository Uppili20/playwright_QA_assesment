const { test, expect } = require('@playwright/test');

test('API Flow - Create, Get, Update User', async ({ request }) => {

  // 🔹 Create User
  const createRes = await request.post('https://reqres.in/api/users', {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'reqres_5831f7e7e6e645559c81066b7f78de90'   // required for latest reqres
    },
    data: {
      name: 'Uppili',
      job: 'QA Engineer'
    }
  });

  expect(createRes.status()).toBe(201);

  const createBody = await createRes.json();
  const userId = createBody.id;

  console.log('Created User ID:', userId);

  // Validate response fields
  expect(createBody.name).toBe('Uppili');
  expect(createBody.job).toBe('QA Engineer');

  // 🔹 Get User (mock API → may not return created user)
  const getRes = await request.get(`https://reqres.in/api/users/${userId}`,{
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'reqres_5831f7e7e6e645559c81066b7f78de90'   // required for latest reqres
    }
  });
  

  // Reqres limitation → allow both
  expect([200, 404]).toContain(getRes.status());

  const getBody = await getRes.json();
  console.log('Get Response:', getBody);

  // 🔹 Update User
  const updateRes = await request.put(`https://reqres.in/api/users/${userId}`, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'reqres_5831f7e7e6e645559c81066b7f78de90'   // required for latest reqres
    },
    data: {
      name: 'Saravanan Updated',
      job: 'Senior QA'
    }
  });

  expect(updateRes.status()).toBe(200);

  const updateBody = await updateRes.json();

  // Validate updated data
  expect(updateBody.name).toBe('Saravanan Updated');
  expect(updateBody.job).toBe('Senior QA');

  console.log('Updated Response:', updateBody);
});