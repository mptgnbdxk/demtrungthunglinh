/* ==================================================
   TRUNG THU - GUI CAU MOT MUA TRANG
================================================== */


/* =========================
   TẠO SAO
========================= */

const starsContainer = document.getElementById("stars");

for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    star.style.opacity = Math.random();
    starsContainer.appendChild(star);
}


/* =========================
   INTRO → HỘP
========================= */

const openBox = document.getElementById("openBox");
const intro = document.getElementById("intro");
const boxSection = document.getElementById("boxSection");

openBox.addEventListener("click", () => {

    // Phát nhạc nền
    const bgMusic = document.getElementById("bgMusic");
    if (bgMusic) {
        bgMusic.volume = 0.4;
        bgMusic.play().catch(error => {
            console.log("Trình duyệt chặn tự động phát âm thanh.", error);
        });
    }

    intro.classList.add("hidden");
    boxSection.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   THƯ
========================= */

const letters = [
    {
        label: "🥮 Bánh đậu xanh — lo cho cậu nhiều lắm",
        title: "Tớ vẫn luôn thương và lo cho cậu...",
        content: `
            <p>
                Từ khoảnh khắc biết cậu âm bặt vô tín suốt 2 ngày, trong lòng tớ lúc nào cũng trăn trở một nỗi niềm lắng đọng.
            </p>
            <p>
                Tớ cứ quanh quẩn với những âu lo chẳng thể thốt thành lời: Liệu giờ này cậu đã ra sao, cơn đau đã dịu đi chút nào chưa? Cậu có mệt lắm không? Đã ăn uống được gì chưa, hay đêm đến lại trằn trọc vì khó chịu?
            </p>
            <p>
                dẫu biết rằng mẹ ở bên chăm sóc cậu chu đáo, tớ an tâm phần nào. Nhưng trong góc khuất tâm trí, tớ vẫn ước... giá như người có thể ngồi kế bên, nhẹ nhàng nắm tay và xoa dịu cho cậu lúc ấy là tớ.
            </p>
            <p>
                Có lẽ tớ đã lo lắng nhiều hơn những gì tớ thể hiện. Nhưng tớ sợ nếu tỏ ra quá nhiều, sự lo lắng ấy lại vô tình trở thành một gánh nặng tâm lý cho cậu.
            </p>
            <p>
                Nên nếu những ngày qua tớ nhắn tin hơi dồn dập, thì chỉ là vì tình cảm trong tớ dang rộng hơn khoảng cách, thương cậu nhiều quá mà thôi.
            </p>
            <p>
                Cậu đừng ngại ngùng hay cảm thấy có lỗi nhé. Tớ chỉ muốn cậu luôn nhớ rằng: Dù cách xa muôn trùng, ở phương trời này vẫn luôn có một người dõi theo và thương cậu thật lòng.
                Đó là tớ, <3
            </p>
        `
    },
    {
        label: "🥮 Bánh dẻo — tớ nhớ cậu thật nhiều",
        title: "khoảng lặng e ấp trong tớ...",
        content: `
            <p>
                Mấy ngày cậu ít nói, không gian xung quanh tớ như lắng lại một nhịp trầm.
            </p>
            <p>
               tớ luôn nhớ cậu nhiều lắm, cậu đã chiếm nhiều tâm trí của tớ dường nào.
            </p>
            <p>
                Tớ cứ chốc chốc lại ngước nhìn màn hình điện thoại, để chờ tin nhắn cậu, vô thức đoán xem cậu đang làm gì, mệt mỏi ra sao, hay đã chợp mắt được chút nào chưa.
            </p>
            <p>
                Nhiều lúc tớ muốn gửi một chuỗi tin nhắn thật dài, muốn hỏi han đủ điều. Nhưng rồi tớ lại ngập ngừng khựng lại, sợ sự vội vã của mình làm cậu thêm mỏi mệt.
            </p>
            <p>
                Tớ đứng ở ranh giới giữa mong mong nhớ nhớ: Vừa khao khát được lại gần, lại vừa e sợ làm phiền sự yên tĩnh mà cậu cần.
            </p>
            <p>
                Tớ nhớ cậu nhiều lắm. Nhưng tớ thương sự bình yên của cậu hơn.
            </p>
            <p>
                Nếu có những lúc cậu mỏi mệt và chỉ muốn tĩnh lặng, cứ tự nhiên nghỉ ngơi cậu nhé. Tớ vẫn luôn ở đây, lặng lẽ chờ cậu quay về.
            </p>
            <p>
             Tớ muốn cậu biết rằng những lúc cậu buồn nhất, tớ muốn làm  chỗ dựa tinh thần cho cậu
            </p>
        `
    },
    {
        label: "🥮 Bánh nướng — Những gửi gắm chưa cất lời",
        title: "Khao khát một cái ôm đời thực...",
        content: `
            <p>
                Cậu có biết điều buốt giá nhất của yêu xa là gì không?
            </p>
            <p>
                Là khi nỗi nhớ dâng trào đến nghẹt thở, thứ duy nhất tớ có thể chạm vào lại chỉ là tấm kính lạnh ngắt của chiếc màn hình.
            </p>
            <p>
                Tớ thèm được nghe giọng nói trầm ấm của cậu ở ngay bên cạnh, được xem tranh của cậu,khuôn mặt đáng yêu đó  chứ không qua màn hình điện thoại, được cùng cậu đi qua từng con phố nhỏ.
            </p>
            <p>
                Tớ ước mỗi khi cậu kiệt sức, tớ có thể ôm lấy cậu vào lòng và khẽ khàng: "nghỉ ngơi xíu nhóoo, có tớ ở đây rồi."
            </p>
            <p>
                Những mong ước thật dịu dàng và giản đơn, nhưng với tình yêu xa, nó lại vô cùng xa xỉ.
            </p>
            <p>
                Chính vì vậy, tớ càng đếm ngược từng ngày đến khoảnh khắc hai ta thực sự được đong đầy khoảng cách.
            </p>
        `
    }
];


/* =========================
   ELEMENTS
========================= */

const overlay = document.getElementById("letterOverlay");
const letterTitle = document.getElementById("letterTitle");
const letterLabel = document.getElementById("letterLabel");
const letterContent = document.getElementById("letterContent");
const closeLetter = document.getElementById("closeLetter");

const cakes = document.querySelectorAll(".cake:not(.cake-secret)");
const cakeButtons = document.querySelectorAll(".cake-names button[data-letter]");


/* =========================
   TIẾN TRÌNH
========================= */

let openedLetters = new Set();


/* =========================
   MỞ THƯ
========================= */

function openLetter(index) {
    const letter = letters[index];

    letterLabel.textContent = letter.label;
    letterTitle.textContent = letter.title;
    letterContent.innerHTML = letter.content;

    overlay.classList.add("show");
    openedLetters.add(index);
    checkSecret();
}


/* =========================
   CLICK BÁNH
========================= */

cakes.forEach(cake => {
    cake.addEventListener("click", () => {
        const index = Number(cake.dataset.letter);
        openLetter(index);
    });
});


/* =========================
   CLICK TÊN BÁNH
========================= */

cakeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const index = Number(button.dataset.letter);
        openLetter(index);
    });
});


