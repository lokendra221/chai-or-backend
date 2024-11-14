import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
videoFile:
{
    type: String,
    required: true
},
thumbnail :{
    type: String,
    required: true
},
tital: {
    type: String,
    required: true
},
description : {
    type: String,
    required: true
},

duration: {
    type: Number,  // cloudlary url
    required: true
},
views:{
    type: Number,
    default: 0
},
isPublished: {
    type: Boolean,
    default: true
},
owner :{
    type: Schema.Type.ObjectId,
    ref: 'User'
    
}

},
{
    timeStamp: true
}
)
videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video",videoSchema);