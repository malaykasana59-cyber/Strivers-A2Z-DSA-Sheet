import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  simulateKadane,
  simulateBinarySearch,
  simulateTwoSum,
  simulateDutchFlag,
  simulateMajorityElement,
  simulateArrayStepper
} from '../js/visualizer.js';

describe('Algorithm Visualizer Engine', () => {
  describe('Kadane Algorithm Simulation', () => {
    it('generates step sequence for maximum subarray sum', () => {
      const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
      const steps = simulateKadane(nums);

      assert.ok(steps.length > 0);
      const lastStep = steps[steps.length - 1];
      assert.equal(lastStep.maxSum, 6);
      assert.deepEqual(lastStep.maxWindow, [3, 6]); // 4, -1, 2, 1 -> sum 6
    });

    it('handles all negative numbers correctly', () => {
      const nums = [-5, -2, -8, -1, -4];
      const steps = simulateKadane(nums);
      const lastStep = steps[steps.length - 1];
      assert.equal(lastStep.maxSum, -1);
    });
  });

  describe('Binary Search Simulation', () => {
    it('steps through binary search finding target element', () => {
      const nums = [1, 3, 5, 7, 9, 11, 13];
      const target = 7;
      const steps = simulateBinarySearch(nums, target);

      assert.ok(steps.length > 0);
      const lastStep = steps[steps.length - 1];
      assert.equal(lastStep.found, true);
      assert.equal(lastStep.mid, 3);
      assert.equal(nums[lastStep.mid], target);
    });

    it('returns not found step when target is absent', () => {
      const nums = [2, 4, 6, 8, 10];
      const target = 5;
      const steps = simulateBinarySearch(nums, target);
      const lastStep = steps[steps.length - 1];
      assert.equal(lastStep.found, false);
    });
  });

  describe('Two Sum Simulation', () => {
    it('identifies indices summing to target using hashmap steps', () => {
      const nums = [2, 7, 11, 15];
      const target = 9;
      const steps = simulateTwoSum(nums, target);

      assert.ok(steps.length > 0);
      const lastStep = steps[steps.length - 1];
      assert.equal(lastStep.found, true);
      assert.deepEqual(lastStep.pairIndices.sort(), [0, 1]);
    });
  });

  describe('Dutch National Flag (Sort 0 1 2) Simulation', () => {
    it('sorts 0, 1, 2 array with three pointers low, mid, high', () => {
      const nums = [2, 0, 2, 1, 1, 0];
      const steps = simulateDutchFlag(nums);

      assert.ok(steps.length > 0);
      const lastStep = steps[steps.length - 1];
      assert.deepEqual(lastStep.array, [0, 0, 1, 1, 2, 2]);
    });
  });

  describe('Majority Element (Boyer-Moore) Simulation', () => {
    it('finds majority element through candidate and count transitions', () => {
      const nums = [2, 2, 1, 1, 1, 2, 2];
      const steps = simulateMajorityElement(nums);

      assert.ok(steps.length > 0);
      const lastStep = steps[steps.length - 1];
      assert.equal(lastStep.candidate, 2);
      assert.ok(lastStep.count > 0);
    });
  });

  describe('Generic Array Stepper Simulation', () => {
    it('steps through array elements with pointer tracking', () => {
      const nums = [10, 20, 30, 40];
      const steps = simulateArrayStepper(nums);

      assert.equal(steps.length, nums.length + 2); // initial state + N items + completion step
      assert.equal(steps[1].currentIndex, 0);
      assert.equal(steps[steps.length - 1].isComplete, true);
    });
  });
});
