import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    tid: {
        type: String,
        required: true
    },
    uploader_name: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    videos: {
        type: [String]
    },
    rating: {
        type: [Number]
    }
});

const Course = mongoose.model('Course', courseSchema);
export { Course };
