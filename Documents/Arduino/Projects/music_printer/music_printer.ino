#include <Adafruit_CharacterOLED.h>
#include "pitches.h"
#include "Adafruit_Thermal.h"
#include "alto_clef.h"
#include "dinasour.h"
#include "SoftwareSerial.h"


#include "a_half.h"
#include "a_whole.h"
#include "a_quarter.h"
#include "a_eighth.h"

#include "b_half.h"
#include "b_whole.h"
#include "b_quarter.h"
#include "b_eighth.h"

#include "c_half.h"
#include "c_whole.h"
#include "c_quarter.h"
#include "c_eighth.h"

#include "a_half.h"
#include "a_whole.h"
#include "a_quarter.h"
#include "a_eighth.h"

#include "c8_half.h"
#include "c8_whole.h"
#include "c8_quarter.h"
#include "c8_eighth.h"

#include "d_half.h"
#include "d_whole.h"
#include "d_quarter.h"
#include "d_eighth.h"

#include "e_half.h"
#include "e_whole.h"
#include "e_quarter.h"
#include "e_eighth.h"

#include "f_half.h"
#include "f_whole.h"
#include "f_quarter.h"
#include "f_eighth.h"

#include "g_half.h"
#include "g_whole.h"
#include "g_quarter.h"
#include "g_eighth.h"

#include "twotwo.h"
#include "twoforth.h"
#include "threeforth.h"
#include "fourforth.h"
#include "sixeighth.h"

#include "quarter_rest.h"
#include "eighth_rest.h"
#include "half_rest.h"
#include "whole_rest.h"

#include "treble_clef.h"
#include "end.h"

#define TX_PIN 5 // Arduino transmit  YELLOW WIRE  labeled RX on printer
#define RX_PIN 4 // Arduino receive   GREEN WIRE   labeled TX on printer

SoftwareSerial mySerial(RX_PIN, TX_PIN); // Declare SoftwareSerial obj first
Adafruit_Thermal printer(&mySerial, 50);     // Pass addr to printer constructor

/*-- printer constant --*/

const uint8_t* eighth[] = {c_eighth_data, d_eighth_data,
                   e_eighth_data, f_eighth_data, g_eighth_data, 
                   a_eighth_data, b_eighth_data, c8_eighth_data};
const uint8_t* half[] = {c_half_data, d_half_data,
                   e_half_data, f_half_data, g_half_data, 
                   a_half_data, b_half_data, c8_half_data};
const uint8_t* whole[] = {c_whole_data, d_whole_data,
                   e_whole_data, f_whole_data, g_whole_data, 
                   a_whole_data, b_whole_data, c8_whole_data};
const uint8_t* quarter[] = {c_quarter_data, d_quarter_data,
                   e_quarter_data, f_quarter_data, g_quarter_data, 
                   a_quarter_data, b_quarter_data, c8_quarter_data};
const uint8_t* time_signature[] = {twotwo_data, twoforth_data, threeforth_data,
                  fourforth_data, sixeighth_data};
int note_width = a_half_width;
int note_height = a_half_height;

int timeIndex;

/*------- Hardware configuration -------*/

// keyboard
const int LED_LEFT = 34;
const int SWITCH_PIN_LEFT = 30;    
const int LED_RIGHT = 28;
const int SWITCH_PIN_RIGHT = 32; 

// control buttons
const int NEXT_PIN = 13;
const int BACK_PIN = 22;

// speaker
const int TONE_PIN = 3;

// potentiometer
const int potPin1 = A0;


// LED monitor
Adafruit_CharacterOLED lcd(OLED_V2, 6, 7, 8, 9, 10, 11, 12);

/*------ Gloabal varaibles ------*/

// timing
const int NOTE_DURATION = 200;
const int DEBOUNCE = 700;

// switch readings
int right_switch_reading, left_switch_reading;
int next_switch_reading, back_switch_reading;
int potentiometer_reading;

// readings for debounce time
int last_read_back = millis();
int last_read_next = millis();
int last_read_left = millis();

