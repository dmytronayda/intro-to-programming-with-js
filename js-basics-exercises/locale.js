
let languages = {
  'en' : 'Good day!', 
  'ua' : 'Добрий день!', 
  'ru' : 'Здравствуйте!', 
  'de' : 'Guten Tag!', 
  'en_US' : 'Hey!', 
  'en_GB' : 'Hello!', 
  'en_AU' : 'Howdy!'
}


function extractLanguage(locale) {
  let lang = locale.split('_').shift(); 
  return lang;
}

function extractRegion(locale) {
  return locale.split('.')[0]
               .split('_')[1];
}

function greet(lang) {
  if (languages[lang]) {
    return languages[lang]; 
  } else {
    return 'Sorry, I do not know that language. Try: en, ua, ru or de.'; 
  }
}

function localGreet(locale) { 
  let lang = extractLanguage(locale); 
  if (extractRegion(locale) === 'US') {
    console.log(languages['en_US']); 
  } else if (extractRegion(locale) === 'GB') {
    console.log(languages['en_GB']); 
  } else if (extractRegion(locale) === 'AU') { 
    console.log(languages['en_AU']); 
  } else {
    console.log(greet(lang)); 
  }
}

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'
localGreet('de_DE.UTF-8'); // 'Guten Tag!'
localGreet('ua_UA.UTF-8'); // 'Добрий день!'
localGreet('ru_RU.UTF-8'); // 'Здравствуйте'
