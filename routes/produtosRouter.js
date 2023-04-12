const router =  require('express').Router();

const produtos = require('../controllers/produtos')

router.get('/produtos', () => {});
router.get('produtos/:id', () => {});

module.exports = router;
