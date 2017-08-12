import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
    host: "https://ticketing-system-abdullah2891.c9users.io",
    headers: {
        Accept: "application/json"
    }, 
    authorizer: 'authorizer:token'
});
