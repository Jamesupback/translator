const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    americantobritish(text){
        //text=text.toLowerCase()
        let spellings=Object.keys(americanToBritishSpelling)
        let titles=Object.keys(americanToBritishTitles)
        let slangs=Object.keys(americanOnly).sort((a,b)=>b.length-a.length)
        //deal with spellings
        for (let key of spellings){
            if(text.toLowerCase().includes(key))
                text=text.replace(new RegExp(key,"i"),'<span class="highlight">'+americanToBritishSpelling[key]+'</span>')
        }
        //deal with titles
        for (let key of titles){
            if(text.toLowerCase().includes(key))
            text=text.replace(new RegExp(key,"i"),'<span class="highlight">'+americanToBritishTitles[key].charAt(0).toUpperCase()+americanToBritishTitles[key].slice(1)+'</span>')
        }
        
        //deal with american slangs
        for (let key of slangs){
            if(text.toLowerCase().includes(key))
            text=text.replace(new RegExp(key,"i"),'<span class="highlight">'+americanOnly[key]+'</span>')
        }
        //deal with time
        text=text.replace(/([0-9]{1,2}):([0-9]{1,2})/g,'<span class="highlight">'+"$1.$2"+'</span>')
        return text
    }

    britishtoamerican(text){
        function getmykey(obj,val){
            return Object.keys(obj).find(key=>obj[key]===val)
        }
        //text=text.toLowerCase()
        let spellings=Object.values(americanToBritishSpelling)
        let titles=Object.values(americanToBritishTitles)
        let slangs=Object.keys(britishOnly).sort((a,b)=>b.length-a.length)

        //deal with spellings
        for (let val of spellings){
            if(text.toLowerCase().includes(val))
                text=text.replace(new RegExp(val,"i"),'<span class="highlight">'+getmykey(americanToBritishSpelling,val)+'</span>')
        }
         //deal with titles
         for (let val of titles){
            if(text.toLowerCase().includes(val))
            text=text.replace(new RegExp(val,"i"),'<span class="highlight">'+getmykey(americanToBritishTitles,val).charAt(0).toUpperCase()+getmykey(americanToBritishTitles,val).slice(1)+'</span>')
        }
        //deal with slangs
        for (let key of slangs){
            if(text.toLowerCase().includes(key))
            text=text.replace(new RegExp(key,"i"),'<span class="highlight">'+britishOnly[key]+'</span>')
        }
        
        //deal with time
        text=text.replace(/([0-9]{1,2})\.([0-9]{1,2})/g,'<span class="highlight">'+"$1:$2"+'</span>')
        return text
    }

    translate(text,locale){
        if(locale=="american-to-british")
        return this.americantobritish(text)
        if(locale=="british-to-american")
        return this.britishtoamerican(text)
    }
}
const translator=new Translator;
// console.log(translator.translate("sidewalk is mr. jame's favorite color 4:78",))
//translator.britishtoamerican("mr aeroplane cash machine")
module.exports = Translator;