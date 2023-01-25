document.addEventListener('DOMContentLoaded', () => {

// Accordian JS is goes here

	var accItem = document.getElementsByClassName('accordionItem');
    var accHD = document.getElementsByClassName('accordionItemHeading');
    for (i = 0; i < accHD.length; i++) {
        if(accHD !=='' && accHD !==null){
			accHD[i].addEventListener('click', toggleItem, false);
		}
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
			if(accItem !=='' && accItem !==null){
				accItem[i].className = 'accordionItem close';
			}
        }
        if (itemClass == 'accordionItem close') {
            this.parentNode.className = 'accordionItem open';
        }
    }
});