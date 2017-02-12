#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define MAX_NODE_NUM 100

void getInput(int *inputArray, const int INPUT_NUM);

int main(int argc, char const *argv[])
{
	int caseNum; // 1<=C<=100
	scanf("%d", &caseNum);

	int nodeNum; // 1<=N<=100

	int preordered[MAX_NODE_NUM];
	int inordered[MAX_NODE_NUM];

	while(caseNum--) {
		scanf("%d", &nodeNum);

		getInput(preordered, nodeNum);
		getInput(inordered, nodeNum);

// DEBUG
		for (int i = 0; i < nodeNum; ++i)
		{
			printf("%d\t", preordered[i]);
		}
		printf("HOHOHO\n");

		for (int i = 0; i < nodeNum; ++i)
		{
			printf("%d\t", inordered[i]);
		}
		printf("HAHAHA\n");
// DEBUG
	}

	return 0;
}

void getInput(int *inputArray, const int INPUT_NUM)
{
	for (int i = 0; i < INPUT_NUM; ++i)
	{
		scanf("%d", &inputArray[i]);
	}
}
