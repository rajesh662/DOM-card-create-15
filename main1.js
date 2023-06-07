let add = parseInt(document.querySelector(".txt").value);


	
function incre(qty){
    // add+=1;
    // 
    // for(i=0; i<=10; i++){
        qty+=1;
        document.querySelector(".txt").value = qty;
       
    // }
   
  
}


function decre(){
    if( add>0){
        add-=1;
        document.querySelector(".txt").value = add;
    }
}

