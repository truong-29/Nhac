// Mảng cho các ca sĩ (đổi tên từ artists thành singers)
const singers = [
    {
        title: "Pay",
        realName: "Lê Quỳnh Thy",
        birthDate: "1994",
        genre: "Pop, Ballad",
        notableSongs: "Bận lòng, Không thích cô ta, Tìm đâu",
        description: "Pay là một ca sĩ trẻ tài năng với chất giọng nội lực và phong cách âm nhạc đa dạng. Những ca khúc của cô nhanh chóng trở thành hit và được đông đảo khán giả yêu thích.",
        image: "./NS/LQT.jpg",
        backgroundColor: "#f0e6f6" // Màu nền nhạt phù hợp với hình ảnh của Pay (ví dụ: màu hồng nhạt)
    },
    {
        title: "Kiên Trịnh",
        realName: "Trịnh Trung Kiên",
        birthDate: "1997",
        genre: "Indie, Pop",
        notableSongs: "Thế Kỉ 21 Buồn, Quả Tim Màu Lửa, Con Giời",
        description: "Kiên Trịnh là một nghệ sĩ Indie với phong cách sáng tác gần gũi, giàu cảm xúc. Âm nhạc của anh phản ánh chân thực tâm tư và những góc nhìn tinh tế về cuộc sống.",
        image: "./NS/TTK.jpg",
        backgroundColor: "#e6f0f8" // Màu nền xanh nhạt giống hình ảnh của Kiên Trịnh
    },
    {
        title: "Hali",
        realName: "Nguyễn Hạ Linh",
        birthDate: "2002",
        genre: "Jazz, Pop, Dân gian Bắc Bộ",
        notableSongs: "Mơ xa, Lối về, Giấc mơ phố",
        description: "Hali sở hữu chất giọng ngọt ngào, đầy cảm xúc. Cô pha trộn giữa các yếu tố truyền thống và hiện đại, tạo nên màu sắc âm nhạc rất riêng.",
        image: "./NS/NHL.jpg",
        backgroundColor: "#f8e6e6" // Màu nền nhạt phù hợp với hình ảnh của Hali (ví dụ: màu đỏ nhạt)
    },
    {
        title: "Soobin Hoàng Sơn",
        realName: "Nguyễn Huỳnh Sơn",
        birthDate: "10/9/1992",
        genre: "RnB, Pop, Ballad",
        notableSongs: "Phía sau một cô gái, Đi để trở về, BlackJack",
        description: "Soobin Hoàng Sơn là nghệ sĩ đa tài với khả năng hát live ấn tượng và khả năng sáng tác đáng nể. Anh là một trong những nghệ sĩ tiên phong đưa RnB đến gần hơn với khán giả Việt Nam.",
        image: "./NS/NHS.jpg",
        backgroundColor: "#f0f8e6" // Màu nền nhạt phù hợp với hình ảnh của Soobin Hoàng Sơn (ví dụ: màu xanh lá nhạt)
    },
    {
        title: "Wren Evans",
        realName: "Lê Phan",
        birthDate: "19/11/2001",
        genre: "Pop, RnB, Âu Mỹ",
        notableSongs: "Thích em hơi nhiều, Cơn đau, Baby with you",
        description: "Wren Evans là nghệ sĩ trẻ với phong cách âm nhạc hiện đại và khả năng sáng tác bằng nhiều ngôn ngữ. Anh nhanh chóng gây dấu ấn trong lòng người nghe bằng sự sáng tạo và cá tính âm nhạc độc đáo.",
        image: "./NS/LP.jpg",
        backgroundColor: "#f8f0e6" // Màu nền nhạt phù hợp với hình ảnh của Wren Evans (ví dụ: màu vàng nhạt)
    },
    {
        title: "Sơn Tùng M-TP",
        realName: "Nguyễn Thanh Tùng",
        birthDate: "5/7/1994",
        genre: "Pop, RnB, Hip-hop",
        notableSongs: "Em của ngày hôm qua, Chúng ta của hiện tại, Lạc trôi",
        description: "Sơn Tùng M-TP là ca sĩ hàng đầu Việt Nam với phong cách âm nhạc sáng tạo và khả năng trình diễn cuốn hút. Anh là người tiên phong trong việc mang nhạc Việt ra quốc tế.",
        image: "./NS/NTT.jpg",
        backgroundColor: "#e6f0f0" // Màu nền nhạt phù hợp với hình ảnh của Sơn Tùng M-TP (ví dụ: màu xanh ngọc nhạt)
    },
    {
        title: "Mỹ Tâm",
        realName: "Phan Thị Mỹ Tâm",
        birthDate: "16/1/1981",
        genre: "Pop, Ballad",
        notableSongs: "Họa mi tóc nâu, Đừng hỏi em, Người hãy quên em đi",
        description: "Mỹ Tâm là 'họa mi tóc nâu' của làng nhạc Việt, nổi tiếng với giọng hát nội lực và sự tận tâm với nghề. Cô là hình mẫu lý tưởng của nhiều thế hệ khán giả.",
        image: "./NS/PTMT.jpg",
        backgroundColor: "#f6e6f0" // Màu nền nhạt phù hợp với hình ảnh của Mỹ Tâm (ví dụ: màu hồng nhạt)
    },
    {
        title: "Hoàng Dũng",
        realName: "Nguyễn Hoàng Dũng",
        birthDate: "4/6/1995",
        genre: "Pop, Ballad",
        notableSongs: "Nàng thơ, Đoạn kết mới, Vì anh vẫn",
        description: "Hoàng Dũng ghi dấu ấn với giọng hát ngọt ngào và khả năng sáng tác giàu cảm xúc. Anh là gương mặt tiêu biểu của dòng nhạc lãng mạn, sâu lắng.",
        image: "./NS/NHD.jpg",
        backgroundColor: "#f0f0e6" // Màu nền nhạt phù hợp với hình ảnh của Hoàng Dũng (ví dụ: màu vàng nhạt)
    },
    {
        title: "MIN",
        realName: "Nguyễn Minh Hằng",
        birthDate: "7/12/1988",
        genre: "Pop, Dance",
        notableSongs: "Có em chờ, Trên tình bạn dưới tình yêu, Vì yêu cứ đâm đầu",
        description: "MIN là nghệ sĩ đa năng với khả năng hát, nhảy và sáng tác. Cô mang đến những sản phẩm âm nhạc đầy màu sắc và năng lượng tích cực.",
        image: "./NS/NMH.jpg",
        backgroundColor: "#e6f8f0" // Màu nền nhạt phù hợp với hình ảnh của MIN (ví dụ: màu xanh lá nhạt)
    },
    {
        title: "Vũ Cát Tường",
        realName: "Vũ Cát Tường",
        birthDate: "2/10/1992",
        genre: "Pop, RnB, Soul",
        notableSongs: "Vết mưa, Yêu xa, If",
        description: "Vũ Cát Tường là ca sĩ kiêm nhạc sĩ tài năng với phong cách âm nhạc cá tính. Cô gây ấn tượng mạnh bởi chất giọng truyền cảm và khả năng sáng tác đa dạng.",
        image: "./NS/VCT.jpg",
        backgroundColor: "#f8e6f8" // Màu nền hồng nhạt giống hình ảnh của Vũ Cát Tường
    }
];

