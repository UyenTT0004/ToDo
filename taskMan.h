//author by To Uyen Tran
#ifndef TASKMAN_H
#define TASKMAN_H

#include "task.h"
#include <iostream>
#include <string>
#include <vector>

#define DONE 1
#define UNDONE 0
using namespace std;

//edit feature
/*
int findTask(vector <task> &taskList, string oldName, string oldTime, string oldDate);
bool editTask(vector <task> &taskList, task &newTask, int oldTask);
*/

// for sort option
void swapTask(vector <task> &taskList, int a, int b);
void sortByTime(vector <task> &taskList);
//void sortByName(vector <task> &taskList);
// display for testing
// void displayTaskList (vector <task> &taskList);



#endif