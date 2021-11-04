const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        image: { type: String },
        slug: { type: String, slug: 'name', unique: true },
        videoID: { type: String, required: true },
        level: { type: String },
        deletedAt: { type: Date },
    },
    {
        timestamps: true,
    },
);

mongoose.plugin(slug);
Course.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('Course', Course);
