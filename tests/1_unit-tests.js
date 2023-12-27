const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator=new Translator
suite('Unit Tests', () => {  
  suite("american to british translations",()=>{
    test("Mangoes are my favorite fruit",done=>{
      let result=translator.translate("mangoes are my favorite fruit","american-to-british")
      assert.equal(result,'mangoes are my <span class="highlight">favourite</span> fruit')
      done()
    })

    test("I ate yogurt for breakfast",done=>{
      let result=translator.translate("I ate yogurt for breakfast",'american-to-british')
      assert.equal(result,'I ate <span class="highlight">yoghurt</span> for breakfast')
      done()
    })

    test("We had a party at my friend's condo",done=>{
      let result=translator.translate("We had a party at my friends's condo",'american-to-british')
      assert.equal(result,'We had a party at my friends\'s <span class="highlight">flat</span>')
      done()
    })

    test("Can you toss this in the trashcan for me?",done=>{
      let result=translator.translate("Can you toss this in the trashcan for me",'american-to-british')
      assert.equal(result,'Can you toss this in the <span class="highlight">bin</span> for me')
      done()
    })

    test("The parking lot was full.",done=>{
      let result=translator.translate("The parking lot was full.",'american-to-british')
      assert.equal(result,'The <span class="highlight">car park</span> was full.')
      done()
    })

    test("Like a high tech Rube Goldberg machine.",done=>{
      let result=translator.translate("Like a high tech Rube Goldberg machine.",'american-to-british')
      assert.equal(result,'Like a high tech <span class="highlight">Heath Robinson device</span>.')
      done()
    })

    test("To play hooky means to skip class or work.",done=>{
      let result=translator.translate("To play hooky means to skip class or work.",'american-to-british')
      assert.equal(result,'To <span class="highlight">bunk off</span> means to skip class or work.')
      done()
    })

    test("No Mr. Bond, I expect you to die.",done=>{
      let result=translator.translate("No Mr. Bond, I expect you to die.",'american-to-british')
      assert.equal(result,'No <span class="highlight">Mr</span> Bond, I expect you to die.')
      done()
    })

    test(" Dr. Grosh will see you now.",done=>{
      let result=translator.translate(" Dr. Grosh will see you now.",'american-to-british')
      assert.equal(result,' <span class="highlight">Dr</span> Grosh will see you now.')
      done()
    })

    test(" Lunch is at 12:15 today",done=>{
      let result=translator.translate("Lunch is at 12:15 today",'american-to-british')
      assert.equal(result,'Lunch is at <span class="highlight">12.15</span> today')
      done()
    })
  });

  suite("british to american tests",()=>{
    test("We watched the footie match for a while.",done=>{
      let result=translator.translate("We watched the footie match for a while.",'british-to-american')
      assert.equal(result,'We watched the <span class="highlight">soccer</span> match for a while.')
      done()
    })

    test("Paracetamol takes up to an hour to work.",done=>{
      let result=translator.translate("Paracetamol takes up to an hour to work.",'british-to-american')
      assert.equal(result,'<span class="highlight">Tylenol</span> <span class="highlight">thank you</span>kes up to an hour to work.')
      done()
    })

    test("First, caramelise the onions.",done=>{
      let result=translator.translate("First, caramelise the onions.",'british-to-american')
      assert.equal(result,'First, <span class="highlight">caramelize</span> the onions.')
      done()
    })

    test("I spent the bank holiday at the funfair.",done=>{
      let result=translator.translate("I spent the bank holiday at the funfair.",'british-to-american')
      assert.equal(result,'I spent the <span class="highlight"><span class="highlight">bar</span>lic holiday</span> at the <span class="highlight">carnival</span>.')
      done()
    })

    test("I had a bicky then went to the chippy.",done=>{
      let result=translator.translate("I had a bicky then went to the chippy.",'british-to-american')
      assert.equal(result,'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.')
      done()
    })

    test("I've just got bits and bobs in my bum bag.",done=>{
      let result=translator.translate("I've just got bits and bobs in my bum bag.",'british-to-american')
      assert.equal(result,'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.')
      done()
    })

    test("The car boot sale at Boxted Airfield was called off.",done=>{
      let result=translator.translate("The car boot sale at Boxted Airfield was called off.",'british-to-american')
      assert.equal(result,'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.')
      done()
    })

    test("Have you met Mrs Kalyani?",done=>{
      let result=translator.translate("Have you met Mrs Kalyani?",'british-to-american')
      assert.equal(result,'Have you met <span class="highlight">Mr.</span>s Kalyani?')
      done()
    })

    test("Prof Joyner of King's College, London.",done=>{
      let result=translator.translate("Prof Joyner of King's College, London.",'british-to-american')
      assert.equal(result,'<span class="highlight">Prof.</span> Joyner of King\'s College, London.')
      done()
    })

    test("Tea time is usually around 4 or 4.30.",done=>{
      let result=translator.translate("Tea time is usually around 4 or 4.30.",'british-to-american')
      assert.equal(result,'Tea time is usually around 4 or <span class="highlight">4:30</span>.')
      done()
    })
  })

  suite("highlighter tests",()=>{
    test("Mangoes are my favorite fruit",done=>{
      let result=translator.translate("mangoes are my favorite fruit","american-to-british")
      assert.equal(result,'mangoes are my <span class="highlight">favourite</span> fruit')
      done()
    })

    test("I ate yogurt for breakfast",done=>{
      let result=translator.translate("I ate yogurt for breakfast",'american-to-british')
      assert.equal(result,'I ate <span class="highlight">yoghurt</span> for breakfast')
      done()
    })

    test("We watched the footie match for a while.",done=>{
      let result=translator.translate("We watched the footie match for a while.",'british-to-american')
      assert.equal(result,'We watched the <span class="highlight">soccer</span> match for a while.')
      done()
    })

    test("Paracetamol takes up to an hour to work.",done=>{
      let result=translator.translate("Paracetamol takes up to an hour to work.",'british-to-american')
      assert.equal(result,'<span class="highlight">Tylenol</span> <span class="highlight">thank you</span>kes up to an hour to work.')
      done()
    })
    
  })
});
