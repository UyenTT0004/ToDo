//author by To Uyen Tran
#ifndef USER_H
#define USER_H

#include "task.h"
#include <iostream>
#include <string>
#include <vector>
#include <cctype>
#include <cstdio>
#include <bits/stdc++.h>

using namespace std;

class user {
private:
int id;
string name;
string pass;
vector <task> taskList;

public:
user(); //default contructor
//setter for user
void setId(int id);
void setName(string name);
void setPass(string pass);
//getter for user
int getId();
string getName();
string getPass();
vector <task> getTList();

//edit feature
// add task will be modify later
void addTask(string title,string description,int time);
bool deleteTask(string title);
// datatype is title/desciption/date/time
bool editTask(string oldTitle, string datatype,string data );

// for sort option
void swapTask(int a, int b); //helpper
void sortByTime();
void sortByName();
// display for testing
void displayTask();

};

#endif