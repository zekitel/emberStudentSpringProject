import { run } from '@ember/runloop';
import $ from 'jquery';
import { Promise as EmberPromise } from 'rsvp';
import Service from '@ember/service';

function testAndParseJson(data){
  if(data && typeof data === 'string'){
    try{
      return JSON.parse(data);
    }catch(err){
      //silently ignore
    }
  }
  return data;
}

//Bütün sunucu çağrılarının dönüp dolaşıp geldiği son nokta burası.
//Buradan sonrası jquery'nin alanı, istersek jquery dışı başka bir implemantation da seçebiliriz.
//Tek sorumluluk ajax çağrısı yapılması.
export default Service.extend({

  //url alması beklenen bişey ancak diğer alacakları beklenen değil, acaba options hash'i mi alsa?
  postRemoteCall:function(targetURL, data, waitingResponse=true){
    return this.remoteCall(targetURL, JSON.stringify(data), 'POST', waitingResponse);
  },

  getRemoteCall:function(targetURL, data){
    return this.remoteCall(targetURL, data, 'GET', true);
  },


  deleteRemoteCall:function(targetURL, data, waitingResponse=true){
    return this.remoteCall(targetURL, data, 'DELETE', waitingResponse);
  },

  remoteCall:function(targetURL, data, method, waitingResponse){
    let requestParams = {
      url: targetURL,
      data: data,
      type: method,
      contentType: 'application/json',
      xhrFields: {
        withCredentials: true
      },
      dataType: 'text'
    };
    /*
     We should document why 'text' is picked for 'dataType'?

    The reason is, if we leave blank, jquery "intelligent-lessly"
     guess a dataType instead of us. This can be 'json' in some cases.
     To prevent this, we explicitly give 'text' value.

     Then in the case of `waitingResponse` is true, we check the returned data whether it is json or not.

     As a jQuery.ajax wrapper, we may also discuss about getting
     dataType in an options hash to this function.
    */
    return new EmberPromise(function(resolve, reject) {
      $.ajax(requestParams).then(function(data) {
          run(null, resolve, waitingResponse ? testAndParseJson(data) : data);
      }, function(jqXHR , textStatus, errorThrown) {
        jqXHR.then = null; // tame jQuery's ill mannered promises
        run(null, reject, jqXHR, textStatus, errorThrown);
      });
      return false;
    });
  }

});
