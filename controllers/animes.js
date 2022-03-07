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

function create(req,res){
  req.body.owner = req.user.profile._id
  Anime.create(req.body)
  .then(anime=>{
    res.redirect('/animes')
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/animes')
  })
}

function show(req,res){
  Anime.findById(req.params.id)
  .populate('owner')
  .then(anime=>{
    res.render('animes/show', {
      anime,
      title:'show',
    })
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/animes')
  })
}

function edit(req,res){
  Anime.findById(req.params.id)
  .then(anime=>{
    res.render('animes/edit', {
      anime,
      title:'edit',
    })
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/animes')
  })
}

function update(req,res){
  Anime.findById(req.params.id)
  
  .then(anime=>{
    if(anime.owner.equals(req.user.profile._id)){
      anime.updateOne(req.body, {new:true})
      .then(() => {
        res.redirect(`/animes/${anime._id}`)
      })
    } else{
      throw new Error ('not authorized')
    }
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/animes')
  })
}

function deleteAnime(req,res){
  Anime.findById(req.params.id)
  .then(anime=>{
    if(anime.owner.equals(req.user.profile._id)){
      anime.delete()
      .then(() => {
        res.redirect('/animes')
      })
    } else{
      throw new Error ('not authorized')
    }
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/animes')
  })
}

export {
  index,
  create,
  show,
  edit,
  update,
  deleteAnime as delete,


}