describe('21. 트리의 구현과 순회', function() {
	// beforeEach(function() {
	// });
	// afterEach(function() {
	// });

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
			it('처음 생성하면 비어있다.', function() {
				// given
				var tree = new Tree();

				// when

				// then
				expect(tree.root).to.be.eql(null);
			});

			it('트리는 빈 노드를 루트로 가질 수 있다.', function() {
				// given
				var tree = new Tree();

				// when
				var emptyNode = new Node();
				tree.root = emptyNode;

				// then
				expect(tree.root).to.be.eql(emptyNode);
			});

			it('값을 가지는 노드를 루트로 가질 수 있다.', function() {
				// given
				var tree = new Tree();
				var node = new Node(3);

				// when
				tree.root = node;

				// then
				expect(tree.root.value).to.be.eql(3);
			});
		});

		describe('트리가 주어지면 전위 순회할 수 있다.', function() {
			it('단일 노드(V)가 주어지면 전위 순회 결과는 V이다.', function() {
				// 
			});

			it('왼쪽 자식(L)만 있는 노드(V)가 주어지면 전위 순회 결과는 VL이다.', function() {
				// 
			});

			it('오른쪽 자식(R)만 있는 노드(V)가 주어지면 전위 순회 결과는 VR이다.', function() {
				// 
			});

			it('양쪽 자식이 모두(L, R)만 있는 노드(V)가 주어지면 전위 순회 결과는 VLR이다.', function() {
				// 
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
