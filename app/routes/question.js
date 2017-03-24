import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
      return this.store.findRecord('question', params.question_id);
    },

    actions: {
      updateQuestion(model, params) {
        console.log(model);
        console.log(params);
        Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            model.set(key, params[key]);
          }
        });
        model.save();
        this.transitionTo('index');
      },

      destroyQuestion(question) {
        question.destroyRecord();
        this.transitionTo('index');
      }
    }
});
