chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
	var data = request.data || {};
	var pathname = window.location.pathname;
	
	if(pathname == "/dolibarr/expedition/card.php"){
		var products = document.querySelectorAll('tr .classfortooltip:nth-child(4)');
		Array.from(products).forEach(function(item,index,array){
			if(item.text.includes(data)){
				try{
					var input = document.getElementById('qtyl0_'+String(index));
					if(input.value == 0){
						input.value = 1;
						item.style.backgroundColor  = "orange";
					}
					else{
						input.value = 0;
						item.style.backgroundColor  = "transparent";
					}
				}
				catch (e) {}
				try{
					var input = document.getElementById('qtyl10_'+String(index));
					if(input.value == 0){
						input.value = 1;
						item.style.backgroundColor  = "orange";
					}
					else{
						input.value = 0;
						item.style.backgroundColor  = "transparent";
					}
				}
				catch (e) {}
				
				sendResponse({data: data, success: true});
			}
		});
	}
	else if(pathname == "/dolibarr/fourn/commande/dispatch.php"){
		var serials = document.querySelectorAll('input[id^="lot_number"]');
		var done = false;
		Array.from(serials).forEach(function(item,index,array){
			if(item.value == data){
				done = true;
			}
			if(item.value == "" && !done){
				item.value = data;
				done = true;
			}
		});
		if(done){
			sendResponse({data: data, success: true});
		}
		else{
			sendResponse({data: data, success: false});
		}
	}
		sendResponse({data: data, success: false});
	
});
