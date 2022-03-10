import mongoose from "mongoose";

const Schema = mongoose.Schema

const reviewSchema = new Schema ({
  score:{type:Number, enum:[1,2,3,4,5], default:3},
  pageReviews:String,
  author:{type: Schema.Types.ObjectId, ref:'Profile'},
},{
  timestamps:true
})

const threadSchema = new Schema ({
  threadTitle:String,
  post:String,
},{
  timestamps:true
})

const animeSchema = new Schema({
  mainTitle:String,
  imageURL:String,
  //genre:[String],
  studio:String,
  yearAired:Number,
  seasonAired:{type:String, enum:['Winter','Spring','Summer','Fall'], default:'Winter'},
  owner:{type: Schema.Types.ObjectId, ref:'Profile'},
  reviews: [reviewSchema],
  description:String,
  
},{
  timestamps:true
})

const Anime = mongoose.model("Anime", animeSchema)

export {
  Anime
}