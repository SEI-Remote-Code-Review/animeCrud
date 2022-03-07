import { Router } from 'express'
import * as animeApiCtrl from '../controllers/animeApi.js'

const router = Router()


//POST - localhost:3000/animeApi/animes
router.post('/animes', animeApiCtrl.createAnime)

//GET - localhost:3000/animeApi/animes
router.get('/animes', animeApiCtrl.animeIndex)

//DELETE - localhost:3000/animeApi/animes/:id
router.delete('/animes/:id', animeApiCtrl.deleteAnime)

export {
  router
}