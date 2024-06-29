#include <iostream>

using namespace std;

string arr[36] = { " * ", " * ", " * ", " * ", " * ", " G1 end ", " * ", " * ", " * ", " * ", " * ", " G2 end ", " * ", " * ", " * ", " * ", " * ", " G3 end ", " * ", " * ", " * ", " * ", " * ", " G4 end ", " * ", " * ", " * ", " * ", " * ", " G5 end ", " * ", " * ", " * ", " * ", " * ", " G6 end " };

string groupings[6][6];

int main () {
  
  int n = 0;

  for (int i = 0; i < 6; i++){
    for (int x = 0; x < 6; x++) {
      groupings[i][x] = arr[n];
      cout << groupings[i][x];
      n++;
    }
    cout << endl;
  }

  return 0;
}

