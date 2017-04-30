import { KnowledgeRepresentations } from '../imports/api/knowledge-representation/knowledge-representation.js';

Meteor.publish( 'krs', function() {
  return KnowledgeRepresentations.find();
});