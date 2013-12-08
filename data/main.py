import json
import urllib2
from pprint import pprint 

from petl import *

# We're interested in all health related sectors. First ask for all sectors
url = "http://cidp.herokuapp.com/cube/cida/facts"

petl_data = fromjson(url)
print type(petl_data)
print look(petl_data)

#url_id = "https://raw.github.com/gardenm/rhok-nsi/master/data/mnhc.ids"
#idList = []
#for line in urllib2.urlopen(url_id):
#    idList.append(line[:-2])
#print idList

listofcountry = []
for c in petl_data['country_region_name']:
    listofcountry.append(c)

listofcountryset = set(listofcountry)
for c in listofcountryset:
    print c
    
# grab mortality rates
url_gdp = "http://api.worldbank.org/countries/all/indicators/SH.STA.MMRT.NE?format=json&date=2010:2012&per_page=9999"
response = urllib2.urlopen(url_gdp)
data = json.load(response)
print data




# Need to build a list of health sector names, and then print out aggregate info for each sector
# list_of_projects = [(c['sector_name'],c['record_count'],c['amount_spent_sum']) for c in json_data['cells'] if 'ealth' in c['sector_name']]

# for project in list_of_projects:
    # print project