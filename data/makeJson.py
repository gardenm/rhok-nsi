import json
from json import JSONEncoder


simpleDict = {'country' : 
              [{'Brazil' : {'total_commit' : 50000, 'total_spent' : 1000}},
               {'Cameroon' : {'total_commit' : 90000, 'total_spent' : 50000}}
               ]}

simpleJsonOutput = [{'country' : 'Brazil', 'total_commit' : 50000, 'total_spent' : 1000},
                    {'country' : 'Cameroon', 'total_commit' : 90000, 'total_spent' : 50000}]

jsonString = JSONEncoder().encode(simpleDict)

print jsonString

with open('simpleOutput.json', 'w') as outfile:
  json.dump(simpleJsonOutput, outfile)