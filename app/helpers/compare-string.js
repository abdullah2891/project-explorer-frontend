import Ember from 'ember';

export function compareString(params/*, hash*/) {
    return params[0].trim() === params[1].trim();
}

export default Ember.Helper.helper(compareString);
