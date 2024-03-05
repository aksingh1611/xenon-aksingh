const express = require('express');
const test = require('../controllers/test.js');
const signup = require('../controllers/signup.js');
const signin = require('../controllers/signin.js');
const OAuth = require('../controllers/OAuth.js');
const updateUser = require('../controllers/UpdateUser.js');
const auth = require('../middlewares/auth.js');
const deleteUser = require('../controllers/deleteUser.js');
const signOut = require('../controllers/signOut.js');
const createList = require('../controllers/createList.js');

const router = new express.Router();


router.get('/test', test)
router.post('/api/signup', signup)
router.post('/api/signin', signin)
router.post('/api/google', OAuth)
router.get('/api/signOut', signOut)


router.post('/api/updateUser/:id', auth, updateUser)
router.delete('/api/deleteUser/:id', auth, deleteUser)

// Listing API's
router.post('/api/createList', auth, createList)

module.exports = router;