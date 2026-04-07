import speech_recognition as sr
import pyttsx3
import datetime
import wikipedia
import webbrowser
import os

engine = pyttsx3.init()

def speak(text):
    engine.say(text)
    engine.runAndWait()

def take_command():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        r.pause_threshold = 1
        audio = r.listen(source)

    try:
        print("Recognizing...")
        command = r.recognize_google(audio)
        print("You said:", command)
    except:
        print("Say again...")
        return "none"

    return command.lower()

speak("Hello, I am your AI voice assistant")

while True:
    command = take_command()

    if "time" in command:
        time = datetime.datetime.now().strftime('%H:%M')
        speak("The time is " + time)

    elif "date" in command:
        date = datetime.datetime.now().strftime('%d %B %Y')
        speak("Today's date is " + date)

    elif "wikipedia" in command:
        speak("Searching Wikipedia")
        command = command.replace("wikipedia", "")
        result = wikipedia.summary(command, sentences=2)
        speak(result)

    elif "open google" in command:
        webbrowser.open("https://www.google.com")

    elif "open youtube" in command:
        webbrowser.open("https://www.youtube.com")

    elif "open notepad" in command:
        os.system("notepad")
    elif "open flipkart" in command:
        webbrowser.open("https://www.flipkart.com")
    

    elif "stop" in command:
        speak("Goodbye")
        break
    import speech_recognition as sr
import pyttsx3
import datetime
import webbrowser
import wikipedia

engine = pyttsx3.init()

def speak(text):
    print("Assistant:", text)
    engine.say(text)
    engine.runAndWait()

def take_command():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        r.adjust_for_ambient_noise(source, duration=1)
        audio = r.listen(source)

    try:
        print("Recognizing...")
        command = r.recognize_google(audio)
        print("You said:", command)
    except:
        speak("Sorry, I did not understand")
        return "none"

    return command.lower()

speak("Hello, I am your assistant")

while True:
    command = take_command()

    if "time" in command:
        time = datetime.datetime.now().strftime('%H:%M')
        speak("The time is " + time)

    elif "date" in command:
        date = datetime.datetime.now().strftime('%d %B %Y')
        speak("Today's date is " + date)

    elif "open google" in command:
        webbrowser.open("https://google.com")

    elif "wikipedia" in command:
        speak("Searching Wikipedia")
        command = command.replace("wikipedia", "")
        result = wikipedia.summary(command, sentences=2)
        speak(result)

    elif "stop" in command:
        speak("Goodbye")
        break