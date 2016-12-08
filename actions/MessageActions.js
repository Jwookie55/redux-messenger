import * as Types from './actionTypes.js';

export function FetchMessagesActionCreator() {
  function callAjax(url, callback){
      var xmlhttp;
      xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function(){
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
              callback(xmlhttp.responseText);
          }
      }
      xmlhttp.open("GET", url, true);
      xmlhttp.send();
  }
  
  return function(dispatch){
    callAjax('http://slack-server.elasticbeanstalk.com/messages', (text) => JSON.parse(text).forEach(
      message => dispatch(postMessageActionCreator(message.message))
    ));
  }
}

export function postMessageActionCreator(message) {
  return {
    type: Types.POST_MESSAGE,
    message,
  };
}
