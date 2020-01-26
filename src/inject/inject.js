chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    var data = request.data || {};
    var products = document.querySelectorAll('tr .classfortooltip:nth-child(4)');
	Array.from(products).forEach(function(item,index,array){
		if(data.includes(item.text)){
			var input = document.getElementById('qtyl0_'+String(index));
			if(input.value == 0){
				input.value = 1;
				item.style.backgroundColor  = "orange";
			}
			else{
				input.value = 0;
				item.style.backgroundColor  = "transparent";
			}
			sendResponse({data: data, success: true});
		}
	});
    sendResponse({data: data, success: false});
});
