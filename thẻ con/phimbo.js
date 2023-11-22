// // const listFilmBox = document.getElementById("list-film");
// // const comboBoxCountry = document.getElementById("loc-quocgia");
// // const inputYear = document.getElementById("inputYear");
// // const data = [
// //   {
// //     href: "./phim/chính/gọi hồn quỷ dữ/goihonquydu1.html",
// //     src: "https://image.motchillzz.tv/avatar/loi-nguyen-cua-satan-x500.webp",
// //     alt: "linh hon cua quy",
// //     country: "VN",
// //     year: "2021",
// //   },
// //   {
// //     href: "./phim/chính/gọi hồn quỷ dữ/goihonquydu1.html",
// //     src: "https://image.motchillzz.tv/avatar/loi-nguyen-cua-satan-x500.webp",
// //     alt: "linh hon cua quy",
// //     country: "JP",
// //     year: "2020",
// //   },
// //   {
// //     href: "./phim/chính/gọi hồn quỷ dữ/goihonquydu1.html",
// //     src: "https://image.motchillzz.tv/avatar/loi-nguyen-cua-satan-x500.webp",
// //     alt: "linh hon cua quy",
// //     country: "KR",
// //     year: "2022",
// //   },
// //   {
// //     href: "./phim/chính/gọi hồn quỷ dữ/goihonquydu1.html",
// //     src: "https://image.motchillzz.tv/avatar/loi-nguyen-cua-satan-x500.webp",
// //     alt: "linh hon cua quy",
// //     country: "EN",
// //     year: "2023",
// //   },
// //   {
// //     href: "./phim/chính/gọi hồn quỷ dữ/goihonquydu1.html",
// //     src: "https://image.motchillzz.tv/avatar/loi-nguyen-cua-satan-x500.webp",
// //     alt: "linh hon cua quy",
// //     country: "US",
// //     year: "2019",
// //   },
// // ];
// // const dataFilter = [...data];

// // const render = (array) => {
// //   return array.forEach((item) => {
// //     const link = document.createElement("a");
// //     link.href = item.href;
// //     const img = document.createElement("img");
// //     img.className = "card";
// //     img.src = item.src;
// //     link.appendChild(img);
// //     listFilmBox.appendChild(link);
// //   });
// // };
// // render(dataFilter);

// // const removeChild = () => {
// //   while (listFilmBox.firstChild) {
// //     listFilmBox.removeChild(listFilmBox.firstChild);
// //   }
// // };

// // comboBoxCountry.addEventListener("change", function (e) {
// //   if (e.target.value === "all") {
// //     render(data);
// //   } else {
// //     const newData = data.filter((item) => item.country === e.target.value);
// //     dataFilter = newData;
// //     removeChild();
// //     render(dataFilter);
// //   }
// // });
// // inputYear.addEventListener("input", function (e) {
// //   const year = e.target.value;
// //   dataFilter.forEach((item) => item.year.includes(year));
// //   removeChild();
// //   render(dataFilter);
// // });
// // // footer
// // // const button = document.getElementsByClassName("lendau");
// // // button.addEventListener("click", function () {
// // //   window.scrollTo({
// // //      top: 0,
// // //     left: 0,
// // //   });
// // // });
// const listFilmBox = document.getElementById("list-film");
// const comboBoxCountry = document.getElementById("loc-quocgia");
// const inputYear = document.getElementById("inputYear");
// const data = [
// 	{
// 		href: "./phim/chính/gọi hồn quỷ dữ/goihonquydu1.html",
// 		src: "https://image.motchillzz.tv/avatar/loi-nguyen-cua-satan-x500.webp",
// 		alt: "linh hon cua quy",
// 		country: "VN",
// 		year: "2021",
// 	},
// 	{
// 		href: "./phim/chính/gọi hồn quỷ dữ/goihonquydu1.html",
// 		src: "https://image.motchillzz.tv/avatar/loi-nguyen-cua-satan-x500.webp",
// 		alt: "linh hon cua quy",
// 		country: "JP",
// 		year: "2020",
// 	},
// 	{
// 		href: "./phim/chính/gọi hồn quỷ dữ/goihonquydu1.html",
// 		src: "https://image.motchillzz.tv/avatar/loi-nguyen-cua-satan-x500.webp",
// 		alt: "linh hon cua quy",
// 		country: "KR",
// 		year: "2022",
// 	},
// 	{
// 		href: "./phim/chính/gọi hồn quỷ dữ/goihonquydu1.html",
// 		src: "https://image.motchillzz.tv/avatar/loi-nguyen-cua-satan-x500.webp",
// 		alt: "linh hon cua quy",
// 		country: "EN",
// 		year: "2023",
// 	},
// 	{
// 		href: "./phim/chính/gọi hồn quỷ dữ/goihonquydu1.html",
// 		src: "https://image.motchillzz.tv/avatar/loi-nguyen-cua-satan-x500.webp",
// 		alt: "linh hon cua quy",
// 		country: "US",
// 		year: "2019",
// 	},
// ];
// const dataFilter = [...data];

// const render = (array) => {
// 	return array.forEach((item) => {
// 		const link = document.createElement("a");
// 		link.href = item.href;
// 		const img = document.createElement("img");
// 		img.className = "card";
// 		img.src = item.src;
// 		link.appendChild(img);
// 		listFilmBox.appendChild(link);
// 	});
// };
// render(dataFilter);

// const removeChild = () => {
// 	while (listFilmBox.firstChild) {
// 		listFilmBox.removeChild(listFilmBox.firstChild);
// 	}
// };

// // comboBoxCountry.addEventListener("change", function (e) {
// // 	if (e.target.value === "all") {
// // 		render(data);
// // 	} else {
// // 		const newData = data.filter((item) => item.country === e.target.value);
// // 		dataFilter = newData;
// // 		removeChild();
// // 		render(dataFilter);
// // 	}
// // });

