var type = new Typed(".typing",{
    strings:[" ... ","Faculty of Science and Technology", "IT....Student","","BaTMan"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


const nav = document.querySelector(".nav"),
       navList = nav.querySelectorAll("li"),
       totalNavList =navList.length;
       allSection = document.querySelectorAll(".section"),
       totallSection = allSection.length;
       for(let i=0; i<totalNavList; i++)
       {
           const a = navList[i].querySelector("a");
           a.addEventListener("click",function()
           {
                 removeBackSection();

                  for(let j=0; j<totalNavList; j++)
                  {

                      if(navList[j].querySelector("a").classList.contains("active"))
                      {
                          addBackSection(j);
                        // allSection[j].classList.add("back-section");
                      }

                      navList[j].querySelector("a").classList.remove("active");
                  }
                  this.classList.add("active")
                  showSection(this);
                  if(window.innerWidth<1200){
                      asideSectionTogglerBtn();
                  }
           })
       }
       function removeBackSection(){
           for(let i=0; i<totallSection; i++)
           {
               allSection[i].classList.remove("back-section");

           }
       }
       function addBackSection(num){
        allSection[num].classList.add("back-section");
       }
       function showSection(element){
           for(let i=0; i<totallSection; i++){
               allSection[i].classList.remove("active")
           }
           const target=element.getAttribute("href").split("#")[1];
          document.querySelector("#" + target).classList.add("active")

       }
       function updateNav(element)
       {
          for(let i=0; i<totalNavList; i++)
          {
              navList[i].querySelector("a").classList.remove("active");
              const target=element.getAttribute("href").split("#")[1];
              if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                  navList[i].querySelector("a").classList.add("active")
              }
          }
       }
       document.querySelector(".hire-me").addEventListener("click",function()
       {
           const sectionIndex = this.getAttribute("data-section-index");
        //    console.log(sectionIndex);
           showSection(this);
           updateNav(this);
           removeBackSection();
           addBackSection(sectionIndex);

       })

       const navTogglerBtn = document.querySelector(".nav-toggle"),
       aside = document.querySelector(".aside");
       navTogglerBtn.addEventListener("click", () => 
       {
           asideSectionTogglerBtn(); 
       })
       function asideSectionTogglerBtn(){
           aside.classList.toggle("open");
           navTogglerBtn.classList.toggle("open");
           for(let i=0; i<totallSection; i++){
               allSection[i].classList.toggle("open");
           }
       }

// let menu = document.querySelector('#menu-bars');
// let header = document.querySelector('header');

// menu.onclick = () =>{
//     menu.classList.toggle('fa-times');
//     header.classList.toggle('active');
// }

// window.onscroll = () =>{
//     menu.classList.remove('fa-times');
//     header.classList.remove('active');
// }

// let cursor1 = document.querySelector('.cursor-1');
// let cursor2 = document.querySelector('.cursor-2');

// window.onmousemove = (e) =>{
//     cursor1.style.top = e.pageY + 'px';
//     cursor1.style.left = e.pageX + 'px';
//     cursor2.style.top = e.pageY + 'px';
//     cursor2.style.left = e.pageX + 'px';
// }

// document.querySelectorAll('a').forEach(links =>{

//     links.onmouseenter = () =>{
//         cursor1.classList.add('active');
//         cursor2.classList.add('active');
//     }

//     links.onmouseleave = () =>{
//         cursor1.classList.remove('active');
//         cursor2.classList.remove('active');
//     }

// });




