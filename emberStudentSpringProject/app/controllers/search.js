import Controller from '@ember/controller';
import Ember from 'ember';
import { inject as service } from '@ember/service';

export default Ember.Controller.extend({
    zeki: undefined,
    remotingService: service(),
    actions: {
        searchStudent: function () {
            this.get('remotingService').getRemoteCall('http://localhost:8080/students/getirById', { id: this.get('id') })
                .then((sonuc) => {
                    this.set('zeki', sonuc);
                    console.log(sonuc);
                });


        }
    }
});
