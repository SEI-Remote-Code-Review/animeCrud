import mongoose from 'mongoose'

const Schema = mongoose.Schema

const replySchema = new Schema({
  author: [{type: Schema.Types.ObjectId, ref: 'Profile'}],
  post: String
},{
  timestamps: true
});

const threadSchema = new Schema({
  threadTitle: String,
  post:String,
  owner:{type: Schema.Types.ObjectId, ref:'Profile'},
  replies: [replySchema]
},{
  timestamps: true
})

const Thread = mongoose.model('Thread', threadSchema)

export {
  Thread
}