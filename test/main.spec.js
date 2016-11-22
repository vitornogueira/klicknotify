import chai from 'chai';
import spies from 'chai-spies';
import Notify from '../src/js/klicknotify';
import NotifyView from '../src/js/views/main';

const expect = chai.expect;

chai.use(spies);

describe('notify', function main() {
  this.timeout(4000);

  describe('#init', () => {
    beforeEach(() => {
      Notify.init();
    });

    it('add view in body', () => {
      const view = document.querySelector('.klick-notify');

      expect(view.innerHTML).to.deep.equal(NotifyView().innerHTML);
    });

    it('add a click event in close button', () => {
      const closeButton = document.querySelector('.klick-notify-close');

      chai.spy.on(Notify, 'close');

      closeButton.click();

      expect(Notify.close).to.have.been.called();
    });
  });

  describe('#show', () => {
    let view;
    let message;

    beforeEach(() => {
      Notify.init();

      view = document.querySelector('.klick-notify');

      message = 'Test';
    });

    it('set message in textContent', () => {
      Notify.show({ message });

      const messageElement = view.querySelector('.klick-notify-message');

      expect(messageElement.textContent).to.equal(message);
    });

    it('add "is-visible" class', () => {
      Notify.show({ message });

      expect(view.classList.contains('is-visible')).to.be.true;
    });

    describe('type classes', () => {
      it('add success class', () => {
        Notify.show({ message, type: 'success' });

        expect(view.classList.contains('success')).to.be.true;
      });

      it('add warning class', () => {
        Notify.show({ message, type: 'warning' });

        expect(view.classList.contains('warning')).to.be.true;
      });

      it('add error class', () => {
        Notify.show({ message, type: 'error' });

        expect(view.classList.contains('error')).to.be.true;
      });

      it('doens\'t add invalid class', () => {
        Notify.show({ message, type: 'invalid_class' });

        expect(view.classList.contains('invalid_class')).to.be.false;
      });
    });

    describe('autoHide', () => {
      it('removes "is-visible" class after default timeout', (done) => {
        chai.spy.on(Notify, 'close');

        Notify.show({ message, autoHide: true });

        setTimeout(() => {
          expect(Notify.close).to.have.been.called();
          done();
        }, 3000);
      });

      it('removes "is-visible" class after timeout provided', (done) => {
        const delay = 500;

        chai.spy.on(Notify, 'close');

        Notify.show({
          message,
          autoHide: true,
          autoHideDelay: delay,
        });

        setTimeout(() => {
          expect(Notify.close).to.have.been.called();
          done();
        }, delay);
      });
    });
  });

  describe('#close', () => {
    beforeEach(() => {
      Notify.show({ message: 'test' });
    });

    it('clear message textContent', () => {
      const messageElement = document.querySelector('.klick-notify-message');

      Notify.close();

      expect(messageElement.textContent).to.equal('');
    });

    it('removes "is-visible" class', () => {
      const view = document.querySelector('.klick-notify');

      Notify.close();

      expect(view.classList.contains('is-visible')).to.be.false;
    });
  });

  describe('#types', () => {
    let message;

    beforeEach(() => {
      message = 'test';

      Notify.init();

      chai.spy.on(Notify, 'show');
    });

    it('calls Notify.show with success type', () => {
      Notify.success({ message });

      expect(Notify.show).to.have.been.called.with({ message: 'test', type: 'success' });
    });

    it('calls Notify.show with warning type', () => {
      Notify.warning({ message });

      expect(Notify.show).to.have.been.called.with({ message: 'test', type: 'warning' });
    });

    it('calls Notify.show with error type', () => {
      Notify.error({ message });

      expect(Notify.show).to.have.been.called.with({ message: 'test', type: 'error' });
    });
  });
});
