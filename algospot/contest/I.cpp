#include <stdio.h>
#include <string.h>
#include <string>
#include <iostream>
#include <map>
#include <stack>
#include <tuple>

#define MAX_RESULT_LEN 100
#define MAX_REST_LEN 100
#define VALUE_CHANGED -1

int main(int argc, char const *argv[])
{
	int ingredientNum; // (1 ≤ M ≤ 100
	std::map<std::string, int> ingredients;

	std::cin >> ingredientNum;
	std::string changedIngredientName;

	while(ingredientNum--) {
		std::string name;
		std::string scale;
		int amount;

		std::cin >> amount >> scale >> name;
		ingredients.insert(std::pair<std::string, int>(name, amount));
	}

	int instructionNum; // 1 ≤ N ≤ 10000

	std::cin >> instructionNum;
	std::stack< std::pair<int, int> > result;
	char expected[MAX_RESULT_LEN];

	int guessedNum = 0;
	bool isGuessed = false;

	while(instructionNum--) {
		char instruction[20];
		char rest[MAX_REST_LEN];
		std::string ingredient;
		std::cin >> instruction;

		if(strcmp(instruction, "Take") == 0) {
			std::cin >> ingredient;
			std::cin.getline(rest, MAX_REST_LEN);

			ingredients[ingredient] = VALUE_CHANGED;
			changedIngredientName.assign(ingredient);
		} else if(strcmp(instruction, "Put") == 0) {
			std::cin >> ingredient;
			std::cin.getline(rest, MAX_REST_LEN);

			int num = ingredients[ingredient];
			if (num == VALUE_CHANGED) {
				result.push(std::make_pair(0, 1));
			} else {
				result.push(std::make_pair(ingredients[ingredient], 0));
			}
		} else if(strcmp(instruction, "Add") == 0) {
			std::cin >> ingredient;
			ingredient.pop_back();

			int num = ingredients[ingredient];
			if (num == VALUE_CHANGED) {
				result.top().second++;
			} else {
				result.top().first += num;
			}
		} else if(strcmp(instruction, "Remove") == 0) {
			std::cin >> ingredient;
			ingredient.pop_back();

			int num = ingredients[ingredient];
			if (num == VALUE_CHANGED) {
				result.top().second--;
			} else {
				result.top().first -= num;
			}
		} else if(strcmp(instruction, "Pour") == 0) {
			std::cin.getline(rest, MAX_REST_LEN);
			std::cin.getline(expected, MAX_RESULT_LEN);

			for (int i = 0, len = strlen(expected); i < len; ++i)
			{
				if (result.empty()) {
					std::cout << "This " << changedIngredientName << " is so undercooked!\n";
					return 0;
				}

				int expectedNum = (int)expected[i];
				std::pair<int, int> actual = result.top();
				result.pop();

				int actualNum;
				int restNum = actual.first;
				int times = actual.second;
				if (times <= 0) {
					actualNum = restNum;
				} else {
					if (isGuessed == true) {
						actualNum = restNum + times * guessedNum;
					} else {
						guessedNum = (expectedNum - restNum) / (double)times;
						if ((int)guessedNum != guessedNum) {
							std::cout << "This " << changedIngredientName << " is so undercooked!\n";
							return 0;
						}
						isGuessed = true;
						continue;
					}
				}
				if (expectedNum != actualNum) {
					std::cout << "This " << changedIngredientName << " is so undercooked!\n";
					return 0;
				}
			}
		}
	}

	if (!result.empty()) {
		std::cout << "This " << changedIngredientName << " is so undercooked!\n";
		return 0;
	}

	std::cout << guessedNum << std::endl;

	return 0;
}
