import mongoose from "mongoose";

const Schema = mongoose.Schema

const animeSchema = new Schema({
  mainTitle:String,
  imageURL:String,
  genre:[String],
  yearAired:Number,
  seasonAired:String,
  postBy:[{type: Schema.Types.ObjectId, ref:'Profile'}],
  reviews: [{type:Schema.Types.ObjectId, ref:'Review'}],
  //numEpisodes:Number,
  description:String,
},{
  timestamps:true
})

const Anime = mongoose.model("Anime", animeSchema)

export {
  Anime
}