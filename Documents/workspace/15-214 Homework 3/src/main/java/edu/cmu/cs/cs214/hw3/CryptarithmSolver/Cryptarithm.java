package edu.cmu.cs.cs214.hw3.CryptarithmSolver;

import edu.cmu.cs.cs214.hw2.expression.BinaryExpression;
import edu.cmu.cs.cs214.hw2.expression.Expression;
import edu.cmu.cs.cs214.hw2.expression.NumberExpression;
import edu.cmu.cs.cs214.hw2.expression.VariableExpression;

import edu.cmu.cs.cs214.hw2.operator.Addition;
import edu.cmu.cs.cs214.hw2.operator.BinaryOperator;
import edu.cmu.cs.cs214.hw2.operator.Multiplication;
import edu.cmu.cs.cs214.hw2.operator.Subtraction;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Set;

/**
 * Cryptarithms - a cryptarithms class that evaluates cryptarithms strings and
 * checks equality between two cryptarithm strings..
 * 
 * @author yeukyulee
 *
 */
public class Cryptarithm {

  private static final int MAX_KEY = 10;
  private static final double EPSILON = 1e-6;
  
  String[] cryptarithm;
  String[] letters;
  HashMap<String, Expression> letterMap;
  Expression leftExpr;
  Expression rightExpr;

  /**
   * Constructor function for the Cryptarithm class.
   * 
   * @param cyptarithmStr
   *          a string array that represents crytarithms
   * @throws MalformedInputException
   *           if the cryptarithm is malformed.
   */
  public Cryptarithm(String[] cryptarithmStr) throws MalformedInputException {
    
    letterMap = new HashMap<String, Expression>();
    // check for malformed input
    if (!isCryptarithm(cryptarithmStr)) {
      throw new MalformedInputException();
    }

    cryptarithm = cryptarithmStr;
    Set<String> keys = letterMap.keySet();
    letters = (String[]) keys.toArray(new String[MAX_KEY]);
    
    // fill up the key until it is of length 10
    for (int i = keys.size(); i < MAX_KEY; i++) {
      letters[i] = "-";
    }
    
    parseCryptarithm();
  }

  /**
   * checks if the input is a valid cryptarithm string by keeping track of how
   * many unique characters there are. If there are more than 10, returns false
   * immediately. Every time when a new character is found, it is added to a
   * letterMap with key as the character and value as -1.
   * 
   * @param argList
   *          cryptarithm string to check
   * @return true if cryptarithm string is well formed, and all letters are
   *         entered as a variable expression into letterMap.
   * 
   * @throws MalformedInputException
   *           when an input is malformed. A input has to contain a left and
   *           right expr, with a "=" sign between two expressions. Only "+",
   *           "-" and "*" are allowed. All letters in cryptarithm should be in
   *           upper case. There should be at most 10 unique letters in a
   *           cryptarithm.
   */
  private boolean isCryptarithm(String[] argList) throws MalformedInputException {

    int numArgs = argList.length;
    int numChar = 0;
    ////System.out.print("before checking length");

    if (numArgs % 2 == 0) {
      throw new MalformedInputException();
    }

    ////System.out.println("before looping through all word");
    
    // looping through arguments
    for (int i = 0; i < numArgs; i++) {
      String thisWord = argList[i];

      ////System.out.println("Looping through word");
      ////System.out.println(thisWord);
      
      // skip operator
      if (thisWord.length() == 1) {
        continue;
      }
      // looping through characters in the argument
      for (int j = 0; j < thisWord.length(); j++) {
        String thisChar = Character.toString(thisWord.charAt(j));

        ////System.out.println(thisChar);
        // increment letter count if we have not seen this char yet
        if (letterMap.get(thisChar) == null) {
          numChar++;
        }
        // checks if more than 10 arguments has been found
        if (numChar > MAX_KEY) {
          return false;
        }
        letterMap.put(thisChar, new VariableExpression(thisChar));
      }
      
    }

    // the cryptarithm string is well formed
    return true;
  }

  /*
   * parseCryptarithm parses the cryptarithm that this class contains into left
   * and right sub expression
   */
  private void parseCryptarithm() throws MalformedInputException {
    // store the number of arguments found in the cryptarithm string list
    int numArgs = cryptarithm.length;
    String[] left = null;
    String[] right = null;

    ////System.out.println("before parsing");
    
    // separate the list into left and right
    for (int i = 0; i < numArgs; i++) {
      String thisWord = cryptarithm[i];
      // found the seperator for left and right expression
      if (thisWord.equals("=")) {
        left = subStrList(cryptarithm, 0, i);
        right = subStrList(cryptarithm, i + 1, numArgs);
        break;
      }
    }

    ////System.out.println("can't find equal sign");
    
    if (left == null || right == null) {
      ////System.out.println("found equal sign");
      throw new MalformedInputException();
    }
    
    ////System.out.println("before evaluating left and right");

    // parse each side of the argument into an Expression
    leftExpr = parseExpression(left);
    rightExpr = parseExpression(right);
  }

  /*
   * parseExpression takes in a string list and parse it into an expression by
   * first finding the operator and variable expression, initializing each
   * operator and expression using recursive approach. The argument list passed
   * in should never contains odd number of argument considering the fact that
   * all arguments are performing binary operation with each other.
   */
  private Expression parseExpression(String[] argList) throws MalformedInputException {

    int numArgs = argList.length;

    // recursively obtain expression
    if (numArgs % 2 == 0) {
      throw new MalformedInputException();
    } else if (numArgs == 1) {
      return parseVariableExpression(argList[0]);
    } else {
      try {
        // expect first argument in argList to be a variable expression
        Expression var = parseVariableExpression(argList[0]);
        // expect first argument in argList to be an operator
        BinaryOperator opr = parseOperation(argList[1]);
        
        //System.out.println(opr);
        // rest of the unparsed variables
        String[] rest = subStrList(argList, 2, numArgs);
        return new BinaryExpression(opr, var, parseExpression(rest));
      } catch (MalformedInputException e) {
        throw e;
      }

    }
  }

