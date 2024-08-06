const express = require('express')
const router = express.Router()


// Routing for Page /small-producers/self-declare-2-status
router.post('*/task-list-1', function (req, res) {
    var sizeorganisation = req.session.data['sizeorganisation'];  
    if (sizeorganisation === "smallproducer") {
        // Handle smallproducer case
        res.redirect('./task-list-1');
    } else if (sizeorganisation === "largeproducer") {
        // Handle largeproducer case
        res.redirect('./task-list-1');
    } else {
        var dontknown = req.session.data['dontknow'];
        res.redirect('https://defra-cpr-prototype.herokuapp.com/obligation-checker/v5/start-page');
    }
});

// Routing for Page /small-producers/self-declare-3-warning-2
router.post('*/selfdeclarenext', function (req, res) {
    var declarationanswer = req.session.data['declarationanswer'];  
    if (declarationanswer === "yes") {
        // Handle case where the answer is "yes"
        res.redirect('./self-declare-5-success');
    } else if (declarationanswer === "no") {
        // Handle case where the answer is "no"
        res.redirect('./no-page');
    }
});


// Routing for Page /small-producers/fees-confirmation-question
router.post('*/feesnext', function (req, res) {
    var declarationanswer = req.session.data['declarationanswer'];  
    if (declarationanswer === "yes") {
        // Handle case where the answer is "yes"
        res.redirect('./producer-fees-info');
    } else if (declarationanswer === "no") {
        // Handle case where the answer is "no"
        res.redirect('./no-page');
    }
});




module.exports = router;

