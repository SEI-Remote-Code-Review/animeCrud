import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  animes: [{type: mongoose.Schema.Types.ObjectId, ref:'Anime'}],
  //reviews:[{type: mongoose.Schema.Types.ObjectId, ref:'Review'}]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