// music constants
String timeSignature[6] = {"2/2", "2/4", "3/4", "4/4", "6/8", "6/8"};

// keyboard
int keys[8] = {45, 47, 49, 51, 42, 44, 46, 48};

// octaves
int octave1[] = {NOTE_C1, NOTE_D1, NOTE_E1, NOTE_F1, NOTE_GS1, NOTE_A1, NOTE_B1, NOTE_C2};
int octave2[] = {NOTE_C2, NOTE_D2, NOTE_E2, NOTE_F2, NOTE_G2, NOTE_A2, NOTE_B2, NOTE_C3};
int octave3[] = {NOTE_C3, NOTE_D3, NOTE_E3, NOTE_F3, NOTE_G3, NOTE_A3, NOTE_B3, NOTE_C4};
int octave4[] = {NOTE_C4, NOTE_D4, NOTE_E4, NOTE_F4, NOTE_G4, NOTE_A4, NOTE_B4, NOTE_C5};
int octave5[] = {NOTE_C5, NOTE_D5, NOTE_E5, NOTE_F5, NOTE_G5, NOTE_A5, NOTE_B5, NOTE_C6};
int octave6[] = {NOTE_C6, NOTE_D6, NOTE_E6, NOTE_F6, NOTE_G6, NOTE_A6, NOTE_B6, NOTE_C7};
int octave7[] = {NOTE_C7, NOTE_D7, NOTE_E7, NOTE_F7, NOTE_G7, NOTE_A7, NOTE_B7, NOTE_C8};
int* octaves[7] = {octave1, octave2, octave3, octave4, octave5, octave6, octave7};

// music variables
int tempo = 70;
int mode = 0;
int octave = 4;
int* octaveNotes = octaves[octave];
boolean isPlaying = false;
boolean playingKey = false;
int max_mode = 5;
int noteLength = 0;
int lastNoteTime = millis();
int noteStartTime, tolerance, lastNote;

  
/*-------------------------------------------*/
/* Initializization code (run once via call from Arduino framework) */
void setup() {
  // establish switches and corresponding LEDS
  pinMode(LED_LEFT, OUTPUT); 
  pinMode(LED_RIGHT, OUTPUT); 
  pinMode(SWITCH_PIN_LEFT, INPUT);
  pinMode(SWITCH_PIN_RIGHT, INPUT);
  pinMode(NEXT_PIN, INPUT);
  pinMode(BACK_PIN, INPUT);

  // initializes LCD
  lcd.begin(16, 2);
  lcd.clear();

  // printer set up 
  mySerial.begin(19200);  // Initialize SoftwareSerial
  printer.begin();        // Init printer (same regardless of serial type)

  // keyboard set up
  for (int i = 0; i < 8; i++) {
    pinMode(keys[i], INPUT); 
  }

  // initialize field
  timeIndex = map(potentiometer_reading, 0, 1023, 0, 5);
  octave = map(potentiometer_reading, 0, 1023, 0, 8);
}


void printToScreen() {

  switch(mode) {   
    case(0):
      lcd.setCursor(0,0); 
      lcd.print(" MUSIC PRINTER  ");
      lcd.setCursor(0,1);
      lcd.print(" PRESS TO START ");
      break;
   case(1):
      lcd.setCursor(0,0); 
      lcd.print("CHOOSE TEMPO: ");
      lcd.setCursor(0,1);
      potentiometer_reading = analogRead(potPin1);
      lcd.print(map(potentiometer_reading, 0, 1023, 70, 200));
      lcd.print(" ");
      break;
   case(2):
      lcd.setCursor(0,0); 
      lcd.print("TIME SIGNATURE: ");
      lcd.setCursor(0,1);
      potentiometer_reading = analogRead(potPin1);
      lcd.print(timeSignature[map(potentiometer_reading, 0, 1023, 0, 5)]);
      timeIndex = map(potentiometer_reading, 0, 1023, 0, 5);
      break;
   case(3):
      lcd.setCursor(0,0); 
      lcd.print("OCTAVE:");
      lcd.setCursor(0,1);
      potentiometer_reading = analogRead(potPin1);
      lcd.print(map(potentiometer_reading, 0, 1023, 1, 8));
      octave = min(map(potentiometer_reading, 0, 1023, 1, 7) - 1, 6);
      octaveNotes = octaves[octave];
      break;
   case(4):
      lcd.setCursor(0,0); 
      lcd.print("PRESS TO");
      lcd.setCursor(0,1);
      lcd.print("START PRINTNG");
      break;
   case(5):
      lcd.setCursor(0,0); 
      lcd.print("PRINTING...");
      break;
   default:
     break;
  }

}

