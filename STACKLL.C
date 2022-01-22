#include<stdio.h>
#include<stdlib.h>
#include<conio.h>
struct node
{
int data;
struct node *link;
};
struct node *top=NULL;
void push();
void pop();
void traverse();
void main()
{
int ch,a;
clrscr();
	while(1)
	{
	printf("1.push \n");
	printf("2.pop \n");
	printf("3.traverse \n");
	printf("4.Quit \n");
	printf("enter your choice \n");
	scanf("%d",&ch);
		switch(ch)
		{
		case 1: push();
			break;
		case 2: pop();

		break;
		case 3: traverse();
			break;
		case 4: exit(1);
		default: printf("invalid choice");
		}
	}
}

 void push()
  {
  struct node *temp;
  temp=(struct node *)malloc(sizeof(struct node));
  printf("enter data into node\n");
  scanf("%d",&temp->data);
  temp->link=top;
  top=temp;
  }
  void pop()
  {
  struct node *temp;
  temp=(struct node *)malloc(sizeof(struct node));
   if(top==NULL)
   {
   printf("stack is empty\n");
   }

   else
   {
   temp=top;
   top=temp->link;
   temp->link=NULL;

   printf("poped element is %d\n",temp->data);

  }
  }
  void traverse()
  {
  struct node *temp;
  if(top==NULL)
  printf("stack is empty");
  else
   {
   temp=top;
  while(temp!=NULL)
   {
    printf("%d--",temp->data);
    temp=temp->link;
   }
   }
   printf("\n");

  }



