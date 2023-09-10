const backgroundImages = [
    'https://c4.wallpaperflare.com/wallpaper/876/285/203/ocean-digital-art-horizon-water-wallpaper-preview.jpg',
    'https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGlnaXRhbCUyMG9jZWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    'https://media.istockphoto.com/id/1399959779/photo/sea-u200b-u200bof-u200b-u200bdata-submerged-in-the-metaverse-abstract-floor-technology.webp?b=1&s=170667a&w=0&k=20&c=Py6GNKbDe53uEr31MPrUFOesiDJZ8rp65Rhg_F_ml1Q=',
    'https://media.istockphoto.com/id/1204188116/photo/abstract-green-backgrounds.webp?b=1&s=170667a&w=0&k=20&c=8GoykuT1VljZAm8vZDL2ud_hIhpY94V-TmAgckQSoks=',
    'https://media.istockphoto.com/id/949079216/vector/abstract-spiral-rays-background.jpg?s=612x612&w=0&k=20&c=GWNLdTvhNCvHQ6Oewzt_h1jcDmNyDSWufCDwEyi812I='
    
  ];
  
    
function changeBackgroundImage() {
  
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  
    const imageUrl = backgroundImages[randomIndex];

    document.querySelector('.right-container').style.backgroundImage = `url(${imageUrl})`;
  }
  
  window.addEventListener('load', changeBackgroundImage);

  window.addEventListener('beforeunload', () => {
    changeBackgroundImage();
});

