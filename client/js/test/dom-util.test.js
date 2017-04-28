const { createTR,
        createTH,
        createTD,
        removeChildren } = require('../dom-util');

describe('dom-util', () => {

  describe('DOM creation methods', () => {
    describe('CreateTH', () => {
      it('produces valid TH element', () => {
        const el = createTH();
        expect(el.tagName).toBe('TH');
      });

      it('sets the text of TH', () => {
        const text = 'Is this the real life';
        const el = createTH(text);
        expect(el.textContent).toEqual(text);
      })
    });

    describe('CreateTR', () => {
      it('produces valid TR element', () => {
        const el = createTR();
        expect(el.tagName).toBe('TR');
      });
    });

    describe('CreateTD', () => {
      it('produces valid TD element', () => {
        const el = createTD();
        expect(el.tagName).toBe('TD');
      });
    });
  });

  describe('removeChildren()', () => {
    it('removes one child', () => {
      // set up initial state
      const parent = document.createElement('DIV');
      const child = document.createElement('STRONG');
      parent.appendChild(child);

      //inspect initial state
      expect(parent.childNodes.length).toBe(1);
      expect(parent.childNodes[0]).toBe(child);

      // execute code under test
      removeChildren(parent);

      // inspect resulting state
      expect(parent.childNodes.length).toBe(0);
    });
  });
});
