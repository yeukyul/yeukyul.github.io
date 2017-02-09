package edu.cmu.cs.cs214.hw3.permutationGenerator.strategyGenerator;

import java.util.ArrayList;


/**
 * StrategyGenerator - a permutation generator implemented using Strategy
 * Pattern.
 * 
 * @author yeukyulee
 *
 */
public class StrategyGenerator<E> implements Generator<E> {

  private ArrayList<E> originalList;
  private ArrayList<int[]> permutations;
  private int size;

  /**
   * constructor method for generator.
   * 
   * @param ArrayList
   *          containing element to be permuted.
   */
  public StrategyGenerator(ArrayList<E> originalList) {
    this.originalList = originalList;
    size = this.originalList.size();
    permutations = new ArrayList<int[]>();
  }

  /**
   * generate() generates all permutation of a given list and store them within the instance in permutations. It
   * will return to client an integer representing the number of permutations
   * generated based on the element list they passed on to the constructor
   * method.
   * 
   * @return an integer representing total number of permutations generated
   *         based on the original element list.
   */
  @Override
  public int generate() {

    int[] inds = new int[size];

    // fill up the inds array from 1 to size of original list, mapping to
    // indexes
    for (int i = 0; i < size; i++) {
      inds[i] = i;
    }

    // call heap's algorithm
    generateWithHeap(size, inds);

    // return the total number of permutations to the client
    return permutations.size();
  }
  
  /*
   * generateWithHeap() is a Iterative approach in implementing the heap's
   * algorithm. It will generate all permutations and add all the int array
   * representation to ArrayList permutation.
   * 
   * Created based on Heap's paper on generating permutations.
   */
  private void generateWithHeap(int n, int[] arr) {

    int[] count = new int[n];
    // adds original method
    makeCopy(arr);

    int i = 0;
    while (i < n) {
      if (count[i] < i) {
        if (i % 2 == 0) {
          swap(arr, 0, i);
        } else {
          swap(arr, count[i], i);
        }
        makeCopy(arr);
        count[i]++;
        i = 0;
      } else {
        count[i] = 0;
        i++;
      }
    }
  }

  /*
   * swap() swaps element i with element j in an int array arr.
   */
  private void swap(int[] arr, int i, int j) {
    int val = arr[i];
    arr[i] = arr[j];
    arr[j] = val;
  }

  /*
   * addCopy() adds copy of an array arr to permutations list.
   */
  private void makeCopy(int[] arr) {

    // copy array
    int[] copyArr = new int[size];
    for (int i = 0; i < arr.length; i++) {
      copyArr[i] = arr[i];
    }

    // add to instance of permutations
    permutations.add(copyArr);
  }
 

  /**
   * getIthPermutedList returns the ith permutation of the original list as
   * generated via a prior call to generate(). Clients should not call this
   * method without calling generate before hand.
   * 
   * @param i
   *          An integer that represents the ith permutation
   * @return an arraylist containing the original list but in permuted order.
   * @throws IndexOutOfBoundsException
   *           when i is greater than number of permutations generated of
   *           generate has not been called before getIthPermutedList().
   * 
   */
  @Override
  public ArrayList<E> getIthPermutedList(int i) {
    
    if (i <= permutations.size())
      new IndexOutOfBoundsException();

    // initialize an arrayList of generic types to hold elements
    ArrayList<E> permutedList = new ArrayList<E>();
    int[] permutation = permutations.get(i);

    // obtain the element of specific indexes
    for (int j = 0; j < permutation.length; j++) {
      E element = originalList.get(permutation[j]);
      permutedList.add(element);
    }

    return permutedList;
  }

}
