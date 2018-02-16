var counter=1;
validToken= [1,2,3,4,5]
var social=[
  {
    token:counter++,
    name:"chiara",
    surname:"Amato",
    friends:[2],
    reqE:[],
    reqR:[],
    post:[{idP:2, mess:"bye"}]
  },
  {
    token:counter++,
    name:"gino",
    surname:"palio",
    friends:[1],
    reqE:[],
    reqR:[],
    post:[{idP:1, mess:"hello"}]
  }
]

exports.getSocial = function() {
  return social;
}
//console.log("getSocial",this.getSocial());

exports.login = function(user) {
  user.token = counter++;
  user.friends=[];
  user.reqE=[];
  user.reqR=[];
  user.post=[];
  social.push(user);

  return social
}
//console.log("login",this.login({name:"pippo", surname:"cuius"}));

exports.addPost = function(newId, newPost) {
  for (var i = 0; i < social.length; i++) {
    if (social[i].token===newId) {
      newPost.idP++;
      social[i].post.push({newPost})
    } 
  }
  return social
}
//console.log("addPost",this.addPost(1,{mess:"ciao"}));


exports.getDoReq = function(idE,idR){  
  for (var i = 0; i < social.length; i++) {
    if ((social[i].token === idE)!=(social[i].token === idR)) {
     
      for (var i = 0; i < social.length; i++) {
        if (social[i].token === idE) {
          social[i].reqE.push(idE)
    
          for (var i = 0; i < social.length; i++) {
            if ((social[i].token === idR)) {
              social[i].reqR.push(idR)
            }
          }    
        }
      }
    } 
  }
  return social
}
//console.log("getDoReq",this.getDoReq(1,2));


exports.confirm = function(id,idFri) {
  for (var i = 0; i < social.length; i++) {
    if (social[i].token === id) {
      
      for (var y = 0; y < social[i].reqR.length; i++) {
        if (social[i].reqR[y]===idFri) {
          social[i].friends.push(idFri)
          social[i].reqR.splice(y,1)
        }
      }
    }  
  }

  for (var i = 0; i < social.length; i++) {
    if (social[i].token === id) {
      
      for (var y = 0; y < social[i].reqE.length; i++) {
        if (social[i].reqE[y]===idFri) {
          social[i].friends.push(id)
          social[i].reqE.splice(y,1)
        }
      }
    }  
  }
  return "accepted"
}
console.log("confirm:", this.confirm(1,2));

exports.tokenList = function(){
  boolean=true;
  for (var i = 0; i < social.length; i++) {
    if (social[i].token===validToken[i] && (boolean===true)) {
     boolean=true;
    }
    else{boolean=false}
  }
  if(boolean===true){
    return "valid token"
  }
  return "invalid token"
}
//console.log("tokenList: ", this.tokenList());


/*
  
  var counter = products.length;
  var historyProducts = [];
  
  //see product list-vedere lista dei prodotti
  exports.getProducts = function() {
    return products;
  }
  //see the history of the products sell-vedere la storia dei prodotti venduti
  exports.getHistorySell = function() {
    return historyProducts;
  }
  //add products-aggiungere o inserire i prodotti
  exports.addProduct = function(prod) {
      prod.id = counter++;
      products.push(prod);
  }
  
  //delete products-eliminare i prodotti
  exports.deleteProduct = function(id) {
      for(var i=0; i<products.length; i++){
        if (products[i].id === id) {
            return products.splice(i, 1);
        }
      }
  }
  //edit products-modificare i prodotti
  exports.editProduct = function(id, newName, newAmount) {
      for(var i=0; i<products.length; i++){
        if (products[i].id === id) {
            products[i].amount = newAmount;
            products[i].name = newName;
        }
      }
  }
  //buy products-comprare i prodotti
  exports.buyProduct = function(id, token) {
      for(var i=0; i<products.length; i++){
        if (products[i].id === id) {
            if (products[i].amount > 0) {
                products[i].amount--;
                return historyProducts.push({
                  idProduct:products[i].id,
                  tokenUser: token,
                  timestamp: new Date()
                })
  
            }
        }
      }
  }
*/