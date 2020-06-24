const expect  = require('chai').expect;
const sinon = require("sinon");
const utils = require('../../utils');

describe('registerHandlers', () => {

    const handlers = [{
        path: '/test',
        handlers: {
            'get': () => {},
            'post': () => {}
        }
    }];

    const app = {
        get: () => {},
        post: () => {},
    };

    const sandbox = sinon.createSandbox();

    beforeEach(function() {
        sandbox.spy(app);
    });

    afterEach(function() {
        sandbox.restore();
    });

    it('Should call app method', () => {
        utils.registerHandlers(app, handlers);
        expect(app.get.calledOnce).to.be.true;
        expect(app.post.calledOnce).to.be.true;
    })
});