package edu.cmu.cs.cs214.hw3.permutationGenerator.iteratorGenerator;

import java.util.ArrayList;
import java.util.Iterator;

/**
 * IteratorGenerator - a permutation generator implemented using Iterator
 * Pattern.
 * 
 * @author yeukyulee
 *
 */
public class IteratorGenerator<E> {
  
  private ArrayList<E> originalList;  
  Iterator<int[]> iterator;
  private ArrayList<int[]> permutations;
  private int size;

  
  //@ class invariant: size == originalList.length

  /**
    * constructor method for IteratorGenerator.
    *
    *@param elementList
    *                   an arraylist that contains elements that clients 
    *                   wish to find a permutation of. The ArrayList
    *                   has to be at least size 1.
    */
  public IteratorGenerator(ArrayList<E> elementList) {
      originalList = elementList;
      size = originalList.size();
      iterator = new PermutationIterator(size);
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
  public int generate() {
    
    // fill up permutations in arraylist using iterator
    while (iterator.hasNext()) {
      int[] permutation = iterator.next();
      if (permutation == null) {
        break;
      }
      else {
        permutations.add(permutation);
      }
    }

    // return total number of permutation found
    return permutations.size();

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
   *           when i is greater than number of permutations generated or
   *           generate has not been called before getIthPermutedList().
   * 
   */
  public ArrayList<E> getIthPermutedList(int i) {
    
    if (i <= permutations.size())
      new IndexOutOfBoundsException();
    if (permutations.size() == 0)
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

/*
 * An iterator for the iterable interatorGenerator.
 */
class PermutationIterator implements Iterator<int[]> {

  private int size;
  private int iter;
  private int[] count;
  private int[] inds;
  int permutationGenerated;
  
  /**
    * Constructor method for Iterator 
    */
  PermutationIterator(int nElement) {
    this.size = nElement;
    iter = 0;
    inds = new int[this.size];
    count = new int[this.size];
    permutationGenerated = 0;
    populateIndexList();
  }

  /*
   * populateIndexList from 0 up to size of the list. 
   */
  private void populateIndexList() {
    for (int i = 0; i < this.size; i++) {
      inds[i] = i;
    }
  }

  /**
   * hasNext whether or not all permutations have been iterated through.
   * 
   * @return a boolean value signifying whether all permutations have been
   *         iterated through. True if yes and False otherwise.
   * 
   */
  @Override
  public boolean hasNext() {
    return (iter < size);
  }


  /**
   * next returns the next permuted ArrayList of the original permuteList.
   * 
   * @return a permuted ArrayList containing elements of the original permute
   *         List.
   */
  @Override
  public int[] next() {
    if (permutationGenerated == 0) {
      permutationGenerated++;
      return returnPermutation(inds);
    }
    
    iter = 0;
    
    // while we haven't find permutation, keep applying heap's algorithm
    while (iter < this.size) {

      if (count[iter] < iter) {
        if (iter % 2 == 0) {
          swap(inds, 0, iter);
        }
        else {
          swap(inds, count[iter], iter);
        }
        count[iter]++;
        return returnPermutation(inds);
      }
      else {
        count[iter] = 0;
        iter++;
      }
    }
    return null;
  }
  
  
  /*
   * return a copy of the current permutation generated.
   */
  private int[] returnPermutation(int[] permutation) {
    int[] newPermutation = new int[permutation.length];
    for (int i = 0; i < permutation.length; i++) {
      newPermutation[i] = permutation[i];
    }
    return newPermutation;
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
