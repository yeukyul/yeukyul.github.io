package edu.cmu.cs.cs214.hw3.permutationGenerator.strategyGenerator;

import java.util.ArrayList;

/**
 * generator - a permutation generator.
 * 
 * 
 * @author yeukyulee
 *
 */
public interface Generator<E> {

  /**
   * generates all permutation of a given list and returns an integer 
   * representing the number of permutations generated based on the list.
   * 
   * @return an integer representing total number of permutations generated
   *         based on the original element list.
   */
  int generate();

  
  /**
   * getIthPermutedList returns the ith permutation of the original list as
   * generated via a prior call to generate(). Clients should not call this
   * method without calling generate beforehand.
   * 
   * @param i
   *          An integer that represents the ith permutation
   * @return an arraylist containing the original list but in permuted order.
   * @throws IndexOutOfBoundsException
   *           when i is greater than number of permutations generated of
   *           generate has not been called before getIthPermutedList().
   * 
   */
  ArrayList<E> getIthPermutedList(int i);
  
}
