import {Meteor} from 'meteor/meteor'
import {Associations} from '../associations'

Meteor.publish('associations.all', function(){
        return Associations.find({}, {limit: 100000, sort: {}})
})

Meteor.publish('associations.width_Image', function(){
        return Associations.find({image_url: {$exists: true}}, {limit: 100000, sort: {}})
})