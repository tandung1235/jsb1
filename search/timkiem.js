const dataBox = document.getElementById("data");
const searchInput = document.getElementById("search-input");
const divData = document.getElementById("#data");
const submitBtn = document.getElementById("submit");
const listFilmBox = document.getElementById("list-film");
const comboBoxCountry = document.getElementById("loc-quocgia");
const inputYear = document.getElementById("inputYear");
let dataInput = "";
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
		href: "/project/phim/chính/ông kẹ/ongke1.html",
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

const removeChild = () => {
  while (dataBox.firstChild) {
    dataBox.removeChild(dataBox.firstChild);
  }
};
searchInput.addEventListener("input", function (e) {
  dataInput = e.target.value;
});
const renderData = () => {
  data.forEach((item) => {
    const newE = document.createElement("div");
    const infoBox = document.createElement("div");
    const img = document.createElement("img");
    const linkFilm = document.createElement("a");
    newE.className = "box";
    img.className = "img";
    img.src = item.src;
    infoBox.className = "box-show";
    infoBox.textContent = item.alt;
    linkFilm.classList = "linkFilm";
    linkFilm.textContent = "Xem Phim";
    linkFilm.href = item.href;
    const arrE = [img, infoBox, linkFilm];
    newE.append(...arrE);
    dataBox.appendChild(newE);
  });
};

renderData()
submitBtn.addEventListener("click", function () {
  removeChild();
  data.filter((item) => {
    if (item.alt.toLowerCase().includes(dataInput.toLowerCase())) {
      const newE = document.createElement("div");
      const infoBox = document.createElement("div");
      const img = document.createElement("img");
      const linkFilm = document.createElement("a");
      newE.className = "box";
      img.className = "img";
      img.src = item.src;
      infoBox.className = "box-show";
      infoBox.textContent = item.alt;
      linkFilm.classList = "linkFilm";
      linkFilm.textContent = "Link";
      linkFilm.href = item.href;
      const arrE = [img, infoBox, linkFilm];
      newE.append(...arrE);
      dataBox.appendChild(newE);
    }
  });
});
