class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value)

        if(!this.head) {
            this.head = newNode
            return
        }

        let current = this.head

        while(current.nextNode) {
            current = current.nextNode;
        }

        current.nextNode = newNode;
    }

    prepend(value) {
        const newNode = new Node(value)


        if(!this.head) {
            this.head = newNode
            return
        }

        let oldNode = this.head
        newNode.nextNode = oldNode
        this.head = newNode
       
       
        
    }

    size() {
        let sizeofNodes = 0
        if (!this.head) {
            console.log(sizeofNodes);
            return
        }
        let current = this.head
       
        while(current) {
            sizeofNodes += 1
            current = current.nextNode;
        }
       console.log(sizeofNodes)
       
    }

   getHead() {
    if(!this.head) {
        console.log("list is empty")
        return 
    }
    console.log(this.head)
   }

   getTail() {
    if(!this.head) {
        console.log("list is empty")
        return 
    }

    let current = this.head

    while(current) {
        if (!current.nextNode) {
            console.log(current)
            return
        }
        current = current.nextNode
        
    }


   }

   at(index) {
    if(!this.head) {
        console.log("list is empty")
        return 
    }
     let sum = 0
     let current = this.head
     while(current) {
        
        if (sum == index) {
            console.log(current)
            return
        }
        sum += 1
        current = current.nextNode
     }
     return false
   }

   pop() {
    if(!this.head) {
        console.log("list is empty")
        return 
    }
    let current = this.head

    while(current) {
        let nextCurrent = current.nextNode
        if (!nextCurrent.nextNode) {
            current.nextNode = null;
            return
        }
        current = current.nextNode

    }
   }
   contains(value) {
    if(!this.head) {
        console.log("list is empty")
        return 
    }
    let current = this.head

    while(current) {
        if (value == current.value) {
            console.log(`${value} is inside the list`)
            return true
        }
        
        current = current.nextNode
    }
    console.log(`${value} is not inside the list`)
    return false
   }

   find(value) {
    if(!this.head) {
        console.log("list is empty")
        return 
    }
    let current = this.head
    let index = 0;
    while(current) {
        if (value == current.value) {
            console.log(`${value} is at index: ${index}`)
            return 
        }
        index += 1
        current = current.nextNode
    }

    console.log(`${value} is not in the list`)
   }

   toString() {
    let result = "";
    let current = this.head;

    while (current) {
        result += `(${current.value}) -> `;
        current = current.nextNode;
    }

    result += "null";
    console.log(result);
}

insertAt(value, index) {
    if(this.at(index) == false ) {
        console.log("index too big")
        return
    }

    let current = this.head
    const newNode = new Node(value)
    let sumIndex = 0
    let oldNode;
    while(sumIndex < index) {
        sumIndex += 1
        oldNode = current
        
        current = current.nextNode
    }
    oldNode.nextNode = newNode
    newNode.nextNode = current
}

removeAt(index) {
    if(this.at(index) == false ) {
        console.log("index too big")
        return
    }

    let current = this.head
    let currentIndex = 0
    let oldNode;
    while (currentIndex < index ) {
        currentIndex += 1
        oldNode = current
        current = current.nextNode
    }

    oldNode.nextNode = current.nextNode
    
}


    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.nextNode;
        }
    }
}

class Node {
    constructor(value, nextNode = null) {
    this.value = value
    this.nextNode = nextNode
    }
}

myLinkedList = new LinkedList()
myLinkedList.prepend(1)
myLinkedList.append(2)
myLinkedList.append(3)
myLinkedList.append(4)
myLinkedList.append(5)
myLinkedList.append(6)
myLinkedList.append(7)
myLinkedList.contains(4)
myLinkedList.contains(11)
myLinkedList.find(1)
myLinkedList.insertAt(2, 3)
myLinkedList.removeAt(5)
myLinkedList.toString()



