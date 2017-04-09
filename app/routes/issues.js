import Ember from 'ember';



export default Ember.Route.extend({
    model(){
        var issue = this.get('store').findAll('issue');
        return issue;
    }
});
