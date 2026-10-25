'use strict';

/* ============================================
   CONFIGURATION — Edit these!
   ============================================ */
const CONFIG = {
  // Password: boyfriend's birthdate as DDMMYYYY
  PASSWORD: '26102006',   // Tanggal lahir kamu (format: DDMMYYYY)

  // Girlfriend's name
  HER_NAME: 'Shabrina Laras',  // Nama cewe kamu

  // Timeline memories — add/edit/remove items
  TIMELINE: [
    {
      date: 'first true love',
      badge: '🌟 azizaa datee',
      caption: 'first moment shopping together',
      desc: 'ndakk nyangka, dari pertemuan tidaa terdugaa itu, semuanaa jadi berbeda. larass langsung bikin hari-harii jidann lebih berwarna.',
      emoji: '🌸',
      image: 'photos/kenangan1.jpg', // path ke foto jika ada: 'photos/foto1.jpg'
    },
    {
      date: 'common placee',
      badge: '💕 nasoo everytime',
      caption: 'first nasoo datee',
      desc: 'tempatt datee yangg selaluu kitaa kunjunginn teruss niehh sayanngg xixixi',
      emoji: '🍃',
      image: 'photos/kenangan2.jpg',
    },
    {
      date: 'photobooth💕',
      badge: '😂 balamm datee',
      caption: 'firstt photobooth',
      desc: 'jauhh jauhh kebalamm cumaa buatt photobooth,teruss pulangg lagii sayangg xixixii',
      emoji: '🎭',
      image: 'photos/kenangan3.jpeg',
    },
    {
      date: 'photobooth againn',
      badge: '✈️ photobooth',
      caption: 'photobooth w/ diff clothes',
      desc: 'kemana dan ngapain aja sama larass,mau itu hal yangg samaa akann tetapp menyenangkann sayangg',
      emoji: '🗺️',
      image: 'photos/kenangan4.jpeg',
    },
    {
      date: 'HBD',
      badge: '💖 Selamanya',
      caption: 'Happy Birthday, sayang!',
      desc: 'terima kasii sudah lahirr, sudah mau direpotkann jidann, dan sudah menjadi bagian paling berharga di hatii jidannn.',
      emoji: '🎂',
      image: 'photos/kenangan5.jpeg',
    },
  ],

  // Flip cards content
  FLIP_CARDS: [
    { emoji: '👀', label: 'Hal #1', back: 'mata Laras yang berbinar itu ndak pernah bikin jidan bosen memandangnya 🌟' },
    { emoji: '😊', label: 'Hal #2', back: 'senyummu yg manis dan indah bagai bunga tulip yang selalu buat jidan terpana 💫' },
    { emoji: '🧠', label: 'Hal #3', back: 'gadis yang pinter dan hebat, bikin jidan makin kagumm setiap harinaa ✨' },
    { emoji: '🎭', label: 'Hal #4', back: 'shabrinaa yg lucu tanpa harus berubah jadi orang lain,ituu yg jidann suka 😄' },
    { emoji: '💪', label: 'Hal #5', back: 'princess kuat, bahkan di saat sayanngg ngerasa nggak kuat. Itu luar biasa 🌹' },
    { emoji: '🫶', label: 'Hal #6', back: 'caramu peduli ke orang-orang sekitar bikin aku jatuh hati terus-terusan 💖' },
    { emoji: '🌙', label: 'Hal #7', back: 'disemua langit malam yg ada, larass selalu jadi bintang yang paling terang dan indahh 🌠' },
    { emoji: '♾️', label: 'Hal #8', back: 'dari semua versi larass — yang bahagia, sedih, galau — jidann saayangg semuanya 💝' },
  ],

  // Interactive Photo Book (Album Foto Masa Kecil 3D)
  PHOTO_BOOK: [
    {
      type: 'cover',
      badge: '✨ princess memoryy ✨',
      title: 'Kilas Balik Shabrinaa larass',
      names: 'Shabrina Larass',
      sub: 'Potret perjalanan bidadari kecil yang kini tumbuh jadi sosok paling berharga di hati jidann 💖',
      decor: '🧸 🌸 🎀',
    },
    {
      type: 'memory',
      image: 'photos/kecil1.jpg',
      title: 'Si Mungil yang Menggemaskan',
      caption: 'Langkah Awal bidadari Kecil 🧸',
      date: 'baby shabrinaa 🎀',
      sticker: '👶 Sweet Baby',
      text: 'liatt deh pipii gembullnaa samaa mataa polos little larasss! dari dulu senyum manissnaa suda punya aura magis yang bikin siapapun langsung sukaa.',
      quote: '"dari kicikk aja udah semenggemaskan ini, pantesan gedenaa jadi bidadari secantik inii."'
    },
    {
      type: 'memory',
      image: 'photos/kecil2.jpg',
      title: 'Tawa Lepas & Pipi Chubby',
      caption: 'Tawa Ceria Masa Kecil 🌸',
      date: 'cute & innocent ✨',
      sticker: '🎀 Little Princess',
      text: 'masa kecil yg penuh tawa ceria tanpa beban. senyum bahagiaa larass di foto ini selalu bikin hati yg ngeliat ikut merasa tenang dan hangat.',
      quote: '"tawamuuu yangg dulu adalah melodi terindahh yang selalu mewarnaii masa-masaa kecil larass."'
    },
    {
      type: 'memory',
      image: 'photos/kecil3.jpg',
      title: 'shabrinaa withh adat lampungg ✨',
      caption: 'pretty with any clothes ✨',
      date: 'pretty princess ✨',
      sticker: '✨ Cute & Sassy',
      text: 'shabrinaa kecil yang satu ini lagi pake baju adat lampungg,lucuu banget yaallah.dtiambahh senyumm manissnaa yg wahhh bangett',
      quote: '"SELALU CANTIKK,SHABRINAA MAUU DIPAKEINNN APAA AJA PASTI CANTIKKKK"'
    },
    {
      type: 'memory',
      image: 'photos/kecil4.jpg',
      title: 'shabrinaa in the beachh ☀️',
      caption: 'Langkah untukk Menjelajah Dunia 🎒',
      date: 'the beach trip',
      sticker: '🎒 larass the Explorer',
      text: 'princess yg hobiinaa mainn sanaa-siniii,wkwkwk. next timee ndakii sayangg kann',
      quote: '"petualangan yang bakal dimulaii nantinaa lebii banyaa lagii sayangg kann"'
    },
    {
      type: 'memory',
      image: 'photos/kecil5.jpg',
      title: 'Mata Berbinar Penuh Mimpi',
      caption: 'the first profile 🌟',
      date: 'if u remember it honey',
      sticker: '🌟 Pure pretty',
      text: 'mata indah Laras yang selalu jidann kaguminn, dari duluu ketulusannyaa ndaa pernaa berubahh wkwk . .',
      quote: '"mata indah yang sama, yang kini menjadi tatapan paling menenangkan buatt jidann."'
    },
    {
      type: 'memory',
      image: 'photos/kecil6.jpg',
      title: 'the unexpected love',
      caption: 'Bunga Merekah di hari Bahagia 🌷',
      date: 'the meet',
      sticker: '🌷 Sweet Blooming',
      text: 'pertemuann yangg ndakk terdugaa,jadii awall mulaa cintaa yangg takk terkiraa sayanggg',
      quote: '"dulu jidann ndak tauu akan bertemu siapa,ternyataa larass lahh oranggnaa yangg jidann cintaii sampaii nantii"'
    },
    {
      type: 'memory',
      image: 'photos/kecil7.jpg',
      title: 'princess hebat menuju dewasa',
      caption: 'transformasi bidadari tercantik 👑',
      date: 'the pretty angel',
      sticker: '👑 my foreverr princess',
      text: 'dari gadis kecil imut bertransformasi jadi sosok shabrina laras yang jidann kenal hari ini: pintar, kuat, penyayang, dan wanita paling istimewa di semesta jidann.',
      quote: '"terima kasih sudah tumbuh dengan begitu baikk dan hebat shabrinaakuu sayanngg."'
    },
    {
      type: 'closing',
      badge: 'cantikk darii kecill 💫',
      title: 'Untuk Gadis Kecil yang Kini Jadi Ratuku',
      names: 'Shabrina Larass',
      text: 'Melihat potret-potret masa laluu larass bikinn jidan semakin bersyukur. Terima kasih ya sayang sudah melewati setiap langkah hidupmu dengan kuat dan indah, hingga takdir mempertemukan kita berdua. jidan janji akan selalu menjaga senyum berharga inii selamanyaa.',
      vow: 'Dari masa kecill yang manis hingga selamanya kita menuaa bersama, I love you alwayss laraskuu sayanngg! 💖',
      signature: 'Dengan segenap cinta, Jidann 💌'
    }
  ],

  // 60 Partikel Foto Kenangan Melayang (Floating Memory Particles)
  FLOATING_PHOTOS_ENABLED: true,
  // Daftar 60 foto kenangan. Bisa diisi path foto asli (contoh: 'photos/foto1.jpg', 'photos/kenangan1.jpg', dll)
  // Bila kamu isi kurang dari 60, sistem otomatis mengulang foto yang ada dengan judul & catatan manis!
  FLOATING_MEMORIES: [
    { image: 'photos/foto1.jpg', title: 'Senyuman Pembuka Hari', desc: 'Senyum manis Laras yang selalu berhasil bikin hari jidan terasa cerah dan hangat 🌸', badge: 'Memori #1' },
    { image: 'photos/foto2.png', title: 'Tatap Mata yang Menenangkan', desc: 'Di dalam matamu, jidan selalu menemukan rasa nyaman yang gak pernah ada di tempat lain ✨', badge: 'Memori #2' },
    { image: 'photos/foto3.jpg', title: 'Momen Penuh Tawa', desc: 'Ketawa lepas bareng kamu adalah suara paling merdu di dunia ini 😄', badge: 'Memori #3' },
    { image: 'photos/foto4.png', title: 'Gaya Lucu yang Gemas', desc: 'Tingkah manjamu yang gak pernah gagal bikin jidan tersenyum sendiri 💕', badge: 'Memori #4' },
    { image: 'photos/foto5.jpg', title: 'Kencan Sederhana Kita', desc: 'Bukan tentang ke mana kita pergi, tapi tentang jalan berdua sama kamu 🌷', badge: 'Memori #5' },
    { image: 'photos/foto6.png', title: 'Wanita Hebat & Kuat', desc: 'Kagum banget sama perjuangan dan ketulusan hati Laras selama ini 🌹', badge: 'Memori #6' },
    { image: 'photos/foto7.jpg', title: 'Aura Bidadariku', desc: 'Cantik dari hati yang selalu terpancar di setiap waktu 💖', badge: 'Memori #7' },
    { image: 'photos/foto8.png', title: 'Momen Hangat Bersama', desc: 'Waktu terasa cepat banget tiap lagi ngobrol dan bercanda bareng kamu ☕', badge: 'Memori #8' },
    { image: 'photos/foto9.png', title: 'Tatapan Penuh Makna', desc: 'Tatapan yang selalu meyakinkan jidan kalau takdir kita itu indah 💫', badge: 'Memori #9' },
    { image: 'photos/foto10.jpg', title: 'Potret Kesayangan', desc: 'Foto yang gak akan pernah bosen jidan lihat berulang kali 📸', badge: 'Memori #10' },
    { image: 'photos/foto11.png', title: 'Senja Bareng Kamu', desc: 'Seindah-indahnya senja, tetap lebih indah senyum Laras 🌅', badge: 'Memori #11' },
    { image: 'photos/foto12.jpg', title: 'Gadis Paling Manis', desc: 'Manisnya gak dibuat-buat, selalu apa adanya dan tulus 🥰', badge: 'Memori #12' },
    { image: 'photos/foto13.jpg', title: 'Momen Tak Terlupakan', desc: 'Setiap detik bersamamu adalah memori berharga yang tersimpan rapi di hati 💌', badge: 'Memori #13' },
    { image: 'photos/foto14.png', title: 'Gaya Imut Menggemaskan', desc: 'Lucu banget ekspresi kamu di foto ini, bikin pengen cubit pipinya! 🎀', badge: 'Memori #14' },
    { image: 'photos/foto15.jpg', title: 'Princess Kesayangan Jidan', desc: 'Selalu jadi prioritas dan ratu paling istimewa di hidup jidan 👑', badge: 'Memori #15' },
    { image: 'photos/foto16.png', title: 'Binar Mata Penuh Harapan', desc: 'Mata indah yang selalu menatap masa depan kita bersama 🌟', badge: 'Memori #16' },
    { image: 'photos/foto17.jpg', title: 'Hari Penuh Ceria', desc: 'Kehadiranmu selalu membawa warna baru di hari-hari jidan 🎨', badge: 'Memori #17' },
    { image: 'photos/foto18.png', title: 'Ketulusan Hati', desc: 'Kebaikanmu ke orang-orang bikin jidan makin cinta setiap hari 🫶', badge: 'Memori #18' },
    { image: 'photos/foto19.jpg', title: 'Pelukan Damai', desc: 'Tempat paling aman untuk pulang dan melepas semua lelah 🤗', badge: 'Memori #19' },
    { image: 'photos/foto20.png', title: 'Senyum yang Menular', desc: 'Laras senyum, dunia jidan langsung ikut tersenyum lebar 🌻', badge: 'Memori #20' },
    { image: 'photos/foto21.jpg', title: 'Langkah Kencan Kita', desc: 'Menghabiskan waktu jalan bareng tanpa rasa bosan sedikit pun 👣', badge: 'Memori #21' },
    { image: 'photos/foto22.png', title: 'Candid Terindah', desc: 'Foto tanpa aba-aba pun aura cantiknya tetap luar biasa 📸', badge: 'Memori #22' },
    { image: 'photos/foto23.jpg', title: 'Pesona Tanpa Batas', desc: 'Anggun, manis, dan selalu memikat hati jidan dari awal 🌹', badge: 'Memori #23' },
    { image: 'photos/foto24.png', title: 'Tawa Ceria Berdua', desc: 'Bercanda receh tapi ketawanya bisa bikin lupa waktu 😂', badge: 'Memori #24' },
    { image: 'photos/foto25.jpg', title: 'Gadis Pintar & Cerdas', desc: 'Bukan cuma cantik, tapi juga cerdas dan selalu berwawasan luas 💡', badge: 'Memori #25' },
    { image: 'photos/foto26.png', title: 'Pose Andalan Laras', desc: 'Pose andalan yang selalu jadi favorit di galeri HP jidan ✌️', badge: 'Memori #26' },
    { image: 'photos/foto27.jpg', title: 'Momen Sederhana Bahagia', desc: 'Kebahagiaan yang gak butuh mewah-mewah, cukup ada kamu 🍃', badge: 'Memori #27' },
    { image: 'photos/foto28.png', title: 'Tatapan Hangat', desc: 'Tatapan yang selalu bikin hati jidan meleleh setiap kali ketemu 💓', badge: 'Memori #28' },
    { image: 'photos/foto29.jpg', title: 'Petualangan Baru', desc: 'Menjelajahi tempat-tempat baru dan bikin cerita bareng kamu 🗺️', badge: 'Memori #29' },
    { image: 'photos/foto30.png', title: 'Gaya Manja Favorit', desc: 'Sisi manja Laras yang cuma jidan yang boleh lihat 🧸', badge: 'Memori #30' },
    { image: 'photos/foto31.jpg', title: 'Bintang Terang di Langit', desc: 'Di antara miliaran bintang, Laras adalah yang paling bersinar terang 🌠', badge: 'Memori #31' },
    { image: 'photos/foto32.png', title: 'Kecantikan Alami', desc: 'Wajah manis tanpa cela yang selalu bikin jidan terpukau 💐', badge: 'Memori #32' },
    { image: 'photos/foto33.jpg', title: 'Kisah Manis Kita', desc: 'Satu bab lagi dari kisah cinta indah yang kita bangun berdua 📖', badge: 'Memori #33' },
    { image: 'photos/foto34.png', title: 'Semangat Harianku', desc: 'Cuma liat foto ini aja rasa lelah seharian langsung hilang ✨', badge: 'Memori #34' },
    { image: 'photos/foto35.jpg', title: 'Gaya Kece Laras', desc: 'Selalu tampil modis dan percaya diri, keren banget sayangg! 🕶️', badge: 'Memori #35' },
    { image: 'photos/foto36.png', title: 'Mata Berbinar Bahagia', desc: 'Mata berbinar saat senang yang selalu bikin jidan ikut bahagia 💫', badge: 'Memori #36' },
    { image: 'photos/foto37.jpg', title: 'Momen Makan Bareng', desc: 'Makan apa aja terasa sepuluh kali lebih enak kalau di depan kamu 🍰', badge: 'Memori #37' },
    { image: 'photos/foto38.png', title: 'Gadis Mandiri & Hebat', desc: 'Sosok mandiri yang selalu jidan kagumi dan banggakan 🌺', badge: 'Memori #38' },
    { image: 'photos/foto39.jpg', title: 'Senyum Teduh', desc: 'Bagaikan oase di hari yang terik, menenangkan jiwa 🌊', badge: 'Memori #39' },
    { image: 'photos/foto40.png', title: 'Sisi Jahil yang Lucu', desc: 'Suka iseng tapi justru itu yang bikin jidan makin sayang 😄', badge: 'Memori #40' },
    { image: 'photos/foto41.jpg', title: 'Momen Romantis Kita', desc: 'Detik-detik berharga yang selalu jidan syukuri kepada Tuhan 💖', badge: 'Memori #41' },
    { image: 'photos/foto42.png', title: 'Si Imut Menggemaskan', desc: 'Tingkat keimutan yang gak ada tandingannya di dunia ini 🐣', badge: 'Memori #42' },
    { image: 'photos/foto43.jpg', title: 'Jalan Santai Berdua', desc: 'Bergandengan tangan dan menikmati setiap langkah perjalanan 🤝', badge: 'Memori #43' },
    { image: 'photos/foto44.png', title: 'Laras yang Menginspirasi', desc: 'Selalu menginspirasi jidan untuk jadi pribadi yang lebih baik 🌟', badge: 'Memori #44' },
    { image: 'photos/foto45.jpg', title: 'Potret Manis Hari Ini', desc: 'Hari apa pun terasa spesial kalau ada Laras di dalamnya 📅', badge: 'Memori #45' },
    { image: 'photos/foto46.png', title: 'Ketawa Lepas & Bebas', desc: 'Ketawa lepas yang paling jidan jaga agar gak pernah hilang 🌸', badge: 'Memori #46' },
    { image: 'photos/foto47.jpg', title: 'Momen Tak Ternilai', desc: 'Uang bisa dicari, tapi momen bareng kamu gak bisa dibeli dengan apa pun 💎', badge: 'Memori #47' },
    { image: 'photos/foto48.png', title: 'Wanita Penuh Kasih', desc: 'Hatinya yang lembut dan penyayang selalu menyentuh hati jidan 🕊️', badge: 'Memori #48' },
    { image: 'photos/foto49.jpg', title: 'Koleksi Senyuman Terbaik', desc: 'Salah satu senyum terbaik yang terekam kamera jidan 📷', badge: 'Memori #49' },
    { image: 'photos/foto50.png', title: 'Gaya Aesthetic Laras', desc: 'Estetik dan menawan dari setiap sudut pengambilan gambar 🎞️', badge: 'Memori #50' },
    { image: 'photos/foto51.jpg', title: 'Rindu yang Selalu Ada', desc: 'Setiap kali gak ketemu, foto ini yang selalu jadi obat rindu 💌', badge: 'Memori #51' },
    { image: 'photos/foto52.png', title: 'Gadis Paling Spesial', desc: 'Gak ada duanya di dunia ini, hanya satu dan milik jidan seorang 🔒', badge: 'Memori #52' },
    { image: 'photos/foto53.jpg', title: 'Warna-Warni Kehidupan', desc: 'Terima kasih sudah mewarnai hidup jidan dengan pelangi cintamu 🌈', badge: 'Memori #53' },
    { image: 'photos/foto54.png', title: 'Gaya Imut Tanpa Usaha', desc: 'Gak perlu pose susah-susah, udah otomatis kelihatan lucu banget 🧸', badge: 'Memori #54' },
    { image: 'photos/foto55.jpg', title: 'Momen Kencan Bersejarah', desc: 'Setiap tanggal kencan bareng kamu adalah tanggal merah di hati jidan 🗓️', badge: 'Memori #55' },
    { image: 'photos/foto56.png', title: 'Cahaya di Gelapku', desc: 'Saat jidan lelah atau bingung, Laras selalu hadir jadi penenang 🕯️', badge: 'Memori #56' },
    { image: 'photos/foto57.jpg', title: 'Keceriaan Tiada Akhir', desc: 'Energi positif yang selalu menular dan bikin bahagia ☀️', badge: 'Memori #57' },
    { image: 'photos/foto58.jpg', title: 'Bidadari Bumi', desc: 'Pernah gak kepikiran kalau Laras itu bidadari yang lupa cara terbang pulang? 🪽', badge: 'Memori #58' },
    { image: 'photos/foto59.jpg', title: 'Cinta Selamanya', desc: 'Dari pertemuan pertama hingga hari tua nanti, cintaku tetap untukmu ♾️', badge: 'Memori #59' },
    { image: 'photos/foto60.jpg', title: 'Selamat Ulang Tahun Sayang', desc: 'Kado terindah dalam hidup jidan adalah bisa merayakan ulang tahun bersamamu 🎂💖', badge: 'Memori #60' },
  ],
};

