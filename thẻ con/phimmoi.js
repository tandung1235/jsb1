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
		href: "./phim/chính/lời quyền cuat sâtn/loiquyencuasatan1.html",
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
		href: "",
		src: "https://mephimtv.net/wp-content/uploads/2023/10/luoi-cua-x-thumb.jpg",
		alt: "LƯỠI CƯA X ",
		country: "US",
		year: "2023",
	},{
		href: "",
		src: "https://mephimtv.net/wp-content/uploads/2023/10/hoi-nghi-chet-choc-thumb.jpg",
		alt: "HỘI NGHỊ CHẾT CHÓC",
		country: "US",
		year: "2023",
	},{
		href: "",
		src: "https://mephimtv.net/wp-content/uploads/2023/10/khoanh-khac-chet-thumb.jpg",
		alt: "KHOẢNH KHẮC CHẾT",
		country: "US",
		year: "2023",
	},
	{
		href: "/project/phim/chính/bá tước/batuoc1.html",
		src: "https://i.mpcdn.top/c/gRaRdgg/ba-tuoc.jpg?",
		alt: "Bá Tước",
		country: "US",
		year: "2023",
	},{
		href: "",
		src: "https://mephimtv.net/wp-content/uploads/2023/10/organ-trail-thumb.jpg",
		alt: "ORGAN TRAIL",
		country: "US",
		year: "2021",
	},{
		href: "",
		src: "https://mephimtv.net/wp-content/uploads/2023/10/tru-ta-thumb.jpg",
		alt: "TRỪ TÀ",
		country: "TQ",
		year: "2023",
	},
	{
		href: "/project/phim/chính/phiên tòa xử quỷ ám/phiemtoaxuquyam1.html",
		src: "https://mephimtv.net/wp-content/uploads/2023/10/phien-toa-xu-quy-am-thumb.jpg",
		alt: "Phiên Tòa Xử Quỷ Ám",
		country: "US",
		year: "2023",
	},
	{
		href: "",
		src: "https://mephimtv.net/wp-content/uploads/2023/10/tuong-tay-quy-an-thumb.jpg",
		alt: "TƯƠNG TÂY QUỶ ÁN ",
		country: "TQ",
		year: "2023",
	},{
		href: "",
		src: "https://mephimtv.net/wp-content/uploads/2023/10/su-sup-do-cua-dong-ho-usher-thumb.jpg",
		alt: "SỰ SỤP ĐỔ CỦA DÒNG HỌ USHER",
		country: "US",
		year: "2023",
	},
	{
		href: "",
		src: "https://mephimtv.net/wp-content/uploads/2023/06/thoi-gian-thumb.jpg",
		alt: "THỜI GIAN",
		country: "US",
		year: "2023",
	},
	{
		href: "",
		src: "https://mephimtv.net/wp-content/uploads/2023/07/little-bone-lodge-thumb.jpg",
		alt: "LITTLE BONE LODGE",
		country: "US",
		year: "2023",
	},
	{
		href: "",
		src: "https://mephimtv.net/wp-content/uploads/2023/05/hac-lau-quai-dam-thumb.jpg",
		alt: "https://mephimtv.net/wp-content/uploads/2023/05/hac-lau-quai-dam-thumb.jpg",
		country: "TQ",
		year: "2023",
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

