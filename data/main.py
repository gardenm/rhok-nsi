import json
import urllib2
from pprint import pprint 

from petl import *


petl_data = fromjson('facts.json')

dicta = petl_data[1]




