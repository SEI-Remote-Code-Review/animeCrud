import mongoose from "mongoose";

const Schema = mongoose.Schema

const animeSchema = new Schema({
  mainTitle:String,
  genre:[String],
  yearAired:Number,
  seasonAired:String,
  numEpisodes:Number,
  description:String,
})

const Anime = mongoose.model("Anime", animeSchema)

export {
  Anime
}