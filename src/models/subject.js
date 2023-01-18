import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const subjectSchema = new Schema({
    SubjectName: {
        type: String,
        required: true,
    },
    SubjectCode: {
        type: String,
        required: true,
        unique: true
    },
    details: {
        type: Number,
        required: true
    },
    Books: {
        type: Array,
        required: true,
        "default": [
            {
                Name: {
                    type: String,
                    required: true,
                },
                Author: {
                    type: String,
                    required: true,
                },
            }
        ]

    },
    Units: {
        type: Array,
        required: true,
        "default": [
            {
                Name: {
                    type: String,
                    required: true,
                },
                topics: {
                    type: Array,
                    required: true,
                },

            }]
    },
}, { timestamps: false });

const Subject = model('Subject', subjectSchema);
export default Student;