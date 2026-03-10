/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jet Lu
 * Created on: Sep 2020
 * This program will play rock paper scissors and help keep track of the score.
*/

// creating variables
let randomNumber = 0
let varScore = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Scissors)
pause(1000)

// game
input.onGesture(Gesture.Shake, function () {
  randomNumber = randint(0, 2)
  basic.clearScreen()

    // rock
  if (randomNumber == 0) {
    basic.showIcon(IconNames.SmallSquare)
  }
  
    // paper
  if (randomNumber == 1) {
    basic.showIcon(IconNames.Square)
  }

    // scissors
  if (randomNumber == 2) {
    basic.showIcon(IconNames.Scissors)
  }

  pause(5000)
  basic.showIcon(IconNames.Happy)
})

// score tracker
input.onButtonPressed(Button.A, function () {
  varScore = varScore + 1
})
input.onButtonPressed(Button.B, function () {
  basic.clearScreen()
  basic.showString("score: " + varScore)
  pause(1000)
  basic.showIcon(IconNames.Happy)
})
