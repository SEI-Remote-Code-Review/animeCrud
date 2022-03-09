import { Profile } from '../models/profile.js'
import { Anime } from '../models/anime.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
			title: "profiles"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .populate('animes')
  //.populate('reviews')
  .then((profile) => {
    Anime.find({_id: {$nin: profile.animes}}, function(error,animes){
    console.log('This is PROFILE.ANIMES!!!!', profile.animes)
    Profile.findById(req.user.profile._id)
    .then(self => {
      const isSelf = self._id.equals(profile._id)
      res.render("profiles/show", {
        title: `${profile.name}'s profile`,
        profile,
        isSelf,
        animes:animes,
      })
    })
    })
  })
  .catch((err) => {
    console.log(err)
    res.redirect("/")
  })
}


export {
  index,
  show,
}