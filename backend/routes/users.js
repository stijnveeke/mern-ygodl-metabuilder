const express = require('express');
const {userindex, userdetails, usercreate, userupdate, userdelete} = require('../controllers/usercontroller');

const router = express.Router();

router.get('/', userindex)
router.get('/home', userindex)
router.get('/details/:id', userdetails)
router.get('/create', usercreate)
router.post('/create', usercreate)
router.get('/edit/:id', userupdate)
router.post('/edit/:id', userupdate)
router.delete('/delete/:id', userdelete)

module.exports = router;