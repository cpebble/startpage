const sites = {
	Produktivitet: [
		{ title: "Trackingtime", url: "http://pro.trackingtime.co" },
		{ title: "Slack", url: "https://kvalifik.slack.com" },
		{ title: "StackOverFlow", url: "https://stackoverflow.com" },
		{ title: "Github", url: "https://github.com" },
	],
	Social: [
		{ title: "Facebook", url: "http://www.facebook.com" },
		{ title: "Twitter", url: "http://www.twitter.com" },
		{ title: "Youtube", url: "https://youtube.com" },
	],
	Prokrastination: [
		{ title: "Reddit", url: "http://www.reddit.com" },
		{ title: "Netflix", url: "http://www.netflix.com" },
		{ title: "CommitStrip", url: "http://commitstrip.com" },
		{ title: "Saturdaymbc", url: "http://smbc-comics.com" },
		{ title: "XKCD", url: "https://xkcd.com" },
	],
	Skole: [
		{ title: "Absalon", url: "https://absalon.ku.dk" },
		{ title: "KuNet", url: "https://kunet.ku.dk" },
		{ title: "OverLeaf", url: "https://overleaf.com" },

	]
};

//############################################
//## Add sites
//############################################
function addSite() {
	var siteHtmlElement = document.getElementById("boxes");
	for (let category in sites) {
		let siteDiv = document.createElement("div");
		siteDiv.classList.add("siteBox");
		title = document.createElement("span");
		title.textContent = category;
		title.classList.add("title");
		siteDiv.appendChild(title);
		let categoryDiv = document.createElement("ul");
		siteDiv.appendChild(categoryDiv);
		sites[category].forEach(site => {
			let siteEl = document.createElement("li");
			siteEl.dataset.url = site.url;
			siteEl.addEventListener("click", ev => {
				window.location = ev.target.dataset.url;
			});
			siteEl.textContent = site.title;
			categoryDiv.appendChild(siteEl);
		});
		siteHtmlElement.appendChild(siteDiv);
	}
}
document.addEventListener("DOMContentLoaded", addSite);
document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll('.form input[type="text"]')[0].addEventListener("change", ev => {
		let val = ev.target.value;
		if (val == "") {
			ev.target.classList.remove("expanded");
		} else {
			ev.target.classList.add("expanded");
		}
	});
});
