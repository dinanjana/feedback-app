const expect  = require('chai').expect;
const sinon = require("sinon");

const feedbackService = require('../../service/feedback');
const feedbackDAO = require('../../repository/feedback');

describe('addFeedback', () => {
    const fakePostFeedback = sinon.fake.resolves({ id: '1'});
    sinon.replace(feedbackDAO, 'postFeedback', fakePostFeedback);

    it('addFeedback', () => {
        const obj = {
            name: 'aaa',
            stars: '3',
            feedback: '4',
        };
        feedbackService.addFeedback(obj).then(res => {
            expect(res).to.be.eql({ id: '1'});

        });
        expect(fakePostFeedback.firstArg).to.be.eql({ name: 'aaa',
            stars: '3',
            feedBack: '4', })
    })
});

describe('addLogFileLocation', () => {
    const fakeAddLogFileLocation = sinon.fake.resolves({ id: '1'});
    sinon.replace(feedbackDAO, 'logFileLocation', fakeAddLogFileLocation);

    it('addLogFileLocation', () => {
        const obj = {
            erroLog: 'xxxxxx'
        };
        feedbackService.addLogFileLocation(obj).then(res => {
            expect(res).to.be.eql({ id: '1'});

        });
        expect(fakeAddLogFileLocation.firstArg).to.be.eql(obj)
    })
});