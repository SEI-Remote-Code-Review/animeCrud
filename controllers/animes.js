import { Anime } from '../models/anime.js'

function index(req,res){
  Anime.find({})
  .then(animes => {
    res.render('animes/index',{
      animes,
      title:'Anime List'
    })
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/animes')
  })
}

export {
  index
}