import { Anime } from '../models/anime.js'

function createAnime(req,res){
  Anime.create(req.body)
  .then((anime) => res.json(anime))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function animeIndex(req,res){
  Anime.find({})
  .then(animes => res.json(animes))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

function deleteAnime(req,res){
  Anime.findByIdAndDelete(req.params.id)
  .then(anime => res.json(anime))
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

export {
  createAnime,
  animeIndex,
  deleteAnime,
}