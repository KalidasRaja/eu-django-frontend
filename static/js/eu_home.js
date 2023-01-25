//**
// Eu site migrated script file is here (home.js for home page scripting functions)
//**

 document.addEventListener('DOMContentLoaded', () =>{

    changeAtiveTab =(event,tabID) =>{
        if( typeof tabID !== 'undefined' && tabID !== 'null' && tabID !==''){
            let six_StorageLLC_element = event.target;
            while (six_StorageLLC_element.nodeName !== "A"){
                six_StorageLLC_element = six_StorageLLC_element.parentNode;
            }
            ulElement = six_StorageLLC_element.parentNode.parentNode;
            aElements = ulElement.querySelectorAll(" li > a");
            six_StorageLLC_tabContents = document.getElementById("six_Storage_LLC_tabs_id").querySelectorAll(".six_Storage_LLC_tab_content > div");
                for (let i = 0; i < aElements.length; i++) {
                    aElements[i].classList.remove("text-white", "text-xl", "sm:text-2xl", "lg:text-3xl", "xl:text-4xl", "border_b");
                    aElements[i].classList.add("text-light-gray-50", "bg-transparent", "opacity-30");
                    six_StorageLLC_tabContents[i].classList.add("hidden");
                    six_StorageLLC_tabContents[i].classList.remove("block");
                }
                six_StorageLLC_element.classList.remove("text-light-gray-50", "bg-transparent", "opacity-30")
                six_StorageLLC_element.classList.remove();
                six_StorageLLC_element.classList.add("text-white", "text-xl", "sm:text-2xl", "lg:text-3xl", "xl:text-4xl", "border_b");
                document.getElementById(tabID).classList.remove("hidden");
                document.getElementById(tabID).classList.add("block");
        }

    }




        window.cyan=(evt)=> {
        document.querySelectorAll("#home_banner").forEach(v => v.classList.add ("home_banner"));
        document.querySelectorAll("#home_banner").forEach(v => v.classList.remove ("home_pink", "home_green", "home_blue"));
        }

        window.blue= (evt)=>{
            document.querySelectorAll("#home_banner").forEach(v => v.classList.add ("home_blue"));
            document.querySelectorAll("#home_banner").forEach(v => v.classList.remove ("home_banner", "home_pink", "home_green"));
        }

        window.pink=(evt)=> {
        document.querySelectorAll("#home_banner").forEach(v => v.classList.add("home_pink"));
        document.querySelectorAll("#home_banner").forEach(v => v.classList.remove ("home_banner", "home_green", "home_blue"));
        }

        window.green=(evt)=> {
        document.querySelectorAll("#home_banner").forEach(v => v.classList.add("home_green"));
        document.querySelectorAll("#home_banner").forEach(v => v.classList.remove ("home_pink", "home_banner", "home_blue"));
        }





    // home tabs function is here
    // let home_tabContainer = document.querySelector("#home_tabs");
    // let home_tabTogglers = home_tabContainer.querySelectorAll("#home_tabs a")

    // if (typeof home_tabTogglers !== 'undefined' && home_tabTogglers !== 'null' && home_tabTogglers !== '') {

    //     home_tabTogglers.forEach(function (home_toggler) {
    //         home_toggler.addEventListener("click", function (home_e) {
    //             home_e.preventDefault();

    //             let home_tabName = this.getAttribute("href");
    //             let home_tabContents = document.querySelector("#home_tab_contents");
    //             for (let i = 0; i < home_tabContents.children.length; i++) {
    //                 home_tabTogglers[i].parentElement.classList.remove("text-white", "text-3xl", "md:text-4xl", "lg:text-5xl", "border-orange-400");
    //                 home_tabContents.children[i].classList.remove("hidden");

    //                 if ("#" + home_tabContents.children[i].id === home_tabName) {
    //                     continue;
    //                 }
    //                 home_tabContents.children[i].classList.add("hidden");
    //             }
    //             home_e.target.parentElement.classList.add("text-white", "text-3xl", "md:text-4xl", "lg:text-5xl", "border-orange-400");
    //         });
    //     });

    // }




 });