import Route from '@ember/routing/route';
import $ from 'ember'

export default Route.extend({
    model(){
        return $.get('http://localhost:8080/students/sorgula');
    }
});
