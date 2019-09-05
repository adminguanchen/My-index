var express=  require("express");
var app = express();
var mongoose = require("mongoose");

var crypto = require("crypto");

let mongodbs = mongoose.model("datahe",{
    mail:String,
    name:String,
    prss:String
})

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');  
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');   
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
        next()
})


app.get("/get",function(req,res){
    
    var mail = req.query.mail;
    var prss=req.query.prss;
    var name=req.query.name;
    
    //加密
    var md5Pwd=crypto.createHash('md5').update(prss).digest('hex');
    
    console.log(md5Pwd);
    console.log(mail+"-----"+prss+"----"+name)

    mongoose.connect("mongodb://localhost:27017/chenku",{useNewUrlParser:true},function(err){
        if(err){
            console.log(err)
        }else{
            console.log("ok")
            
            let mongooses = new mongodbs({
                name,
                mail,
                prss:md5Pwd
            })
        
            mongooses.save().then((ok)=>{
                res.send({mes:"注册成功",status:200,linkid:1})
            },(err)=>{
                res.send({mes:"注册失败",status:500,linkid:0})
            })
            
        }
    })
});

app.get("/find",function(req,res){
    var mail = req.query.mail;
    var token = req.query.token;
    console.log(mail)
    
    var md5Pwd=crypto.createHash('md5').update(token).digest('hex'); 
    console.log(md5Pwd);
    
    mongoose.connect("mongodb://localhost:27017/chenku",{useNewUrlParser:true},function(err){
        if(err){
            console.log(err)
        }else{
            console.log("ok")
            
            mongodbs.find({mail:mail,prss:md5Pwd}).then((ok)=>{
                if(ok.length>0){
                      res.send({mes:"登录成功",status:200,linkid:1})
                } else if(ok.length==0){
                      res.send({mes:"登录失败",status:500,linkid:0})
                }
              
            },(err)=>{
                res.send({mes:"登录失败",status:500,linkid:0})
            })
        }
    })
    
})
app.listen(3000)