# Example of how to use Worldbank API

import json
import urllib2
import simplejson
import ast

# grab mortality rates from worldbank api
# per_page displays how many data points per json request.
# see http://data.worldbank.org/node/11
url_gdp = "http://api.worldbank.org/countries/all/indicators/SH.STA.MMRT.NE?format=json&date=2010:2010&per_page=9999"
response = urllib2.urlopen(url_gdp)
data = json.load(response)
_COUNTRY_KEY = 'country'
_VALUE_KEY = 'value'
    
country_mortality = {}
for c in data[1]:
    _MORTALITY_KEY =  c[_COUNTRY_KEY].keys()[1]
    country_value = c[_COUNTRY_KEY][_MORTALITY_KEY]
    mortality =  c[_VALUE_KEY]
    if not mortality is None:
        country_mortality[country_value] = mortality
    

for country in country_mortality:
    print country, country_mortality[country]
