import { httpGetConfig, renderHTTPPostConfig } from './http.config';

const url = 'http://localhost:3383/tradingSalesPreferences';

async function fetchPreferences(url = '', callbackFunc) {
    // Default options are marked with *
      await fetch( url, httpGetConfig )
        .then(response =>  {
          return response.json();
        })
        .then(data => {
          callbackFunc(data);
        }).catch((error) => {
          callbackFunc(null);
          console.error('Error:', error);
        });      
  }

  async function postData (url = '', data = {}, callbackFunc) {
    await fetch(url, renderHTTPPostConfig(data))
    .then(response =>  {
      return response.json();
    })
    .then(success => {
      callbackFunc(success);
    })
    .catch((error) => {
      console.error('Error:', error);
    });      
  }

  export const restoreTradingSalesPreferences = callbackFunc => {
    fetchPreferences(url, callbackFunc);
  }

  export const saveTradingSalesPreferences = (layoutConfig, callbackFunc) => {
    postData(url, layoutConfig, callbackFunc);  
  }  

