import Controller from '@ember/controller';
import Ember from 'ember';
import { inject as service } from '@ember/service';

export default Ember.Controller.extend({
    
    remotingService: service(),
    actions: {
        deleteStudent: function () {
            
            var idTemp=this.get('id');
            
            var NewUrl='http://localhost:8080/students/sil?id='+idTemp;
            this.get('remotingService').deleteRemoteCall(NewUrl,{id:this.get('id')},true);
                

        }
    }
});
