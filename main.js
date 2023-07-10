const faqs=document.querySelectorAll(".faq");

faqs.forEach((faq)=>{
    faq.onclick = () =>{
        // faqs.forEach(Remove=>{Remove.classList.remove("active")});
        faq.classList.toggle("active");
    };
    
})


