import { renderBlock } from './lib.js';

export function renderUserBlock(
  userName: string,
  linkToUserAvatar: string,
  favoriteItemsAmount: number
) {
  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src=${linkToUserAvatar} />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${
  Number(favoriteItemsAmount) && favoriteItemsAmount >= 0
    ? ' active'
    : ''
}"></i>
            ${favoriteItemsAmount > 0 ? favoriteItemsAmount : 'Ничего нет'} 
          </p>
      </div>
    </div>
    `
  );
}
