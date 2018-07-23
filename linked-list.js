function LinkList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

LinkList.prototype.addToHead = function(value) {
    var newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode
    else this.tail = newNode
    this.head = newNode
}

LinkList.prototype.addToTail = function(value) {
    var newNode = new Node(value, null, this.tail);
    if(this.tail) this.tail.next = newNode
    else this.head = newNode
    this.tail = newNode;
}

LinkList.prototype.removeHead = function() {
    if(!this.head) return null;
    var val = this.head.value;
    this.head = this.head.next;
    if(this.head) this.head.prev = null;
    else this.tail = null
    return val;
}

LinkList.prototype.removeTail = function() {
    if(!this.tail) return null;
    var val = this.tail.value;
    this.tail = this.tail.prev;
    if(this.tail) this.tail.next = null
    else this.tail = null
    return val;
}

LinkList.prototype.search = function(searchValue) {
    var currentNode = this.head;
    while (currentNode) {
        if(currentNode.value === searchValue) return currentNode.value;
        currentNode = currentNode.next
    }

    return null;
}

LinkList.prototype.indexOf = function(value) {
    var indexes = [];
    var currentNode = this.head;
    var i = 0;
    while (currentNode) {
        if(currentNode.value === value) indexes.push(i)
        currentNode = currentNode.next;
        i++;
    }

    return indexes;
}

var ll = new LinkList();

ll.addToHead(1000)
ll.addToHead(2000)
ll.addToHead(2000)
ll.addToHead(2000)
ll.addToTail(3000)
ll.addToTail(2000)

console.log(ll.search(2000))
console.log(ll.indexOf(2000))