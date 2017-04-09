import Ember from 'ember';

export default Ember.Component.extend({
    
    store : Ember.inject.service(), 
    actions:{
        submit : function(){
                console.log("submitting");
                var store = this.get('store'); 
                // console.log("store ",store);
                var issue = store.createRecord('issue',
                {
                    "title": "creating issue hard coded", 
                    "description" : "hardcoding issue", 
                    "owner" : "lame coder", 
                    "status" : "open"
                });
                issue.save();
        }
    }
});
