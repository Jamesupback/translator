const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    test("translating with valid inputs text and locale",(done)=>{
        chai.request(server)
            .post('/api/translate')
            .send({text:"favorite trashcan",locale:"american-to-british"})
            .end((err,res)=>{
                assert.equal(res.status,200)
                assert.equal(res.body.text,'favorite trashcan')
                assert.equal(res.body.translation,'<span class="highlight">favourite</span> <span class="highlight">bin</span>')
            })
        done();
    })

    test("translating with invalid locale field",(done)=>{
        chai.request(server)
            .post('/api/translate')
            .send({text:"favorite trashcan",locale:"thiswontwork"})
            .end((err,res)=>{
                assert.equal(res.status,200)
                assert.equal(res.body.error,'Invalid value for locale field')
            })
            done();
    })

    test("translating with empty text field",(done)=>{
        chai.request(server)
            .post('/api/translate')
            .send({text:'',locale:"british-to-american"})
            .end((err,res)=>{
                assert.equal(res.status,200)
                assert.equal(res.body.error,'No text to translate')
            })
        done();
    })

    test("translate without locale field",(done)=>{
        chai.request(server)
            .post('/api/translate')
            .send({text:'favorite',locale:''})
            .end((err,res)=>{
                assert.equal(res.status,200)
                assert.equal(res.body.error,'Required field(s) missing')
            })
        done();
    })

    test("translating with missing text field",(done)=>{
        chai.request(server)
            .post('/api/translate')
            .send({locale:"british-to-american"})
            .end((err,res)=>{
                assert.equal(res.status,200)
                assert.equal(res.body.error,'Required field(s) missing')
            })
        done();
    })

    test("text needs no translation",(done)=>{
        chai.request(server)
            .post('/api/translate')
            .send({text:'favorite',locale:'british-to-american'})
            .end((err,res)=>{
                assert.equal(res.status,200)
                assert.equal(res.body.translation,'Everything looks good to me!')
            })
            done();
    })
});
