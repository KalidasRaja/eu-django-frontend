//**
// Eu site migrated script file is here (header.js for header scripts=ing functions)
//**

document.addEventListener('DOMContentLoaded', () =>{
    window.addEventListener("scroll",function(){
        let Nav_Sticky = document.getElementById("Nav_Sticky");

        if (window.pageYOffset > 0){
            Nav_Sticky.classList.add("is-sticky");
        }else{
            Nav_Sticky.classList.remove("is-sticky");
        }
    });

    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");

    // add event listeners
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });

    // Check, Uncheck and Single Checked Box JS goes here

    var six_Storage_LLC_checkbox;
    if (six_Storage_LLC_checkbox !=='undefined' && six_Storage_LLC_checkbox !== 'null' && six_Storage_LLC_checkbox !==''){
        document.addEventListener('input', (e)=>{
            var closest = e.target.closest("*[data-name='check']");
            if (e.target.closest("*[data-name]")){
                if(six_Storage_LLC_checkbox)
                six_Storage_LLC_checkbox.checked = false;
            }
            if (e.target !== six_Storage_LLC_checkbox)
            six_Storage_LLC_checkbox = e.target;
            else
            six_Storage_LLC_checkbox = undefined;
        });
    }


});