// inputYear.addEventListener("input", function (e) {
// 	if (!e.target.value) {
// 		const year = e.target.value;
// 		const newData = dataFilter.filter((item) => item.year.includes(year));
// 		removeChild();
// 		render(newData);
// 	} else {
// 		removeChild();
// 		render(dataFilter);
// 	}
// });



const listFilmBox = document.getElementById("list-film");
const comboBoxCountry = document.getElementById("loc-quocgia");
const inputYear = document.getElementById("inputYear");
const data = [
	{
		href: "",
		src: "https://mephimtv.net/wp-content/uploads/2022/12/gio-cua-quy-thumb.jpg",
		alt: "GIỜ CỦA QUỶ",
		country: "US",
		year: "2023",
	},
	{
		href: "",
		src: "https://mephimtv.net/wp-content/uploads/2022/10/28-ngay-ma-am-thumb.jpg",
		alt: "28 NGÀY MA ÁM",
		country: "US",
		year: "2023",
	},
	{
		href: "",
		src: "https://mephimtv.net/wp-content/uploads/2022/07/nhung-truyen-kinh-di-my-phan-2-thumb.jpg",
		alt: "NHỮNG TRUYỆN KINH DỊ MỸ (PHẦN 2)",
		country: "US",
		year: "2022",
	},
	{
		href: "",
		src: "https://mephimtv.net/wp-content/uploads/2022/09/dahmer-thumb.jpg",
		alt: "DAHMER",
		country: "US",
		year: "2022",
	},{
		href: "",
		src: "https://mephimtv.net/wp-content/uploads/2023/10/tet-o-lang-dia-nguc-thumb.jpg",
		alt: "TẾT Ở LÀNG ĐỊA NGỤC",
		country: "US",
		year: "2023",
	},
	{
		href: "",
		src: "https://mephimtv.net/wp-content/uploads/2022/04/trai-nghiem-ma-quai-phan-2-thumb.jpg",
		alt: "TRẢI NGHIỆM MA QUÁI (PHẦN 2)",
		country: "US",
		year: "2019",
	},{
		href: "",
		src: "https://mephimtv.net/wp-content/uploads/2022/05/castle-rock-phan-2-thumb.jpg",
		alt: "CASTLE ROCK (PHẦN 2)",
		country: "US",
		year: "2019",
	},
	{
		href: "",
		src: "https://mephimtv.net/wp-content/uploads/2022/04/nguoi-soi-tuoi-teen-phan-5-thumb.jpg",
		alt: "THỢ SĂN BÓNG ĐÊM – VŨ KHÍ SINH TỬ (PHẦN 2)",
		country: "US",
		year: "2017",
	},
	{
		href: "",
		src: "/project/hình ảnh/image2 (3).jpg",
		alt: "NGƯỜI SÓI TUỔI TEEN (PHẦN 5)",
		country: "US",
		year: "2015",
	},{
		href: "",
		src: "https://mephimtv.net/wp-content/uploads/2022/04/hoi-kin-phan-1-thumb.jpg",
		alt: "HỘI KÍN (PHẦN 1)",
		country: "US",
		year: "2019",
	},{
		href: "",
		src: "https://mephimtv.net/wp-content/uploads/2022/04/love-death-robots-phan-1-thumb.jpg",
		alt: "LOVE, DEATH & ROBOTS (PHẦN 1) ",
		country: "US",
		year: "2019",
	},{
		href: "",
		src: "https://mephimtv.net/wp-content/uploads/2022/05/am-kich-phan-5-thumb.jpg",
		alt: "ÁM KỊCH (PHẦN 5)The Silence of the Lambs",
		country: "JP",
		year: "2017",
	},{
		href: "",
		src: "https://mephimtv.net/wp-content/uploads/2022/04/oats-studios-thumb.jpg",
		alt: "OATS STUDIOS",
		country: "US",
		year: "2017",
	},
	{
		href: "",
		src: "https://mephimtv.net/wp-content/uploads/2023/10/su-sup-do-cua-dong-ho-usher-thumb.jpg",
		alt: "Sự sụp đổ của dòng họ Usher",
		country: "US",
		year: "2023",
	},
	{
		href: "",
		src: "https://mephimtv.net/wp-content/uploads/2023/08/oculus-thumb.jpg",
		alt: "OCULUS",
		country: "US",
		year: "2013",
	},
	{
		href: "",
		src: "https://mephimtv.net/wp-content/uploads/2022/10/can-buong-hieu-ky-cua-guillermo-del-toro-thumb.jpg",
		alt: "CĂN BUỒNG HIẾU KỲ CỦA GUILLERMO DEL TORO",
		country: "US",
		year: "2022",
	},
];

const render = (array) => {
	return array.forEach((item) => {
		const link = document.createElement("a");
		link.id = "id-link"
		link.href = item.href;
		const img = document.createElement("img");
		img.className = "card";
		img.src = item.src;
		link.appendChild(img);
		listFilmBox.appendChild(link);
	});
};
render(data);

const removeChild = () => {
	while (listFilmBox.firstChild) {
		listFilmBox.removeChild(listFilmBox.firstChild);
	}
};

comboBoxCountry.addEventListener("change", function (e) {
	if (e.target.value === "all") {
		removeChild();
		render(data);
	} else {
		const newData = data.filter((item) => item.country === e.target.value);
		removeChild();
		render(newData);
	}
});

inputYear.addEventListener("input", function (e) {
	console.log(e.target.value);
	if (e.target.value !== "") {
		const year = e.target.value;
		const newData = data.filter((item) => item.year.includes(year));
		removeChild();
		render(newData);
	} else {
		removeChild();
		render(data);
	}
});