/* ============================================
   MUSIC DATA & MANAGEMENT
   ============================================ */
const SONGS = [
  { title: 'Bergema Sampai Selamanya', artist: 'Nadhif Basalamah', audioId: 'audio1' },
  { title: 'Risk It All', artist: 'Bruno Mars', audioId: 'audio2' },
  { title: 'Kota Ini Tak Sama Tanpamu', artist: 'Nadhif Basalamah', audioId: 'audio3' },
  { title: 'Penjaga Hati', artist: 'Nadhif Basalamah', audioId: 'audio4' },
];

let currentSong = 0;
let isPlaying = false;
let panelOpen = false;
let audioFadeInterval = null;
let musicUnlocked = false;

function getAudio(idx) {
  return document.getElementById(SONGS[idx].audioId);
}

/* ============================================
   INIT ON DOM READY
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  initLockParticles();

  const heroNameEl = document.getElementById('heroName');
  if (heroNameEl) {
    heroNameEl.textContent = CONFIG.HER_NAME + ' 💖';
  }

  // Setup audio events for time progress
  setupAudioListeners();

  // Try instant autoplay right on load
  tryInstantAutoplay();

  // Global first-interaction listener (fallback for strict mobile browsers)
  attachFirstInteractionListeners();

  // Escape key to dismiss modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMiniMemory();
      closeLightbox();
    }
  });
});

/* ============================================
   INSTANT AUTOPLAY CONCEPT (Mobile / Desktop)
   ============================================ */
