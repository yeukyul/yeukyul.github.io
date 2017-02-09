package edu.cmu.cs.cs214.hw3.permutationGenerator.tempateGenerator;

import java.util.ArrayList;

/**
 * Generator - an abstract class that implements the invariant of a permutation
 * generator as a part of the template pattern.
 * 
 * @author yeukyulee
 *
 */
public abstract class Generator<E> {

  ArrayList<int[]> permutations;
  private int size;

  /**
   * constructor method for generator.
   * 
   * @param numElement
   *          containing number of elements in the list client wish to permute
   */
  public Generator(int numElement) {
    size = numElement;
    permutations = new ArrayList<int[]>();
  }
  
  /*
   * generateWithHeap() is a recursive approach in implementing the heap's
   * algorithm. It will generate all permutations and add all the int array
   * representation to ArrayList permutation.
   * 
   * Created based on Heap's paper on generating permutations.
   */
  protected void generateWithHeap(int n, int[] arr) {

    int[] count = new int[n];
    // adds original method
    output(arr);

    int i = 0;
    while (i < n) {
      if (count[i] < i) {
        if (i % 2 == 0) {
          swap(arr, 0, i);
        } else {
          swap(arr, count[i], i);
        }
        output(arr);
        count[i]++;
        i = 0;
      } else {
        count[i] = 0;
        i++;
      }
    }

  }
  
  /*
   * addCopy() adds copy of an array to permutation
   */
  private void output(int[] arr) {

    // copy array
    int[] copyArr = new int[size];
    for (int i = 0; i < arr.length; i++) {
      copyArr[i] = arr[i];
    }

    // add to instance of permutations
    permutations.add(copyArr);
  }
  

  /*
   * swap() swaps element i with element j in an int array arr.
   */
  private void swap(int[] arr, int i, int j) {
    int val = arr[i];
    arr[i] = arr[j];
    arr[j] = val;
  }

}
