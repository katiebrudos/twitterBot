import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({

	tweet: DS.attr('string', {DefaultValue: "This is a Tweet!"})
});