import mongoose from "mongoose";

const Schema = mongoose.Schema

const animeSchema = new Schema({
  mainTitle:String,
  imageURL:String,
  //genre:[String],
  studio:String,
  yearAired:Number,
  seasonAired:{type:String, enum:['Winter','Spring','Summer','Fall'], default:'Winter'},
  owner:{type: Schema.Types.ObjectId, ref:'Profile'},
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