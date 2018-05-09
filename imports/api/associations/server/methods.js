import {Meteor} from 'meteor/meteor'
import {Associations} from '../associations'

Meteor.methods({
'associations.insert'(association){
    association.join_date = new Date()
    Associations.insert(association)
},
'associations.update'(association){
    if(!this.userId){
        throw new Meteor.Error('403', 'Vous devez vous connecter')
    }else{
        Associations.update({_id: association._id}, {$set: association})
    }
},
'associations.remove'(association_id){
        Associations.remove({_id: association_id})
}
})