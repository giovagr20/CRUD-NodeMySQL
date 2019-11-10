const {Router} = require('express');
const router = Router();
const _controllerCustomer = require('../controllers/customer.controller');

router.get('/',_controllerCustomer.getCustomers);

router.post('/add', _controllerCustomer.createCustomer);

router.get('/delete/:id', _controllerCustomer.deleteCustomer);

router.get('/update/:id', _controllerCustomer.updateCustomer);

router.post('/update/:id', _controllerCustomer.updateDataReal);

module.exports = router;