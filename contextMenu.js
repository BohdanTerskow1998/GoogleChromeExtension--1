chrome.contextMenus.create({
	id: "Contribute to Project Mosk",
	title: "Contribute to Project Mosk",
	contexts: ["all"],
}, () => chrome.runtime.lastError);

chrome.contextMenus.onClicked.addListener((info) => {
	chrome.windows.create({url: "form.html", type: "popup"});
})


