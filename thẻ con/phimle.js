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
		href: "/project/phim/chính/gọi hồn quỷ dữ/goihonquydu1.html",
		src: "https://i.mpcdn.top/c/B3BXoqX/goi-hon-quy-du.jpg?",
		alt: "Gọi Hồn Quỷ Dữ",
		country: "US",
		year: "2023",
	},
	{
		href: "/project/phim/chính/ác quỷ ma sơ/acquymaso1.html",
		src: "https://i.mpcdn.top/c/AwPBKvZ/ac-quy-ma-so-2.jpg?",
		alt: "Ác Quỷ Ma Sơ 2",
		country: "US",
		year: "2023",
	},
	{
		href: "/project/phim/chính/lời quyền cuat sâtn/loiquyencuasatan1.html",
		src: "https://image.motchillzz.tv/avatar/loi-nguyen-cua-satan-x500.webp",
		alt: "Lời Quyền Của Satan",
		country: "ML",
		year: "2023",
	},
	{
		href: "/project/chính/ông kẹ/ongke1.html",
		src: "https://i.mpcdn.top/c/VvV28p2/ong-ke.jpg?i",
		alt: "Ông Kẹ",
		country: "US",
		year: "2023",
	},{
		href: "/project/phim/đề xuất/get out/getout1.html",
		src: "/project/hình ảnh/image2.jpg",
		alt: "Trốn Thoát",
		country: "US",
		year: "2017",
	},
	{
		href: "/project/phim/chính/bá tước/batuoc1.html",
		src: "https://i.mpcdn.top/c/gRaRdgg/ba-tuoc.jpg?",
		alt: "Bá Tước",
		country: "US",
		year: "2023",
	},{
		href: "/project/phim/đề xuất/ám ảnh kinh hoàng/amanhkinhhoang1.html",
		src: "/project/hình ảnh/image2 (1).jpg",
		alt: "Ám Ảnh Kinh Hoàng",
		country: "US",
		year: "2021",
	},
	{
		href: "/project/phim/chính/phiên tòa xử quỷ ám/phiemtoaxuquyam1.html",
		src: "https://mephimtv.net/wp-content/uploads/2023/10/phien-toa-xu-quy-am-thumb.jpg",
		alt: "Phiên Tòa Xử Quỷ Ám",
		country: "US",
		year: "2023",
	},
	{
		href: "/project/phim/đề xuất/halloween/halloween1.html",
		src: "/project/hình ảnh/image2 (3).jpg",
		alt: "SÁT NHÂN HALLOWEEN",
		country: "US",
		year: "1978",
	},{
		href: "/project/phim/đề xuất/the shining/theshining1.html",
		src: "/project/hình ảnh/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
		alt: "The Shining ",
		country: "US",
		year: "1980",
	},{
		href: "",
		src: "/project/hình ảnh/Screenshot 2023-10-21 215832.png",
		alt: "The Exorcist ",
		country: "US",
		year: "1973",
	},{
		href: "/project/phim/đề xuất/sự im lặng của bầy cừu/suimlangcuabaycuu1.htm",
		src: "/project/hình ảnh/image2 (4).jpg",
		alt: "The Silence of the Lambs",
		country: "US",
		year: "1991",
	},{
		href: "/project/phim/đề xuất/hiện tượng siêu nhiên/hientuongsieunhien1.html",
		src: "/project/hình ảnh/image2 (1).jpg",
		alt: "Paranormal Activity",
		country: "US",
		year: "2007",
	},
	{
		href: "",
		src: "https://mephimtv.net/wp-content/uploads/2023/10/su-sup-do-cua-dong-ho-usher-thumb.jpg",
		alt: "Sự sụp đổ của dòng họ Usher",
		country: "US",
		year: "2007",
	},
	{
		href: "",
		src: "https://phimmotchill.net/storage/images/high-tension/high-tension-thumb.jpg",
		alt: "High Tension",
		country: "US",
		year: "2003",
	},
	{
		href: "",
		src: "https://phimmotchill.net/storage/images/the-omen/the-omen-thumb.jpg",
		alt: "The Omen",
		country: "US",
		year: "1976",
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

