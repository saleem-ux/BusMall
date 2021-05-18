function setItems (){
    let products = JSON.stringify(images);
    localStorage.setItem('images',products);
  }
  
  function getItems (){
   let Object =localStorage.getItem('images');
   let reachImage =JSON.parse(Object);
   if(reachImage!==null){
    images = reachImage;
   }
  }
  getItems();
  