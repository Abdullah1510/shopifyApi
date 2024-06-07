import mongoose from 'mongoose';

const nestedCollectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  }
});

const collectionSchema = new mongoose.Schema({
  collection_name: {
    type: String,
    required: true
  },
  NestedCollectionList: [nestedCollectionSchema]
});

const Collection = mongoose.model("Collection", collectionSchema);

export default Collection;
