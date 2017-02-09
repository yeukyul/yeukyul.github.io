package edu.cmu.cs.cs214.hw3.permutationGenerator.tempateGenerator;

import java.lang.IndexOutOfBoundsException;

import java.util.ArrayList;

public class TemplateGenerator<E> extends Generator<E> {
  
  private ArrayList<E> originalList;
  private int size;

  public TemplateGenerator(ArrayList<E> elementList) {
    super(elementList.size());
    size = elementList.size();
    originalList = elementList;
  }
  
  /**
   * generate() generates all permutation of a given list, represented as an int
   * array of indexes, and store them within the instance in permutations. It
   * will return to client an integer representing the number of permutations
   * generated based on the element list they passed on to the constructor
   * method.
   * 
   * @return an integer representing total number of permutations generated
   *         based on the original element list.
   */
  public int generate() {
    
    int[] inds = new int[size];

    // fill up the inds array from 1 to size(originalList), mapping to indexes
    
    for (int i = 0; i < size; i++) {
      inds[i] = i;
    }

    // call heap's algorithm
    generateWithHeap(size, inds);

    // return the total number of permutations to the client
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
   *           when i is greater than number of permutations generated of
   *           generate has not been called before getIthPermutedList().
   * 
   */
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
