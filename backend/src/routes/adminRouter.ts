import { Router } from 'express'
import { createAdminProduct, deleteAdminProducts, getImageKitAuth, listAdminProducts, requireAdmin, updateAdminProduct } from '../controllers/adminController'

const router = Router()


router.use(requireAdmin)

router.get('/imageKit/auth', getImageKitAuth)
router.get('/products', listAdminProducts)
router.post('/products', createAdminProduct)
router.patch('/products/:id', updateAdminProduct)
router.delete('/products/:id', deleteAdminProducts)

export default router