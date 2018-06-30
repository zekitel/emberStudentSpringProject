import Controller from '@ember/controller';
import Ember from 'ember';
import { inject as service } from '@ember/service';

export default Ember.Controller.extend({


    remotingService:service(),

    init() {
        this.set('item', {});
    },


    actions: {
        addStudent: function () {
            this.get('remotingService').postRemoteCall('http://localhost:8080/students/ekle',this.get('item'),false);
        }


    }
    
});