function tryInstantAutoplay() {
  const audio = getAudio(currentSong);
  if (!audio) return;
  audio.volume = 0;

  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      // Autoplay succeeded!
      musicUnlocked = true;
      isPlaying = true;
      fadeInAudio(audio, 0.85);
      updateMusicUI(true);
      showMusicToast('🎶 Memutar: ' + SONGS[currentSong].title);
      updateMusicPrompt(true);
    }).catch(() => {
      // Autoplay blocked by mobile browser policy. Awaiting first tap!
      console.log('Mobile browser policy: Waiting for first user touch to play audio.');
    });
  }
}

function attachFirstInteractionListeners() {
  const events = ['touchstart', 'pointerdown', 'click', 'keydown'];

  const onFirstInteraction = () => {
    startMusicImmediate();
    events.forEach(evt => {
      window.removeEventListener(evt, onFirstInteraction, true);
      document.removeEventListener(evt, onFirstInteraction, true);
    });
  };

  events.forEach(evt => {
    window.addEventListener(evt, onFirstInteraction, { once: true, passive: true, capture: true });
    document.addEventListener(evt, onFirstInteraction, { once: true, passive: true, capture: true });
  });
}

function startMusicImmediate() {
  if (isPlaying) return;
  const audio = getAudio(currentSong);
  if (!audio) return;

  audio.play().then(() => {
    musicUnlocked = true;
    isPlaying = true;
    fadeInAudio(audio, 0.85);
    updateMusicUI(true);
    showMusicToast('🎶 Memutar: ' + SONGS[currentSong].title);
    updateMusicPrompt(true);
  }).catch((err) => {
    console.log('Audio playback error on gesture:', err);
  });
}

function fadeInAudio(audio, targetVolume = 0.85, duration = 1500) {
  if (audioFadeInterval) clearInterval(audioFadeInterval);
  const stepTime = 50;
  const steps = duration / stepTime;
  const stepVolume = (targetVolume - audio.volume) / steps;

  audioFadeInterval = setInterval(() => {
    if (audio.volume + stepVolume >= targetVolume) {
      audio.volume = targetVolume;
      clearInterval(audioFadeInterval);
      audioFadeInterval = null;
    } else {
      audio.volume = Math.min(1, Math.max(0, audio.volume + stepVolume));
    }
  }, stepTime);
}

function updateMusicPrompt(playing) {
  const prompt = document.getElementById('musicPrompt');
  if (!prompt) return;
  if (playing) {
    prompt.classList.add('playing');
    const text = prompt.querySelector('.prompt-text');
    if (text) text.textContent = '🎶 Musik sedang berputar untukmu ✨';
  } else {
    prompt.classList.remove('playing');
  }
}

function showMusicToast(msg) {
  const toast = document.getElementById('musicToast');
  const msgEl = document.getElementById('musicToastMsg');
  if (!toast || !msgEl) return;
  msgEl.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/* ============================================
   AUDIO PROGRESS & CONTROLS
   ============================================ */
function setupAudioListeners() {
  SONGS.forEach((song, i) => {
    const audio = getAudio(i);
    if (!audio) return;

    audio.addEventListener('timeupdate', () => {
      if (i === currentSong) {
        updateProgressBar(audio);
      }
    });

    audio.addEventListener('play', () => {
      if (i === currentSong) updateMusicUI(true);
    });

    audio.addEventListener('pause', () => {
      if (i === currentSong && !audio.ended) updateMusicUI(false);
    });

    audio.addEventListener('ended', () => {
      nextSong();
    });
  });
}

function updateProgressBar(audio) {
  const fill = document.getElementById('musicProgressFill');
  const curTime = document.getElementById('musicCurrentTime');
  const totTime = document.getElementById('musicTotalTime');
  if (!fill || !audio.duration) return;

  const pct = (audio.currentTime / audio.duration) * 100;
  fill.style.width = pct + '%';

  if (curTime) curTime.textContent = formatTime(audio.currentTime);
  if (totTime && !isNaN(audio.duration)) totTime.textContent = formatTime(audio.duration);
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function seekAudio(e) {
  const audio = getAudio(currentSong);
  if (!audio || !audio.duration) return;
  const bar = e.currentTarget;
  const rect = bar.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const ratio = Math.max(0, Math.min(1, clickX / rect.width));
  audio.currentTime = ratio * audio.duration;
}

function toggleMusicPanel() {
  panelOpen = !panelOpen;
  const panel = document.getElementById('musicPanel');
  if (panel) panel.classList.toggle('open', panelOpen);
}

function toggleMusic() {
  startMusicImmediate();
  const audio = getAudio(currentSong);
  if (!audio) return;

  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    updateMusicUI(false);
  } else {
    audio.play().then(() => {
      isPlaying = true;
      updateMusicUI(true);
      showMusicToast('🎶 Memutar: ' + SONGS[currentSong].title);
    }).catch(() => { });
  }
}

function playSong(idx) {
  startMusicImmediate();
  const prevAudio = getAudio(currentSong);
  if (prevAudio) {
    prevAudio.pause();
    prevAudio.currentTime = 0;
  }

  const prevTrackEl = document.getElementById('track' + currentSong);
  if (prevTrackEl) prevTrackEl.classList.remove('active');

  currentSong = idx;
  const nextTrackEl = document.getElementById('track' + currentSong);
  if (nextTrackEl) nextTrackEl.classList.add('active');

  const song = SONGS[idx];
  const titleEl = document.getElementById('musicTitle');
  const artistEl = document.getElementById('musicArtist');
  if (titleEl) titleEl.textContent = song.title;
  if (artistEl) artistEl.textContent = song.artist;

  const audio = getAudio(idx);
  audio.play().then(() => {
    isPlaying = true;
    updateMusicUI(true);
    showMusicToast('🎶 Memutar: ' + song.title);
  }).catch(() => { });
}

function nextSong() {
  playSong((currentSong + 1) % SONGS.length);
}

function prevSong() {
  playSong((currentSong - 1 + SONGS.length) % SONGS.length);
}

function updateMusicUI(playing) {
  const playBtn = document.getElementById('playBtn');
  const disc = document.getElementById('musicDisc');
  const waves = document.getElementById('musicWaves');

  if (playBtn) playBtn.textContent = playing ? '⏸' : '▶';
  if (disc) disc.classList.toggle('playing', playing);
  if (waves) waves.classList.toggle('active', playing);
}

/* ============================================
   LOCK SCREEN & PIN ENTRY (Smooth Micro-interactions)
   ============================================ */
let pinValue = '';
const MAX_PIN = CONFIG.PASSWORD.length;

function initLockParticles() {
  const container = document.getElementById('lockParticles');
  if (!container) return;
  const emojis = ['💖', '🌸', '✨', '🌷', '💝', '⭐', '🕊️', '💐', '💕', '💫', '🌹', '🎀'];
  for (let i = 0; i < 22; i++) {
    const el = document.createElement('span');
    el.className = 'lock-particle';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.cssText = `
      left: ${Math.random() * 100}%;
      --dur: ${6 + Math.random() * 8}s;
      --delay: ${Math.random() * 6}s;
      --size: ${0.85 + Math.random() * 1.3}rem;
    `;
    container.appendChild(el);
  }
}

function pressNum(n) {
  startMusicImmediate();

  if (pinValue.length >= MAX_PIN) return;
  pinValue += n;
  updatePinDots();

  if (pinValue.length === MAX_PIN) {
    setTimeout(checkPin, 200);
  }
}

function clearPin() {
  startMusicImmediate();
  if (pinValue.length === 0) return;
  pinValue = pinValue.slice(0, -1);
  updatePinDots();
  const errEl = document.getElementById('lockError');
  if (errEl) errEl.textContent = '';
}

function updatePinDots() {
  const dots = document.querySelectorAll('.pin-dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('filled', i < pinValue.length);
  });
}

function checkPin() {
  startMusicImmediate();
  if (pinValue.length < MAX_PIN) {
    showLockError('Lengkapi dulu PIN-nya yaa sayangg 💕');
    return;
  }
  if (pinValue === CONFIG.PASSWORD) {
    unlockSite();
  } else {
    showLockError('Password salah, coba lagi atuhh sayangg! 🙈');
    pinValue = '';
    updatePinDots();
  }
}

function showLockError(msg) {
  const el = document.getElementById('lockError');
  if (!el) return;
  el.textContent = msg;
  el.style.animation = 'none';
  setTimeout(() => { el.style.animation = ''; }, 10);
}

function unlockSite() {
  startMusicImmediate();
  const lockscreen = document.getElementById('lockscreen');
  if (!lockscreen) return;

  lockscreen.classList.add('unlocking');
  lockscreen.addEventListener('animationend', () => {
    lockscreen.style.display = 'none';
    const letterPage = document.getElementById('letterPage');
    if (letterPage) {
      letterPage.classList.remove('hidden');
      letterPage.scrollTop = 0;
      initLetterPage();
      startRomanticBackground();
    } else {
      proceedToMain();
    }
  }, { once: true });
}

