const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//create new schema
const profileSchema=new Schema({
    user:{type:Schema.Types.ObjectId, ref:'user'},
    handle:{type:String, required:true, max:40},
    company:{type:String},
    website:{type:String},
    location:{type:String},
    statis:{type:String},
    skills:{type:[String],required:true},
    bio:{type:String},
    githubusername:{type:String},
    experience:[{
        title:{type:String, required:true},
        company:{type:String, required:true},
        location:{type:String},
        from:{type:Date, required:true},
        to:{type:Date},
        current:{type:Boolean, default:true},
        description:{type:String}
    }],
    education:[{
        school:{type:String, required:true},
        degree:{type:String, required:true},
        fieldofstudy:{type:String},
        from:{type:Date, required:true},
        to:{type:Date},
        current:{type:Boolean, default:true},
        description:{type:String}
    }],
    social:{
        youtube:{
            type:String
        },
        facebook:{
            type:String
        },
        twitter:{
            type:String
        },
        linkedin:{
            type:String
        },
    },
    date: { type: Date, default: Date.now },
});
module.exports=profile=mongoose.model('profile', profileSchema);
