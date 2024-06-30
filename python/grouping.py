def print_groupings(groupings) :
  print("\n")
  for n in range (0, 6):
    print(f"Group {n + 1}: ", groupings[n])
  print("\n ")

def main(x = 1, listing = True) :
  groupings = [[], [], [], [], [], []]
  print("\nENTER: \n  ' 0 ' to end group \n  ' 1 ' to end list \n  ' 2 ' to start over \n ")

  for i in range (0, 6) :
    if listing :
      while len(groupings[i]) < 6 : 
        name = input(f"Enter name [{x} / max 36] : ")
        
        if name != "0" and name != "1" and name != "2":
          groupings[i].append(name)      
          x += 1

        else :
          if name == "0" :
            x = x + (6 - len(groupings[i]))
            break
          elif name == "1" :
            listing = False
            print_groupings(groupings)
            break
          else :
            groupings = [[], [], [], [], [], []]
            main(1, True)
    else : 
      break
  print_groupings(groupings)

main()