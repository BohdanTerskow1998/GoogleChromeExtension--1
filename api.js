document.getElementById('btn-api').addEventListener("click", (e) =>
{
	var en = document.getElementById('en').value;
	var tw = document.getElementById('tw').value;
    var ch = document.getElementById('ch').value;
    var hk = document.getElementById('hk').value;



	var myHeaders = new Headers();
	myHeaders.append("Authorization", "Bearer keyUN8nTXOCdRZdAd");
	myHeaders.append("Content-Type", "application/json");
	myHeaders.append("Cookie", "brw=brwcgtbBQo0TwSGfp");

	var raw = JSON.stringify(
	{
		"records": 
		[{
			"fields": 
			{
			    "Ter_EN": en,
                "Ter_TW": tw,
                "Ter_CN": ch,
                "Ter_HK": hk
			}
		}]
	 
	});

	var requestOptions = {
	  method: 'POST',
	  headers: myHeaders,
	  body: raw,
	  redirect: 'follow'
	};

	fetch(`https://api.airtable.com/v0/appAgRdRzz96yXKAh/Authors/`, requestOptions)
	  .then(document.querySelector("form").innerHTML = "<h1 style='text-align: center; padding: 10px;'>Your data was sent!<h1>");
})

