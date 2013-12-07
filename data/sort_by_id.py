import json
import urllib2
from pprint import pprint 
from petl import *
import pickle

base_url = 'http://cidp.herokuapp.com/cube/cida/facts?cut=project_number:'

desired_id = fromtext('mnhc.txt')
list_of_ids = []

for id in desired_id:
    list_of_ids.append(id[0])

list_of_projects = []
for id in list_of_ids:
    
    url = base_url + id
    
    project_data = json.load(urllib2.urlopen(url))
    # Need to build a list of health sector names, and then print out aggregate info for each sector
    for project in project_data:
        list_of_projects.append(project)

file = open('data_dump.txt', 'w')
pickle.dump(list_of_projects, file)
file.close()
print len(list_of_projects[1])

