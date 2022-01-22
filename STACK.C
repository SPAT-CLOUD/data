#include<stdio.h>
#include<conio.h>
#define size 5
int stack[size],top=-1;
void push(int);
int pop();
void traverse();
void peek();
void main()
{
int ch,data;
clrscr();
while(1)
  {
  printf("1.push\n");
  printf("2.pop\n");
  printf("3.traverse \n");
  printf("4.peek\n");
  printf("5.exit\n");
  printf("enter choice\n");
  scanf("%d",&ch);
	switch(ch)
	{
	 case 1:  printf("enter data into stack\n");
		scanf("%d",&data);
		push(data);
		break;
	 case 2: data=pop();
		if(data==0)
		printf("stack is underflow\n");
		else
		printf("the poped element is %d\n ",data);
		break;
	 case 3: traverse();
	 break;
	 case 4: peek();
	 break;
	 case 5: exit(1);
		 break;
	 default:
	   printf("invalid choice\n");
	}
  }
 }
 void push(int ele)
 {
  if(isFull())
   {
   printf("stack overflow!!!\n");
   }
  else
   {
   top++;
   stack[top]=ele;
   }
 }
 int pop()
 {
 if(isEmpty())
   {
   return 0;
   }
 else
   {
   return stack[top--];
 //  --top;

   }
 }
 void traverse()
 {
 int i;
 if(top==-1)
 {
 printf("\nno elements to display in the stack\n");
 }
 else
 {
 printf("the elements in the stack are; \n");
 for(i=0;i<=top;i++)
   {
   printf("%d ",stack[i]);
   }
   printf("\n");
 }
 }
 void peek()

 {
  if(isEmpty())
   {
   printf("stack is empty \n");
   }
  else
   {
   printf("the top element in the stack is %d \n",stack[top]);
   }
 }
 int isFull()
 {
  if(top==size-1)
  {
  return 1;
    }
    else
    return 0;
 }
int isEmpty()
{
if(top==-1)
    {
    return 1;
    }
    else
    return 0;
}