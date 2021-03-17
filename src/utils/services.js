import client from './client';

// get agenda of the mentor by id
export const getMentorAgenda = (id) => client.get(`mentors/${id}/agenda`);
