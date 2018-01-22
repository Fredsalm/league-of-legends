(function main() {
	 $('.btn-primary').click(function(){
	 	getriot();
	 })	

	 function getriot(){
	 	var nom = $(".Pseudo-control").val();

	 	if(nom !=''){
			$.ajax({
			url: 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/'+nom+'?api_key=RGAPI-89e39650-ce08-430c-893d-600dd8a351b6',
			datatype:'json',
			success:function(data){
				console.log(data)
			},
			});	
	 	}
		
	};
})();