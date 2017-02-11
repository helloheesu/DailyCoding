describe('21. 트리의 구현과 순회', function() {
	describe('이진 트리 : 자료 구조 정의', function() {
		describe('노드는,', function() {
			it('처음 생성하면 비어있다.', function() {
				// given
				var node = new Node();

				// when

				// then
				expect(node.value).to.be.eql(null);
			});

			it('값을 가질 수 있다.', function() {
				// given
				var node = new Node(3);

				// when

				// then
				expect(node.value).to.be.eql(3);
			});

			it('값을 바꿀 수 있다.', function() {
				// given
				var node = new Node(3);

				// when
				node.value = 7;

				// then
				expect(node.value).to.be.eql(7);
			});

			it('자식을 가질 수 있다.', function() {
				// given
				var node = new Node(3);

				// when
				node.leftChild = new Node(7);

				// then
				expect(node.leftChild.value).to.be.eql(7);
			});
		});

		describe('트리는,', function() {
			it('트리는 1개 이상의 노드를 가진다.', function() {
				// given

				// when
				var tree = new Tree();

				// then
				expect(tree.root instanceof Node).to.be.true;
			});

			it('루트가 아닌 자식노드 R을 루트로 가지는 서브트리를 정의할 수 있다.', function() {
				// given
				var root = new Node(3);
				root.leftChild = new Node();
				var tree = new Tree(root);

				// when
				var subtree = new Tree(tree.root.leftChild);

				// then
				expect(subtree instanceof Tree).to.be.true;
				expect(subtree.root instanceof Node).to.be.true;
			});
		});

		describe('전위 순회', function() {
			describe('트리 높이가 1 이하 - 트리의 루트가 다음과 같을 때 전위 순회를 할 수 있다.', function() {
				it('루트가 값이 없는 단일 노드(V)일 때 전위 순회 결과는 []이다.', function() {
					// given
					var tree = new Tree();

					// when

					// then
					expect(tree.getPreordered()).to.be.eql([]);
				});

				it('루트가 값이 3인 단일 노드(V)일 때 전위 순회 결과는 [3(V)]이다.', function() {
					// given
					var tree = new Tree();
					tree.root = new Node(3);

					// when

					// then
					expect(tree.getPreordered()).to.be.eql([3]);
				});

				it('루트의 값은 3(V), 왼쪽 자식의 값은 7(L)일 때 전위 순회 결과는 [3(V), 7(L)]이다.', function() {
					// given
					var tree = new Tree();
					tree.root = new Node(3);
					tree.root.leftChild = new Node(7);

					// when

					// then
					expect(tree.getPreordered()).to.be.eql([3, 7]);
				});

				it('루트의 값은 3(V), 오른쪽 자식의 값은 7(R)일 때 전위 순회 결과는 [3(V), 7(R)]이다.', function() {
					// given
					var tree = new Tree();
					tree.root = new Node(3);
					tree.root.rightChild = new Node(7);

					// when

					// then
					expect(tree.getPreordered()).to.be.eql([3, 7]);
				});

				it('루트의 값은 3(V), 왼쪽 자식의 값은 7(L), 오른쪽 자식의 값은 10(R)일 때 전위 순회 결과는 [3(V), 7(L), 10(R)]이다.', function() {
					// given
					var tree = new Tree();
					tree.root = new Node(3);
					tree.root.leftChild = new Node(7);
					tree.root.rightChild = new Node(10);

					// when

					// then
					expect(tree.getPreordered()).to.be.eql([3, 7, 10]);
				});
			});

			describe('서브트리도 전위 순회를 할 수 있다.', function() {
				it('값이 없는 자식노드 R을 루트로 가지는 서브트리의 전위 순회 결과는 []이다.', function() {
					// given
					var root = new Node(3);
					root.leftChild = new Node();
					var tree = new Tree(root);

					// when
					var subtree = new Tree(tree.root.leftChild);

					// then
					expect(subtree.getPreordered()).to.be.an('array');
				});

				it('값이 7인 자식노드 R을 루트로 가지는 서브트리의 전위 순회 결과는 [7]이다.', function() {
					// given
					var root = new Node(3);
					root.leftChild = new Node(7);
					var tree = new Tree(root);

					// when
					var subtree = new Tree(tree.root.leftChild);

					// then
					expect(subtree.getPreordered()).to.be.eql([7]);
				});
			});

			xdescribe('루트가 29이고 왼쪽 서브트리가 다음과 같을 때, 서브트리의 전위 순회 결과와 합쳐서 보여줄 수 있다.', function() {
				beforeEach(function() {
				});
				afterEach(function() {
				});

				// it('왼쪽 자식이 7이고 루트가 3인 서브트리의 전위')
			});
		});

		describe('트리가 주어지면 중위 순회할 수 있다.', function() {
			it('트리', function() {
				// 
			});
		});

		describe('트리가 주어지면 후위 순회할 수 있다.', function() {
			it('트리', function() {
				// 
			});
		});
	});

	// describe('21.3 트리 순회 순서 변경', function() {
	// 	it('it', function() {
	// 		// given
	// 		var preorder = [];
	// 		var inorder = [];
	// 		// when
	// 		// then
	// 		expect().be.eql();
	// 	});
	// });
});
