var selectOptions = document.querySelector('#selectOptions');
var resultsBtn = document.querySelector('#getResultsBtn');
var resultsTitle = document.querySelector('#resultsTitle');
var resultsArea = document.querySelector('#resultsArea');
var endpoint = 'https://ghibliapi.herokuapp.com/';
resultsBtn.onclick = function () {
    var apiString = endpoint + selectOptions.value;
    fetch(apiString)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        resultsTitle.innerHTML = "List of " + selectOptions.value;
        if (selectOptions.value == "films") {
            for (var i = 0; i < data.length; i++) {
                resultsArea.innerHTML += "\n\t\t\t\t\t<div class=\"result\">\n\t\t\t\t\t<h2>" + data[i].title + "</h2>\n\t\t\t\t\t<h4>" + data[i].director + "</h4>\n\t\t\t\t\t<h5>" + data[i].producer + "</h5>\n\t\t\t\t\t<h6>" + data[i].release_date + "</h6>\n\t\t\t\t\t<h7>" + data[i].rt_score + "</h7>\n\t\t\t\t\t<p>" + data[i].description + "</p>\n\t\t\t\t\t</div><hr />\n\t\t\t\t\t";
                //console.log(data[i].title);
            }
        }
        else if (selectOptions.value == "species") {
            var speciesCount = 0;
            var _loop_1 = function () {
                //let peopleArray = [];
                var resultDiv = document.createElement('div');
                resultDiv.setAttribute('class', 'result');
                resultsArea.appendChild(resultDiv);
                resultDiv.innerHTML += "\t\n\t\t\t\t\t\t<h2>" + data[i].name + "</h2>\n\t\t\t\t\t\t<h4>" + data[i].classification + "</h4>\n\t\t\t\t\t";
                var ul = document.createElement('ul');
                resultDiv.appendChild(ul);
                for (var p = 0; p < data[i].people.length; p++) {
                    fetch(data[i].people[p])
                        .then(function (peopleresponse) { return peopleresponse.json(); })
                        .then(function (peopledata) {
                        //console.log('people'+i);
                        console.log(ul);
                        ul.innerHTML += "\n\t\t\t\t\t\t\t\t<li><span style=\"color: #25587E; font-weight: bold;\">" + peopledata.name + "</span> | " + peopledata.gender + " </li>\n\t\t\t\t\t\t\t";
                    });
                }
                //resultsArea.innerHTML += ``;
            };
            for (var i = 0; i < data.length; i++) {
                _loop_1();
            }
        }
        else if (selectOptions.value == "locations") {
            for (var i = 0; i < data.length; i++) {
                resultsArea.innerHTML += "\n\t\t\t\t\t<div class=\"result\">\n\t\t\t\t\t<h2>" + data[i].name + "</h2>\n\t\t\t\t\t<h4>" + data[i].climate + "</h4>\n\t\t\t\t\t<h5>" + data[i].terrain + "</h5>\n\t\t\t\t\t<h6>" + data[i].surface_water + "</h6>\n\t\t\t\t\t<h7>" + data[i].rt_score + "</h7>\n\t\t\t\t\t<p>" + data[i].description + "</p>\n\t\t\t\t\t</div><hr />\n\t\t\t\t\t";
            }
        }
        else if (selectOptions.value == "vehicles") {
            for (var i = 0; i < data.length; i++) {
                resultsArea.innerHTML += "\n\t\t\t\t\t<div class=\"result\">\n\t\t\t\t\t<h2>" + data[i].name + "</h2>\n\t\t\t\t\t<h4>" + data[i].vehicle_class + "</h4>\n\t\t\t\t\t<h5>" + data[i].length + "</h5>\n\t\t\t\t\t<p>" + data[i].description + "</p>\n\t\t\t\t\t</div><hr />\n\t\t\t\t\t";
            }
        }
    });
};
