var blogJS = [
	{	title: "Week 3 at NSS",
		copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra ligula vulputate mi cursus, in ultricies massa ornare. Mauris sagittis risus sem, quis tristique purus efficitur ut. Nulla cursus sed ligula et laoreet. Nunc finibus porttitor lorem ac mattis. Fusce et enim mattis, blandit ante in, imperdiet eros. Etiam gravida sem in lorem volutpat luctus. Mauris mollis nunc vel velit lobortis accumsan. Fusce elementum sem turpis. Aliquam dignissim est a ultricies aliquet.",
		date: "6/9/17"

	},
	{	title: "Week 2 at NSS",
		copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra ligula vulputate mi cursus, in ultricies massa ornare. Mauris sagittis risus sem, quis tristique purus efficitur ut. Nulla cursus sed ligula et laoreet. Nunc finibus porttitor lorem ac mattis. Fusce et enim mattis, blandit ante in, imperdiet eros. Etiam gravida sem in lorem volutpat luctus. Mauris mollis nunc vel velit lobortis accumsan. Fusce elementum sem turpis. Aliquam dignissim est a ultricies aliquet.",
		date: "6/2/17"

	}, 
	{	title: "Week 1 at NSS",
		copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra ligula vulputate mi cursus, in ultricies massa ornare. Mauris sagittis risus sem, quis tristique purus efficitur ut. Nulla cursus sed ligula et laoreet. Nunc finibus porttitor lorem ac mattis. Fusce et enim mattis, blandit ante in, imperdiet eros. Etiam gravida sem in lorem volutpat luctus. Mauris mollis nunc vel velit lobortis accumsan. Fusce elementum sem turpis. Aliquam dignissim est a ultricies aliquet.",
		date: "5/26/17"
	}
];

var blogTag = document.getElementById("blogTag")

for (var i = 0; i < blogJS.length; i++) {
	blogTag.innerHTML += "<br><article class='blogWrapper'><h3>" +
	blogJS[i].title + "</h3><br>" + blogJS[i].copy + "<br>-" + blogJS[i].date + "-</article><br>";
}

// function to give/remove class to highlight current tab

