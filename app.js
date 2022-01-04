const express= require("express");
const bodyParser=require("body-Parser");
const date=require(__dirname + "/date.js");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var items=["Do math homwork","Go to the gym"];
var workItems=[];

//working with ejs
app.set('view engine', 'ejs');

app.get("/",function(req,res){
  let day=date.getDate();

res.render("list", {listTitle: day, newListItems: items});


});

app.post("/",function(req,res){
let item=req.body.newItem;

items.push(item);
//to redirect the code to the home
res.redirect("/");

});
app.get("/work", function(req, res){
res.render("list", {listTitle:"work list", newListItems: workItems});

});

app.post("/work",function(req,res){
  let item=req.body.newItem;
if(req.body.newItem=== "work"){
  workItems.push(item);
}else{
  item.push(item);
  //to redirect the code to the home
  res.redirect("/");
}

});

app.get("/about", function(req,res){
  res.render("about");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
