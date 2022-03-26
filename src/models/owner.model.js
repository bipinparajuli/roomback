import pkg from 'mongoose'
import { CommonRoomDetails } from './common.data.js'

const {Schema} = pkg
export const OwnerSchema = new Schema({
    roomDetails: CommonRoomDetails,
    workPreference: {
        type: String,
        enum: ['Student', 'Employeed', 'Retired', 'Other'],
        required: [true, 'Occupation is required'],
    },
    tenantPreference: {
        type: String,
        enum: ['Male', 'Female', 'Couple', 'Others'],
    },
    roomAddress: {
        district: {
            type: String,
            enum: ['Kathmandu', 'Bhaktapur', 'Lalitpur'],
        },
        area: {
            type: String,
            required: [true, 'Area is required'],
        },
    },
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    images: {
        data: Buffer,
        // type:Buffer,
        contentType: String
        // type: [String],
        // required: [true, 'Images are required'],
    },
})
