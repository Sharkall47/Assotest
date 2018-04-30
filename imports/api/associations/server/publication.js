import {Meteor} from 'meteor/meteor'
import {Associations} from '../associations'

Meteor.publish('associations.all', function(){
   
        return Associations.find({}, {limit: 100000, sort: {}})

})