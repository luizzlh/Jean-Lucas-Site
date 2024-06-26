const carrossel = document.getElementById("carrossel");
const tituloCarrossel = document.getElementById("tituloMouse");

const santos = document.getElementById("santos");
const flamengo = document.getElementById("flamengo");
const lyon = document.getElementById("lyon");
const monaco = document.getElementById("monaco");
const bahia = document.getElementById("bahia");

const clubes = [santos,flamengo,lyon,monaco,bahia]

clubes.forEach(function(e){
   e.addEventListener("click", function(evt){
      const el = evt.target || evt.srcElement;
      const id = el.id;
      
      document.querySelectorAll(".apresentacao").forEach(function(apresentacao){
         apresentacao.classList.add("hide")
         if(apresentacao.classList.contains(id)){
            apresentacao.classList.remove("hide")
            window.scrollTo(0, 1000)
         }
      });
   });
});



carrossel.addEventListener("mouseover", ()=>{
   tituloCarrossel.style.opacity = 1;
});

carrossel.addEventListener("mouseleave", ()=>{
   tituloCarrossel.style.opacity = 0;
});