  /*
   * parseOperation returns an instance of an operation class that the operator
   * represents.
   */
  private BinaryOperator parseOperation(String operator) throws MalformedInputException {
    switch (operator) {
      case "+":
        return new Addition();
      case "-":
        return new Subtraction();
      case "*":
        return new Multiplication();
      default:
        throw new MalformedInputException();
    }
  }

  /*
   * parseVariableExpression returns an expression that the string var
   * represents. The input vars should contains only uppercase alphabets. Each
   * variable expression "ABCD" can be represented as an expression as
   * "A * 10^3 + B * 10^2 + C * 10^1 + D * 10^0". Parse VariableExpression will
   * then returns a composite expression as such.
   */
  private Expression parseVariableExpression(String vars) throws MalformedInputException {

    BinaryOperator times = new Multiplication();
    BinaryOperator add = new Addition();

    int numVars = vars.length();
    double base = 10;
    double pow = Math.pow(base, numVars - 1);

    if (numVars == 0) {
      throw new MalformedInputException();
    }

    // begin expression with the first variable expression
    Expression accumulatedExpr = null;
    
    for (int i = 0; i < vars.length(); i++) {
      
      String thisChar = Character.toString(vars.charAt(i));
      Expression thisVar = letterMap.get(thisChar);
      Expression thisPowerTerm = new NumberExpression(pow);
      Expression thisTerm = new BinaryExpression(times, thisVar, thisPowerTerm);
      //System.out.print(thisVar.toString());
      //System.out.print(times.toString());
      //System.out.print(pow);
      if (i == 0) {
        accumulatedExpr = thisTerm;
      }
      else {
        accumulatedExpr = new BinaryExpression(add, accumulatedExpr, thisTerm);
        //System.out.print(add.toString());
      }
      pow /= base;
    }
    //System.out.print("\n");
    return accumulatedExpr;
  }

  /*
   * subStrList returns a sub string list of desired start and end.
   */
  private String[] subStrList(String[] strList, int start, int end) {

    int size = end - start;
    if (size <= 0) {
      return null;
    }
    String[] result = new String[end - start];
    for (int i = start; i < end; i++) {
      result[i - start] = strList[i];
    }
    return result;
  }

  /**
   * getAllChars returns a String list of all characters exists in the
   * cryptharithm string this instance represents.
   */
  public ArrayList<String> getAllChars() {
    // convert from list to arrayList
    return new ArrayList<String>(Arrays.asList(this.letters));
  }

  /**
   * evalCryptarithm evaluates the cryptarithm string by taking in an arraylist
   * of characters, where indexes of each letter represents the numeric value of
   * that specific during evaluation.
   * 
   * @param permutedLetters
   *          An arraylist that contains all the letters in original cryptarithm
   *          string in permuted order.
   * @return a boolean value that evaluates the cryptarithm string and check if
   *         left hand side expression evalues to right hand side expression.
   *         True if it does and False otherwise.
   * 
   */
  public boolean evalCryptarithm(ArrayList<String> permutedLetters) {

    VariableExpression var;
    
    //System.out.println("enter eval");
    if (argStartWith(cryptarithm, permutedLetters.get(0))) {
      return false;
    }

    for (int i = 0; i < permutedLetters.size(); i++) {
      String thisLetter = permutedLetters.get(i);
      var = (VariableExpression) letterMap.get(thisLetter);
      if (var != null) {
        var.store(i);
      }
    }
    //System.out.println("left");
    //System.out.println(leftExpr.eval());
    //System.out.println("right");
    //System.out.println(rightExpr.eval());

    return (almostEqual(leftExpr.eval(), rightExpr.eval()));
  }
  
  /*
   * argStartWith checks if any argument in the arrayList
   * starts with the specify character. If such word in arglist
   * exists, return true, false therwise
   */
  private boolean argStartWith(String[] arglist, String firstChar) {
    for (int i = 0; i < arglist.length; i++) {
     String word = arglist[i];
     String thisChar = Character.toString(word.charAt(0));
     if (thisChar.equals(firstChar)) {
       return true;
     }
    }
    return false;
  }

  /*
   * almostEqual tests if two double are almost equal, meaning that the
   * difference bettwen two doubles are so little that it is negligible.
   */
  private boolean almostEqual(double n1, double n2) {
    return (Math.abs(n1 - n2) < EPSILON);
  }

  /**
   * equal evaluates the equality of two cryptarithm.
   * 
   * @param other
   *          Another cryptarithm to compare to the string this class
   *          represents.
   * @return a boolean value that signifies if these two cryptarithm are the
   *         same.
   * @throws typeError
   *           if another string that we wish to compare does not follow a
   *           crypto format.
   */
  public boolean equal(Cryptarithm other) {
    return true;
  }
}

/**
 * A special Exception class created to raise exception on malformed input in
 * Crpthrithm.
 * 
 * @author yeukyulee
 *
 */
class MalformedInputException extends Exception {

  /**
   * 
   */
  private static final long serialVersionUID = -5576444747877768689L;
}
