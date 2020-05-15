let languages = {
  'en' : 'Good day!', 
  'ua' : 'Добрий день!', 
  'ru' : 'Здравствуйте!', 
  'de' : 'Guten Tag!'
}

function greet(lang) {
  if (languages[lang]) {
    return languages[lang]; 
  } else {
    return 'Sorry, I do not know that language. Try: en, ua, ru or de.'; 
  }
}



console.log(greet('ua')); 