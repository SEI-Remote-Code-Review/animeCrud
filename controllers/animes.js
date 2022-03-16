import { Anime } from '../models/anime.js'
import { Profile } from '../models/profile.js' 

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

function newAnime(req,res){
    res.render('animes/new', {
      title:'New Anime'
  })
}

function create(req,res){
  req.body.owner = req.user.profile._id
  Anime.create(req.body)
  .then(anime=>{
    Profile.findById(req.user.profile._id)
    .then(profile=> {
      profile.animes.push(anime._id)
      profile.save()
    })
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
  .populate({path:"reviews.author", select:"name"})

  .then(anime=>{
    res.render('animes/show', {
      anime,
      title:anime.mainTitle,
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
      title:'Edit Anime',
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
      anime.update(req.body, {new:true})
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
      Profile.findById(req.user.profile._id)
      .then(profile => {
        const id = req.params.id
        const index = profile.animes.indexOf(id)
        profile.animes.splice(index, 1)
        profile.save()
      })
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

function createReview(req,res){
  Anime.findById(req.params.id)
  
  .then(anime=>{
    req.body.author = req.user.profile._id
    anime.reviews.push(req.body)
    anime.save()
    .then(() => {
      res.redirect(`/animes/${anime._id}`)
    })
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/animes')
  })
}

function deleteReview(req,res){
  Anime.findById(req.params.id)
  .then(anime =>{
    const id = req.params.reviewId
    const reviewID = anime.reviews.map(review=> review._id.toString())
    const index = reviewID.indexOf(id)
    
    anime.reviews.splice(index,1)
    anime.save()
    .then(()=> {
      res.redirect(`/animes/${anime._id}`)
    })
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/animes')
  })
}

export {
  index,
  newAnime as new,
  create,
  show,
  edit,
  update,
  deleteAnime as delete,
  createReview,
  deleteReview,


}