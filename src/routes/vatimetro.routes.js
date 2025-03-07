import {Router} from'express'
import {ReadVatimetro} from '../controllers/vatimetro.controller.js'

const router = Router()

router.get('/vatimetro',ReadVatimetro );


export default  router