/* =========================
   ĐÓNG THƯ
========================= */

closeLetter.addEventListener("click", () => {
    overlay.classList.remove("show");
});

overlay.addEventListener("click", event => {
    if (event.target === overlay) {
        overlay.classList.remove("show");
    }
});


/* =========================
   MỞ KHÓA BÁNH BÍ MẬT
========================= */

const secretCake = document.getElementById("secretCake");
const secretSection = document.getElementById("secretSection");
const finalSection = document.getElementById("finalSection");

function checkSecret() {
    if (openedLetters.size === 3) {
        secretCake.classList.remove("locked");
        secretCake.classList.add("unlocked");
        secretCake.querySelector(".lock").textContent = "✨";
        document.getElementById("bunnyMessage").textContent = "Có một chiếc bánh cuối cùng đang đợi cậu...";
    }
}


/* =========================
   CLICK BÁNH BÍ MẬT
========================= */

secretCake.addEventListener("click", () => {
    if (!secretCake.classList.contains("unlocked")) {
        return;
    }

    boxSection.classList.add("hidden");
    secretSection.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* =========================
   MỞ NHÂN BÍ MẬT
========================= */

const openSecret = document.getElementById("openSecret");

openSecret.addEventListener("click", () => {
    secretSection.classList.add("hidden");
    finalSection.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    typeFinalLetter();
});


/* =========================
   THƯ CUỐI
========================= */

const finalContent = document.getElementById("finalContent");

const finalParagraphs = [
    `Thật ra... chiếc bánh này lưu giữ những điều dịu dàng nhất mà tớ cất giấu bấy lâu.`,
    `Tớ lo lắng và thương cậu nhiều hơn tất cả những lời tớ từng thốt ra.`,
    `Có những khoảnh khắc đang giữa nhịp sống hối hả, hình bóng cậu lại chợt ùa về. Tớ tự hỏi giờ này cậu thế nào, vết thương có mỏi đau, có nuốt trôi miếng ăn, hay có thoáng cảm thấy tủi thân cô đơn?`,
    `Và điều làm tim tớ thắt lại nhất, là những lúc cậu cần một bờ vai tựa vào, tớ lại chỉ có thể hiện diện qua những dòng chữ trên màn hình.`,
    `Tớ khao khát được đến bên cậu biết bao. Được ngồi tựa bên cậu, được tận tay chăm sóc, mua cho cậu món ăn yêu thích, gói ghém trọn vẹn sự ân cần dành cho cậu.`,
    `Nhưng khoảng không gian lúc này vẫn chưa cho phép tớ làm điều đó...`,
    `Khoảng cách quả thực rất đáng ghét. Nó gói gọn một cái ôm ấm áp thành một dòng tin nhắn, biến một lần gặp mặt thành một cuộc gọi vội vã, và khiến nỗi nhớ bùng cháy chỉ biết gửi gắm qua tấm kính vô hình.`,
    `Nhưng tớ lựa chọn không để nỗi buồn ấy dập tắt hy vọng.`,
    `Bởi vì tớ mang một niềm tin vững chắc rằng: Sẽ sớm tới ngày chúng ta thu hẹp mọi khoảng cách.`,
    `Tớ muốn khoảnh khắc hội ngộ ấy sẽ là ký ức rực rỡ và đẹp đẽ nhất của hai đứa.`,
    `Tớ muốn được ngắm nhìn cậu ở cự ly thật gần, nghe tiếng thở, tiếng cười, nắm tay cậu đi qua những ngày nắng đẹp và trao cho cậu những món quà mà bấy lâu chỉ gửi qua bưu điện.`,
    `Những cái ôm còn nợ, những buổi hẹn dở dang, những tủi thân cậu từng chịu một mình...`,
    `Tớ xin phép được nợ cậu nhé.`,
    `Để ngày gặp lại, tớ sẽ bù đắp cho cậu thật nhiều, ôm cậu thật chặt cho thỏa những ngày ngóng trông.`,
    `Có thể lúc ấy tớ sẽ luống cuống không biết nói gì, có thể cả hai sẽ ngượng ngùng đỏ mặt...`,
    `Nhưng tớ biết, trái tim tớ sẽ vỡ òa trong hạnh phúc.`,
    `Vì cuối cùng, người tớ thương qua màn hình suốt ngần ấy thời gian, đã thực sự đứng trọn trong vòng tay tớ.`,
    `Trung Thu này, tớ chưa thể cùng cậu ngắm trăng.`,
    `Nhưng mong cậu nhớ rằng: Dù chiều không gian có xa xôi đến đâu, tình yêu tớ dành cho cậu vẫn trọn vẹn và sáng soi như ánh trăng rằm.`,
    `Tớ yêu cậu — nhiều hơn mọi lời tớ hay nói hoặc thứ gì đó có thể đong đếm.`
];

function typeFinalLetter() {
    finalContent.innerHTML = "";

    finalParagraphs.forEach((text, index) => {
        const p = document.createElement("p");
        p.textContent = text.replace(/\s+/g, " ").trim();
        p.style.opacity = "0";
        p.style.transform = "translateY(15px)";

        finalContent.appendChild(p);

        setTimeout(() => {
            p.style.transition = "all .8s ease";
            p.style.opacity = "1";
            p.style.transform = "translateY(0)";
        }, 500 + index * 650);
    });
}


/* =========================
   EASTER EGG
========================= */

const bunnies = document.querySelectorAll(".bunny");

bunnies.forEach((bunny, index) => {
    bunny.style.cursor = "pointer";

    bunny.addEventListener("click", () => {
        const messages = [
            "Tớ thấy cậu rồi 🐇",
            "Suỵt... có người đang nhớ cậu.",
            "Cái này không được ăn đâu!",
            "Này, đừng quên mỉm cười nhé."
        ];

        bunny.animate(
            [
                { transform: "scale(1)" },
                { transform: "scale(1.3) rotate(10deg)" },
                { transform: "scale(1)" }
            ],
            { duration: 500 }
        );

        alert(messages[index % messages.length]);
    });
});
/* =========================================
   MUSIC PLAYER
========================================= */

const music = document.getElementById("music");
const playButton = document.getElementById("musicPlay");
const volumeSlider = document.getElementById("musicVolume");
const volumeIcon = document.getElementById("volumeIcon");


/*
    Âm lượng ban đầu: 35%
*/

music.volume = 0.35;


/*
    PLAY / PAUSE
*/

playButton.addEventListener("click", async function () {

    if (music.paused) {

        try {

            await music.play();

            playButton.textContent = "Ⅱ";

            playButton.classList.add("playing");

        } catch (error) {

            console.error("Không thể phát nhạc:", error);

        }

    } else {

        music.pause();

        playButton.textContent = "▶";

        playButton.classList.remove("playing");

    }

});


/*
    ÂM LƯỢNG
*/

volumeSlider.addEventListener("input", function () {

    const value = Number(this.value);

    music.volume = value / 100;


    if (value === 0) {

        volumeIcon.textContent = "🔇";

    } else if (value < 50) {

        volumeIcon.textContent = "🔉";

    } else {

        volumeIcon.textContent = "🔊";

    }

});


/*
    BÀI HÁT KẾT THÚC
*/

music.addEventListener("ended", function () {

    playButton.textContent = "▶";

    playButton.classList.remove("playing");

});