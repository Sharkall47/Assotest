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
    },
    join_date: {
        type: Date,
        optional: true
    },
    updated_at: {
        type: Date,
        autoValue: () => {
            return new Date()
        }
    },
})

Associations.attachSchema(AssociationsSchema);