'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {

      if(req.body.text=='')
      return res.json({ error: 'No text to translate' })

      if(!req.body.locale || !req.body.text)
      return res.json({ error: 'Required field(s) missing' })

   
      if(req.body.locale !== 'american-to-british' && req.body.locale !== 'british-to-american')
      return res.json({ error: 'Invalid value for locale field' })

      //console.log(req.body)
        if(req.body.text==translator.translate(req.body.text,req.body.locale))
        return res.json({text:req.body.text,translation:"Everything looks good to me!"})
        else
        return res.json({text:req.body.text,translation:translator.translate(req.body.text,req.body.locale)})
    });
};
