import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        var project = this.get('store').findAll('project');
        return project;
    }
});
