import chai from "chai";
import chaiHttp from 'chai-http'
import app from "../../app"

const expect = chai.expect;
chai.use(chaiHttp).should()

// describe('Restaurant API', () => {
//     it('should return an correct response', async () => {
//         const restaurantId = 12345
//         const res = await chai.request(app).get(`/restaurants/${restaurantId}`);
//         expect(res.status).to.equal(200);
//         expect(res.body).to.be.eql({ title: `Restaurants id is ${restaurantId}` });
//     });


// });
