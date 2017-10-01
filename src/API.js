const API = {
  todos: [
    { number: 1, name: "Learn Angular 4", status: "Done" },
    { number: 2, name: "Learn React", status: "In Progress" },
    { number: 3, name: "Learn Spring 5", status: "Not Started" },
    { number: 4, name: "Master Spring Boot", status: "Done" },
    { number: 5, name: "Migrate all microservices to Container", status: "Not Started" }
  ],
  all: function() { return this.todos},
  get: function(id) {
    const isTodo = todo => todo.number === id
    return this.todos.find(isTodo)
  }
}

export default API
