import {Mongo} from 'meteor/mongo'
import SimpleSchema from 'simpl-schema'

export const Associations = new Mongo.Collection('associations')

const AssociationsSchema = new SimpleSchema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    image_url: {
        type: String,
        optional: true
    }
})

Associations.attachSchema(AssociationsSchema);