import chai from "chai";
import chaiHttp from 'chai-http'
import app from "../../app"

const expect = chai.expect;
chai.use(chaiHttp).should()

describe('Menus API', () => {
    it('should return an correct response', async () => {
        const dishId = 12345
        const res = await chai.request(app).get(`/menus/${dishId}`);
        expect(res.status).to.equal(200);
        expect(res.body).to.be.eql({ title: `Dish id is ${dishId}` });
    });

    //TODO fis this test
    it('should create dish', async () => {
        const res =
            await chai.request(app).post(`/menus`)
            .send({
            name: "chicken",
            description: "Chicken dish",
            price: 9.95
        }
    )
        expect(res.status).to.equal(202);
    });
});