function initLetterPage() {
  const dateEl = document.getElementById('letterDate');
  if (dateEl && !dateEl.textContent.trim()) {
    const now = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    try {
      dateEl.textContent = now.toLocaleDateString('id-ID', options) + ' ✨';
    } catch (e) {
      dateEl.textContent = 'Hari yang Paling Bahagia 💖';
    }
  }

  const greetingEl = document.getElementById('letterGreeting');
  if (greetingEl && CONFIG.HER_NAME && !greetingEl.dataset.customized) {
    greetingEl.textContent = `Untuk ${CONFIG.HER_NAME} Sayanggg,`;
  }
}

function proceedToMain() {
  startMusicImmediate();
  const letterPage = document.getElementById('letterPage');
  const mainContent = document.getElementById('mainContent');

  if (letterPage && !letterPage.classList.contains('hidden')) {
    letterPage.classList.add('exiting');

    let handled = false;
    const onExitDone = () => {
      if (handled) return;
      handled = true;
      letterPage.classList.add('hidden');
      letterPage.classList.remove('exiting');
      if (mainContent) {
        mainContent.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
      initMainContent();
    };

    letterPage.addEventListener('animationend', onExitDone, { once: true });
    // Safety fallback timeout in case animationend is skipped
    setTimeout(onExitDone, 700);
  } else {
    if (mainContent) {
      mainContent.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    initMainContent();
  }
}

/* ============================================
   MAIN CONTENT INITIALIZATION
   ============================================ */
function initMainContent() {
  startRomanticBackground();
  startConfetti();
  initFloatingPhotoParticles();
  buildFlipbook();
  buildTimeline();
  buildFlipCards();
  initGame();
  startMusicImmediate();
}

/* ============================================
   ROMANTIC BACKGROUND — Pure CSS animations
   (bintang berkelip, hati + bunga melayang,
    nebula glow, bintang jatuh)
   Semua loop selamanya via CSS animation.
   ============================================ */
function startRomanticBackground() {
  const wrap = document.getElementById('bgStarsWrap');
  if (!wrap || wrap.children.length > 0) return;

  /* 1. Bintang-bintang berkelip */
  const starCount = window.innerWidth < 480 ? 35 : 55;
  for (let i = 0; i < starCount; i++) {
    const el = document.createElement('div');
    el.className = 'bg-star';
    const size = 1 + Math.random() * 2.0;
    el.style.cssText = `
      width:${size}px;
      height:${size}px;
      left:${Math.random() * 100}%;
      top:${Math.random() * 100}%;
      --dur:${2.5 + Math.random() * 4}s;
      --delay:-${Math.random() * 6}s;
      --brightness:${0.35 + Math.random() * 0.65};
      box-shadow:0 0 ${size + 2}px rgba(255,${Math.floor(180 + Math.random() * 75)},${Math.floor(200 + Math.random() * 55)},0.85);
    `;
    wrap.appendChild(el);
  }

  /* 2. Emoji romantis melayang ke atas (lembut, tidak menumpuk) */
  const symbols = ['🌸', '💖', '✨', '🌷', '💕', '💗', '⭐', '💝', '🌹', '💫'];
  const petalCount = window.innerWidth < 480 ? 14 : 20;
  for (let i = 0; i < petalCount; i++) {
    const el = document.createElement('span');
    el.className = 'bg-petal';
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    const swayDir = Math.random() > 0.5 ? 1 : -1;
    const dur = 9 + Math.random() * 11;
    const delay = Math.random() * dur;
    el.style.cssText = `
      left:${Math.random() * 96}%;
      --dur:${dur}s;
      --delay:-${delay}s;
      --size:${0.85 + Math.random() * 0.45}rem;
      --opacity:${0.45 + Math.random() * 0.3};
      --sway1:${swayDir * (18 + Math.random() * 32)}px;
      --sway2:${-swayDir * (12 + Math.random() * 24)}px;
      --sway3:${swayDir * (8 + Math.random() * 16)}px;
    `;
    wrap.appendChild(el);
  }

  /* 3. Nebula glow clouds */
  const nebulas = [
    { color: 'rgba(255,0,120,0.55)', w: 340, h: 270, top: '4%', left: '-6%', dur: 13, delay: -2 },
    { color: 'rgba(140,0,255,0.45)', w: 290, h: 290, top: '34%', right: '-4%', dur: 16, delay: -6 },
    { color: 'rgba(255,80,180,0.45)', w: 240, h: 195, top: '64%', left: '12%', dur: 11, delay: -4 },
    { color: 'rgba(70,0,210,0.38)', w: 195, h: 195, top: '14%', right: '18%', dur: 18, delay: -9 },
    { color: 'rgba(255,155,0,0.3)', w: 175, h: 145, top: '78%', right: '4%', dur: 14, delay: -3 },
  ];
  nebulas.forEach(n => {
    const el = document.createElement('div');
    el.className = 'bg-nebula';
    const pos = n.right ? `right:${n.right}` : `left:${n.left}`;
    el.style.cssText = `
      width:${n.w}px;height:${n.h}px;
      background:radial-gradient(circle,${n.color},transparent 70%);
      top:${n.top};${pos};
      --dur:${n.dur}s;
      --delay:-${Math.abs(n.delay)}s;
      --tx:${(Math.random() - 0.5) * 50}px;--ty:${(Math.random() - 0.5) * 40}px;
      --tx2:${(Math.random() - 0.5) * 40}px;--ty2:${(Math.random() - 0.5) * 35}px;
      --max-opacity:1;
    `;
    wrap.appendChild(el);
  });

  /* 4. Shooting stars */
  const shootData = [
    { top: '7%', left: '82%', dur: 5, delay: 0 },
    { top: '17%', left: '68%', dur: 6, delay: 7 },
    { top: '4%', left: '58%', dur: 4.5, delay: 13 },
    { top: '23%', left: '88%', dur: 5.5, delay: 19 },
    { top: '11%', left: '76%', dur: 7, delay: 5 },
  ];
  shootData.forEach(s => {
    const el = document.createElement('div');
    el.className = 'shooting-star';
    el.style.cssText = `top:${s.top};left:${s.left};--dur:${s.dur}s;--delay:-${s.delay}s;`;
    wrap.appendChild(el);
  });
}

/* ============================================
   ROMANTIC SAKURA & PETAL CONFETTI
   ============================================ */
function startConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // Pakai window.innerWidth/Height agar tidak pernah 0
  function getW() { return window.innerWidth; }
  function getH() { return window.innerHeight; }

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = getW() * dpr;
    canvas.height = getH() * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0); // reset scale dulu
    ctx.scale(dpr, dpr);
    // Re-scatter particles saat resize agar tidak OOB
    particles.forEach(p => {
      p.x = Math.random() * getW();
    });
  }

  const colors = [
    '#ff75a0', '#ffb3d1', '#ffd1dc', '#ffd700',
    '#ff80ab', '#fff0f5', '#f8bbd0', '#e1bee7', '#fff'
  ];
  const particles = [];
  const count = window.innerWidth < 480 ? 32 : 46;

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * getW(),
      y: Math.random() * getH(), // Sebar merata di seluruh layar
      w: 7 + Math.random() * 7,
      h: 4 + Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: 0.7 + Math.random() * 1.1,
      angle: Math.random() * Math.PI * 2,
      spinSpeed: (Math.random() - 0.5) * 0.07,
      swaySpeed: 0.02 + Math.random() * 0.03,
      swayOffset: Math.random() * Math.PI * 2,
      opacity: 0.65 + Math.random() * 0.3,
    });
  }

  // Resize setelah particles dibuat
  resize();
  window.addEventListener('resize', resize, { passive: true });

  function draw() {
    ctx.clearRect(0, 0, getW(), getH());

    particles.forEach(p => {
      p.y += p.speed;
      p.angle += p.spinSpeed;
      p.swayOffset += p.swaySpeed;
      p.x += Math.sin(p.swayOffset) * 1.2;

      // Loop: reset ke atas saat keluar bawah
      if (p.y > getH() + 15) {
        p.y = -15;
        p.x = Math.random() * getW();
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.scale(1, Math.cos(p.angle * 1.5));
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.w / 2, p.h / 2, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    requestAnimationFrame(draw);
  }
  draw();
}

/* ============================================
   60 FLOATING PHOTO PARTICLES & MINI MEMORY MODAL
   ============================================ */
let cachedFloatingMemories = [];
let floatingPhotosVisible = true;

// Helper generate list 60 foto kenangan
function getFloatingMemories() {
  if (cachedFloatingMemories.length === 60) {
    return cachedFloatingMemories;
  }

  const baseList = (CONFIG.FLOATING_MEMORIES && Array.isArray(CONFIG.FLOATING_MEMORIES))
    ? CONFIG.FLOATING_MEMORIES
    : [];

  const fallbackPhotos = [
    'photos/kenangan1.jpg', 'photos/kenangan2.jpg', 'photos/kenangan3.jpeg',
    'photos/kenangan4.jpeg', 'photos/kenangan5.jpeg', 'photos/kecil1.jpg',
    'photos/kecil2.jpg', 'photos/kecil3.jpg', 'photos/kecil4.jpg',
    'photos/kecil5.jpg', 'photos/kecil6.jpg', 'photos/kecil7.jpg'
  ];

  const captions = [
    'Senyum Manis Laras 💕', 'Tatap Matamu yang Indah ✨', 'Kencan Seru Bareng Kamu 🌸',
    'Momen Lucu yang Bikin Ketawa 😄', 'Princess Kuat Kebanggaan Jidan 🌹', 'Hari Paling Bahagia 💖',
    'Gadis Paling Hebat di Duniaku 💫', 'Bintang Paling Bersinar 🌠', 'Memori Tak Terlupakan 📸',
    'Pelukan Hangatmu 🫶', 'Gaya Menggemaskanmu 🥰', 'Cinta Selamanya ♾️'
  ];

  const list = [];
  const targetCount = 60; // 60 macam foto melayang

  for (let i = 0; i < targetCount; i++) {
    if (i < baseList.length && baseList[i] && baseList[i].image) {
      list.push({
        image: baseList[i].image,
        title: baseList[i].title || `Memori Manis #${i + 1}`,
        desc: baseList[i].desc || 'Setiap momen bersamamu selalu terukir indah di hati jidan 💕',
        badge: baseList[i].badge || `Memori #${i + 1}`,
      });
    } else {
      const photoSrc = fallbackPhotos[i % fallbackPhotos.length];
      const cap = captions[i % captions.length];
      list.push({
        image: photoSrc,
        title: `${cap} #${i + 1}`,
        desc: `Foto kenangan ke-${i + 1}: Terima kasih sudah hadir dan bikin hari-hari jidan selalu berwarna 💖`,
        badge: `Memori #${i + 1}`,
      });
    }
  }

  cachedFloatingMemories = list;
  return list;
}

let nextMemoryIndex = 0;

function initFloatingPhotoParticles() {
  const wrap = document.getElementById('floatingPhotosWrap');
  if (!wrap || CONFIG.FLOATING_PHOTOS_ENABLED === false) return;

  wrap.innerHTML = '';
  const memories = getFloatingMemories();
  if (!memories || memories.length === 0) return;

  // Hanya 8 foto di HP (agar lega & tidak menumpuk), 10 foto di desktop
  const isMobile = window.innerWidth < 480;
  const maxConcurrent = isMobile ? 8 : 10;

  // Set pointer untuk giliran foto berikutnya
  nextMemoryIndex = maxConcurrent % memories.length;

  const badges = ['💖', '✨', '🌸', '💕', '🌷', '⭐', '💫', '🌹', '💌', '🎀'];

  // Buat tepat 8 - 10 partikel aktif melayang di layar
  for (let slot = 0; slot < maxConcurrent; slot++) {
    const initialIndex = slot % memories.length;
    const item = memories[initialIndex];

    const el = document.createElement('div');
    el.className = 'floating-photo-orb';

    // Bagikan ke jalur horizontal (lane) yang rapi agar tidak pernah saling tumpuk
    const laneWidth = 84 / maxConcurrent;
    const laneLeft = 5 + (slot * laneWidth) + (Math.random() * (laneWidth * 0.45));

    // Durasi melayang bervariasi santai (20s - 27s)
    const dur = 20 + ((slot * 2.3) % 7.5);
    // Negative delay terdistribusi rata agar saat web dibuka, tiap foto berada di ketinggian berbeda
    const delay = -((slot / maxConcurrent) * dur);

    // Goyangan horizontal lembut
    const swayDir = (slot % 2 === 0) ? 1 : -1;
    const sway1 = swayDir * (12 + (slot * 3 % 14));
    const sway2 = -swayDir * (10 + (slot * 2 % 12));
    const sway3 = swayDir * (8 + (slot * 2 % 10));
    const rot = swayDir * (4 + (slot * 2 % 8));
    // Ukuran kompak dan anggun di HP (38px - 44px di HP, 46px - 52px di desktop)
    const size = isMobile ? (38 + (slot * 2 % 8)) : (46 + (slot * 2 % 8));
    const badgeEmoji = badges[slot % badges.length];

    el.style.cssText = `
      --left: ${laneLeft.toFixed(1)}%;
      --dur: ${dur.toFixed(1)}s;
      --delay: ${delay.toFixed(1)}s;
      --sway1: ${sway1}px;
      --sway2: ${sway2}px;
      --sway3: ${sway3}px;
      --rot: ${rot}deg;
      --size: ${size}px;
      --max-op: 0.82;
    `;

    el.innerHTML = `
      <div class="photo-orb-inner">
        <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='photos/kenangan1.jpg'" />
        <div class="photo-orb-glow"></div>
        <span class="photo-orb-badge">${badgeEmoji}</span>
      </div>
      <div class="photo-orb-tooltip">${item.badge}: ${item.title}</div>
    `;

    el.dataset.memoryIndex = initialIndex;

    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const currentIdx = parseInt(el.dataset.memoryIndex, 10);
      openMiniMemory(isNaN(currentIdx) ? initialIndex : currentIdx);
    });

    // SIKLUS ROTASI: Saat 1 foto selesai melayang ke atas, ganti dengan foto berikutnya dari 60 foto!
    el.addEventListener('animationiteration', () => {
      const nextIdx = nextMemoryIndex % memories.length;
      nextMemoryIndex = (nextMemoryIndex + 1) % memories.length;

      const nextItem = memories[nextIdx];
      el.dataset.memoryIndex = nextIdx;

      // Update konten foto saat berada di bawah layar (opacity: 0)
      const img = el.querySelector('img');
      const tooltip = el.querySelector('.photo-orb-tooltip');
      const badge = el.querySelector('.photo-orb-badge');

      if (img) img.src = nextItem.image;
      if (tooltip) tooltip.textContent = `${nextItem.badge}: ${nextItem.title}`;
      if (badge) badge.textContent = badges[nextIdx % badges.length];

      // Beri sedikit variasi lane agar gerakannya selalu dinamis
      const newLaneLeft = 5 + (slot * laneWidth) + (Math.random() * (laneWidth * 0.45));
      el.style.setProperty('--left', `${newLaneLeft.toFixed(1)}%`);
    });

    wrap.appendChild(el);
  }
}

