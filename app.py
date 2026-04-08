import speech_recognition as sr
import pyttsx3
import datetime
import wikipedia
import webbrowser
import os

engine = pyttsx3.init()

def speak(text):
    print("Assistant:", text)
    engine.say(text)
    engine.runAndWait()


def take_command():
    r = sr.Recognizer()

    with sr.Microphone() as source:
        print("Listening...")
        r.adjust_for_ambient_noise(source)

        try:
            audio = r.listen(source, timeout=5, phrase_time_limit=5)
        except:
            speak("Listening timeout")
            return "none"

    try:
        print("Recognizing...")
        command = r.recognize_google(audio, language='en-IN')
        print("You said:", command)
        return command.lower()

    except sr.UnknownValueError:
        speak("Sorry, I did not understand")
        return "none"

    except sr.RequestError:
        speak("Internet error")
        return "none"


speak("Hello, I am your AI assistant")

while True:
    command = take_command()

    if command == "none":
        continue   # 🔥 VERY IMPORTANT FIX

    elif "time" in command:
        time = datetime.datetime.now().strftime('%H:%M')
        speak("The time is " + time)

    elif "date" in command:
        date = datetime.datetime.now().strftime('%d %B %Y')
        speak("Today's date is " + date)

    elif "wikipedia" in command:
        speak("Searching Wikipedia")
        try:
            query = command.replace("wikipedia", "")
            result = wikipedia.summary(query, sentences=2)
            speak(result)
        except:
            speak("Sorry, I could not find information")

    elif "open google" in command:
        webbrowser.open("https://www.google.com")

    elif "open youtube" in command:
        webbrowser.open("https://www.youtube.com")

    elif "open flipkart" in command:
        webbrowser.open("https://www.flipkart.com")

    elif "open notepad" in command:
        os.system("notepad")

    # ✅ FIXED WINDOWS APPS
    elif "open excel" in command:
        speak("Opening Excel")
        os.system("start excel")

    elif "open word" in command:
        speak("Opening Word")
        os.system("start winword")

    # ✅ WEBSITES
    elif "open chatgpt" in command:
        webbrowser.open("https://chat.openai.com")

    elif "open instagram" in command:
        webbrowser.open("https://www.instagram.com")

    elif "open whatsapp" in command:
        webbrowser.open("https://web.whatsapp.com")

    elif "open twitter" in command:
        webbrowser.open("https://twitter.com")

    elif "open github" in command:
        webbrowser.open("https://github.com")

    elif "open copilot" in command:
        webbrowser.open("https://copilot.microsoft.com")

    elif "open anaconda" in command:
        os.system("start anaconda-navigator")

    elif "open amazon" in command:
        webbrowser.open("https://www.amazon.in")

    elif "open myntra" in command:
        webbrowser.open("https://www.myntra.com")

    elif "open meesho" in command:
        webbrowser.open("https://www.meesho.com")

    elif "exit" in command or "stop" in command:
        speak("Goodbye")
        break
    

    