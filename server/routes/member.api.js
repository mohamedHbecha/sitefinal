/**
 * Created by mahdi on 09/04/17.
 */
const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', function (req, res) {
  return res.send('Labo api works');
});

//http://mongoosejs.com/docs/2.7.x/docs/finding-documents.html
//User Tracker API
var Member = require('../models/Member');

router.route('/member')

// create a bear (accessed at POST http://localhost:8080/api/bears)
  .post(function (req, res) {

    var member = new Member();

      member._memberId = req.body._memberId;
      member.email = req.body.email;
      member.firstName = req.body.firstName;
      member.lastName = req.body.lastName;
      member.grade = req.body.grade;
      member.homepage = req.body.homepage;
      member.phone = req.body.phone;
      member.thesis = req.body.thesis;
      member.researchFileds = req.body.researchFileds;
      member.resume = req.body.resume;
      member.socials = req.body.socials;
      member.articles = req.body.articles;

    console.log(JSON.stringify(member));

    // save the bear and check for errors
    member.save(function (err, member) {
      if (err) return res.status(400).json(err);
      res.status(201).json({message: 'member created!', data: member});

    });
  })
  .get(function (req, res) {

    Member.find(function (err, members) {
      if (err)
        res.send(err);
      res.status(200).json({message: 'Member', data: members});
    }).populate('articles socials thesis');

  });
router.route('/member/:_id')
  .get(function (req, res) {
    Member.findById(req.params._id, function (err, member) {
      if (err)
        return res.send(err);
      res.status(200).json({message: 'Member : ' + req.params._id, data: member});
    }).populate('articles socials thesis');
  })
  .delete(function (req, res) {
    Member.remove({
      _id: req.params._id
    }, function (err, member) {
      if (err)
        res.send(err);

      res.json({message: 'Successfully deleted'});
    });
  });
router.route('/member/find')
  .post(function (req, res) {
    Member.find(req.body, function (err, members) {
      if (err)
        res.send(err);
      res.status(200).json({
        message: 'Member : ' + req.params.userId, data: members
      });
    });
  });
module.exports = router;
