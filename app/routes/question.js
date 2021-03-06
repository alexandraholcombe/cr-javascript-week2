import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
      return this.store.findRecord('question', params.question_id);
    },

    actions: {
      updateQuestion(model, params) {
        Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            model.set(key, params[key]);
          }
        });
        model.save();
        this.transitionTo('index');
      },

      saveAnswer(params) {
        console.log("made it to question.js")
        var newAnswer = this.store.createRecord('answer', params);
        var question = params.question;
        question.get('answers').addObject(newAnswer);
        newAnswer.save().then(function() {
          return question.save();
        });
        this.transitionTo('index');
      },

      destroyQuestion(question) {
        question.destroyRecord();
        this.transitionTo('index');
      }
    }
});
