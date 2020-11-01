#include "task.h"
using namespace std;

task::task() {
    name="null";
    status= false;
    date="null";
    time=-1;
    description="null";
};

//setter
void task::setName( string inputName)
{
    name=inputName;
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

string task::getName()
{
    return name;
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