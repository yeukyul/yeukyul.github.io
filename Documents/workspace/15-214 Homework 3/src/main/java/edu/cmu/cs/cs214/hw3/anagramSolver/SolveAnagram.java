package edu.cmu.cs.cs214.hw3.anagramSolver;

import edu.cmu.cs.cs214.hw3.permutationGenerator.strategyGenerator.Generator;
import edu.cmu.cs.cs214.hw3.permutationGenerator.strategyGenerator.StrategyGenerator;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

import java.util.ArrayList;
import java.util.HashSet;

/**
 * AnagramSolver - solves for anagram of a given word using permutation
 * generator..
 * 
 * @author edwardlee
 *
 */
public class SolveAnagram {

  /**
   * Main function for anagram solver.
   * 
   * @param args
   *          command line argument contains the word that wish to find anagrams
   *          for
   * @throws IOException
   *           if the txt tht contains all words doesn't exist or file reading
   *           error.
   */
  public static void main(String[] args) throws IOException {

    // read in file
    String wordtxtPath = "src/main/resources/words.txt";
    HashSet<String> dict = new HashSet<String>();
    FileReader reader = new FileReader(wordtxtPath);

    // declare generator for later use
    Generator<Character> generator;

    // read all words and place them in the dictionary
    try (BufferedReader br = new BufferedReader(reader)) {
      String line;
      while ((line = br.readLine()) != null) {
        dict.add(line);
      }
    }

    // read in each word from command line
    for (int i = 0; i < args.length; i++) {
      String word = args[i];

      // print word to output
      System.out.print(word);
      System.out.print(": ");

      // parse word into arraylist to feed into generator
      ArrayList<Character> charList = makeCharList(word);
      generator = new StrategyGenerator<Character>(charList);
      int numPermutation = generator.generate();

      // find anagrams in helper
      findAnagrams(generator, numPermutation, dict);
    }

  }

  /*
   * findAnagrams find all words exist in dict that can be formed by permutation
   * returns from the
   */
  private static void findAnagrams(Generator<Character> generator, 
                                    int numPermutation, HashSet<String> dict) {
    HashSet<String> seen = new HashSet<String>();
    
    // iterates through all permutation
    for (int i = 0; i < numPermutation; i++) {
      ArrayList<Character> charList = generator.getIthPermutedList(i);
      String tryWord = charListToString(charList);
      
      // finds a valid word
      if (dict.contains(tryWord) && (!seen.contains(tryWord))) {
        System.out.print(tryWord + " ");
        seen.add(tryWord);
      }
    }
    
    // prints no solution to console if no anagrams found
    if (seen.size() == 0) {
      System.out.print("no solution");
    }
    
    // print new line to console
    System.out.print("\n");
  }

  /*
   * charListToString collapse all characters in charList and output as a
   * string.
   */
  private static String charListToString(ArrayList<Character> charList) {

    String resultStr = new String();
    for (int i = 0; i < charList.size(); i++) {
      resultStr += charList.get(i).toString();
    }
    return resultStr;
  }

  /*
   * makeCharList parses a string into a Character ArrayList containing all
   * characters in the original string.
   */
  private static ArrayList<Character> makeCharList(String word) {

    char[] charArray = word.toCharArray();
    ArrayList<Character> charList = new ArrayList<Character>();

    // add each character into resulting character list
    for (int i = 0; i < charArray.length; i++) {
      charList.add(word.charAt(i));
    }

    return charList;
  }

}
