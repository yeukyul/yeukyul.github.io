package edu.cmu.cs.cs214.hw3.permutationGenerator.tempateGenerator;

import java.util.ArrayList;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.junit.Before;
import org.junit.Test;

/**
 * This test unit tests the implementation of a 
 * templateGenerator.
 * 
 * @author yeukyulee
 *
 */
public class TemplateGeneratorTest<E> {

  /* ArrayList with various sizes */
  ArrayList<Integer> testIntList0;
  ArrayList<Integer> testIntList1;
  ArrayList<Integer> testIntList2;
  ArrayList<Integer> testIntList3;
  ArrayList<Integer> testIntList4;
  
  /* Generators for corresponding arrayList */
  TemplateGenerator<E> intGenerator0;
  TemplateGenerator<E> intGenerator1;
  TemplateGenerator<E> intGenerator2;
  TemplateGenerator<E> intGenerator3;
  TemplateGenerator<E> intGenerator4;

  /* ArrayList with various sizes */
  ArrayList<String> testStringList0;
  ArrayList<String> testStringList1;
  ArrayList<String> testStringList2;
  ArrayList<String> testStringList3;
  ArrayList<String> testStringList4;
  
  /* Generators for corresponding arrayList */
  TemplateGenerator<E> stringGenerator0;
  TemplateGenerator<E> stringGenerator1;
  TemplateGenerator<E> stringGenerator2;
  TemplateGenerator<E> stringGenerator3;
  TemplateGenerator<E> stringGenerator4;
  
  /**
   * Constructor method for template Generator Test.
   * Initialize common structure in this test unit. Since
   * these structures will not be modified, setting up once
   * will suffice for all future tests.
   */
  public TemplateGeneratorTest() {
    
    // populate the Integer Test ArrayLists
    ArrayList<Integer> testIntList0 = new ArrayList<Integer>();
    
    ArrayList<Integer> testIntList1 = new ArrayList<Integer>();
    testIntList1.add(1);
    
    ArrayList<Integer> testIntList2 = new ArrayList<Integer>();
    testIntList2.add(1);
    testIntList2.add(2);
    
    ArrayList<Integer> testIntList3 = new ArrayList<Integer>();
    testIntList3.add(1);
    testIntList3.add(2);
    testIntList3.add(3);
    
    ArrayList<Integer> testIntList4 = new ArrayList<Integer>();
    testIntList4.add(1);
    testIntList4.add(2);
    testIntList4.add(3);
    testIntList4.add(4);
    
    // initialize generators
    intGenerator0 = (TemplateGenerator<E>) new TemplateGenerator<Integer>(testIntList0);
    intGenerator1 = (TemplateGenerator<E>) new TemplateGenerator<Integer>(testIntList1);
    intGenerator2 = (TemplateGenerator<E>) new TemplateGenerator<Integer>(testIntList2);
    intGenerator3 = (TemplateGenerator<E>) new TemplateGenerator<Integer>(testIntList3);
    intGenerator4 = (TemplateGenerator<E>) new TemplateGenerator<Integer>(testIntList4);
    
    // populate the Integer Test ArrayLists
    ArrayList<String> testStringList0 = new ArrayList<String>();
    
    ArrayList<String> testStringList1 = new ArrayList<String>();
    testStringList1.add("1");
    
    ArrayList<String> testStringList2 = new ArrayList<String>();
    testStringList2.add("1");
    testStringList2.add("2");
    
    ArrayList<String> testStringList3 = new ArrayList<String>();
    testStringList3.add("1");
    testStringList3.add("2");
    testStringList3.add("3");
    
    ArrayList<String> testStringList4 = new ArrayList<String>();
    testStringList4.add("1");
    testStringList4.add("2");
    testStringList4.add("3");
    testStringList4.add("4");
    
    // initialize generators
    stringGenerator0 = (TemplateGenerator<E>) new TemplateGenerator<String>(testStringList0);
    stringGenerator1 = (TemplateGenerator<E>) new TemplateGenerator<String>(testStringList1);
    stringGenerator2 = (TemplateGenerator<E>) new TemplateGenerator<String>(testStringList2);
    stringGenerator3 = (TemplateGenerator<E>) new TemplateGenerator<String>(testStringList3);
    stringGenerator4 = (TemplateGenerator<E>) new TemplateGenerator<String>(testStringList4);
  }

