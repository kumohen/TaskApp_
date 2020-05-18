var btn = document.getElementById("btn");
var title = document.getElementById("title");
var des = document.getElementById("des");
//var p = document.getElementById("item");
var ul = document.getElementById("list-items");
var root = document.getElementById("root");


    function addItem(){
        var id = Math.floor(Math.random()*1000)
       var div = document.createElement("div");
       div.className = "list-item";
       var h6 = document.createElement("h6")
       var p = document.createElement("p");
       h6.textContent = title.value;
       p.textContent = des.value ;
       div.appendChild(h6);
       div.appendChild(p);
       var br = document.createElement("br");
       div.appendChild(br) 
       var delBtn = document.createElement("button");
       delBtn.className = "delBtn";
       delBtn.appendChild(document.createTextNode("delete"));
       div.appendChild(delBtn);
       root.appendChild(div);
       title.value = ""
       des.value = ""
       
    }



function removeItem(e){
     if(e.target.classList.contains('delBtn')){
        var div = e.target.parentElement ;
        root.removeChild(div)
    }
}

btn.addEventListener('click',addItem);
root.addEventListener('click', removeItem);

