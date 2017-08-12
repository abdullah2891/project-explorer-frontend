import Ember from 'ember';

export default Ember.Component.extend({
	session : Ember.inject.service('session'), 

	actions: {
		authenticate(){
			const  credential = this.getProperties('identification', 'password'); 
			console.log(credential);
			this.get('session').authenticate('authenticator:token',credential)
					.catch((reason)=>{
						console.log(reason); 
						this.set('errorMessage', reason.error || reason);
					});

		}
	}
});