function openMiniMemory(index) {
  const memories = getFloatingMemories();
  const item = memories[index];
  if (!item) return;

  const modal = document.getElementById('miniMemoryModal');
  const imgEl = document.getElementById('miniMemoryImg');
  const badgeEl = document.getElementById('miniMemoryBadge');
  const titleEl = document.getElementById('miniMemoryTitle');
  const descEl = document.getElementById('miniMemoryDesc');
  const musicTextEl = document.getElementById('miniMemoryMusicText');

  if (imgEl) imgEl.src = item.image;
  if (badgeEl) badgeEl.textContent = item.badge || `Memori #${index + 1}`;
  if (titleEl) titleEl.textContent = item.title;
  if (descEl) descEl.textContent = item.desc;
  if (musicTextEl) {
    const curSong = SONGS[currentSong]?.title || 'Bergema Sampai Selamanya';
    musicTextEl.textContent = `Lagu: ${curSong} 💖`;
  }

  // Bunyikan nada lonceng manis romantis via Web Audio
  playSparkleSound();

  if (modal) {
    modal.classList.add('open');
  }
}

function closeMiniMemory(e) {
  if (e && e.target && !e.target.classList.contains('mini-memory-modal') && !e.target.classList.contains('mini-memory-close')) {
    return;
  }
  const modal = document.getElementById('miniMemoryModal');
  if (modal) {
    modal.classList.remove('open');
  }
}

function toggleFloatingPhotos() {
  const wrap = document.getElementById('floatingPhotosWrap');
  const btn = document.getElementById('floatingPhotosToggle');
  if (!wrap) return;

  floatingPhotosVisible = !floatingPhotosVisible;
  wrap.classList.toggle('disabled', !floatingPhotosVisible);

  if (btn) {
    btn.classList.toggle('active', floatingPhotosVisible);
    const label = btn.querySelector('.fp-toggle-label');
    if (label) {
      label.textContent = floatingPhotosVisible ? 'Foto Kenangan' : 'Foto: Mati';
    }
  }

  showMusicToast(floatingPhotosVisible ? '📸 Foto kenangan dinyalakan! ✨' : 'Foto melayang disembunyikan');
}

// Gentle audio chime sparkle when tapping memory
function playSparkleSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
      gain.gain.setValueAtTime(0.001, ctx.currentTime + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.08 + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + idx * 0.08);
      osc.stop(ctx.currentTime + idx * 0.08 + 0.4);
    });
  } catch (err) {
    // Audio context may be restricted by browser policy
  }
}

// Close lightbox helper if opened
function closeLightbox(e) {
  if (e && e.target && !e.target.classList.contains('photo-lightbox') && !e.target.classList.contains('lightbox-close')) {
    return;
  }
  const lb = document.getElementById('photoLightbox');
  if (lb) lb.classList.remove('open');
}

function openLightbox(src, caption) {
  const lb = document.getElementById('photoLightbox');
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');
  if (!lb) return;
  if (img) img.src = src;
  if (cap) cap.textContent = caption || '';
  lb.classList.add('open');
}

/* ============================================
   INTERACTIVE 3D CAKE & BLOWOUT CANDLES
   ============================================ */
let candlesBlown = false;

function tapCake() {
  const candlesRow = document.getElementById('candlesRow');
  if (!candlesRow) return;

  candlesBlown = !candlesBlown;
  candlesRow.classList.toggle('candles-blown', candlesBlown);

  if (candlesBlown) {
    showMusicToast('🎂 Lilin ditiup! Semoga semua impianmu terkabul, sayangg! ✨');
    createHeartExplosion();
  } else {
    showMusicToast('🔥 Lilin dinyalakan kembali penuh cinta! 💖');
  }
}

function createHeartExplosion() {
  // Romantic messages & emojis that float upward
  const loveTokens = [
    { text: 'Sayangku 💖', size: '1.25rem' },
    { text: 'I Love You ✨', size: '1.3rem' },
    { text: 'Bidadari Cantik 🌸', size: '1.2rem' },
    { text: 'Bahagia Selalu 🎂', size: '1.2rem' },
    { text: 'My Universe 💫', size: '1.25rem' },
    { text: 'Selamanya 💝', size: '1.35rem' },
    { text: 'Peluk Hangat 💕', size: '1.2rem' },
    { text: '💖', size: '1.8rem' },
    { text: '🌸', size: '1.6rem' },
    { text: '✨', size: '1.7rem' },
    { text: '🌷', size: '1.6rem' },
    { text: '💝', size: '1.8rem' },
    { text: '⭐', size: '1.5rem' },
    { text: '💕', size: '1.7rem' },
  ];

  for (let i = 0; i < 26; i++) {
    const item = loveTokens[Math.floor(Math.random() * loveTokens.length)];
    const el = document.createElement('span');
    el.textContent = item.text;
    el.style.cssText = `
      position: fixed;
      top: 48%;
      left: 50%;
      font-size: ${item.size};
      font-family: ${item.text.length > 2 ? 'var(--font-fancy)' : 'inherit'};
      font-weight: 700;
      color: #fff;
      text-shadow: 0 0 12px rgba(255, 77, 136, 0.9), 0 0 20px rgba(255, 215, 0, 0.7);
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%) scale(0.6);
      transition: all ${1.2 + Math.random() * 0.9}s cubic-bezier(0.25, 1, 0.5, 1);
      opacity: 1;
      white-space: nowrap;
    `;
    document.body.appendChild(el);

    const angle = Math.random() * Math.PI * 2;
    const dist = 60 + Math.random() * 170;
    const destX = Math.cos(angle) * dist;
    const destY = Math.sin(angle) * dist - 50; // gentle upward bias

    requestAnimationFrame(() => {
      el.style.transform = `translate(calc(-50% + ${destX}px), calc(-50% + ${destY}px)) scale(1.3) rotate(${(Math.random() - 0.5) * 30}deg)`;
      el.style.opacity = '0';
    });

    setTimeout(() => el.remove(), 2200);
  }
}

function scrollToFlipbook() {
  const el = document.getElementById('flipbookSection');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToTimeline() {
  const el = document.getElementById('timelineSection');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      updateTimelinePadding();
      goToSlide(currentSlide, false);
    }, 350);
  }
}

/* ============================================
   TIMELINE (Responsive Spotlight Carousel)
   ============================================ */
let currentSlide = 0;
let isProgrammaticScroll = false;
let programmaticScrollTimeout = null;

