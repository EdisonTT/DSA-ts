export class VertexAlreadyExist extends Error {
  constructor(vertexName: string) {
    super(`The vertex ${vertexName}, already exist`);
  }
}

export class MaximumVertexExceeded extends Error {
  constructor() {
    super(`The total number of vertices is higher than allowed vertices`);
  }
}

export class VertexNotFound extends Error {
  constructor() {
    super(`Vertex not found`)
  }
}
