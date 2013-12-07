import pickle

file = open('data_dump.txt', 'r')
dict = pickle.load(file)

random_dict = dict[1]
print random_dict['amount_spent']