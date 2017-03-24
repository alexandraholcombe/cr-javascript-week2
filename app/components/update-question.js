import Ember from 'ember';

export default Ember.Component.extend({
  editQuestion: false,
  actions: {
    editQuestionShow() {
      this.set('editQuestion', true);
    },

    updateQuestion(model) {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        content: this.get('content'),
        notes: this.get('notes'),
      };

      this.set('editQuestion', false);
      this.sendAction('updateQuestion', model, params);
    }
  }
});
