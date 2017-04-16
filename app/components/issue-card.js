import Ember from 'ember';

export default Ember.Component.extend({
    store : Ember.inject.service(),

    actions:{
        updateIssue : function(id){
            var store = this.get('store'); 
            // linked list to change status
            var statusChange = {
                    "open" : "working", 
                    "working" : "closed", 
                    "closed" : "open"
            };
            
            
            
            store.find('issue',id).then(function(issue){
                console.log("findRecord working?");
                console.log(issue);
                var status = issue.get('status'); 
                console.log(status) ; 
                issue.set('status', statusChange[status]); 
                issue.save().then(function(response){
                    console.log(response);
                })
            });
            
            
            console.log("clicked",id);
        }
    }
});
