const router = require('express').Router();
const orderController = require('./controllers/order');
const userController = require('./controllers/user');
const authMiddleware = require('./middlewares/auth');

router.get('/orders', authMiddleware, orderController.getOrders);
router.post('/orders', orderController.postOrder);
router.put('/orders/:id/:status', authMiddleware, orderController.updateOrderStatus);
router.delete('/orders/:id', authMiddleware, orderController.deleteOrder);

router.post('/register', userController.register);
router.post('/register/admin', userController.registerAdmin);
router.post('/login', userController.login);

module.exports = router;