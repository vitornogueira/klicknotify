import { expect } from 'chai';
import * as Config from '../../src/config/app';

describe('notify config app', () => {
  it('has a valid config', () => {
    expect(Config).to.be.a('Object');
  });

  it('has valid messages types', () => {
    expect(Config.MESSAGE_TYPES).to.be.a('Array');
  });

  it('has a valid type in messages types', () => {
    Config.MESSAGE_TYPES.forEach((type) => {
      expect(type).to.be.a('String');
    });
  });

  it('has a valid default config', () => {
    expect(Config.DEFAULT_CONFIG).to.be.a('Object');
  });

  it('has a valid default config autoHideDelay', () => {
    expect(Config.DEFAULT_CONFIG.autoHideDelay).to.be.a('Number');
  });

  it('has a valid default config autoHide', () => {
    expect(Config.DEFAULT_CONFIG.autoHide).to.be.a('Boolean');
  });
});
