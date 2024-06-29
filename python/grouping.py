arr = [ " * ", " * ", " * ", " * ", " * ", "G1 end", " * ", " * ", " * ", " * ", " * ", "G2 end", " * ", " * ", " * ", " * ", " * ", "G3 end", " * ", " * ", " * ", " * ", " * ", "G4 end", " * ", " * ", " * ", " * ", " * ", "G5 end", " * ", " * ", " * ", " * ", " * ", "G6 end" ]

groupings = [[], [], [], [], [], []]
x = 0

for i in range (0, 6) :

  while len(groupings[i]) < 6 :
      
      try:
        groupings[i].append(arr[x])
        x += 1

      except:
        break

  print(f"Group {i+1}: ", groupings[i])