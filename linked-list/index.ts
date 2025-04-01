export class Node<T> {
  public value: T;
  public next: Node<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList<T> {
  private _head: Node<T> | null;
  private _tail: Node<T> | null;
  private _size: number = 0;
  constructor() {
    this._head = null;
    this._tail = null;
  }

  /**
   * Add a node at the end of the list
   * time - O(1)
   */
  append(value: T): LinkedList<T> {
    const node = new Node<T>(value);
    if (!this._head) {
      this._head = this._tail = node;
    } else {
      this._tail!.next = node; // Link new node to thw last node
      this._tail = node; // update the tail with new node
    }
    this._size++;
    return this;
  }

  /**
   * Add a node at the start of the list
   * time - O(1)
   */
  prepend(value: T): LinkedList<T> {
    const node = new Node<T>(value);
    if (!this._head) {
      this._head = this._tail = node;
    } else {
      node.next = this._head; // Link the new node to the current head
      this._head = node; // Update the head with new node
    }
    this._size++;
    return this;
  }

  /**
   * Remove the last node
   * time - O(n)
   */
  popEnd(): T | null {
    if (!this._head) return null;
    // Only one element
    if (this._head === this._tail) {
      const removedValue = this._head.value;
      this._head = this._tail = null;
      this._size--;
      return removedValue;
    }
    let current = this._head;
    // Finding the second last node
    while (current.next && current.next !== this._tail) {
      current = current.next;
    }
    const removedValue = this._tail!.value;
    this._tail = current;
    this._tail.next = null;
    this._size--;
    return removedValue;
  }
  /**
   * Remove the first node
   * time - O(1)
   */
  popStart(): T | null {
    if (!this._head) return null;
    const removedValue = this._head.value;
    this._head = this._head.next;
    if (!this._head) this._tail = null; // If list becomes empty
    this._size--;
    return removedValue;
  }

  isEmpty(): boolean {
    return !!this._size;
  }

  getSize(): number {
    return this._size;
  }

  printList(): void {
    let current = this._head;
    const result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }
}
