const express = require('express');
const router = express.Router();
const Campground = require('../models/campground');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn,validateCampground,isAuthor,isReviewAuthor,validateReview } = require('../middleware');
const camp = require('../controllers/campground');
const { storage } = require('../cloudinary');
const multer = require('multer');
const upload = multer({ storage });

router.get('/', catchAsync(camp.index));
router.get('/new',isLoggedIn , camp.showNewCampground);
router.get('/:id', catchAsync(camp.showCampground))
router.post('/', isLoggedIn ,upload.array('image'), validateCampground, catchAsync(camp.newCampground));

router.get('/:id/edit', isLoggedIn ,isAuthor, catchAsync(camp.editCampground))

router.put('/:id', isLoggedIn ,isAuthor,upload.array('image'),validateCampground, catchAsync(camp.updateCampground));

router.delete('/:id', isLoggedIn ,isAuthor, catchAsync(camp.deleteCampground))

module.exports = router;