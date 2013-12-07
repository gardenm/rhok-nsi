import json
import urllib2
from pprint import pprint 

from petl import *

# We're interested in all health related sectors. First ask for all sectors
url = "http://cidp.herokuapp.com/cube/cida/aggregate?drilldown=sector_name"

# file = open('facts.json', 'r')
# json_data = json.load(file)
# list_titles = ['Water, Sanitation and Hygiene for Southern Mali', 'Improving Nutrition through Homestead Food Production']


petl_data = fromjson(url)
print look(petl_data)


# Need to build a list of health sector names, and then print out aggregate info for each sector
# list_of_projects = [(c['sector_name'],c['record_count'],c['amount_spent_sum']) for c in json_data['cells'] if 'ealth' in c['sector_name']]

# for project in list_of_projects:
    # print project