  /**
   * tests that none of the generators is null.
   */
  @Test
  public void testNotNull() {
    
    assertTrue(!(intGenerator0 == null));
    assertTrue(!(intGenerator1 == null));
    assertTrue(!(intGenerator2 == null));
    assertTrue(!(intGenerator3 == null));
    assertTrue(!(intGenerator4 == null));
    
    assertTrue(!(stringGenerator0 == null));
    assertTrue(!(stringGenerator1 == null));
    assertTrue(!(stringGenerator2 == null));
    assertTrue(!(stringGenerator3 == null));
    assertTrue(!(stringGenerator4 == null));
  }
  
  /**
   * tests if generate() in generator returns correct number of permutations.
   */
  @Test
  public void testGenerate() {

    assertEquals(1, intGenerator0.generate());
    assertEquals(1, intGenerator1.generate());
    assertEquals(2, intGenerator2.generate());
    assertEquals(6, intGenerator3.generate());
    assertEquals(24, intGenerator4.generate());
    
    assertEquals(1, stringGenerator0.generate());
    assertEquals(1, stringGenerator1.generate());
    assertEquals(2, stringGenerator2.generate());
    assertEquals(6, stringGenerator3.generate());
    assertEquals(24, stringGenerator4.generate());
    
  }
  
  /**
   * tests if generates correct permutation. 
   */
  @Test
  public void testPermutations() {
    
    // obtain permutation int lists
    String[] actualInt0 = getAllPermutations(intGenerator0);
    String[] expected0 = {""};
    assertTrue(identicalList(actualInt0, expected0));
    
    
    String[] actualInt1 = getAllPermutations(intGenerator1);
    String[] actualString1 = getAllPermutations(stringGenerator1);
    String[] expected1 = {"1"};
    assertTrue(identicalList(actualInt1, expected1));
    assertTrue(identicalList(actualString1, expected1));
    
    String[] actualInt2 = getAllPermutations(intGenerator2);
    String[] actualString2 = getAllPermutations(stringGenerator2);
    String[] expected2 = {"12", "21"};
    assertTrue(identicalList(actualInt2, expected2));
    assertTrue(identicalList(actualString2, expected2));
    
    String[] actualInt3 = getAllPermutations(intGenerator3);
    String[] actualString3 = getAllPermutations(stringGenerator3);
    String[] expected3 = {"123", "132", "213", "231", "312", "321"};
    assertTrue(identicalList(actualInt3, expected3));
    assertTrue(identicalList(actualString3, expected3));
    
    String[] actualInt4 = getAllPermutations(intGenerator4);
    String[] actualString4 = getAllPermutations(stringGenerator4);
    String[] expected4 = {"1234", "1324", "2134", "2314", "3124", "3214",
                          "1243", "1342", "2143", "2341", "3142", "3241",
                          "1423", "1432", "2413", "2431", "3412", "3421",
                          "4123", "4132", "4213", "4231", "4312", "4321"};
    assertTrue(identicalList(actualInt4, expected4));
    assertTrue(identicalList(actualString4, expected4));
    
    assertTrue(!identicalList(actualString3, expected4));
    
  }
  
  
  /*
   * Helper functions that helps to collect all permuted list and returned
   * as stored element in an array list. 
   */
  private String[] getAllPermutations(TemplateGenerator<E> generator) {
    
    
    // populate result list with all permutations
    int size = generator.generate();
    
    // initialize a structure to hold all permutations returned
    String[] allPermutation = new String[size];
    
    for (int i = 0; i < size; i++) {
      ArrayList<E> thisPermuted = generator.getIthPermutedList(i);
      allPermutation[i] = convertToString(thisPermuted);
    }
    return allPermutation;
    
  }
  
  
  /*
   * Concatenate each permutations into one string and return
   * as a list of all permutation strings.
   */
  private String convertToString(ArrayList<E> permutation){
    
    String result = new String();
    for (int i = 0; i < permutation.size(); i++) {
      result += permutation.get(i).toString();
    }
    return result;
    
  }
 
  /*
   * identicalList checks if two ArrayList contains same element lists
   * regardless of order.
   */
  private boolean identicalList(String[] arr1, String[] arr2) {

    if (arr1.length != arr2.length)
      return false;
    
    // check or double containment in both lists
    for (int i = 0; i < arr1.length; i++) {
      if (!inList(arr1, arr2[i]))
        return false;
    }
    
    for (int i = 0; i < arr2.length; i++) {
      if (!inList(arr2, arr1[i]))
        return false;
    }
    
    return true;
  }
  

  
  /*
   * inList checks if an ArrayList arr contains an element list that matches
   * given list.
   */
  private boolean inList(String[] arr, String element) {

    // check for containment
    for (int i = 0; i < arr.length; i++) {
      if (element.equals(arr[i])) {
        return true;
      }
    }

    return false;
  }

}
