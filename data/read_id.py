import json
import urllib2
from pprint import pprint 

from petl import *

# We're interested in all health related sectors. First ask for all sectors
# url = "http://cidp.herokuapp.com/cube/cida/aggregate?drilldown=sector_name"

file = open('mnhc.ids', 'r')
# json_data = json.load(file)
# list_titles = ['Water, Sanitation and Hygiene for Southern Mali', 'Improving Nutrition through Homestead Food Production']


petl_data = fromtext('mnhc.ids')

print petl_data[1]



