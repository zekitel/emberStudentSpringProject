import Route from '@ember/routing/route';

export default Route.extend({
  x:{},
  model(){
    this.store.findAll("book");
    return this.store.findAll("student");

  },
  actions:{
    show(){
       this.set('x','asdasd') ;
       alert(this.get('x'))

    }
  }
});
