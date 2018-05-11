import {Meteor} from 'meteor/meteor'
import {Associations} from '../associations'

Meteor.methods({
'associations.insert'(association){
    delete association._id
    association.join_date = new Date()
    Associations.insert(association)
},
'associations.update'(association){
    Associations.update({_id: association._id}, {$set: association})
},
'associations.remove'(association_id){
    Associations.remove({_id: association_id})
}
})