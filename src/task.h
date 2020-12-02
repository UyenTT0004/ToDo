//Author: To Uyen Tran
#ifndef TASK_H
#define TASK_H

#include <iostream>
#include <string>

#define DONE 1
#define UNDONE 0
using namespace std;

class task {
private:

string title;
bool status;
string date;
int time;
string description;


public:
task(); //default contructor

void setTitle(string inputTitle);
void setStatus(int curStatus);
void setDate(string inputDate);
void setTime(int inputTime);
void setDes(string inputDes);

string getTitle();
bool getStatus();
string getDate();
int getTime();
string getDes();

};

#endif
