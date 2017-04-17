/**
 * Created by mahdi on 16/04/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MemberSchema = new Schema({
  _memberId: String,
  firstName: String,
  lastName: String,
  grade: String,
  email: String,
  homepage: String,
  phone: String,
  thesis: [{ type: Schema.Types.Mixed, ref: 'Thesis' }],
  researchFileds : String,
  resume: String,
  socials: { type: Schema.Types.ObjectId, ref: 'Social' },
  articles: [{ type: Schema.Types.Mixed, ref: 'Article' }]
});


module.exports = mongoose.model('Member', MemberSchema);
