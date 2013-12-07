import json

from pprint import pprint 

from petl import *


desired_id = fromtext('mnhc.txt')


petl_data = fromjson('facts.json')

desired_data = intersection(desired_id, petl_data)
print look (desired_data)

for d in petl_data:
    if (str(d[4]),) in desired_id:
        print 'id'


