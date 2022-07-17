fetch("https://api.covid19api.com/summary")

  .then((response) => response.json())
  .then((json) => {
    
  
    var li = `<tr><th>Country</th>
                <th>CountryCode</th>
                 <th>Date</th>
                 <th>New Confirmed</th>
                 <th>New Deaths</th>
                 <th>Total Confirmed</th>
                 <th>Total Deaths</th>
              </tr>`;
             console.log(json['Countries']);
              
      //  json.forEach((Countries) => {
        json['Countries'].forEach((Countries)=> {
        li += `<tr>
        <td>${Countries.Country}</td>
        <td>${Countries.CountryCode} </td>
        <td>${Countries.Date}</td>
        <td>${Countries.NewConfirmed}</td>
        <td>${Countries.NewDeaths}</td>
        <td>${Countries.TotalConfirmed}</td>
        <td>${Countries.TotalDeaths}</td>
      </tr>`;
    });

    document.getElementById("users").innerHTML = li;
  });


function searchData() {


  var  filter, table, tr, td, i, txtValue;
  filter =  document.getElementById("search").value.toUpperCase();
  
  
  table = document.getElementById("users");
  var LstTR = table.getElementsByTagName("tr");

  for (i = 0; i < LstTR.length; i++) {
    td = LstTR[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().includes(filter)) {
        LstTR[i].style.display = "";
      } else {
        LstTR[i].style.display = "none";
      }
    }       
  }
}


function clearFilter() {
  document.getElementById("search").value="";
  var  table, i;
  table = document.getElementById("users");
  var LstTR = table.getElementsByTagName("tr");

  for (i = 0; i < LstTR.length; i++) {
        LstTR[i].style.display = "";
    }       
  }
