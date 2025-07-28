const express = require('express');
const router = express.Router({mergeParams:true});
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn,validateReview,isReviewAuthor} = require('../middleware');
const rev = require('../controllers/review');
router.post('/',isLoggedIn , validateReview, catchAsync( rev.newReview));

router.delete('/:reviewId',isLoggedIn ,isReviewAuthor, catchAsync(rev.deleteReview));

module.exports = router;