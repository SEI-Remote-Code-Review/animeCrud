import { Router } from 'express'

import * as animesCtrl from '../controllers/animes.js'

import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', animesCtrl.index)

router.post('/', isLoggedIn, animesCtrl.create)

router.get('/:id', animesCtrl.show)

router.get('/:id/edit', isLoggedIn, animesCtrl.edit)

router.put('/:id', isLoggedIn, animesCtrl.update)

export {
  router
}