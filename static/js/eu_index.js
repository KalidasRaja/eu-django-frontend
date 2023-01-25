(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // resources/js/six_storage_home.js
  var require_six_storage_home = __commonJS({
    "resources/js/six_storage_home.js"() {
      document.addEventListener("DOMContentLoaded", () => {
        changeAtiveTab = (event, tabID) => {
          if (typeof tabID !== "undefined" && tabID !== "null" && tabID !== "") {
            let six_StorageLLC_element = event.target;
            while (six_StorageLLC_element.nodeName !== "A") {
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
            six_StorageLLC_element.classList.remove("text-light-gray-50", "bg-transparent", "opacity-30");
            six_StorageLLC_element.classList.remove();
            six_StorageLLC_element.classList.add("text-white", "text-xl", "sm:text-2xl", "lg:text-3xl", "xl:text-4xl", "border_b");
            document.getElementById(tabID).classList.remove("hidden");
            document.getElementById(tabID).classList.add("block");
          }
        };
        window.cyan = (evt) => {
          document.querySelectorAll("#home_banner").forEach((v) => v.classList.add("home_banner"));
          document.querySelectorAll("#home_banner").forEach((v) => v.classList.remove("home_pink", "home_green", "home_blue"));
        };
        window.blue = (evt) => {
          document.querySelectorAll("#home_banner").forEach((v) => v.classList.add("home_blue"));
          document.querySelectorAll("#home_banner").forEach((v) => v.classList.remove("home_banner", "home_pink", "home_green"));
        };
        window.pink = (evt) => {
          document.querySelectorAll("#home_banner").forEach((v) => v.classList.add("home_pink"));
          document.querySelectorAll("#home_banner").forEach((v) => v.classList.remove("home_banner", "home_green", "home_blue"));
        };
        window.green = (evt) => {
          document.querySelectorAll("#home_banner").forEach((v) => v.classList.add("home_green"));
          document.querySelectorAll("#home_banner").forEach((v) => v.classList.remove("home_pink", "home_banner", "home_blue"));
        };
      });
    }
  });

  // resources/js/app.js
  var import_six_storage_home = __toModule(require_six_storage_home());
  document.addEventListener("DOMContentLoaded", () => {
    window.tabstorage = (evt, storageName) => {
      var i2, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i2 = 0; i2 < tabcontent.length; i2++) {
        if (tabcontent !== "" && tabcontent !== null) {
          tabcontent[i2].style.display = "none";
        }
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i2 = 0; i2 < tablinks.length; i2++) {
        if (tablinks !== "" && tablinks !== null) {
          tablinks[i2].className = tablinks[i2].className.replace(" border-blue-700 md:border-b-4 pb-2 bg-white rounded-tl-md rounded-tr-md", "");
        }
      }
      document.getElementById(storageName).style.display = "block";
      evt.currentTarget.className += " border-blue-700 md:border-b-4 pb-2 bg-white rounded-tl-md rounded-tr-md";
    };
    window.part_tabstorage = (evt, part_storageName) => {
      var i2, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("part_tabcontent");
      for (i2 = 0; i2 < tabcontent.length; i2++) {
        if (tabcontent !== "" && tabcontent !== null) {
          tabcontent[i2].style.display = "none";
        }
      }
      tablinks = document.getElementsByClassName("part_tablinks");
      for (i2 = 0; i2 < tablinks.length; i2++) {
        if (tablinks !== "" && tablinks !== null) {
          tablinks[i2].className = tablinks[i2].className.replace(" bg-white md:border-2 border-dotted border-blue-300", "");
        }
      }
      document.getElementById(part_storageName).style.display = "block";
      evt.currentTarget.className += " bg-white md:border-2 border-dotted border-blue-300";
    };
    window.six_Storage_Feature_tabstorage = (evt, storageName) => {
      var i2, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("six_Storage_Feature_tabcontent");
      for (i2 = 0; i2 < tabcontent.length; i2++) {
        if (tabcontent !== "" && tabcontent !== null) {
          tabcontent[i2].style.display = "none";
        }
      }
      tablinks = document.getElementsByClassName("six_Storage_Features_tablinks");
      for (i2 = 0; i2 < tablinks.length; i2++) {
        if (tablinks !== "" && tablinks !== null) {
          tablinks[i2].className = tablinks[i2].className.replace(" border-blue-700 border-b-2 pb-2 text-blue-500 tracking-widest", "");
        }
      }
      document.getElementById(storageName).style.display = "block";
      evt.currentTarget.className += " border-blue-700 border-b-2 pb-2 text-blue-500 tracking-widest";
    };
    window.countrySelect = (evt) => {
      let country = document.getElementById("Global");
      let countryGlobal = document.getElementsByClassName("global");
      let countryUsa = document.getElementsByClassName("usa");
      let countryEu = document.getElementsByClassName("eu");
      let countryAustralia = document.getElementsByClassName("australia");
      let countryMena = document.getElementsByClassName("mena");
      let countryAsia = document.getElementsByClassName("asia");
      let countryAfrica = document.getElementsByClassName("africa");
      let parttablink = document.getElementsByClassName("part_tablinks");
      for (let i2 = 0; i2 < parttablink.length; i2++) {
        console.log(parttablink[i2].classList.remove = "active");
      }
      if (country.value == "Global") {
        for (let i2 = 0; i2 < countryGlobal.length; i2++) {
          countryGlobal[i2].style.display = "inline-block";
        }
      } else if (country.value == "USA") {
        for (let i2 = 0; i2 < countryGlobal.length; i2++) {
          countryGlobal[i2].style.display = "none";
        }
        for (let i2 = 0; i2 < countryUsa.length; i2++) {
          countryUsa[i2].style.display = "inline-block";
        }
      } else if (country.value == "EU") {
        for (let i2 = 0; i2 < countryGlobal.length; i2++) {
          countryGlobal[i2].style.display = "none";
        }
        for (let i2 = 0; i2 < countryEu.length; i2++) {
          countryEu[i2].style.display = "inline-block";
        }
      } else if (country.value == "AUSTRALIA") {
        for (let i2 = 0; i2 < countryGlobal.length; i2++) {
          countryGlobal[i2].style.display = "none";
        }
        for (let i2 = 0; i2 < countryAustralia.length; i2++) {
          countryAustralia[i2].style.display = "inline-block";
        }
      } else if (country.value == "MENA") {
        for (let i2 = 0; i2 < countryGlobal.length; i2++) {
          countryGlobal[i2].style.display = "none";
        }
        for (let i2 = 0; countryMena.length; i2++) {
          countryMena[i2].style.display = "inline-block";
        }
      } else if (country.value == "ASIA") {
        for (let i2 = 0; i2 < countryGlobal.length; i2++) {
          countryGlobal[i2].style.display = "none";
        }
        for (let i2 = 0; i2 < countryAsia.length; i2++) {
          countryAsia[i2].style.display = "inline-block";
        }
      } else if (country.value == "AFRICA") {
        for (let i2 = 0; i2 < countryGlobal.length; i2++) {
          countryGlobal[i2].style.display = "none";
        }
        for (let i2 = 0; i2 < countryAfrica.length; i2++) {
          countryAfrica[i2].style.display = "inline-block";
        }
      }
    };
    let accHeading = document.querySelectorAll(".accordion");
    let accPanel = document.querySelectorAll(".accordion_panel");
    for (let i2 = 0; i2 < accHeading.length; i2++) {
      if (accHeading !== "" && accHeading !== null) {
        accHeading[i2].onclick = function() {
          if (this.nextElementSibling.style.maxHeight) {
            hidePanels();
          } else {
            showPanel(this);
          }
        };
      }
    }
    window.showPanel = (elem) => {
      hidePanels();
      elem.classList.add("active_faq");
      elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + "px";
    };
    window.hidePanels = () => {
      for (let i2 = 0; i2 < accPanel.length; i2++) {
        accPanel[i2].style.maxHeight = null;
        accHeading[i2].classList.remove("active_faq");
      }
    };
    let cal_accHeading = document.querySelectorAll(".Cal_accordion");
    let cal_accPanel = document.querySelectorAll(".Cal_accordion_panel");
    for (var i = 0; i < cal_accHeading.length; i++) {
      cal_accHeading[i].onclick = function() {
        if (this.nextElementSibling.style.maxHeight) {
          cal_hidePanels();
        } else {
          cal_showPanel(this);
        }
      };
    }
    window.cal_showPanel = (elem) => {
      cal_hidePanels();
      elem.classList.add("cal_active_faq");
      elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + "px";
    };
    window.cal_hidePanels = () => {
      for (var i2 = 0; i2 < cal_accPanel.length; i2++) {
        cal_accPanel[i2].style.maxHeight = null;
        cal_accHeading[i2].classList.remove("cal_active_faq");
      }
    };
    var span = document.querySelector(".cc-typewriter span");
    var textArr = span.getAttribute("data-text").split(", ");
    var maxTextIndex = textArr.length;
    var sPerChar = 0.15;
    var sBetweenWord = 1.5;
    var textIndex = 0;
    typing(textIndex, textArr[textIndex]);
    function typing(textIndex2, text) {
      var charIndex = 0;
      var maxCharIndex = text.length - 1;
      var typeInterval = setInterval(function() {
        span.innerHTML += text[charIndex];
        if (charIndex == maxCharIndex) {
          clearInterval(typeInterval);
          setTimeout(function() {
            deleting(textIndex2, text);
          }, sBetweenWord * 1e3);
        } else {
          charIndex += 1;
        }
      }, sPerChar * 1e3);
    }
    function deleting(textIndex2, text) {
      var minCharIndex = 0;
      var charIndex = text.length - 1;
      var typeInterval = setInterval(function() {
        span.innerHTML = text.substr(0, charIndex);
        if (charIndex == minCharIndex) {
          clearInterval(typeInterval);
          textIndex2 + 1 == maxTextIndex ? textIndex2 = 0 : textIndex2 += 1;
          setTimeout(function() {
            typing(textIndex2, textArr[textIndex2]);
          }, sBetweenWord * 1e3);
        } else {
          charIndex -= 1;
        }
      }, sPerChar * 1e3);
    }
    var accItem = document.getElementsByClassName("accordionItem");
    var accHD = document.getElementsByClassName("accordionItemHeading");
    for (i = 0; i < accHD.length; i++) {
      if (accHD !== "" && accHD !== null) {
        accHD[i].addEventListener("click", toggleItem, false);
      }
    }
    function toggleItem() {
      var itemClass = this.parentNode.className;
      for (i = 0; i < accItem.length; i++) {
        if (accItem !== "" && accItem !== null) {
          accItem[i].className = "accordionItem close";
        }
      }
      if (itemClass == "accordionItem close") {
        this.parentNode.className = "accordionItem open";
      }
    }
  });
})();