function buildTimeline() {
  const slider = document.getElementById('timelineSlider');
  const dotsEl = document.getElementById('tlDots');
  const wrap = document.getElementById('timelineSliderWrap');
  if (!slider || !dotsEl) return;

  slider.innerHTML = '';
  dotsEl.innerHTML = '';

  CONFIG.TIMELINE.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'timeline-card' + (i === currentSlide ? ' active' : '');
    card.id = 'timelineCard' + i;
    card.setAttribute('role', 'group');
    card.setAttribute('aria-label', `Kenangan ${i + 1} dari ${CONFIG.TIMELINE.length}`);
    card.innerHTML = `
      <div class="timeline-img-wrap">
        ${item.image
        ? `<img src="${item.image}" alt="${item.caption}" loading="lazy" />`
        : `<span class="timeline-img-placeholder">${item.emoji}</span>`}
        <span class="timeline-badge">${item.badge}</span>
      </div>
      <div class="timeline-body">
        <div class="timeline-date">${item.date}</div>
        <div class="timeline-caption">${item.caption}</div>
        <div class="timeline-desc">${item.desc}</div>
      </div>
    `;
    // Click any card to select and center it
    card.addEventListener('click', () => {
      startMusicImmediate();
      goToSlide(i);
    });
    slider.appendChild(card);

    const dot = document.createElement('div');
    dot.className = 'tl-dot' + (i === currentSlide ? ' active' : '');
    dot.setAttribute('role', 'button');
    dot.setAttribute('aria-label', `Lihat momen ke-${i + 1}`);
    dot.onclick = () => {
      startMusicImmediate();
      goToSlide(i);
    };
    dotsEl.appendChild(dot);
  });

  updateTimelinePadding();
  updateTimelineNav();

  // Resize handler to recalculate padding & re-center active slide
  window.addEventListener('resize', () => {
    updateTimelinePadding();
    goToSlide(currentSlide, false);
  }, { passive: true });

  // Sync scroll snap with active spotlight card & dots
  if (wrap) {
    let scrollTimeout;
    wrap.addEventListener('scroll', () => {
      if (isProgrammaticScroll) return;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const cards = document.querySelectorAll('.timeline-card');
        if (!cards.length) return;
        const wrapRect = wrap.getBoundingClientRect();
        const center = wrapRect.left + wrapRect.width / 2;

        let closestIdx = 0;
        let minDiff = Infinity;
        cards.forEach((c, idx) => {
          const r = c.getBoundingClientRect();
          const cardCenter = r.left + r.width / 2;
          const diff = Math.abs(center - cardCenter);
          if (diff < minDiff) {
            minDiff = diff;
            closestIdx = idx;
          }
        });

        if (currentSlide !== closestIdx) {
          currentSlide = closestIdx;
          updateSlideStates();
        }
      }, 50);
    }, { passive: true });
  }

  // Initial center alignment after DOM paint
  requestAnimationFrame(() => {
    updateTimelinePadding();
    goToSlide(0, false);
  });
}

function updateTimelinePadding() {
  const wrap = document.getElementById('timelineSliderWrap');
  const slider = document.getElementById('timelineSlider');
  if (!wrap || !slider) return;

  const firstCard = slider.querySelector('.timeline-card');
  if (!firstCard) return;

  const wrapWidth = wrap.clientWidth;
  const cardWidth = firstCard.offsetWidth;
  if (!cardWidth) return;

  // Exact side padding so any slide can be centered in the viewport
  const pad = Math.max(16, Math.floor((wrapWidth - cardWidth) / 2));
  slider.style.paddingLeft = pad + 'px';
  slider.style.paddingRight = pad + 'px';
}

function slideTimeline(dir) {
  startMusicImmediate();
  const max = CONFIG.TIMELINE.length - 1;
  const target = Math.max(0, Math.min(max, currentSlide + dir));
  goToSlide(target);
}

function goToSlide(idx, smooth = true) {
  const max = CONFIG.TIMELINE.length - 1;
  currentSlide = Math.max(0, Math.min(max, idx));

  const wrap = document.getElementById('timelineSliderWrap');
  const targetCard = document.getElementById('timelineCard' + currentSlide);

  if (wrap && targetCard) {
    // Pixel-perfect centering using getBoundingClientRect
    const wrapRect = wrap.getBoundingClientRect();
    const cardRect = targetCard.getBoundingClientRect();
    const delta = (cardRect.left + cardRect.width / 2) - (wrapRect.left + wrapRect.width / 2);
    const targetScroll = wrap.scrollLeft + delta;

    isProgrammaticScroll = true;
    wrap.scrollTo({
      left: targetScroll,
      behavior: smooth ? 'smooth' : 'auto'
    });

    clearTimeout(programmaticScrollTimeout);
    programmaticScrollTimeout = setTimeout(() => {
      isProgrammaticScroll = false;
    }, 450);
  }

  updateSlideStates();
}

