#include<stdio.h>
#include<conio.h>
void main()
{
	int i,j=0,k,l,m;
	printf("ENter the three digits number ");
	scanf("%d",&k);
	l=k;
	while(l>0)
	{
		m=l%10;
		j=j+(m*m*m);
		l=l/10;
	}
	if(j==k)
	printf(" number is armstrong");
	else
	printf(" not armstrong");
	getch();
}
