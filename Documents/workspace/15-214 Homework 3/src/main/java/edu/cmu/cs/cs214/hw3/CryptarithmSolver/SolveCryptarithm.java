package edu.cmu.cs.cs214.hw3.CryptarithmSolver;

import edu.cmu.cs.cs214.hw3.permutationGenerator.strategyGenerator.StrategyGenerator;

import java.util.ArrayList;

/**
 * SolveCryptarithm solves cryptarithm by taking in command line argument of a
 * cryptarithm expression and prints sets of solution that would solve the
 * cryptarithm.
 * 
 * @author yeukyullee
 *
 */
public class SolveCryptarithm {

  /**
   * main function for SolveCryptarithm.
   * 
   * @param args
   *          command line argument that represents the Cryptarithm intending to
   *          solve
   * 
   * @throws MalformedInputException
   *           when input is not a correct formed cryptarithm.
   */
  public static void main(String[] args) throws MalformedInputException {

    // initialize structure necessary for solving cryptarithm
    Cryptarithm cryptarithm;
    ArrayList<String> letters;
    StrategyGenerator<String> generator;
    ArrayList<ArrayList<String>> solutionList;

    // initializes structure for solving cryptarithm
    cryptarithm = new Cryptarithm(args);
    letters = cryptarithm.getAllChars();
    generator = new StrategyGenerator<String>(letters);
    solutionList = new ArrayList<ArrayList<String>>();

    // get total number of permutation
    int numPermutation = generator.generate();
    
    // try each permutation
    for (int i = 0; i < numPermutation; i++) {
      ArrayList<String> thisPermutation = generator.getIthPermutedList(i);
      if (cryptarithm.evalCryptarithm(thisPermutation) &&
          notInList(solutionList, thisPermutation)) {
        // if left expr = right expr given this key, add to solution set
        solutionList.add(thisPermutation);
      }
    }

    //removeDuplicate(solutionList);
    printSolution(solutionList);
  }
  
  /*
   * identicalList checks if two ArrayList contains same element lists
   * regardless of order.
   */
  private static boolean identicalList(ArrayList<String> arr1, ArrayList<String> arr2) {

    if (arr1.size() != arr2.size())
      return false;

    // check or double containment in both lists
    for (int i = 0; i < arr1.size(); i++) {
      if (arr1.get(i) != arr2.get(i))
        return false;
    }

    return true;
  }

  /*
   * notInList checks if newList is in arr. True if not, false otherwise.
   */
  private static boolean notInList(ArrayList<ArrayList<String>> arr, ArrayList<String> newList) {

    // check for containment
    for (int i = 0; i < arr.size(); i++) {
      if (identicalList(arr.get(i), newList)) {
        return false;
      }
    }
    return true;
  }
  


  /*
   * printSolution prints the solution list found for the given cryptarithm.
   */
  private static void printSolution(ArrayList<ArrayList<String>> solutionList) {
    int numSolutions = solutionList.size();
    System.out.print(numSolutions);
    System.out.print(" Solution(s): \n");

    // loops through all the solution
    for (int i = 0; i < numSolutions; i++) {
      ArrayList<String> thisSolution = solutionList.get(i);
      System.out.print("\t{");
      // prints out the mapping of each character to string
      for (int j = 0; j < thisSolution.size(); j++) {
        
        String thisChar = thisSolution.get(j);
        if (thisChar.equals("-")) {
          continue;
        }
        
        System.out.print(thisChar);
        System.out.print("=");
        System.out.print(j);
        if (j != thisSolution.size() - 1) {
          System.out.print(", ");
        }
      }
      System.out.print("}\n");
    }

  }
}
