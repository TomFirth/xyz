import express from "express";
var router = express.Router();

router.get('/list', function(req, res, next) {
  console.log(req.query);
  res.status(200).json ({title: 'This needs to be implemented'});
});

router.get('/:id', function(req, res, next) {
  const {id} = req.params;
  // check if id is number
  console.log(id);
  res.status(200).json ({ title: `Restaurants id is ${id}` });
});

router.post('/create', function(req, res, next) {
  console.log(req.query);
  //TODO: provide implementation
  res.status(200).json ({ title: 'This needs to be implemented' });
});

router.put('/update', function(req, res, next) {
  console.log(req.query);
  //TODO: provide implementation
  res.status(200).json ({ title: 'This needs to be implemented' });
});


export default router;
