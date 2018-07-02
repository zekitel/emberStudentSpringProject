
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';


export default Controller.extend({

    
    remotingService:service(),

    init() {
        this._super(...arguments);
        this.set('item', {});
    },


    actions: {
        updateStudent: function () {
            

            this.get('remotingService').postRemoteCall('http://localhost:8080/students/update',this.get('item'),false);
            
        }


    }
    

});