/* onPress - responsible for back and next button press */
void onPress() {
  next_switch_reading = digitalRead(NEXT_PIN);
  back_switch_reading = digitalRead(BACK_PIN);
  left_switch_reading = digitalRead(SWITCH_PIN_LEFT);
  if (next_switch_reading == HIGH 
      && millis() - last_read_next > DEBOUNCE
      && mode < max_mode) {
     lcd.clear();
     mode++;
     if (mode == 5) {
      printer.printBitmap(note_width, note_height, treble_clef_data);
      printer.printBitmap(note_width, note_height, time_signature[timeIndex]);
     }
     last_read_next = millis();
  }
  if (back_switch_reading == HIGH 
      && millis() - last_read_back > DEBOUNCE
      && mode > 0) {
     lcd.clear();
     mode--;
     if (mode == 4) printer.printBitmap(note_width, note_height, end_data);
     last_read_back = millis();
  }
  if (left_switch_reading == HIGH
      && millis() - last_read_left > DEBOUNCE) {
    printer.printBitmap(dinasour_width, dinasour_height, dinasour_data);
    last_read_left = millis();
    return;
  }

}

// compute bpm to millisecond
int bpmToMs(int bpm) {
  return(60000 / 100);
}

// play demo sound 
void playSound() {
  for (int i = 0; i < 7; i++) {
    tone(TONE_PIN, dpitches[i], NOTE_DURATION);
    //delay(NOTE_DURATION*2);
  }
}

// check if key is pressed
int getKeyPressed() {
  for (int i = 0; i < 8; i++) {
    if (digitalRead(keys[i]) == HIGH) {
      return i;
    }
  }
  return -1;
}

// onPlayKey respond to user playing a key
void onPlayKey() {

  int keyPressed = getKeyPressed();

  if (keyPressed == -1) {
    return;
  }
  
  playSound(keyPressed);
  int currentTime = millis();
  if (currentTime - lastNoteTime > DEBOUNCE) {
    lastNoteTime = currentTime;
    if (mode == max_mode) 
      printer.printBitmap(note_width, note_height, eighth[keyPressed]);
  }
  
}

// play corresponding sound of the note that is pressed
void playSound(int i) {
  tone(TONE_PIN, octaveNotes[i], NOTE_DURATION);
  delay(NOTE_DURATION*2);
  digitalWrite(LED_RIGHT, LOW);
}


// user has finished a rest or a pause, adding it to score sheet
void addRest(int duration) {
  
}

// user has finished playing a note, adding it to score sheet
void addNote(int duration, int noteIndex) {
  
}

// compute note index computes which note index does the current note belong to
void computeNoteIndex() {
  
}

/* Main routine (called repeated by from the Arduino framework) */
void loop() {

    printToScreen();
    onPress();
    onPlayKey();

    getKeyPressed();

    next_switch_reading = digitalRead(NEXT_PIN);
    back_switch_reading = digitalRead(BACK_PIN);

    if (next_switch_reading == LOW) {
       digitalWrite(LED_RIGHT, HIGH);
    } else {
       digitalWrite(LED_RIGHT, LOW);
    }

    if (back_switch_reading== LOW) {
       digitalWrite(LED_LEFT, HIGH);
    } else {
       digitalWrite(LED_LEFT, LOW);
    }
  
}  // end loop()
