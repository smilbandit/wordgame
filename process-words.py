import json
import sys  
import os

words = {}
longest = 0
longword = ""

def main():  
  global longest, longword
  filepath = "dict/engmix.txt"

  if not os.path.isfile(filepath):
    print("File path {} does not exist. Exiting...".format(filepath))
    sys.exit()

  with open(filepath) as fp:
    cnt = 0
    for line in fp:
      word = line.strip()
      l = len(word)
      if l in words:
        words[l].append(word)
      else:
        words[l] = []
        words[l].append(word)
      cnt += 1

if __name__ == '__main__':  
  main()
  print(json.dumps(words))