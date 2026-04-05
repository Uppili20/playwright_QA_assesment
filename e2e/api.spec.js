const { test, expect } = require('@playwright/test');

test('API Flow - Create, Get, Update User', async ({ request }) => {

  
  const createRes = await request.post('https://reqres.in/api/users', {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'reqres_5831f7e7e6e645559c81066b7f78de90'   
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


  expect(createBody.name).toBe('Uppili');
  expect(createBody.job).toBe('QA Engineer');

  
  const getRes = await request.get(`https://reqres.in/api/users/${userId}`,{
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'reqres_5831f7e7e6e645559c81066b7f78de90'   
    }
  });
  
  expect([200, 404]).toContain(getRes.status());

  const getBody = await getRes.json();
  console.log('Get Response:', getBody);

  const updateRes = await request.put(`https://reqres.in/api/users/${userId}`, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'reqres_5831f7e7e6e645559c81066b7f78de90'   
    },
    data: {
      name: 'Saravanan Updated',
      job: 'Senior QA'
    }
  });

  expect(updateRes.status()).toBe(200);

  const updateBody = await updateRes.json();

  
  expect(updateBody.name).toBe('Saravanan Updated');
  expect(updateBody.job).toBe('Senior QA');


  console.log('Updated Response:', updateBody);
  console.log("")
});