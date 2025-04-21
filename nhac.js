// nhac.js
const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');
const musicPlayer = document.getElementById('music-player');
const progressBar = document.getElementById('progress-bar');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const playlistItems = document.querySelectorAll('.playlist-item');

let isPlaying = false;
let currentSongIndex = -1;
let isRepeat = false;
let isShuffle = false;
const songs = Array.from(playlistItems);

// 🎵 Hàm định dạng thời gian
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// 🎶 Load bài hát
function loadSong(index) {
    if (index < 0 || index >= songs.length) return;
    const item = songs[index];
    const audioSrc = item.getAttribute('data-audio');
    const title = item.getAttribute('data-title');
    const artist = item.getAttribute('data-artist');

    audioPlayer.src = audioSrc;
    playerTitle.textContent = title;
    playerArtist.textContent = artist;
    musicPlayer.style.display = 'flex';

    audioPlayer.play().catch(() => console.error("Không thể phát bài hát!"));
    isPlaying = true;
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    currentSongIndex = index;
}

// 🎧 Bắt sự kiện click vào bài hát
playlistItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        loadSong(index);
    });
});

// ⏯️ Phát / Dừng bài hát
playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        audioPlayer.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

// ⏮️ Chuyển bài trước
prevBtn.addEventListener('click', () => {
    if (currentSongIndex > 0) {
        loadSong(currentSongIndex - 1);  // Chuyển về bài trước
    } else {
        loadSong(songs.length - 1); // Nếu đang ở bài đầu tiên, chuyển về bài cuối
    }
});

// ⏭️ Chuyển bài tiếp theo
nextBtn.addEventListener('click', () => {
    if (isShuffle) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        loadSong(randomIndex);
    } else {
        // Nếu đang ở bài hát cuối, chuyển về bài đầu tiên
        if (currentSongIndex < songs.length - 1) {
            loadSong(currentSongIndex + 1);
        } else {
            loadSong(0); // Nếu ở bài cuối, quay lại bài đầu tiên
        }
    }
});

// 🔄 Tự động chuyển bài khi bài hát kết thúc
audioPlayer.addEventListener('ended', () => {
    if (isRepeat) {
        audioPlayer.currentTime = 0; // Đưa bài hát về đầu
        audioPlayer.play(); // Phát lại bài hát hiện tại
    } else {
        nextBtn.click(); // Nếu không bật repeat, chuyển sang bài tiếp theo
    }
});

// ❌ Xử lý lỗi nếu không phát được nhạc
audioPlayer.addEventListener('error', () => {
    console.error("Bài hát này bị lỗi, chuyển sang bài khác...");
    nextBtn.click();
});

// 🔢 Cập nhật tiến trình nhạc
audioPlayer.addEventListener('timeupdate', () => {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration || 0;
    currentTimeEl.textContent = formatTime(currentTime);
    durationEl.textContent = formatTime(duration);
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
});

// 📍 Cho phép kéo để tua nhạc
progressBar.addEventListener('click', (e) => {
    const width = progressBar.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    audioPlayer.currentTime = (clickX / width) * duration;
});

// 🛠️ Lắng nghe sự kiện cho nút Shuffle và Repeat
const shuffleBtn = document.getElementById('shuffle');
const repeatBtn = document.getElementById('repeat');

shuffleBtn.addEventListener("click", () => {
    isShuffle = !isShuffle;
    shuffleBtn.style.color = isShuffle ? "#1e90ff" : "#bbb";
});

repeatBtn.addEventListener("click", () => {
    isRepeat = !isRepeat;
    repeatBtn.style.color = isRepeat ? "#1e90ff" : "#bbb";
});
