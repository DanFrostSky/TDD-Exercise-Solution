import {expect} from "chai";
import ArrayUtility from "../array_utils";

console.log( Number.MIN_VALUE);

if( Number.MIN_VALUE < -1 )
    console.log("Oh this is low");



describe('find the highest number', function() {
    it('an empty array, return null', function() {
        // arrange...
        let cut = new ArrayUtility();
        let inputArray = [];
        let expectedResult = null;

        // act...
        let actualResult = cut.findHighestNumber(inputArray);

        // assert...
        expect(actualResult).to.equal(expectedResult);
    });
});