const selectOptions = document.querySelector('#selectOptions');
const resultsBtn = document.querySelector('#getResultsBtn');
const resultsTitle = document.querySelector('#resultsTitle');
const resultsArea = document.querySelector('#resultsArea');
const endpoint = 'https://ghibliapi.herokuapp.com/';


resultsBtn.onclick = () =>{
	let apiString = endpoint + selectOptions.value;

	fetch(apiString)
		.then(response => response.json())
		.then( data =>{
			resultsTitle.innerHTML = `List of ${selectOptions.value}`;
			if(selectOptions.value == "films"){
				for(var i = 0; i < data.length; i++){
					resultsArea.innerHTML += `
					<div class="result">
					<h2>${data[i].title}</h2>
					<h4>${data[i].director}</h4>
					<h5>${data[i].producer}</h5>
					<h6>${data[i].release_date}</h6>
					<h7>${data[i].rt_score}</h7>
					<p>${data[i].description}</p>
					</div><hr />
					`;
					//console.log(data[i].title);
				}

			} else if(selectOptions.value == "species"){
				let speciesCount = 0;
				for(var i = 0; i < data.length; i++){

					//let peopleArray = [];
					let resultDiv = document.createElement('div');
					resultDiv.setAttribute('class','result');
					resultsArea.appendChild(resultDiv);
					resultDiv.innerHTML += `	
						<h2>${data[i].name}</h2>
						<h4>${data[i].classification}</h4>
					`;
					let ul = document.createElement('ul');
					resultDiv.appendChild(ul);
					for(var p = 0; p < data[i].people.length; p++){
						
						
						fetch(data[i].people[p])
						.then(peopleresponse => peopleresponse.json())
						.then( peopledata => {
							//console.log('people'+i);
							console.log(ul);
							ul.innerHTML += `
								<li><span style="color: #25587E; font-weight: bold;">${peopledata.name}</span> | ${peopledata.gender} </li>
							`;
							
						});
					}
					
					//resultsArea.innerHTML += ``;
					
				}
			} else if(selectOptions.value == "locations"){
				for(var i = 0; i < data.length; i++){
					resultsArea.innerHTML += `
					<div class="result">
					<h2>${data[i].name}</h2>
					<h4>${data[i].climate}</h4>
					<h5>${data[i].terrain}</h5>
					<h6>${data[i].surface_water}</h6>
					<h7>${data[i].rt_score}</h7>
					<p>${data[i].description}</p>
					</div><hr />
					`;
				}				
			} else if(selectOptions.value == "vehicles"){
				for(var i = 0; i < data.length; i++){
					resultsArea.innerHTML += `
					<div class="result">
					<h2>${data[i].name}</h2>
					<h4>${data[i].vehicle_class}</h4>
					<h5>${data[i].length}</h5>
					<p>${data[i].description}</p>
					</div><hr />
					`;
				}
			}
	});
};




