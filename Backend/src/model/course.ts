import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    tid: {
        type: String,
        required: true
    },
    uploader_name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
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
