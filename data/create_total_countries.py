import pickle

file = open('data_dump.txt', 'r')
list_of_projects = pickle.load(file)

total_funding = {}

for project in list_of_projects:
    country = project['country_region_name']
    if country not in total_funding:
        total_funding[country] = [project['amount_spent'], project['maximum_cida_contribution']]
    else:
        
        total_funding[country][0] = total_funding[country][0] + project['amount_spent']
        total_funding[country][1] = total_funding[country][1] + project['maximum_cida_contribution']

print total_funding