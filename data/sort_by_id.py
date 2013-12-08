import json
import urllib2
from pprint import pprint 
from petl import *
import sys
from collections import defaultdict

f = open('mnhc.txt')
base_url = 'http://cidp.herokuapp.com/cube/cida/facts?cut=project_number:'
bads = ['Africa MC','Americas MC','Asia MC','Europe MC']
rename={'Afghanistan TIS':'Afghanistan',
        'Tanzania,Un Rep':'Tanzania',
        'Lao, Dem. Rep':'Lao'}
dat = {}
file = open('../www/public/data/realdata.json', 'w')
for id in f:
    project_data = json.load(urllib2.urlopen(base_url + id))
    print base_url + id
    for p in project_data:
      
        if p['country_region_name'] not in bads:
            dat[p['country_region_name']] = {'max':int(round(p['maximum_cida_contribution'])),
                                            'spent':int(round(p['amount_spent']))}
        
file.write(json.dumps(dat))
file.close()
