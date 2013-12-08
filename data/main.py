import json
import urllib2
from pprint import pprint 

from petl import *

# We're interested in all health related sectors. First ask for all sectors
url = "http://cidp.herokuapp.com/cube/cida/aggregate?drilldown=sector_name"


data = json.load(urllib2.urlopen(url))
# Need to build a list of health sector names, and then print out aggregate info for each sector
list_projects =  [(c['sector_name'],c['record_count'],c['amount_spent_sum']) for c in data['cells'] if 'ealth' in c['sector_name']]

for project in list_projects:
    print project
