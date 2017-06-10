import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    // host : "https://powerful-wildwood-29125.herokuapp.com",
    host: "https://python-workspace-abdullah2891.c9users.io",
    headers :{
        "Accept" : "application/json"
    }
});
