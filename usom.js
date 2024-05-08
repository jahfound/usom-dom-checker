const axios = require('axios');

const targetUrl = 'https://www.usom.gov.tr/url-list.txt';

axios.get(targetUrl)
  .then(response => {
    const htmlContent = response.data;

    if (htmlContent.includes('parafhepyaninda.tk')) {
      console.log('Found');
    } else {
      console.log('Not found');
    }
  })
  .catch(error => {
    console.error('Hata oluştu:', error);
  });
