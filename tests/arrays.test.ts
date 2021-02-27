import {
  assertEquals,
} from "https://deno.land/std@0.88.0/testing/asserts.ts";
import shallowEqualArrays from '../arrays.ts';

var arr = [1, 2, 3];
var obj1 = { game: 'chess' };
var obj2 = { company: 'facebook' };
var obj3 = { technology: 'react' };

var tests = [
  {
    should: 'return false when A is falsy',
    arrA: null,
    arrB: [],
    result: false
  },
  {
    should: 'return false when B is falsy',
    arrA: [],
    arrB: undefined,
    result: false
  },
  {
    should: 'return true when arrays are ===',
    arrA: arr,
    arrB: arr,
    result: true
  },
  {
    should: 'return true when both arrays are empty',
    arrA: [],
    arrB: [],
    result: true
  },
  {
    should: 'return false when arrays do not have the same amount of elements',
    arrA: [1, 2, 3],
    arrB: [1, 2],
    result: false
  },
  {
    should: 'return false if there are corresponding elements which are not ===',
    arrA: [obj1, obj2, obj3],
    arrB: [obj1, obj2, { technology: 'react' }],
    result: false
  },
  {
    should: 'return true if all corresponding elements are ===',
    arrA: [obj1, obj2, obj3],
    arrB: [obj1, obj2, obj3],
    result: true
  }
];

tests.forEach(function(test) {
  Deno.test(`[shallowEqualArrays] should ${test.should}`, () => {
    assertEquals(shallowEqualArrays(test.arrA, test.arrB), test.result);
  });
});