// Mảng cho các ban nhạc (giữ nguyên tên bands)
const bands = [
    {
        title: "Ngọt",
        founded: "2013",
        members: "Vũ Đinh Trọng Thắng, Phan Việt Hoàng, Nguyễn Chí Hùng, Nam Anh",
        genre: "Indie Pop, Rock",
        notableSongs: "Em dạo này, Lần cuối, Không làm gì",
        description: "Ngọt là ban nhạc Indie đình đám với chất nhạc mới mẻ và lời ca đầy chất thơ. Họ nhanh chóng chiếm trọn trái tim của những khán giả yêu thích sự khác biệt.",
        image: "BN/Ngot.jpg",
        backgroundColor: "#f0e6f6"
    },
    {
        title: "Cá Hồi Hoang",
        founded: "2013",
        members: "Nguyễn Viết Thành, Nguyễn Thanh Minh, Bùi Khắc Đạt",
        genre: "Alternative Rock, Indie Rock",
        notableSongs: "Tầng thượng 102, Một mai, Đến bao giờ",
        description: "Cá Hồi Hoang nổi bật với chất nhạc Rock đầy năng lượng và những ca từ sâu sắc. Ban nhạc luôn thử nghiệm những âm thanh mới, tạo ra màu sắc rất riêng.",
        image: "BN/CaHoiHoang.jpg",
        backgroundColor: "#e6f8f0"
    },
    {
        title: "Da LAB",
        founded: "2007",
        members: "Thỏ, Rabbit Run, Emcee L, MPaKK",
        genre: "Hip-hop, Pop",
        notableSongs: "Một nhà, Thanh xuân, Gác lại âu lo",
        description: "Da LAB là nhóm nhạc thành công với khả năng kết hợp Hip-hop và Pop hiện đại. Các ca khúc của họ luôn truyền tải thông điệp tích cực và ý nghĩa.",
        image: "BN/DaLAB.jpg",
        backgroundColor: "#f8e6e6"
    },
    {
        title: "Bức Tường",
        founded: "1995",
        members: "Trần Lập, Trần Tuấn Hùng, Nguyễn Minh Đức, Vũ Văn Hà",
        genre: "Rock",
        notableSongs: "Bông hồng thủy tinh, Đường đến ngày vinh quang, Tâm hồn của đá",
        description: "Bức Tường là tượng đài của nhạc Rock Việt Nam. Với tinh thần mạnh mẽ và các ca khúc bất hủ, họ đã truyền cảm hứng cho nhiều thế hệ yêu nhạc Rock.",
        image: "BN/BucTuong.jpg",
        backgroundColor: "#f8f0e6"
    },
    {
        title: "Lộn Xộn Band",
        founded: "2016",
        members: "Phan Thanh Nhàn, Ngô Minh Triết, Trần Quang Hiếu",
        genre: "Indie Pop, Rap",
        notableSongs: "Người yêu tôi không có gì để mặc, Lộn xộn 3, Ở đây",
        description: "Lộn Xộn Band gây ấn tượng với phong cách âm nhạc phóng khoáng, độc đáo. Những bài hát của họ thường phản ánh những câu chuyện đời thường một cách hài hước và sáng tạo.",
        image: "BN/LonXonBand.jpg",
        backgroundColor: "#f0f0e6"
    },
    {
        title: "Chillies",
        founded: "Tháng 10 năm 2018",
        members: "Trần Duy Khang, Nhím Biển, Nguyễn Văn Phước, Sĩ Phú",
        genre: "Pop, Alternative Rock, Funk, RnB, Retrowave",
        notableSongs: "Mascara, Vùng ký ức, Qua khung cửa sổ",
        description: "Chillies là ban nhạc nổi bật với khả năng biến hóa đa dạng trong từng sản phẩm. Họ luôn tìm cách kết hợp nhiều dòng nhạc khác nhau để tạo ra những giai điệu mới mẻ, cuốn hút.",
        image: "BN/Chillies.jpg",
        backgroundColor: "#e6f0f0"
    },
    {
        title: "Những Đứa Trẻ",
        founded: "2015",
        members: "Bùi Xuân Lộc, Nguyễn Bá Trường Sơn, Vũ Trần Nhật Minh, Cao Lê Hoàng",
        genre: "Alternative Rock, Punk",
        notableSongs: "Đường chân trời, Trên mái nhà, Những đứa trẻ mơ",
        description: "Những Đứa Trẻ mang đến làn gió mới cho nhạc Rock Việt Nam với tinh thần nổi loạn, dám nghĩ dám làm. Mỗi ca khúc đều là một hành trình khám phá đầy năng lượng.",
        image: "BN/NhungDuaTre.jpg",
        backgroundColor: "#f6e6f0"
    }
];

