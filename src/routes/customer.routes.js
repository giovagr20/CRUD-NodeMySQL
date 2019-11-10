const {Router} = require('express');
const router = Router();
const _controllerCustomer = require('../controllers/customer.controller');

router.get('/',_controllerCustomer.getCustomers);

module.exports = router;