package edu.cmu.cs.cs214.hw3.CryptarithmSolver;


import static org.junit.Assert.assertTrue;

import java.util.ArrayList;

import org.junit.Before;
import org.junit.Test;

public class CryptarithmTest {
  
  Cryptarithm testCrypt1;
  Cryptarithm testCrypt2;
  Cryptarithm testCrypt3;
  Cryptarithm testCrypt4;
  Cryptarithm testCrypt5;
  Cryptarithm testCrypt6;
  Cryptarithm testCrypt7;
  
  String[] puzzle1;
  String[] puzzle2;
  String[] puzzle3;
  String[] puzzle4;
  String[] puzzle5;
  String[] puzzle6;
  String[] puzzle7;
  
  ArrayList<String> solution1;
  ArrayList<String> solution2;
  ArrayList<String> solution3;
  ArrayList<String> solution4;
  ArrayList<String> solution4a;
  ArrayList<String> solution5;
  ArrayList<String> solution6;
  
  ArrayList<String> wrongSolution1;
  /**
   * Constructor function for the CryptarithmTest to
   * set up common testing structure.
   */
  public CryptarithmTest() {
    puzzle1 = new String[] {"SEND", "+", "MORE", "=", "MONEY"};
    puzzle2 = new String[] {"WINTER", "+", "IS", "+", "WINDIER", "+", "SUMMER", "+", "IS",
                "=", "SUNNIER"};
    puzzle3 = new String[] {"NORTH", "*", "WEST", "=", "SOUTH", "*", "EAST"};
    puzzle4 = new String[] {"JEDER", "+", "LIEBT", "=", "BERLIN"};
    puzzle5 = new String[] {"I", "+", "CANT", "+", "GET", "=", "NO", "+", "SATISTFACTION"}; 
    puzzle6 = new String[] {"ABCDEFGHIJ", "=", "ABCDEFGHIJ"};
    puzzle7 = new String[] {"AB", "+", "CD", "=", "DF"};
    
    
    solution1 = new ArrayList<String>();
    String[] solutionKey1 = {"O", "M", "Y", "-", "-", "E", "N", "D", "R", "S"};
    initSolutionArray(solutionKey1, solution1);
    
    solution2 = new ArrayList<String>();
    String[] solutionKey2 = {"N", "R", "T", "U", "D", "M", "I", "W", "E", "S"};
    initSolutionArray(solutionKey2, solution2);
    
    solution3 = new ArrayList<String>();
    String[] solutionKey3 = {"T", "O", "A", "R", "H", "N", "S", "E", "W", "U"};
    initSolutionArray(solutionKey3, solution3);
    
    solution4 = new ArrayList<String>();
    String[] solutionKey4 = {"N", "B", "T", "E", "J", "I", "D", "-", "R", "L"};
    initSolutionArray(solutionKey4, solution4);
    solution4a = new ArrayList<String>();
    String[] solutionKey4a = {"N", "B", "T", "E", "D", "I", "J", "L", "R", "-"};
    initSolutionArray(solutionKey4a, solution4a);
  
    solution6 = new ArrayList<String>();
    String[] solutionKey6 = {"O", "A", "B", "C", "D", "E", "F", "G", "H", "I"};
    initSolutionArray(solutionKey6, solution6);
    
    wrongSolution1 = new ArrayList<String>();
    String[] wrongkey1 = {"M", "-", "-", "R", "N", "S", "O", "Y", "E", "D"};
    initSolutionArray(wrongkey1, wrongSolution1);
    
  }
  
  /*
   * helper function to help initialize testing structure for arraylist that 
   * contains characters.
   */
  private void initSolutionArray(String[] key, ArrayList<String> solution) {
    for (int i = 0; i< key.length; i++) {
      solution.add(key[i]);
    }
  }
  
  
  /*
   * begin each testing with fresh instances of Cryptarithm
   */
  @Before
  public void setUp() {
    try {
      testCrypt1 = new Cryptarithm(puzzle1);
      testCrypt2 = new Cryptarithm(puzzle2);
      testCrypt3 = new Cryptarithm(puzzle3);
      testCrypt4 = new Cryptarithm(puzzle4);
      testCrypt5 = new Cryptarithm(puzzle5);
      testCrypt6 = new Cryptarithm(puzzle6);
      testCrypt7 = new Cryptarithm(puzzle7);
    } catch(MalformedInputException e) {
     
    }
   
  }
  
  /*
   * tests that cryptarithm evaluates to the correct result.
   */
  @Test
  public void testEvalCryptarithm() {

    assertTrue(testCrypt1.evalCryptarithm(solution1));
    assertTrue(!testCrypt1.evalCryptarithm(wrongSolution1));
    assertTrue(testCrypt2.evalCryptarithm(solution2));
    assertTrue(!testCrypt2.evalCryptarithm(solution3));
    assertTrue(testCrypt3.evalCryptarithm(solution3));
    assertTrue(testCrypt4.evalCryptarithm(solution4));
    assertTrue(testCrypt4.evalCryptarithm(solution4a));
    assertTrue(!testCrypt5.evalCryptarithm(solution4));
    assertTrue(testCrypt6.evalCryptarithm(solution6));
    assertTrue(testCrypt7.evalCryptarithm(solution6));
   
  }

}

