import Controller from '@ember/controller';

import { inject as service } from '@ember/service';

export default Controller.extend({
    zeki: undefined,
    remotingService: service(),
    actions: {
        searchStudent: function () {
            this.get('remotingService').getRemoteCall('http://localhost:8080/students/getirById', { id: this.get('id') })
                .then((sonuc) => {
                    this.set('zeki', sonuc);
                });


        }
    }
});
