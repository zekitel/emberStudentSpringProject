import Controller from '@ember/controller';

import { inject as service } from '@ember/service';

export default Controller.extend({


    remotingService:service(),

    init() {
        this._super(...arguments);
        this.set('item', {});
    },


    actions: {
        addStudent: function () {
            this.get('remotingService').postRemoteCall('http://localhost:8080/students/ekle',this.get('item'),false);
        }


    }

});
