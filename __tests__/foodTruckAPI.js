const request = require('supertest');
const app = require('../app');

afterAll((done) => {
    app.server.close(done);
});

describe('Food Truck API', () => {

    it('should get a specific food truck by location ID', async () => {
      const locationid = 735318;
      const response = await request(app).get(`/v1/foodtrucks/search?locationid=${locationid}`);
      expect(response.status).toBe(200);
      expect(response.body[0].locationid).toBe(locationid);
    });

    it('should get all food trucks', async () => {
      const response = await request(app).get('/v1/foodtrucks/search');
      expect(response.status).toBe(200);
      expect(response.body.length).toBe(app.foodTrucks.length);
    });

});