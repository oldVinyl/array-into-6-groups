#include <iostream>

using namespace std;

string groupings[6][6];
string name;
int n = 0;

void output_groups();

int main () {
  
  for (int i = 0; i < 6; i++){
    for (int x = 0; x < 6; x++) {

      cout << "Enter name [" << n + 1 << " / 36 max] (or ' 0 ' to end) : "; 
      cin >> name;

      if (name != "0") {
        groupings[i][x] = name;
        n++;
      } else {
        output_groups();
        break;
      }
    }
  }
  output_groups();
  return 0;
}

void output_groups () {
  cout << endl;
  for (int i = 0; i < 6; i++){
    cout << "Group " << i+1 << ": ";
    for (int x = 0; x < 6; x++) {
      string item = groupings[i][x];
      if (item != "0") {
        cout << " " << item << "  ";
      }
    }
    cout << endl;
  }
  cout << endl;
}

