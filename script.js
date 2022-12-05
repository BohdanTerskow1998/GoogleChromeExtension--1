async function getResponse() {
	const response = await fetch(
		'https://api.airtable.com/v0/appxH1j5ZN8LW7imT/tbl3ZEhkmwPzXGbsY',
		{
			method: 'GET',
			headers: {
				'Authorization': 'Bearer keyUN8nTXOCdRZdAd',
			}
		}
	);
	const data = await response.json();
	const tagInfo = document.createElement("span");
	data["records"].forEach(elem => {
		[...document.body.getElementsByTagName('*')].find(tag => 
		{
			if(tag.textContent == elem["fields"]["Ter_EN"])
			{
				tag.innerHTML = `<span class="airtable-en">${elem["fields"]["Ter_EN"]}</span>`;
				tag.addEventListener("mouseenter", (e) => 
				{
					if(tagInfo.style.display !== "block")
					{
						tagInfo.classList.add("display");
						tagInfo.innerHTML = `
				  			<p class="lang-label">TW - <span id="tw-text-for-copy">${elem["fields"]["Ter_TW"]}</span> <button class="button-names-tw">COPY</button></p> 
				  			<p class="lang-label">CH - <span id="ch-text-for-copy">${elem["fields"]["Ter_CN"]}</span> <button class="button-names-ch">COPY</button></p> 
				  			<p class="lang-label">HK - <span id="hk-text-for-copy">${elem["fields"]["Ter_HK"]}</span> <button class="button-names-hk">COPY</button></p>
			  			`;
						tagInfo.style.display = "block";
						tagInfo.style.zIndex = "100";
						tagInfo.style.left = e.pageX + "px";
						tagInfo.style.top = e.pageY + "px";
						document.querySelector(".button-names-tw").addEventListener("click", (e) =>
						{
							let text = document.getElementById("tw-text-for-copy");
							window.getSelection().selectAllChildren(text);
							document.execCommand("Copy");
						})
						document.querySelector(".button-names-ch").addEventListener("click", (e) =>
						{
							let text = document.getElementById("ch-text-for-copy");
							window.getSelection().selectAllChildren(text);
							document.execCommand("Copy");
						})
						document.querySelector(".button-names-hk").addEventListener("click", (e) =>
						{
							let text = document.getElementById("hk-text-for-copy");
							window.getSelection().selectAllChildren(text);
							document.execCommand("Copy");
						})
					}
				})
				document.addEventListener("mouseover", (e) => 
				{
					if(!e.composedPath().includes(tagInfo))
					{
						tagInfo.innerHTML = "";
						tagInfo.style.opacity = 0;
						tagInfo.style.display = "none";
						tagInfo.classList.remove("display");
					}
				})
				document.body.insertBefore(tagInfo, null);
			}

			if(tag.textContent == elem["fields"]["Ter_CN"])
			{
				tag.innerHTML = `<span class="airtable-cn">${elem["fields"]["Ter_CN"]}</span>`;
				tag.addEventListener("mouseenter", (e) => 
				{
					if(tagInfo.style.display !== "block")
					{
						tag.innerHTML = `<span class="airtable-cn">${elem["fields"]["Ter_EN"]}</span>`;
						tagInfo.classList.add("display");
						tagInfo.innerHTML = `
							<p class="lang-label">EN - <span id="en-text-for-copy">${elem["fields"]["Ter_EN"]}</span> <button class="button-names-en">COPY</button></p> 
				  			<p class="lang-label">TW - <span id="tw-text-for-copy">${elem["fields"]["Ter_TW"]}</span> <button class="button-names-tw">COPY</button></p> 
				  			<p class="lang-label">HK - <span id="hk-text-for-copy">${elem["fields"]["Ter_HK"]}</span> <button class="button-names-hk">COPY</button></p>
			  			`;
						tagInfo.style.display = "block";
						tagInfo.style.zIndex = "100";
						tagInfo.style.left = e.pageX + "px";
						tagInfo.style.top = e.pageY + "px";
						document.querySelector(".button-names-en").addEventListener("click", (e) =>
						{
							let text = document.getElementById("en-text-for-copy");
							window.getSelection().selectAllChildren(text);
							document.execCommand("Copy");
						})
						document.querySelector(".button-names-tw").addEventListener("click", (e) =>
						{
							let text = document.getElementById("tw-text-for-copy");
							window.getSelection().selectAllChildren(text);
							document.execCommand("Copy");
						})
						document.querySelector(".button-names-hk").addEventListener("click", (e) =>
						{
							let text = document.getElementById("hk-text-for-copy");
							window.getSelection().selectAllChildren(text);
							document.execCommand("Copy");
						})
					}
				})
				document.addEventListener("mouseover", (e) => 
				{
					if(!e.composedPath().includes(tagInfo))
					{
						tag.innerHTML = `<span class="airtable-cn">${elem["fields"]["Ter_CN"]}</span>`;
						tagInfo.innerHTML = "";
						tagInfo.style.opacity = 0;
						tagInfo.style.display = "none";
						tagInfo.classList.remove("display");
					}
				})
				document.body.insertBefore(tagInfo, null);
			}

			if(tag.textContent == elem["fields"]["Ter_TW"])
			{
				tag.innerHTML = `<span class="airtable-tw">${elem["fields"]["Ter_TW"]}</span>`;
				tag.addEventListener("mouseenter", (e) => 
				{
					if(tagInfo.style.display !== "block")
					{
						tag.innerHTML = `<span class="airtable-tw">${elem["fields"]["Ter_EN"]}</span>`;
						tagInfo.classList.add("display");
						tagInfo.innerHTML = `
							<p class="lang-label">EN - <span id="en-text-for-copy">${elem["fields"]["Ter_EN"]}</span> <button class="button-names-en">COPY</button></p>
				  			<p class="lang-label">CN - <span id="cn-text-for-copy">${elem["fields"]["Ter_CN"]}</span> <button class="button-names-ch">COPY</button></p> 
				  			<p class="lang-label">HK - <span id="hk-text-for-copy">${elem["fields"]["Ter_HK"]}</span> <button class="button-names-hk">COPY</button></p>
							`;
						tagInfo.style.display = "block";
						tagInfo.style.zIndex = "100";
						tagInfo.style.left = e.pageX + "px";
						tagInfo.style.top = e.pageY + "px";
						document.querySelector(".button-names-en").addEventListener("click", (e) =>
						{
							let text = document.getElementById("en-text-for-copy");
							window.getSelection().selectAllChildren(text);
							document.execCommand("Copy");
						})
						document.querySelector(".button-names-ch").addEventListener("click", (e) =>
						{
							let text = document.getElementById("cn-text-for-copy");
							window.getSelection().selectAllChildren(text);
							document.execCommand("Copy");
						})
						document.querySelector(".button-names-hk").addEventListener("click", (e) =>
						{
							let text = document.getElementById("hk-text-for-copy");
							window.getSelection().selectAllChildren(text);
							document.execCommand("Copy");
						})
					}
				})
				document.addEventListener("mouseover", (e) => 
				{
					if(!e.composedPath().includes(tagInfo))
					{
						tag.innerHTML = `<span class="airtable-tw">${elem["fields"]["Ter_TW"]}</span>`;
						tagInfo.innerHTML = "";
						tagInfo.style.opacity = 0;
						tagInfo.style.display = "none";
						tagInfo.classList.remove("display");
					}
				})
				document.body.insertBefore(tagInfo, null);
			}

			if(tag.textContent == elem["fields"]["Ter_HK"] && elem["fields"]["Ter_HK"] !== elem["fields"]["Ter_TW"])
			{
				tag.innerHTML = `<span class="airtable-hk">${elem["fields"]["Ter_HK"]}</span>`;
				tag.addEventListener("mouseenter", (e) => 
				{
					if(tagInfo.style.display !== "block")
					{
						tag.innerHTML = `<span class="airtable-hk">${elem["fields"]["Ter_EN"]}</span>`;
						tagInfo.classList.add("display");
						tagInfo.innerHTML = `
							<p class="lang-label">EN - <span id="en-text-for-copy">${elem["fields"]["Ter_EN"]}</span> <button class="button-names-en">COPY</button></p>
				  			<p class="lang-label">CN - <span id="cn-text-for-copy">${elem["fields"]["Ter_CN"]}</span> <button class="button-names-ch">COPY</button></p> 
				  			<p class="lang-label">TW - <span id="tw-text-for-copy">${elem["fields"]["Ter_TW"]}</span> <button class="button-names-tw">COPY</button></p>
			  			`;
						tagInfo.style.display = "block";
						tagInfo.style.zIndex = "100";
						tagInfo.style.left = e.pageX + "px";
						tagInfo.style.top = e.pageY + "px";
						document.querySelector(".button-names-en").addEventListener("click", (e) =>
						{
							let text = document.getElementById("en-text-for-copy");
							window.getSelection().selectAllChildren(text);
							document.execCommand("Copy");
						})
						document.querySelector(".button-names-ch").addEventListener("click", (e) =>
						{
							let text = document.getElementById("cn-text-for-copy");
							window.getSelection().selectAllChildren(text);
							document.execCommand("Copy");
						})
						document.querySelector(".button-names-tw").addEventListener("click", (e) =>
						{
							let text = document.getElementById("tw-text-for-copy");
							window.getSelection().selectAllChildren(text);
							document.execCommand("Copy");
						})
					}
				})
				document.addEventListener("mouseover", (e) => 
				{
					if(!e.composedPath().includes(tagInfo))
					{
						tag.innerHTML = `<span class="airtable-hk">${elem["fields"]["Ter_HK"]}</span>`;
						tagInfo.innerHTML = "";
						tagInfo.style.opacity = 0;
						tagInfo.style.display = "none";
						tagInfo.classList.remove("display");
					}
				})
				document.body.insertBefore(tagInfo, null);
			}
		})
  	})	
}

window.onload = getResponse;


