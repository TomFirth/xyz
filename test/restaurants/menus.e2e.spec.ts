import chai from "chai";
import chaiHttp from 'chai-http'
import app from "../../app"

const expect = chai.expect;
chai.use(chaiHttp).should()

describe('Menus API', () => {
    it('should return an correct response', async () => {
        const dishId = 401
        const res = await chai.request(app).get(`/menus/dish/${dishId}`);
        expect(res.status).to.equal(200);
        expect(res.body).to.be.eql({
            "name": "Dhingi Palak",
            "price": "4.50",
            "description": "Spinach & mushroom"
          });
    });

    it('should create dish', async () => {
        const res = await chai.request(app).post(`/menus/create`)
            .send({
                name: "chicken",
                description: "Chicken dish",
                price: 9.95
            })
        expect(res.status).to.equal(202);
    });
});
