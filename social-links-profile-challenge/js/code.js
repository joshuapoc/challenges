let attr_container=document.querySelector(".attr-container"); 
let attr_links=document.getElementsByClassName("attr-links"); 
let attr_paragraphs=document.querySelectorAll(".attr-para");
for(i=0;i<attr_links.length;i++){
    attr_links[i].addEventListener("mouseover",()=>{
        attr_container.style.backgroundColor="var(--green)";
        for(j=0;j<attr_paragraphs.length;j++){
            attr_paragraphs[j].style.color="var(--dark-grey)";
        }
    });
    attr_links[i].addEventListener("mouseout",()=>{
        attr_container.style.backgroundColor="";
        for(var attr_paragraph of attr_paragraphs){
            attr_paragraph.style.color="";
        }
    });
}



