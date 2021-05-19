const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(__dirname + "/frontend"));
const courseLib= require('./backend/lib/courselib');


// edit
var mongoose= require('mongoose');
const { getallcourses } = require('./backend/lib/courselib');
const password=process.env.Mongo_Atlas_password;
var url='mongodb+srv://jeevan:9912758898@cluster0.z04xj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// var url='mongodb+srv://jeevan:<password>@cluster0.z04xj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
var dboptions={ useNewUrlParser: true , useUnifiedTopology: true };
mongoose.connect(url,dboptions);
var  db= mongoose.connection;
db.on('connected',function(){
    
console.log('mongo connected');
   
});
// courseLib.createcourse({coursename:'mean'},function(err,saveobj){
//     console.log(saveobj);

//  })

// edit
 app.get('/api/courses',courseLib.getallcourses);
 app.post('/api/courses',courseLib.createcourse);
 app.delete('/api/courses/:id',courseLib.deletecourse);
 app.put('/api/course/:id',courseLib.update);

let  users=[{  
    username:"jeevan",branch:"ece",dob:"07",id:0
},
{username:"bharath",branch:"ece",id:1}
]
app.get("/curd",function(req,res){
    res.sendFile(__dirname+'/frontend/html/curd.html')
})
app.get("/api/users",function(req,res){
    res.json(users)
    console.log(req.body);

})

app.get("/api/users/:userId",function(req,res){
    let  user= req.params.userId;
    console.log("call");
    
    let idx=-1;
    for (var i=0;i<users.length;i++)
    {
        if (users[i].id==user)
        {
            console.log(user)
          
              idx = i;
            console.log(idx)
            break;
        }
    }
        if(idx==-1)
        {
            console.log(idx+"inside  the if");
            res.json({error:'user not found'});

        }
        else{
            console.log(idx+"inside else");
            res.json(users[idx].username);
        
        }
})
app.delete("/api/users/:del",function(req,res){
    var user=req.params.del;
    for(var i=0;i<users.length;i++)
    {
    if(users[i]==users)
    {
    users.splice(i,i);
    }
    }});
app.post("/api/users",function(req,res){
    var user=req.body;
    users.push(user);
    res.json(users);
    console.log(users);
    });
// this is for todo app>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    let todos=[]
    app.get("/api/todos",function(req,res){
        res.json(todos)
        // console.log(req.body);
    
    })
    
    app.get("/api/todos/:todono",function(req,res){
        let  todo= req.params.todono;
        console.log("call");
        
        let idx=-1;
        for (var i=0;i<todos.length;i++)
        {
            if (todos[i].id==todo)
            {
                console.log(todo)
              
                  idx = i;
                console.log(idx)
                break;
            }
        }
            if(idx==-1)
            {
                console.log(idx+"inside  the if");
                res.json({error:'user not found'});
    
            }
            else{
                console.log(idx+"inside else");
                res.json(todos[idx]);
            
            }
    })
    app.delete("/api/todos/:del",function(req,res){
        var todo=req.body;
       
        for(var i=0;i<todos.length;i++)
        {
           
            if(todos[i]==todo){
                 console.log("if");
                todos.splice(i,i);
            }
        }
    // console.log(todos)
});
 app.post("/api/todos",function(req,res){
        var todo=req.body;
        todos.push(todo);
        // console.log(req);
        // console.log(todo);
        res.json(todos);
        // console.log();
        });
    
app.get("/todolocal",function(req,res){
    res.sendFile(__dirname+ "/frontend/html/todolocal.html");
})
app.get("/", function(req, res){
    let filepathh=__dirname +"/frontend/html/home.html"
    res.sendFile(filepathh);
})
app.get("/resume",function(req,res){
    let filepath = __dirname +"/frontend/html/resume.html";

    res.sendFile(filepath);
})
app.get("/color", function(req,res){
     let filepathcolor = __dirname +"/frontend/html/color.html";
     res.sendFile(filepathcolor);

})
app.get("/api", function(req,res){
    let filepathapi = __dirname +"/frontend/html/apicall.html";
    res.sendFile(filepathapi);

})
app.get("/todo", function(req,res){
    let filepathtodo = __dirname +"/frontend/html/todo.html";
    res.sendFile(filepathtodo);
})
app.get("/google",function(req,res){
    let filepath1 = __dirname +"/frontend/html/google.html"
    res.sendFile(filepath1)
})
app.get("/apple",function(req,res){
    let filepath2 = __dirname +"/frontend/html/apple.html"
    res.sendFile(filepath2)
})
app.get("/register",function(req,res)
{
    let filepathr=__dirname +"/frontend/html/register.html"
    res.sendFile(filepathr)
})
app.get("/login",function(req,res)
{
    let filepathl=__dirname +"/frontend/html/login.html"
    res.sendFile(filepathl)
})
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 //it is changed
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
