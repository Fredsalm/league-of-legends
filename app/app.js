(function main() {

	 $('.btn-primary').click(function(){
	 	getriot();

	 })//click fin	

	 function getriot(){
	 	var nom = $(".Pseudo-control").val();
	 	var server= $(".select-serveur-val").val();

	 	if(nom !=''){
			$.ajax({
			url: 'https://'+server+'.api.riotgames.com/lol/summoner/v3/summoners/by-name/'+nom+'?api_key=RGAPI-4a3c8638-ca13-440b-8d85-50ead632a2b8',
			datatype:'json',
			success:function(data){
				var rep = affichage(data);
				$(".reponse").append(rep);
				$(".Pseudo-control").val('');
				mastery(data.id);
				match(data.accountId);
				rank(data.id);

				console.log(data);


				// var template = $('#template').html();
				// Mustache.parse(template);
				// var rendered = Mustache.render(template, {name: data.name,id: data.id, niveaux: data.summonerLevel, niveaux_maitrise: ""});
				// $('#target').append(rendered);

			},
			});	
	 	}
		
	}; // ajax 

	function affichage(data){
	  	return "<div class='dataresult id='pp'>Pseudo : "+data.name+"</div>" +
			   "<div class='dataresult'>ID : "+data.id+"</div>" +
				"<div class='dataresult'>Niveaux :"+data.summonerLevel+"</div>"

	  }; //affichage result

	function mastery(id){
		$.ajax({
			url:'https://euw1.api.riotgames.com/lol/champion-mastery/v3/scores/by-summoner/'+id+'?api_key=RGAPI-4a3c8638-ca13-440b-8d85-50ead632a2b8',
			datatype:'json',
			success:function(data2){
				$(".reponse").append("<div class='dataresult'>Niveaux Maitrise :"+data2+"</div>");
				// var template = $('#template').html();
				// Mustache.parse(template);
				// var rendered = Mustache.render(template, {niveaux_maitrise: data2});
				// $('#target').append(rendered);
			}

		})
	} // récup id 

	function match(accountId){
		$.ajax({
			url:'https://euw1.api.riotgames.com/lol/match/v3/matchlists/by-account/'+accountId+'/recent?api_key=RGAPI-4a3c8638-ca13-440b-8d85-50ead632a2b8',
			datatype:'json',
			success:function(data3){
				$(".reponse").append("<div class='dataresult'>Nombre de partie :"+data3.totalGames+"</div>");
				$(".reponse").append("<div class='dataresult'>rôle partie :"+data3.matches[19].lane+"</div>");
				console.log(data3)
				// var template = $('#template').html();
				// Mustache.parse(template);
				// var rendered = Mustache.render(template, {niveaux_maitrise: data2});
				// $('#target').append(rendered);
			}

		})
	}; // récup id 

	function rank(id){
		$.ajax({
			url:'https://euw1.api.riotgames.com/lol/league/v3/positions/by-summoner/'+id+'?api_key=RGAPI-4a3c8638-ca13-440b-8d85-50ead632a2b8',
			datatype:'json',
			success:function(data4){
				
				$(".reponse").append("<div class='dataresult'>Tier :"+data4[0].tier+"</div>");
				$(".reponse").append("<div class='dataresult'>Rang:"+data4[0].rank+"</div>");
				$(".reponse").append("<div class='dataresult'>Activ :"+data4[0].inactive+"</div>")
				// $(".reponse").append("<div class='dataresult'>League :"+data4[0].leagueName+"</div>");
				console.log(data4)
				// var template = $('#template').html();
				// Mustache.parse(template);
				// var rendered = Mustache.render(template, {niveaux_maitrise: data2});
				// $('#target').append(rendered);
			}

		})
	}; // récup id 

	// function affichage2(data2){
	//   	return
	// 			"<div class='dataresult'>Niveaux Maitrise :"+data2+"</div>"
	  // }; // fin affichache data 2


})();//fin main