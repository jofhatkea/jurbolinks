function jurboLinks(config){
  window.addEventListener("DOMContentLoaded",()=>{
    let links = document.querySelectorAll(config.navigationLinks);
    links.forEach(li=>{
      li.addEventListener("click",(e)=>{
        e.preventDefault();
        fetch(e.target.getAttribute("href")).then(e=>e.text()).then(swap);
        function swap(data){
          let placeHolder = document.createElement("div");
          placeHolder.innerHTML=data;
          history.pushState({}, placeHolder.querySelector("title").textContent, e.target.getAttribute("href"))
          document.title=placeHolder.querySelector("title").textContent;
          document.body.replaceChild(
            placeHolder.querySelector(config.mainContent),
            document.querySelector(config.mainContent)
          );
        }
      });
    });
  });
}
jurboLinks({
  navigationLinks: "nav a",
  mainContent: "main"
})