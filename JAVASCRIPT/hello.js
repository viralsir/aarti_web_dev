 function hello()
 {

            let h1tag=document.querySelector("h1");

            if(h1tag.innerHTML=="hello")
            {
                h1tag.innerHTML="Good bye";
            }
            else{
                h1tag.innerHTML="hello";
            }

 }
    document.addEventListener('DOMContentLoaded',function(){
        document.querySelector("button").onclick=hello;
    })

