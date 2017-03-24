import Ember from 'ember';

//consider modifying to pull questions in reverse order
export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      questions: this.store.findAll('question')
    });
  }
});