// Sự kiện click cho các ca sĩ (singers)
document.querySelectorAll('.playlist-item').forEach(item => {
    item.addEventListener('click', () => {
        const title = item.getAttribute('data-title');
        const artist = singers.find(a => a.title === title);

        if (artist) {
            Swal.fire({
                title: artist.title, // Lấy tên ca sĩ
                html: `
                    <div class="info-container">
                        <img src="${artist.image || './NS/default.jpg'}" class="avatar" alt="${artist.title}">
                        <ul class="info-list">
                            <li><span class="label">Tên thật: ${artist.realName}</span></li>
                            <li><span class="label">Ngày sinh: ${artist.birthDate}</span></li>
                            <li><span class="label">Dòng nhạc: ${artist.genre}</span></li>
                            <li><span class="label">Bài hát tiêu biểu: ${artist.notableSongs}</span></li>
                            <li><span class="label">Mô tả: ${artist.description}</span></li>
                        </ul>
                    </div>
                `,
                background: artist.backgroundColor || '#e6f0f8',
                showConfirmButton: false,
                allowOutsideClick: true,
                customClass: {
                    popup: 'custom-popup',
                    title: 'swal2-title'
                }
            });
        }
    });
});

// Sự kiện click cho các ban nhạc (bands)
document.querySelectorAll('.playlist-item').forEach(item => {
    item.addEventListener('click', () => {
        const title = item.getAttribute('data-title');
        const band = bands.find(b => b.title === title);

        if (band) {
            Swal.fire({
                title: band.title, // Lấy tên ban nhạc
                html: `
                    <div class="info-container">
                        <img src="${band.image || './DX/default.jpg'}" class="avatar" alt="${band.title}">
                        <ul class="info-list">
                            <li><span class="label">Ngày thành lập: ${band.founded}</span></li>
                            <li><span class="label">Tên thành viên: ${band.members}</span></li>
                            <li><span class="label">Dòng nhạc: ${band.genre}</span></li>
                            <li><span class="label">Bài hát tiêu biểu: ${band.notableSongs}</span></li>
                            <li><span class="label">Mô tả: ${band.description}</span></li>
                        </ul>
                    </div>
                `,
                background: band.backgroundColor || '#e6f0f8',
                showConfirmButton: false,
                allowOutsideClick: true,
                customClass: {
                    popup: 'custom-popup',
                    title: 'swal2-title'
                }
            });
        }
    });
});