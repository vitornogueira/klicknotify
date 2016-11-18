import { expect } from 'chai';
import * as Config from '../../src/config/style';

describe('notify config app', () => {
  it('has a valid config', () => {
    expect(Config).to.be.a('Object');
  });

  it('has a valid notify class', () => {
    expect(Config.NOTIFY_CLASS).to.be.a('String');
  });

  it('has a valid message class', () => {
    expect(Config.MESSAGE_CLASS).to.be.a('String');
  });

  it('has a valid close class', () => {
    expect(Config.CLOSE_CLASS).to.be.a('String');
  });

  it('has a valid close icon class', () => {
    expect(Config.CLOSE_ICON_CLASS).to.be.a('String');
  });

  it('has a valid is visible class', () => {
    expect(Config.IS_VISIBLE_CLASS).to.be.a('String');
  });

  it('has a valid container class', () => {
    expect(Config.CONTAINER_CLASS).to.be.a('String');
  });
});