function updateSlideStates() {
  const cards = document.querySelectorAll('.timeline-card');
  cards.forEach((card, i) => {
    const isActive = (i === currentSlide);
    card.classList.toggle('active', isActive);
    card.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  document.querySelectorAll('.tl-dot').forEach((d, i) => {
    d.classList.toggle('active', i === currentSlide);
  });

  updateTimelineNav();
}

function updateTimelineNav() {
  const prevBtn = document.getElementById('tlPrev');
  const nextBtn = document.getElementById('tlNext');
  if (prevBtn) prevBtn.disabled = currentSlide === 0;
  if (nextBtn) nextBtn.disabled = currentSlide === CONFIG.TIMELINE.length - 1;
}

/* ============================================
   FLIP CARDS WITH ROMANTIC MICRO-SPARKS
   ============================================ */
function buildFlipCards() {
  const grid = document.getElementById('flipcardsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  CONFIG.FLIP_CARDS.forEach(card => {
    const el = document.createElement('div');
    el.className = 'flip-card';
    el.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div class="flip-front-emoji">${card.emoji}</div>
          <div class="flip-front-label">${card.label}</div>
          <div class="flip-front-hint">Ketuk ✨</div>
        </div>
        <div class="flip-card-back">
          <div class="flip-back-text">${card.back}</div>
        </div>
      </div>
    `;
    el.addEventListener('click', (e) => {
      startMusicImmediate();
      el.classList.toggle('flipped');
      spawnMiniHeartSparks(e.clientX, e.clientY);
    });
    grid.appendChild(el);
  });
}

function spawnMiniHeartSparks(x, y) {
  if (!x || !y) return;
  const emojis = ['💖', '✨', '🌸', '💕'];
  for (let i = 0; i < 4; i++) {
    const s = document.createElement('span');
    s.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    s.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      font-size: 1rem;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%) scale(0.5);
      transition: all 0.7s cubic-bezier(0.25, 1, 0.5, 1);
      opacity: 1;
    `;
    document.body.appendChild(s);

    const angle = Math.random() * Math.PI * 2;
    const dist = 25 + Math.random() * 35;
    const destX = Math.cos(angle) * dist;
    const destY = Math.sin(angle) * dist - 15;

    requestAnimationFrame(() => {
      s.style.transform = `translate(calc(-50% + ${destX}px), calc(-50% + ${destY}px)) scale(1.2)`;
      s.style.opacity = '0';
    });

    setTimeout(() => s.remove(), 750);
  }
}

/* ============================================
   ARCADE GAME — Catch The Hearts (Smooth Sway)
   ============================================ */
let gameRunning = false;
let gameTimer = 30;
let gameScore = 0;
let gameMiss = 0;
let gameInterval, countdownInterval;
let basketX = 0;
let hearts = [];
let gameParticles = [];
let animFrame;
let gameCanvasLogicalWidth = 360;
let gameCanvasLogicalHeight = 360;

function initGame() {
  const canvas = document.getElementById('gameCanvas');
  if (!canvas) return;
  resizeGameCanvas();

  window.addEventListener('resize', () => {
    if (!gameRunning) resizeGameCanvas();
  });

  // Mouse move
  canvas.addEventListener('mousemove', e => {
    const r = canvas.getBoundingClientRect();
    basketX = e.clientX - r.left;
  });

  // Touch move / tap (Samsung Galaxy A15 Smooth Touch)
  const handleTouch = (e) => {
    e.preventDefault();
    const r = canvas.getBoundingClientRect();
    if (e.touches && e.touches[0]) {
      basketX = e.touches[0].clientX - r.left;
    }
  };

  canvas.addEventListener('touchmove', handleTouch, { passive: false });
  canvas.addEventListener('touchstart', handleTouch, { passive: false });

  basketX = gameCanvasLogicalWidth / 2;
}

function resizeGameCanvas() {
  const canvas = document.getElementById('gameCanvas');
  if (!canvas) return;
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();

  gameCanvasLogicalWidth = rect.width || canvas.offsetWidth || 340;
  gameCanvasLogicalHeight = rect.height || 360;

  canvas.width = Math.floor(gameCanvasLogicalWidth * dpr);
  canvas.height = Math.floor(gameCanvasLogicalHeight * dpr);

  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function startGame() {
  startMusicImmediate();
  resizeGameCanvas();
  const canvas = document.getElementById('gameCanvas');
  const overlay = document.getElementById('gameOverlay');
  if (overlay) {
    overlay.style.display = 'none';
    overlay.classList.remove('game-win-active');
  }

  gameRunning = true;
  gameScore = 0;
  gameMiss = 0;
  gameTimer = 30;
  hearts = [];
  gameParticles = [];
  basketX = gameCanvasLogicalWidth / 2;

  updateGameHUD();

  clearInterval(gameInterval);
  clearInterval(countdownInterval);
  cancelAnimationFrame(animFrame);

  // Spawn hearts
  gameInterval = setInterval(spawnHeart, 750);

  // Countdown timer
  countdownInterval = setInterval(() => {
    gameTimer--;
    const timerEl = document.getElementById('gameTimer');
    if (timerEl) timerEl.textContent = gameTimer;
    if (gameTimer <= 0) endGame();
  }, 1000);

  gameLoop(canvas);
}

function spawnHeart() {
  const types = [
    { char: '❤️', pts: 1, speed: 2.0, size: 24 },
    { char: '💖', pts: 2, speed: 2.4, size: 22 },
    { char: '💝', pts: 3, speed: 2.8, size: 20 },
    { char: '💫', pts: 5, speed: 3.2, size: 18 },
    { char: '💔', pts: -2, speed: 2.6, size: 22 },
  ];
  const t = types[Math.floor(Math.random() * types.length)];
  hearts.push({
    x: 25 + Math.random() * (gameCanvasLogicalWidth - 50),
    baseX: 25 + Math.random() * (gameCanvasLogicalWidth - 50),
    y: -30,
    swayAngle: Math.random() * Math.PI * 2,
    swaySpeed: 0.04 + Math.random() * 0.03,
    ...t,
  });
}

function gameLoop(canvas) {
  if (!gameRunning) return;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, gameCanvasLogicalWidth, gameCanvasLogicalHeight);

  const bW = 68, bH = 26;
  const bY = gameCanvasLogicalHeight - 48;
  const bX = Math.max(bW / 2, Math.min(gameCanvasLogicalWidth - bW / 2, basketX));
  const bLeft = bX - bW / 2;

  // Draw basket
  ctx.save();
  ctx.fillStyle = 'rgba(255, 77, 136, 0.9)';
  ctx.strokeStyle = 'rgba(255, 200, 240, 0.85)';
  ctx.lineWidth = 2;
  roundRect(ctx, bLeft, bY, bW, bH, 12);
  ctx.fill();
  ctx.stroke();

  // Basket decorative shine
  ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
  roundRect(ctx, bLeft + 6, bY + 4, bW - 12, 5, 3);
  ctx.fill();

  // Basket heart icon in center
  ctx.font = '12px serif';
  ctx.fillText('💖', bX - 6, bY + 17);
  ctx.restore();

  // Draw & update falling items with gentle sway
  for (let i = hearts.length - 1; i >= 0; i--) {
    const h = hearts[i];
    h.y += h.speed;
    h.swayAngle += h.swaySpeed;
    h.x += Math.sin(h.swayAngle) * 0.8;

    // Check catch
    if (
      h.y + h.size > bY &&
      h.y < bY + bH &&
      h.x > bLeft - h.size / 2 &&
      h.x < bLeft + bW + h.size / 2
    ) {
      if (h.pts > 0) {
        gameScore = Math.max(0, gameScore + h.pts);
        spawnGameParticles(h.x, h.y, '💖');
      } else {
        gameMiss++;
        spawnGameParticles(h.x, h.y, '💔');
      }
      hearts.splice(i, 1);
      updateGameHUD();
      continue;
    }

    // Missed bottom
    if (h.y > gameCanvasLogicalHeight + 15) {
      if (h.pts > 0) {
        gameMiss++;
        const missEl = document.getElementById('gameMiss');
        if (missEl) missEl.textContent = gameMiss;
      }
      hearts.splice(i, 1);
      continue;
    }

    ctx.font = `${h.size}px serif`;
    ctx.fillText(h.char, h.x - h.size / 2, h.y);
  }

  // Draw particles
  for (let i = gameParticles.length - 1; i >= 0; i--) {
    const p = gameParticles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.12;
    p.life -= 0.04;
    if (p.life <= 0) {
      gameParticles.splice(i, 1);
      continue;
    }
    ctx.globalAlpha = p.life;
    ctx.font = `${14 * p.life + 8}px serif`;
    ctx.fillText(p.char, p.x, p.y);
    ctx.globalAlpha = 1;
  }

  animFrame = requestAnimationFrame(() => gameLoop(canvas));
}

function spawnGameParticles(x, y, char) {
  for (let i = 0; i < 6; i++) {
    gameParticles.push({
      x, y,
      vx: (Math.random() - 0.5) * 4,
      vy: -2 - Math.random() * 2.5,
      char,
      life: 1,
    });
  }
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function updateGameHUD() {
  const scoreEl = document.getElementById('gameScore');
  const missEl = document.getElementById('gameMiss');
  if (scoreEl) scoreEl.textContent = gameScore;
  if (missEl) missEl.textContent = gameMiss;
}

function endGame() {
  gameRunning = false;
  clearInterval(gameInterval);
  clearInterval(countdownInterval);
  cancelAnimationFrame(animFrame);

  const overlay = document.getElementById('gameOverlay');
  if (overlay) {
    overlay.style.display = 'flex';
    overlay.classList.add('game-win-active');
  }

  const emoji = gameScore >= 35 ? '🏆' : gameScore >= 20 ? '🎉' : '💖';
  const msg = gameScore >= 35
    ? `Wah kamu hebat banget! Score ${gameScore}! 🌟<br/><span class="win-trophy-text">larass juara 1 kayak juara 1 dihatinya jidann! 🏆💖</span>`
    : gameScore >= 20
      ? `Bagus banget sayang! Score ${gameScore} 🎊<br/><span class="win-trophy-text">larass juara 1 kayak juara 1 dihatinya jidann! 💖</span>`
      : `Score: ${gameScore} 💕<br/><span class="win-trophy-text">larass juara 1 kayak juara 1 dihatinya jidann! 💖</span>`;

  const emojiEl = document.getElementById('gameEmoji');
  const titleEl = document.getElementById('gameOverlayTitle');
  const msgEl = document.getElementById('gameOverlayMsg');
  const btnEl = document.getElementById('gameStartBtn');

  if (emojiEl) emojiEl.textContent = emoji;
  if (titleEl) titleEl.textContent = 'Game Selesai!';
  if (msgEl) msgEl.innerHTML = msg;
  if (btnEl) btnEl.textContent = 'Main Lagi! 🎮';

  spawnWinCelebrationBurst();
}

function spawnWinCelebrationBurst() {
  const overlay = document.getElementById('gameOverlay');
  if (!overlay) return;
  const items = ['💖', '🏆', '⭐', '✨', '🎉', '💕', '👑', '🌟', '🌸'];
  for (let i = 0; i < 28; i++) {
    const el = document.createElement('span');
    el.className = 'game-win-sparkle';
    el.textContent = items[Math.floor(Math.random() * items.length)];
    const angle = (Math.PI * 2 * i) / 28 + (Math.random() - 0.5) * 0.35;
    const dist = 60 + Math.random() * 95;
    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist;
    el.style.cssText = `
      top: 36%;
      left: 50%;
      --tx: ${tx}px;
      --ty: ${ty}px;
      --dur: ${1.3 + Math.random() * 1.0}s;
      --sz: ${0.95 + Math.random() * 0.85}rem;
    `;
    overlay.appendChild(el);
    setTimeout(() => el.remove(), 2400);
  }
}

/* ============================================
   INTERACTIVE 3D PHOTO FLIPBOOK (ALBUM KENANGAN)
   ============================================ */
let currentFlipIndex = 0;
let isFlippingAnim = false;
let flipSoundEnabled = true;
let flipAutoPlayTimer = null;
let flipbookTouchStartX = 0;
let flipbookTouchStartY = 0;

function buildFlipbook() {
  const container = document.getElementById('flipbook');
  const dotsContainer = document.getElementById('fbDots');
  if (!container) return;

  container.innerHTML = '';
  if (dotsContainer) dotsContainer.innerHTML = '';

  const pages = CONFIG.PHOTO_BOOK;
  if (!pages || !pages.length) return;
  const totalLeaves = pages.length;

  pages.forEach((item, i) => {
    const leaf = document.createElement('div');
    leaf.className = 'fb-leaf' + (i < currentFlipIndex ? ' flipped' : '');
    leaf.id = 'fbLeaf' + i;
    leaf.style.zIndex = i < currentFlipIndex ? (i + 1) : (totalLeaves - i);

    // Front Face
    const front = document.createElement('div');
    front.className = 'fb-face fb-front';

    // Back Face
    const back = document.createElement('div');
    back.className = 'fb-face fb-back';

    if (item.type === 'cover') {
      // Front is Hardcover Front
      front.className += ' fb-cover-page';
      front.innerHTML = `
        <div class="fb-corner fb-corner-tl"></div>
        <div class="fb-corner fb-corner-tr"></div>
        <div class="fb-corner fb-corner-bl"></div>
        <div class="fb-corner fb-corner-br"></div>
        <div class="fb-cover-badge">${item.badge}</div>
        <div class="fb-cover-center">
          <div class="fb-cover-emblem">📖</div>
          <h3 class="fb-cover-title">${item.title}</h3>
          <div class="fb-cover-names">${item.names}</div>
          <p class="fb-cover-sub">${item.sub}</p>
        </div>
        <div class="fb-cover-prompt">
          <span>✨</span> Ketuk untuk Mulai Membuka <span>✨</span>
        </div>
      `;

      // Back is Inside Cover / Prologue Note
      back.className += ' fb-paper-page';
      back.innerHTML = `
        <div class="fb-letter-card">
          <div class="fb-letter-header">
            <div class="fb-wax-seal">💌</div>
            <div class="fb-letter-to">Untuk Laras Tersayang...</div>
          </div>
          <div class="fb-letter-body">
            Selamat datang di album kilas balik masa kecilmu, sayang. Di sini jidan kumpulkan 7 potret masa kecil Laras yang lucu dan menggemaskan. Setiap foto punya cerita manis dari perjalanan seorang gadis kecil yang kini tumbuh jadi wanita paling berharga di hidup jidan.
          </div>
          <div class="fb-letter-sign">Love, Jidan 💖</div>
        </div>
        <div class="fb-page-num">— Halaman Pembuka —</div>
      `;
    } else if (item.type === 'closing') {
      // Front is Final Vow & Love Letter
      front.className += ' fb-paper-page';
      front.innerHTML = `
        <div class="fb-letter-card">
          <div class="fb-letter-header">
            <div class="fb-wax-seal">🌹</div>
            <div class="fb-letter-to">${item.title}</div>
          </div>
          <div class="fb-memory-meta" style="margin-bottom: 8px;">
            <span class="fb-memory-date">${item.names}</span>
            <span class="fb-memory-sticker">${item.badge}</span>
          </div>
          <div class="fb-letter-body">
            ${item.text}
          </div>
          <div class="fb-memory-quote" style="margin-bottom: 12px;">
            ${item.vow}
          </div>
          <div class="fb-letter-sign">${item.signature}</div>
        </div>
        <div class="fb-page-num">— Halaman Penutup —</div>
      `;

      // Back is Hardcover Back
      back.className += ' fb-cover-page';
      back.innerHTML = `
        <div class="fb-corner fb-corner-tl"></div>
        <div class="fb-corner fb-corner-tr"></div>
        <div class="fb-corner fb-corner-bl"></div>
        <div class="fb-corner fb-corner-br"></div>
        <div class="fb-cover-center">
          <div class="fb-cover-emblem">💝</div>
          <h3 class="fb-cover-title" style="font-size: 1.4rem;">Tumbuh Bersamamu</h3>
          <p class="fb-cover-sub">"Dari masa kecilmu yang manis hingga kita menua bersama, cintaku tetap untukmu."</p>
        </div>
        <div class="fb-cover-badge">✨ FOREVER WITH LARAS ✨</div>
      `;
    } else {
      // Memory Spread
      front.className += ' fb-paper-page';
      front.innerHTML = `
        <div class="fb-polaroid" onclick="openLightbox('${item.image}', '${item.caption}')">
          <div class="fb-tape"></div>
          <div class="fb-photo-wrap">
            <img src="${item.image}" alt="${item.title}" class="fb-photo" onerror="this.src='photos/kecil1.jpg'" />
            <div class="fb-zoom-badge">🔍 Perbesar</div>
          </div>
          <div class="fb-polaroid-caption">${item.caption}</div>
        </div>
        <div class="fb-story-wrap">
          <div class="fb-memory-meta">
            <span class="fb-memory-date">${item.date}</span>
            <span class="fb-memory-sticker">${item.sticker}</span>
          </div>
          <h4 class="fb-memory-title">${item.title}</h4>
          <p class="fb-memory-text">${item.text}</p>
          <div class="fb-memory-quote">${item.quote}</div>
        </div>
        <div class="fb-page-num">— Foto Masa Kecil ${i} dari 7 —</div>
      `;

      // Back face is reverse side of memory
      back.className += ' fb-paper-page';
      back.innerHTML = `
        <div class="fb-story-wrap" style="text-align: center; justify-content: center;">
          <div style="font-size: 2.2rem; margin-bottom: 8px;">🧸 💖 🌸</div>
          <h4 class="fb-memory-title" style="text-align: center;">${item.title}</h4>
          <p class="fb-memory-text" style="font-style: italic; max-width: 90%; margin: 0 auto 10px;">
            "Masa kecilmu begitu manis dan menggemaskan, senyummu tak pernah pudar hingga kini."
          </p>
          <div class="fb-memory-quote" style="margin: 8px auto; max-width: 90%;">
            ${item.quote}
          </div>
        </div>
        <div class="fb-page-num">— Catatan Manis —</div>
      `;
    }

    // Dynamic Turn Shadow Element
    const turnShadow = document.createElement('div');
    turnShadow.className = 'fb-turn-shadow';
    leaf.appendChild(turnShadow);

    leaf.appendChild(front);
    leaf.appendChild(back);

    // Clicking leaf flips next or prev
    leaf.addEventListener('click', (e) => {
      // Don't trigger flip if user clicked zoom badge or polaroid photo directly
      if (e.target.closest('.fb-polaroid') || e.target.closest('.lightbox-content')) {
        return;
      }
      startMusicImmediate();
      if (leaf.classList.contains('flipped')) {
        flipbookPrev();
      } else {
        flipbookNext();
      }
    });

    container.appendChild(leaf);

    // Create Dot
    if (dotsContainer) {
      const dot = document.createElement('div');
      dot.className = 'fb-dot' + (i === currentFlipIndex ? ' active' : '');
      dot.setAttribute('title', `Ke Halaman ${i + 1}`);
      dot.onclick = () => {
        startMusicImmediate();
        flipbookGoTo(i);
      };
      dotsContainer.appendChild(dot);
    }
  });

  updateFlipbookUI();
  setupFlipbookInteractions();
}

function flipbookNext() {
  const pages = CONFIG.PHOTO_BOOK;
  if (!pages || isFlippingAnim) return;
  if (currentFlipIndex < pages.length - 1) {
    flipbookGoTo(currentFlipIndex + 1);
  }
}

function flipbookPrev() {
  if (isFlippingAnim) return;
  if (currentFlipIndex > 0) {
    flipbookGoTo(currentFlipIndex - 1);
  }
}

function flipbookGoTo(targetIdx) {
  const pages = CONFIG.PHOTO_BOOK;
  if (!pages || targetIdx === currentFlipIndex || targetIdx < 0 || targetIdx >= pages.length || isFlippingAnim) return;

  isFlippingAnim = true;
  playPageFlipSound();
  spawnPageFlipSparkles();

  currentFlipIndex = targetIdx;
  const totalLeaves = pages.length;

  // Animate leaves
  pages.forEach((_, i) => {
    const leaf = document.getElementById('fbLeaf' + i);
    if (!leaf) return;

    if (i < targetIdx) {
      // Leaf is flipped
      if (!leaf.classList.contains('flipped')) {
        leaf.style.zIndex = totalLeaves + 10; // Elevate during flip to prevent clipping
        leaf.classList.add('flipped');
        setTimeout(() => {
          leaf.style.zIndex = i + 1;
        }, 850);
      } else {
        leaf.style.zIndex = i + 1;
      }
    } else {
      // Leaf is not flipped
      if (leaf.classList.contains('flipped')) {
        leaf.style.zIndex = totalLeaves + 10; // Elevate during flip
        leaf.classList.remove('flipped');
        setTimeout(() => {
          leaf.style.zIndex = totalLeaves - i;
        }, 850);
      } else {
        leaf.style.zIndex = totalLeaves - i;
      }
    }
  });

  setTimeout(() => {
    isFlippingAnim = false;
  }, 900);

  updateFlipbookUI();
}

function updateFlipbookUI() {
  const pages = CONFIG.PHOTO_BOOK;
  if (!pages) return;

  const badge = document.getElementById('fbPageBadge');
  if (badge) {
    if (currentFlipIndex === 0) {
      badge.textContent = 'Sampul Album 📖';
    } else if (currentFlipIndex >= 1 && currentFlipIndex <= 7) {
      badge.textContent = `Foto Masa Kecil ${currentFlipIndex} / 7 🌸`;
    } else {
      badge.textContent = 'Pesan Kasih Sayang 💖';
    }
  }

  const prevBtn = document.getElementById('fbPrevBtn');
  const nextBtn = document.getElementById('fbNextBtn');
  if (prevBtn) prevBtn.disabled = currentFlipIndex === 0;
  if (nextBtn) nextBtn.disabled = currentFlipIndex === pages.length - 1;

  // Dots
  const dots = document.querySelectorAll('.fb-dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentFlipIndex);
  });
}

function playPageFlipSound() {
  if (!flipSoundEnabled) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const duration = 0.20;
    const bufferSize = Math.floor(ctx.sampleRate * duration);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      // Pink/white noise burst with exponential decay to simulate paper whoosh
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.04));
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + duration);
    filter.Q.value = 1.3;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.32, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.005, ctx.currentTime + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start();
  } catch (e) {
    // Audio context may require user interaction first, ignore safely
  }
}

