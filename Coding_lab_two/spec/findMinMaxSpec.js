(function() {
  'use strict';
  const findMinMax = require("../app/findMinMax.js");

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax.findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax.findMinMax([4, 4, 4, 4])).toEqual([4]);
      });
      it('should return [2] for [2]', function () {
        expect(findMinMax.findMinMax([2])).toEqual([2]);
      });
      it('should return [0] for [0, 0, 0]', function () {
        expect(findMinMax.findMinMax([0, 0, 0])).toEqual([0]);
      });

    });

    describe('Return th min and max number in a list in a new list when negative number is present', function() {
      it('should return [-12, 23] for [2, 6, 9, -12, 23]', function(){
        expect(findMinMax.findMinMax([2, 6, 9, -12, 23])).toEqual([-12, 23]);
      });
      it('should return [-22, -6] for [-22, -6, -9, -10, -15]', function(){
        expect(findMinMax.findMinMax([-22, -6, -9, -10, -15])).toEqual([-22, -6]);
      });
      it('should return [-99, 46] for [-32, 46, -99, 1, 5]', function(){
        expect(findMinMax.findMinMax([-32, 46, -99, 1, 5])).toEqual([-99, 46]);
      });
    });

  });

})();