var express = require('express');
var router = express.Router();
var mongoose =require('mongoose');
var Goods =require('../models/goods');
//连接MongoDB数据库
mongoose.connect('mongodb://127.0.01:27017/dumall',{useMongoClient: true});
mongoose.connection.on("connected",function(){
      console.log("mongoose connected success")
	});
mongoose.connection.on("error",function(){
      console.log("mongoose connected fail")	
      	});
mongoose.connection.on("disconnected",function(){
      console.log("mongoose connected disconnected")
	});
router.get("/", function(req, res, next) {

  Goods.find({}, function(err, doc) {

    if (err) {
      res.json({
        status: '1',
        msg: err.message
      });
    } else {
      res.json({
        status: '0',
        msg: '',
        result: {
          count: doc.length,
          list: doc
        }

      })
    }

                                    })

});

module.exports = router;