function toggleFlipSound() {
  flipSoundEnabled = !flipSoundEnabled;
  const icon = document.getElementById('fbSoundIcon');
  const text = document.getElementById('fbSoundText');
  const pill = document.getElementById('fbSoundToggle');

  if (icon) icon.textContent = flipSoundEnabled ? '🔊' : '🔇';
  if (text) text.textContent = flipSoundEnabled ? 'Suara: Nyala' : 'Suara: Mati';
  if (pill) pill.classList.toggle('active', flipSoundEnabled);

  showMusicToast(flipSoundEnabled ? '🔊 Efek suara kertas diaktifkan' : '🔇 Efek suara kertas dimatikan');
}

function toggleFlipbookAutoPlay() {
  const icon = document.getElementById('fbAutoPlayIcon');
  const text = document.getElementById('fbAutoPlayText');
  const pill = document.getElementById('fbAutoPlayBtn');

  if (flipAutoPlayTimer) {
    clearInterval(flipAutoPlayTimer);
    flipAutoPlayTimer = null;
    if (icon) icon.textContent = '▶';
    if (text) text.textContent = 'Putar Otomatis';
    if (pill) pill.classList.remove('active');
    showMusicToast('⏸ Putar otomatis dihentikan');
  } else {
    if (icon) icon.textContent = '⏸';
    if (text) text.textContent = 'Berhenti';
    if (pill) pill.classList.add('active');
    showMusicToast('▶ Memutar album otomatis...');

    // If already at end, rewind to start
    if (currentFlipIndex >= CONFIG.PHOTO_BOOK.length - 1) {
      flipbookGoTo(0);
    } else {
      flipbookNext();
    }

    flipAutoPlayTimer = setInterval(() => {
      if (currentFlipIndex < CONFIG.PHOTO_BOOK.length - 1) {
        flipbookNext();
      } else {
        // Stop autoplay at end
        clearInterval(flipAutoPlayTimer);
        flipAutoPlayTimer = null;
        if (icon) icon.textContent = '▶';
        if (text) text.textContent = 'Putar Otomatis';
        if (pill) pill.classList.remove('active');
        showMusicToast('✨ Sampai di akhir album kenangan 💖');
      }
    }, 4500);
  }
}

function setupFlipbookInteractions() {
  const scene = document.getElementById('flipbookScene');
  if (!scene) return;

  // Touch Swipe for Mobile (Swipe left = next, swipe right = prev)
  scene.addEventListener('touchstart', (e) => {
    flipbookTouchStartX = e.changedTouches[0].screenX;
    flipbookTouchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  scene.addEventListener('touchend', (e) => {
    const diffX = e.changedTouches[0].screenX - flipbookTouchStartX;
    const diffY = e.changedTouches[0].screenY - flipbookTouchStartY;

    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
      startMusicImmediate();
      if (diffX < 0) {
        // Swiped Left -> Next page
        flipbookNext();
      } else {
        // Swiped Right -> Prev page
        flipbookPrev();
      }
    }
  }, { passive: true });

  // Keyboard navigation when user is scrolling near the flipbook
  window.addEventListener('keydown', (e) => {
    const section = document.getElementById('flipbookSection');
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (!isVisible) return;

    if (e.key === 'ArrowRight' || e.key === 'PageDown') {
      flipbookNext();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      flipbookPrev();
    }
  });
}

function spawnPageFlipSparkles() {
  const scene = document.getElementById('flipbookScene');
  if (!scene) return;

  const sparkles = ['✨', '🌸', '💖', '⭐', '💕', '🌷'];
  for (let i = 0; i < 9; i++) {
    const el = document.createElement('span');
    el.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
    el.style.cssText = `
      position: absolute;
      top: ${28 + Math.random() * 45}%;
      left: ${35 + Math.random() * 30}%;
      font-size: ${0.85 + Math.random() * 0.75}rem;
      pointer-events: none;
      z-index: 100;
      opacity: 1;
      transform: scale(0.6);
      transition: all ${0.7 + Math.random() * 0.6}s cubic-bezier(0.25, 1, 0.5, 1);
    `;
    scene.appendChild(el);

    const angle = (Math.PI * 2 * i) / 9;
    const dist = 30 + Math.random() * 60;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist - 25;

    requestAnimationFrame(() => {
      el.style.transform = `translate(${dx}px, ${dy}px) scale(1.15)`;
      el.style.opacity = '0';
    });

    setTimeout(() => el.remove(), 1400);
  }
}

function openLightbox(src, caption) {
  const lightbox = document.getElementById('photoLightbox');
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');
  if (!lightbox || !img) return;

  img.src = src;
  if (cap) cap.textContent = caption || '';
  lightbox.classList.add('open');
}

function closeLightbox(e) {
  if (e && e.target && e.target.classList.contains('lightbox-img')) return;
  const lightbox = document.getElementById('photoLightbox');
  if (lightbox) lightbox.classList.remove('open');
}

