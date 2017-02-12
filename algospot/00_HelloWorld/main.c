#include <stdio.h>
int main(int argc, char const *argv[])
{
	int caseNum;
	char name[51];

	scanf("%d", &caseNum);

	while(caseNum--) {
		scanf("%s", name);
		printf("Hello, %s!\n", name);
	}

	return 0;
}