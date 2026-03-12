"""
Created by: Jet Lu
Created on: Mar 2026
This program plays rock paper scissors and can help track the score.
"""

from microbit import *
import random

# variables
randomNumber = 0
varScore = 0

# creates scissors using grid of LEDs
scissors = Image("90009:" "99090:" "00900:" "99090:" "90009")

# setup
display.clear()
display.show(Image.HAPPY)

while True:
    if accelerometer.was_gesture("shake"):
        randomNumber = random.randint(0, 2)
        display.clear()

        # rock
        if randomNumber == 0:
            display.show(Image.SQUARE_SMALL)

        # paper
        if randomNumber == 1:
            display.show(Image.SQUARE)

        # scissors
        if randomNumber == 2:
            display.show(scissors)

        # pause
        sleep(5000)
        display.show(Image.HAPPY)

        # score tracker
    if button_a.was_pressed():
        varScore = varScore + 1
        display.show(Image.YES)
        
    # show score
    if button_b.was_pressed():
        display.scroll("score: " + str(varScore))
        sleep(500)
        display.show(Image.HAPPY)
