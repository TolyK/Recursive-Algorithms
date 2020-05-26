/* jshint esversion: 6 */

(function() {
  'use strict';

  describe('Exercises in Recursion', function() {

    describe('1. Vowels', function() {
      var originalCountVowels;

      before(function() {
        originalCountVowels = countVowels;
        countVowels = sinon.spy(countVowels);
      });

      afterEach(function() {
        countVowels.reset();
      });

      after(function() {
        countVowels = originalCountVowels;
      });

      it('should return a number', function() {
        expect(originalCountVowels('abcde')).to.be.a('number');
      });

      it('should return the correct count', function() {
        expect(countVowels('abcde')).to.equal(2);
        expect(countVowels('abcedfg')).to.equal(2);
        expect(countVowels('abcedfgyo')).to.equal(4);
      });

      it('should use recursion by calling self', function() {
        countVowels('abcedfgyo');
        expect(countVowels.callCount).to.be.above(1);
      });

      // it('should be invoked with one argument', function() {
      //   countVowels('a');
      //   countVowels.args.forEach(arg => {
      //     expect(arg).to.have.length(1);
      //   });
      // });

    });

    describe('2. sum', function() {
      var originalRecursiveSum;

      before(function() {
        originalRecursiveSum = recursiveSum;
        recursiveSum = sinon.spy(recursiveSum);
      });

      afterEach(function() {
        recursiveSum.reset();
      });

      after(function() {
        recursiveSum = originalRecursiveSum;
      });

      it('should return a number', function() {
        expect(recursiveSum(123)).to.be.a('number');
      });

      it('should return correct digit sum', function() {
        expect(recursiveSum(123)).to.equal(6);
        expect(recursiveSum(49)).to.equal(13);
      })

      it('should be recursive by calling itself', function() {
        recursiveSum(123);
        expect(recursiveSum.callCount).to.be.above(1);
      })

    });

    describe('3. power of two', function() {
      var originalIsPowerOfTwo;

      before(function() {
        originalIsPowerOfTwo = isPowerOfTwo;
        isPowerOfTwo = sinon.spy(isPowerOfTwo);
      });

      afterEach(function() {
        isPowerOfTwo.reset();
      });

      after(function() {
        isPowerOfTwo = originalIsPowerOfTwo;
      });

      it('should return a boolean', function() {
        expect(isPowerOfTwo(16)).to.be.a('boolean');
      })

      it('should return correct response', function() {
        expect(isPowerOfTwo(8)).to.equal(true);
        expect(isPowerOfTwo(9)).to.equal(false);
        expect(isPowerOfTwo(256)).to.equal(true);
      })

      it('should be recursive by calling itself', function() {
        isPowerOfTwo(4);
        expect(isPowerOfTwo.callCount).to.be.above(1);
      })

    })
  });
}());
