import generalData from "./base.js";
import { Footer_and_HamBurger, DisplayFetch, DisplayItems } from "./base.js";

const principalDynamic = new Footer_and_HamBurger();

principalDynamic.setfooter();
principalDynamic.refreshPage();
principalDynamic.setHambutton();

//----------------------------------------------------------
const url_shoes = generalData.getJSON_CARS();
const ActionAPI = new DisplayFetch(url_shoes);
const data = await ActionAPI.getAPIFetch();
const containerSelect = document.querySelector('#shoes-list'); //Container
const _displayer = new DisplayItems(data, containerSelect);

const listCars = _displayer.get_names_shoes();

console.log(listCars);

function dipslayCars(object) {
    containerSelect.innerHTML = `
    <option value="">--Please choose an option--</option>`;
    object.forEach(i => {
        const option = document.createElement('option');
        option.value = i;
        option.text = i;
        containerSelect.appendChild(option);
    })
}

dipslayCars(listCars);