import json
import urllib2
from pprint import pprint 
from petl import *

file = open('facts.json', 'r')
json_data = json.load(file)

petl_data = fromjson('facts.json')
print look(petl_data)

