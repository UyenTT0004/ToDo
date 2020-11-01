#include "taskMan.h"
using namespace std;


void swapTask (vector<task> &taskList, int a, int b)
{
    string tempName =taskList[a].getName();
    string tempDate =taskList[a].getDate();
    string tempDes =taskList[a].getDes();
    int tempTime=taskList[a].getTime();
    int tempStatus;
    if(taskList[a].getStatus())
    {tempStatus =DONE;}
    else{tempStatus=UNDONE;}

    taskList[a].setName(taskList[b].getName());
    taskList[a].setDate(taskList[b].getDate());
    taskList[a].setDes(taskList[b].getDes());
    taskList[a].setTime(taskList[b].getTime());
    if(taskList[b].getStatus()){taskList[a].setStatus(DONE);}
    else{taskList[a].setStatus(UNDONE);}

    taskList[b].setName(tempName);
    taskList[b].setDate(tempDate);
    taskList[b].setDes(tempDes);
    taskList[b].setTime(tempTime);
    taskList[b].setStatus(tempStatus);

}
void sortByTime(vector <task> &taskList)
{
    int i, j, key;
    int tempTotalTask=taskList.size()-1;
    for(i=1;i<tempTotalTask;i++)
    {
        key = taskList[i].getTime();
        j=i-1;
        while(j>=0 && taskList[j].getTime()>key)
        {
            swapTask(taskList,j,j+1);
               j=j-1;
        }
        key=taskList[j+1].getTime();
    }
}
