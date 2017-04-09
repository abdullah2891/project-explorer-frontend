import Ember from 'ember';

export default Ember.Component.extend({
    
    store : Ember.inject.service(),
    IssueTitle : '',
    actions:{
        submit : function(){
                console.log("submitting");
                var store = this.get('store');
                
                
                var 
                    IssueTitle = this.get('IssueTitle'),
                    IssueDescription = this.get('IssueDescription'),
                    IssueOwner = this.get('IssueOwner')
                ;

                
                if(!(IssueTitle && IssueDescription && IssueOwner)){
                    console.log("Failed to submit");
                    return;   
                }
                
                // console.log("store ",store);
                var issue = store.createRecord('issue',
                {
                    "title": IssueTitle, 
                    "description" :IssueDescription, 
                    "owner" : IssueOwner, 
                    "status" : "open" //new issues are always should be open
                });
                issue.save();
        }
    }
});
