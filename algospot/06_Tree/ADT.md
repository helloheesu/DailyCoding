# 트리
## 구성 요소
* 트리는 1개 이상의 노드를 갖는 집합이다.
* 트리의 노드는 서로 간선(edge)으로 이어져 있으며, 노드 간에는 상하 관계가 있다.
* (상대적으로) 상위 노드는 부모(parent), 하위 노드는 자식(child)이라 부른다.
* 부모 노드가 같은 두 노드는 형제(sibling)라고 부른다.
* 부모 노드와 그의 부모들을 선조(ascendant)라고 부른다.
* 자식 노드와 그의 자식들을 자손(descendant)이라고 부른다.
* 최상위 노드(다른 모든 노드들을 자손으로 갖는 노드)를 루트(root)라고 부른다.
* 최하위 노드(자식이 하나도 없는 노드)를 리프(leaf)라고 부른다.
* 리프 노드를 제외한 모든 노드를 내부 노드(internal node)라고 한다.

## 노드의 속성
* 루트에서 어떤 노드에 도달하기 위해 거쳐야 하는 간선의 수를 해당 노드의 깊이(depth)라고 한다.
* 트리에서 가장 깊숙히 있는 노트의 깊이를 해당 트리의 높이(height)라고 한다.
* 노드의 자식 개수를 해당 노드의 차수(degree)라고 한다.

## 재귀적 속성과 정의
* 트리가 매우 유용하게 쓰이는 이유 중 하나가 트리의 재귀적 성질이다.
* 트리에서 한 노드와 그의 자식들을 모으면 그들도 또 하나의 트리가 된다.
* 어떤 노드 t와 그 자손들로 구성된 트리를 't를 루트로 하는 서브트리(subtree)'라고 한다.
* 트리는 비어있거나 1개 이상의 노드를 갖는 집합으로 노드들은 다음과 같은 조건을 만족한다.
	* 노드는 ...
	* 트리에는 루트(root)라고 부르는 특별한 노드가 있다.
	* 다른 노드들은 원소가 중복되지 않는 n개의 부속 트리 (subtree) T1, T2,···, Tn으로 나누어지며 Ti 각각은 루트의 부속 트리라고 부른다.
	* 트리는 사이클이 없는 그래프 (acyclic graph)이며 계층 구조를 이룬다.