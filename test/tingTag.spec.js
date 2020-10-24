import { expect } from 'chai';
import { tagLog } from '../src/tinyTag';

describe('TinyTag', () => {

  describe('tagLog', () => {

    it('should return tag result', () => {
      const newTagLog = tagLog`This is a template literal with ${'dynamic vars'}`;
      expect(newTagLog).to.be.equal('This is a template literal with ,dynamic vars');
    });

  });

});
