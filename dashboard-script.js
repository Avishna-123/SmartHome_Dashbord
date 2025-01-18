const leftBoxes = document.querySelectorAll('.box-left');
const panels = document.querySelectorAll('.panel');

leftBoxes.forEach((box, ind) => {
  box.addEventListener('click', () => {
    leftBoxes.forEach(el => el.classList.remove('active'));
    panels.forEach(el => el.classList.remove('active-panel'));
    box.classList.add('active');
    panels[ind].classList.add('active-panel')
  })
})

const lights = document.querySelectorAll('.light');
const lightsBtns = document.querySelectorAll('.light .btn');

lightsBtns.forEach((btn, ind) => btn.addEventListener('click', () => {
  const selectLightBox = lights[ind];
  const iconEl = selectLightBox.querySelector('.item-icon-div i');
  if (selectLightBox.classList.contains('active-light')) { // off seting
    selectLightBox.querySelector('.btn').textContent = 'Off'
    iconEl.className = 'bi bi-lightbulb-off';
    selectLightBox.classList.remove('active-light');
  } else { // on seting
    selectLightBox.querySelector('.btn').textContent = 'On'
    iconEl.className = 'bi bi-lightbulb-fill';
    selectLightBox.classList.add('active-light');
  }
}))

const aCs = document.querySelectorAll('.ac');
const acButoons = document.querySelectorAll('.ac .btn');

acButoons.forEach((btn, ind) => btn.addEventListener('click', () => {
  const selectAcBox = aCs[ind];
  const iconEl = selectAcBox.querySelector('.item-icon-div i');
  if (selectAcBox.classList.contains('active-ac')) { // off seting
    selectAcBox.querySelector('.btn').textContent = 'Off'
    iconEl.className = 'bi bi-thermometer-half';
    selectAcBox.classList.remove('active-ac');
  } else { // on seting
    selectAcBox.querySelector('.btn').textContent = 'On'
    iconEl.className = 'bi bi-thermometer-low';
    selectAcBox.classList.add('active-ac');
  }
}))

const smartTves = document.querySelectorAll('.smart-tv');
const smartTvButtons = document.querySelectorAll('.smart-tv .btn');

smartTvButtons.forEach((btn, inx) => btn.addEventListener('click', () => {
  const selectedTVbox = smartTves[inx];
  if (selectedTVbox.classList.contains('active-tv')) { // off seting
    selectedTVbox.querySelector('.btn').textContent = 'Off'
    selectedTVbox.classList.remove('active-tv');
  } else { // on seting
    selectedTVbox.querySelector('.btn').textContent = 'On'
    selectedTVbox.classList.add('active-tv');

  }
}))


const fans = document.querySelectorAll('.fan');
const fanButtons = document.querySelectorAll('.fan .btn');

fanButtons.forEach((btn, inx) => btn.addEventListener('click', () => {
  const selectedFanBox = fans[inx];
  if (selectedFanBox.classList.contains('active-fan')) { // off seting
    selectedFanBox.querySelector('.btn').textContent = 'Off'
    selectedFanBox.classList.remove('active-fan');
  } else { // on seting
    selectedFanBox.querySelector('.btn').textContent = 'On'
    selectedFanBox.classList.add('active-fan');

  }
}))

// colour picker

let selectedMasterBedroomColor = 'rgba(0, 149, 255, 0.7)';

document.querySelectorAll('.colour-picker-container div').forEach(box => {
  box.addEventListener('click', () => {
    selectedMasterBedroomColor = box.getAttribute('data-color'); // Get the color from data attribute
    onOffColorButton(0, false);
  });
});

const colorPickLights = document.querySelectorAll('.color-picker');
const colorPickLightsBtns = document.querySelectorAll('.color-picker .btn');
const colorPickerIconDiv = document.querySelector('.color-picker .item-icon-div')

function onOffColorButton(ind, bool = true) {

  const selectLightBox = colorPickLights[ind];
  const iconEl = selectLightBox.querySelector('.item-icon-div i');
  if (selectLightBox.classList.contains('active-color') && bool) { // off seting
    selectLightBox.querySelector('.btn').textContent = 'Off'
    iconEl.className = 'bi bi-lightbulb-off';
    document.getElementById('target').style.color = '#C1C1C1';
    colorPickerIconDiv.style.borderColor = '#C1C1C1';

    selectLightBox.classList.remove('active-color');
  } else { // on seting
    selectLightBox.querySelector('.btn').textContent = 'On'
    iconEl.className = 'bi bi-lightbulb-fill';
    selectLightBox.classList.add('active-color');
    document.getElementById('target').style.color = selectedMasterBedroomColor;
    colorPickerIconDiv.style.borderColor = selectedMasterBedroomColor;
  }
}

colorPickLightsBtns.forEach((btn, ind) => btn.addEventListener('click', () => onOffColorButton(ind)))

//  britness level

// router

const routers = document.querySelectorAll('.router');
const routersBtn = document.querySelectorAll('.router .btn');

routersBtn.forEach((btn, ind) => btn.addEventListener('click', () => {
  const selectAcBox = routers[ind];
  const iconEl = selectAcBox.querySelector('.item-icon-div i');
  if (selectAcBox.classList.contains('active-router')) { // off seting
    selectAcBox.querySelector('.btn').textContent = 'Off'
    selectAcBox.classList.remove('active-router');
  } else { // on seting
    selectAcBox.querySelector('.btn').textContent = 'On'
    selectAcBox.classList.add('active-router');
  }
}))

// stove
const stoves = document.querySelectorAll('.stove');
const stoveButtons = document.querySelectorAll('.stove .btn');

stoveButtons.forEach((btn, ind) => btn.addEventListener('click', () => {
  const selectAcBox = stoves[ind];
  if (selectAcBox.classList.contains('active-stove')) { // off seting
    selectAcBox.querySelector('.btn').textContent = 'Off'
    selectAcBox.classList.remove('active-stove');
  } else { // on seting
    selectAcBox.querySelector('.btn').textContent = 'On'
    selectAcBox.classList.add('active-stove');
  }
}))
// security
const security = document.querySelectorAll('.security');
const securityButton = document.querySelectorAll('.security .btn');

securityButton.forEach((btn, ind) => btn.addEventListener('click', () => {
  const selectAcBox = security[ind];
  if (selectAcBox.classList.contains('active-door')) { // off seting
    selectAcBox.querySelector('.btn').textContent = 'Off'
    selectAcBox.classList.remove('active-door');
  } else { // on seting
    selectAcBox.querySelector('.btn').textContent = 'On'
    selectAcBox.classList.add('active-door');
  }
}))