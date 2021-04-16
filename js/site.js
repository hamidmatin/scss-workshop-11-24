const games = [
  {
    src: '//nxl.nxfs.nexon.com/media/4970/kd_main_card.jpg',
    name: 'KartRider: Drift',
    genre: 'Racing',
    platforms: ['windows'],
  },
  {
    src: '//nxl.nxfs.nexon.com/media/5028/ms_stacked_game_card.jpg',
    name: 'MapleStory',
    genre: 'MMORPG',
    platforms: ['windows'],
  },
  {
    src: '//nxl.nxfs.nexon.com/media/5260/201110_nexoncom_keyartredo.jpg',
    name: 'V4',
    genre: 'MMORPG',
    platforms: ['windows', 'ios', 'android'],
  },
  {
    src: '//nxl.nxfs.nexon.com/media/4915/en_kr_main_card.png',
    name: 'KartRider: Drift+',
    genre: 'Racing',
    platforms: ['android', 'ios'],
  },
  {
    src: '//nxl.nxfs.nexon.com/media/4908/en_dr_main_card.png',
    name: 'Darkness Rises',
    genre: 'RPG',
    platforms: ['ios'],
  },
  {
    src: '//nxl.nxfs.nexon.com/media/4912/gdf_main_card.png',
    name: 'Godzilla Defense Force',
    genre: 'Strategy',
    platforms: ['android'],
  },
];

/************
 *
 *
 */
document.addEventListener('DOMContentLoaded', function () {
  showGames(games, 'pills-all-games');

  const windowsGames = filterGamesByPlatform('windows');
  console.log(windowsGames);
  showGames(windowsGames, 'pills-window');

  const iosGames = filterGamesByPlatform('ios');
  showGames(iosGames, 'pills-ios');

  const androidGames = filterGamesByPlatform('android');
  showGames(androidGames, 'pills-android');
});

/********
 *
 *
 */
const filterGamesByPlatform = function (platform) {
  const result = games.filter(function (game) {
    return game.platforms.includes(platform);
  });

  return result;
};

/**********
 *
 *
 */
const showGames = function (gameList = [], elementId) {
  let row = '<div class="d-flex flex-wrap">';
  gameList.forEach(function (game) {
    let platformIcons = '';

    /*****
     *
     */
    if (game.platforms.includes('windows')) {
      platformIcons += '<i class="uil uil-windows"></i>';
    }

    if (game.platforms.includes('ios')) {
      platformIcons += '<i class="uil uil-apple"></i>';
    }

    if (game.platforms.includes('android')) {
      platformIcons += '<i class="uil uil-android"></i>';
    }

    row += `
        <div class="game">
            <div class="card">
            <img src="${game.src}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${game.name}</h5>
                <p class="card-text">${game.genre}</p>
                <p class="card-text">${platformIcons}</p>
            </div>
            </div>
        </div>
        `;
  });

  row += '</div>';

  document.getElementById(elementId).innerHTML = row;
};

/*******
 * Search Genre
 */

document.getElementById('search').onkeyup = function () {
  console.log(this.value);
  let searchKey = this.value.toLowerCase();

  const finded = games.filter(function (game) {
    // return game.genre.toLowerCase().indexOf(searchKey) !== -1;
    
    return game.genre.toLowerCase().indexOf(searchKey) !== -1 || 
           game.name.toLowerCase().indexOf(searchKey) !== -1


  });
  console.log(finded);

  showGames(finded, 'pills-all-games');
};
