#This is the complete code for sentiment analysis using csv file

from textblob import TextBlob

from pandas import read_csv
import numpy

dataset=open("Feedback.csv",'r')
data=dataset.read()

#print(data)

blob1=TextBlob(data)

#print(blob1.sentiment)

sentiment=blob1.sentiment.polarity

#print(sentiment)

if(sentiment>0):
    print("Positive")
elif(sentiment==0):
    print("Neutral")
else:
    print("Negative")