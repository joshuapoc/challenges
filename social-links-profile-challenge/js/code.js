let attr_container=document.querySelector(".attr-container"); 
let attr_links=document.getElementsByClassName("attr-links"); 
let attr_paragraphs=document.querySelectorAll(".attr-para"); 
for(i=0;i<attr_links.length;i++){
    attr_links[i].addEventListener("mouseover",()=>{
        attr_container.style.backgroundColor="var(--green)";
        attr_container.style.transition="background-colour .3s ease";
        for(j=0;j<attr_paragraphs.length;j++){
            attr_paragraphs[j].style.color="var(--dark-grey)";
            attr_paragraphs[j].style.transition="color .3s ease";
            attr_links[j].style.fontWeight="var(--weight-700)";
            attr_links[j].style.fontSize="1.1rem";
            attr_links[j].style.transition="font-size .3s ease, font-weight .3s ease";
        }
    });
    attr_links[i].addEventListener("mouseout",function(){
        attr_container.style.backgroundColor="";
        for(var attr_paragraph of attr_paragraphs){
            attr_paragraph.style.color="";
            for(var attr_link of attr_links){
                attr_link.style.fontWeight="";
                attr_link.style.fontSize="";
            }
        }
    });
}



