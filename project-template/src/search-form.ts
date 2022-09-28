import { renderBlock } from './lib.js';

// arrivalВate: Date, departureDate: Date
export function renderSearchFormBlock() {
  const currentDate: Date = new Date();
  const defaultArrivalDate: Date = new Date(currentDate.getTime() + 86400000);
  const defaultDepartureDate: Date = new Date(
    defaultArrivalDate.getTime() + 172800000
  );

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">
              Дата заезва
            </label>
            <input 
            id="check-in-date" 
            type="date" 
            value=${defaultArrivalDate.toLocaleDateString('En-CA')}
            min=${currentDate.toLocaleDateString('En-CA')}
            max=${getLastDayNextMonth()}
            name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input 
            id="check-out-date" 
            type="date" 
            value=${defaultDepartureDate.toLocaleDateString('En-CA')} 
            min=${defaultDepartureDate.toLocaleDateString('En-CA')} 
            max="2023-06-30" 
            name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  );
}

function getLastDayNextMonth() {
  const currentDate: Date = new Date();
  const nextMonth: number = currentDate.getMonth() + 2;
  const year: number =
    currentDate.getMonth() + 1 <= 12
      ? currentDate.getFullYear()
      : currentDate.getFullYear() + 1;
  const lastDayNextMonth: Date = new Date(year, nextMonth, 0);
  return lastDayNextMonth.toLocaleDateString('EN-CA');
}
