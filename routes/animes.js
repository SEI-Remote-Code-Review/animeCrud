import { Router } from 'express'

import * as animesCtrl from '../controllers/animes.js'

//import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', animesCtrl.index)

export {
  router
}