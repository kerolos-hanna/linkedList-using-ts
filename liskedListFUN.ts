class ListNode<T> {
  public element: T;
  public next: ListNode<T> | null;

  constructor(element: T) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList<T> {
  private head: ListNode<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  /*push method*/
  push(value: T): boolean {
    const newNode = new ListNode<T>(value);
    if (!this.head) {
      this.head = newNode;
      this.size++;
      return true;
    }

    // if there are already nodes present
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.size++;
    return true;
  }

  /*pop method*/
  pop(): boolean {
    //*if the liskedList is empty
    if (!this.head) return false;
    //*if the linkedList has a value
    if (this.size === 1) {
      this.head = null;
      this.size--;
      return true;
    }
    let current = this.head;
    let prevNode = null;
    while (current.next) {
      prevNode = current;
      current = current.next;
    }
    prevNode.next = null;
    this.size--;
    return true;
  }

  /*insertAt(value: T, index: number): boolean*/
  insertAt(value: T, index: number): boolean {
    if (index < 0 || index > this.size - 1)
      throw new Error("index is bigger than the size of the linkedList");
    else {
      const newNode = new ListNode<T>(value);
      let i = 0;
      let current = this.head;
      let prevNode = null;
      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
        return true;
      }
      while (i <= index) {
        i++;
        prevNode = current;
        current = current.next;
      }
      prevNode.next = newNode;
      newNode.next = current;
      this.size++;
      return true;
    }
  }

  /*removeAt */
  removeAt(index: number): boolean {
    if (index < 0 || index > this.size - 1)
      throw new Error("index is bigger than the size of the linkedList");
    else {
      if (index === 0) {
        this.head = this.head.next;
        return true;
      }
      let current = this.head;
      let prevNode = null;
      let i = 0;
      while (i < index) {
        i++;
        prevNode = current;
        current = current.next;
      }
      prevNode.next = current.next;
      this.size--;
      return true;
    }
  }

  /*print the linkedList*/
  toString(): string {
    let current: ListNode<T> = this.head;
    let result: string = "";
    while (current) {
      result += JSON.stringify(current);
      result += "\n";
      current = current.next;
    }
    return result;
  }

  /*clear the linkedList*/
  clear(): void {
    this.head = null;
  }
}

const linkedList = new LinkedList<number>();
// linkedList.push(5);
console.log("pop: ", linkedList.pop());
console.log("linkedList.push(5);", linkedList.push(5));
// linkedList.push(10);
console.log("linkedList.push(10);", linkedList.push(10));
linkedList.push(22);
linkedList.push(55);
let result = linkedList.toString();
console.log("linkedList", result);
linkedList.insertAt(1000, 0);
result = linkedList.toString();
console.log("linkedList", result);
linkedList.removeAt(1);
result = linkedList.toString();
console.log("linkedList", result);
