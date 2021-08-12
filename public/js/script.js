async function getMovies() {
	await fetch('http://localhost:3000/movies')
 .then(function(response){
		return response.json();
	})
	.then(function(obj){
		
		console.log(obj);
		var addedString="";
		for(i=0;i<obj.length;i++)
		{
		addedString+="<li id="+i+"><img id="+i+"i width=150px height=220px src='"+obj[i].posterPath+"'><br><div id="+i+"t>"+obj[i].title+"</div><div id="+i+"r>"+obj[i].releaseYear+"</div></li><button type='button' class='btn btn-outline-primary'onclick=addFavourite("+i+")>Add to Favourites</button><br><br><br>";
		document.getElementById("moviesList").innerHTML=addedString;
	    }
	})
	.catch(function(error){
		console.error();('Something wrong with fetching json file');
		console.error(error);
    });	
}


async function getFavourites() {await fetch('http://localhost:3000/favourites')
.then(function(response){
	 return response.json();
 })
 .then(function(obj){
	 
	 console.log(obj);
	 var addedString="";
	 for(i=0;i<obj.length;i++)
	 {
	 addedString+="<li id="+i+"><img id="+i+"i width=150px height=220px src='"+obj[i].posterPath+"'><br><div id="+i+"t>"+obj[i].title+"</div><div id="+i+"r>"+obj[i].releaseYear+"</div></li><button type='button' class='btn btn-outline-primary'onclick=addFavourite("+i+")>Add to Favourites</button><br><br><br>";
	 document.getElementById("favouritesList").innerHTML=addedString;
		 }
 })
 .catch(function(error){
	 console.error();('Something wrong with fetching json file');
	 console.error(error);
	 });	
}
	
var addedFav="";
function addFavourite(j) {
	console.log(document.getElementById(j+"t").innerHTML);
	if(addedFav.includes(document.getElementById(j).innerHTML)==true)
	{
		alert("Already added");
	}
	else
    {
		
	addedFav+="<li>"+document.getElementById(j).innerHTML+"</li><br><br><br>";
	document.getElementById("favouritesList").innerHTML=addedFav;
	
	
	
	fetch('http://localhost:3000/favourites',{
	
		method:'POST',
		body:JSON.stringify({
			id:j+1,
			title:document.getElementById(j+"t").innerHTML,
			posterPath:document.getElementById(j+"i").getAttribute("src"),
			releaseYear:document.getElementById(j+"r").innerHTML,		
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
	 
},
})
  .then((response) => response.json())
  .then((json) => console.log(json))
	.catch((err)=> { console.log(err)});
	 
}
}
// module.exports = {
// 	getMovies,
// 	getFavourites,
// 	addFavourite
// };

// You will get error - Uncaught ReferenceError: module is not defined
// while running this script on browser which you shall ignore
// as this is required for testing purposes and shall not hinder
// it's normal execution


