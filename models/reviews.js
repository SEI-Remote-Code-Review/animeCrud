import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema ({
  score:{type:Number, enum:[1,2,3,4,5], default:3},
  pageReviews:String,
  reviewOwner:{type: Schema.Types.ObjectId, ref:'Profile'},
},{
  timestamps:true
})

const Review = mongoose.model('Review', reviewSchema)

export {
  Review
}