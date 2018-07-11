import Route from '@ember/routing/route';


export default Route.extend({
    model(){
        return $.get('http://localhost:8080/students/sorgula/students');

        //return this.store.findAll("student");
    }
});
