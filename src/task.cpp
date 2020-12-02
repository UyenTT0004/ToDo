#include "task.h"
using namespace std;

task::task() {
    title="null";
    status= false;
    date="null";
    time=-1;
    description="null";
};

//setter
void task::setTitle( string inputTitle)
{
    title=inputTitle;
    return;
}

void task::setStatus (int curStatus)
{
    if(curStatus==DONE)
    {status=true;}
    else if(curStatus==UNDONE)
    {status=false;}
    return;
}

void task::setDate(string inputDate)
{
    date=inputDate;
    return;
}
void task::setTime(int inputTime)
{
time=inputTime;
return;
}
void task::setDes(string inputDes)
{
    description=inputDes;
    return;
}

//getter

string task::getTitle()
{
    return title;
}

bool task::getStatus ()
{
    return status;
}

int task::getTime()
{
    return time;
}

string task::getDate()
{
    return date;
}

string task::getDes()
{
    return description;
}
