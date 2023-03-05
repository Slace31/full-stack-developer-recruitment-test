import axios from 'axios';

describe('GET /', () => {
  it('should return the list of timeslots', async () => {
    const res = await axios.get(`http://localhost:3333/api`);

    expect(res.status).toBe(200);
    expect(res.data).toHaveLength(96);
  });
});
