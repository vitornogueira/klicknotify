import * as AppConfig from './config/app';
import * as StyleConfig from './config/style';
import View from './views/main';

const CONTAINER = View();
const MESSAGE = CONTAINER.querySelector(`.${StyleConfig.MESSAGE_CLASS}`);
const CLOSE_BUTTON = CONTAINER.querySelector(`.${StyleConfig.CLOSE_CLASS}`);
const { MESSAGE_TYPES, DEFAULT_CONFIG } = AppConfig;
const METHODS = {};

let showTimeout;

const resetTimeouts = () => {
  if (showTimeout) {
    clearTimeout(showTimeout);
  }
};

const resetStyles = () => {
  MESSAGE_TYPES.forEach((type) => {
    CONTAINER.classList.remove(type);
  });
};

METHODS.close = () => {
  MESSAGE.textContent = '';
  CONTAINER.classList.remove(StyleConfig.IS_VISIBLE_CLASS);
};

METHODS.show = (options) => {
  const currentOptions = Object.assign({}, DEFAULT_CONFIG, options);

  if (!currentOptions.message) {
    throw new Error('Notify: Message is invalid.');
  }

  resetTimeouts();
  resetStyles();

  MESSAGE.textContent = currentOptions.message;

  CONTAINER.classList.add(StyleConfig.IS_VISIBLE_CLASS);

  if (MESSAGE_TYPES.indexOf(currentOptions.type) > -1) {
    CONTAINER.classList.add(currentOptions.type);
  }

  if (currentOptions.autoHide) {
    showTimeout = setTimeout(() => {
      METHODS.close();
    }, currentOptions.autoHideDelay);
  }
};

METHODS.init = () => {
  document.body.appendChild(CONTAINER);

  CLOSE_BUTTON.addEventListener('click', () => {
    METHODS.close();
  });
};

MESSAGE_TYPES.forEach((type) => {
  METHODS[type] = (options = {}) => {
    METHODS.show(Object.assign(options, { type }));
  };
});

export default METHODS;
