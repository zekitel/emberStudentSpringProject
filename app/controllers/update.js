import Controller from '@ember/controller';
import Ember from 'ember';
import { inject as service } from '@ember/service';


export default Ember.Controller.extend({

    
    remotingService:service(),

    init() {
        this.set('item', {});
    },


    actions: {
        updateStudent: function () {
            

            this.get('remotingService').postRemoteCall('http://localhost:8080/students/update',this.get('item'),false);
            
        }


    }
    

});
