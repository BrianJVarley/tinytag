import { expect } from 'chai';
import { highlightTag } from '../src/tinyTag';

describe('TinyTag', () => {

  describe('highLightTag', () => {

    it('should return string with <span class=highlight> around template vars', () => {

      const tplVars = {
        first: 'works',
        second: 'machine',
      }

      const highlightedString = highlightTag`It ${tplVars.first} on my${tplVars.second}!`;
      // eslint-disable-next-line quotes
      expect(highlightedString).to.be.equal(`It  <span class='highlight'>works</span> on my <span class='highlight'>machine</span>`);

    });

  });

});
