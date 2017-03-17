import Ember from 'ember';



export default Ember.Route.extend({
    model(){
        var url = "https://perl-workspace-abdullah2891.c9users.io/issue"; 
        return  Ember.$.getJSON(url).then(function(dataObj){
        
            var list = Object.keys(dataObj.response.Issue).map(function(issue){
                return dataObj.response.Issue[issue];
            });
            console.log(list);
            return list;
        });
    }
});
