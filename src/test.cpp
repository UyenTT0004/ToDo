#include <iostream>
#include <string>
#include <vector>
#include "task.h"
#include "user.h"

using namespace std;

int main(){

    user newuser;
    string edit,delT,newD;
    newuser.setName("user1");
    newuser.setPass("pass");
    for (int i =0; i<5;i++)
    {
    string input1, input;
    int input2=0;
    cout<< "\ninput task name: ";
    getline(cin,input1);
    //cout<< "\ninput task Time: ";
    //cin>> input2;
    cout<< "\ninput Des: ";
    //cin.ignore();
    getline(cin,input);
    newuser.addTask(input1,input,input2);
    }
    newuser.displayTask();
    //cout <<"TEST1\n\n\n";
    //newuser.sortByTime();
    cout<<"TEST2:::\n";
    //newuser.displayTask();
    //newuser.sortByName();
    //newuser.displayTask();

    cout<<"Delete: ";
    getline(cin,delT);
    if (newuser.deleteTask(delT))
    {cout<<"\nSuccess!\n";
    newuser.displayTask();
    }
    else {cout << "DEl fail!\n";}
    cout <<"\nEdit: ";
    //cin.ignore();
    getline(cin,edit);
    cout << "new data: ";
    getline(cin,newD);
    newuser.editTask(edit,"title",newD);
    cout <<"Edit Done!";
    newuser.displayTask();
    return 0;
}