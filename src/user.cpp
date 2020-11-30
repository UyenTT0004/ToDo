#include "user.h"
using namespace std;

user::user() {
    id=-1;
    name="null";
    pass ="null";
    vector <task> taskList;

};

//setter
void user::setId(int newid)
{id=newid;return;}
void user::setName(string newname)
{
    name =newname;
    return;
}
void user::setPass(string newpass)
{
    pass=newpass;
    return;
}
//getter
int user::getId()
{return id;}
string user::getName()
{
    return name;
}
string user::getPass()
{
    return pass;
}
vector <task> user::getTList()
{
    return taskList;
}
void user::addTask(string title, string description,int time)
{
    task newTask;
    // NEED MODIFY
    newTask.setTitle(title);
    newTask.setDes(description);
    if (time>0){newTask.setTime(time);}
    taskList.push_back(newTask);

}
bool user::deleteTask(string title)
{
    //NEED MODIFY
    bool result=false;
    int i=taskList.size();
    while(i>0&&result!=true)
    {
        if (title.compare(taskList[i].getTitle())==0)
        {taskList.erase(taskList.begin()+i-1);result=true;}
    }
    return result;
}
bool user::editTask (string oldTitle,string datatype, string data)
{
    bool result = false;
    int change;
    //check for correct edit
    transform(datatype.begin(),datatype.end(),datatype.begin(),::tolower);
    if (datatype.compare("title")==0) {change =1;}
    else if (datatype.compare("desciption")==0) {change =2;}
    else {return result;}
    // MODIFY LATER
    /*
    if (datatype.compare("date")==0)
    if (datatype.compare("time")==0)
    */
   int i=0;
    while (i<taskList.size()&& result!=true)
    {
        if (oldTitle.compare(taskList[i].getTitle())==0)
        {
            if (change==1) {taskList[i].setTitle(data);result = true;}
            else if (change==2) {taskList[i].setDes(data);result = true;}
        }
        i++;
    }
    return result;
}

void user::swapTask (int a, int b)
{
    string tempTitle =taskList[a].getTitle();
    string tempDate =taskList[a].getDate();
    string tempDes =taskList[a].getDes();
    int tempTime=taskList[a].getTime();
    int tempStatus;
    if(taskList[a].getStatus())
    {tempStatus =DONE;}
    else{tempStatus=UNDONE;}

    taskList[a].setTitle(taskList[b].getTitle());
    taskList[a].setDate(taskList[b].getDate());
    taskList[a].setDes(taskList[b].getDes());
    taskList[a].setTime(taskList[b].getTime());
    if(taskList[b].getStatus()){taskList[a].setStatus(DONE);}
    else{taskList[a].setStatus(UNDONE);}

    taskList[b].setTitle(tempTitle);
    taskList[b].setDate(tempDate);
    taskList[b].setDes(tempDes);
    taskList[b].setTime(tempTime);
    taskList[b].setStatus(tempStatus);

}
void user::sortByTime()
{
    int i, j;
    int tempTotalTask=taskList.size();
    for(i=0;i<tempTotalTask;i++)
    for (j=0;j<tempTotalTask-i-1;j++)
    {
        if (taskList[j].getTime()>taskList[j+1].getTime()){swapTask(j,j+1);}
    }
}
void user::sortByName()
{
    int i, j;
    string key;
    char key1,key2;
    int tempTotalTask=taskList.size();
    for(i=0;i<tempTotalTask;i++)
    for (j=0;j<tempTotalTask-i-1;j++)
        {
            key=taskList[j].getTitle();
            key1=tolower(key[0]);
            key=taskList[j+1].getTitle();
            key2=tolower(key[0]);
            if (key1>key2){swapTask(j,j+1);}
        }
}
void user::displayTask ()
{
    cout << "User: " << name;
    int size = taskList.size();
    for (int i=0;i<size;i++)
    {
    cout<< "\nTask name:" << taskList[i].getTitle();
    cout<< "\nDes: " << taskList[i].getDes();
    cout<< "\nTime: " <<taskList[i].getTime();
    if (taskList[i].getStatus()) {cout<< "\nStatus: DONE";}
    else {cout << "\nstatus: UNDONE\n\n";}
    }
    return;
}