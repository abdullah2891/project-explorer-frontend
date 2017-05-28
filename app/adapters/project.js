import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host : "https://powerful-wildwood-29125.herokuapp.com",
    headers :{
        "Accept" : "application/json"
    }
});
