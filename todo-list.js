function createTodoList() {
    const todoListObject = {
        items: [
            {
                text: "Завершить текущий челлендж",
                completed: false
            },
            {
                text: "Отдохнуть во время перерыва",
                completed: false
            },
            {
                text: "Помочь напарнику понять код",
                completed: false
            },
            {
                text: "Выиграть в мафию",
                completed: true
            },
        ],
        printAll: function () {
            for (let i = 0; i < this.items.length; i++) {
                this.print(i)
            }
        },
        add: function (caseText) {
           const a = {
               text: caseText,
               completed: false
           }
            this.items.unshift(a)
        },
        remove: function (del) {
             this.items.splice(del, 1)
        },
        print: function (ind) {
                const status = (this.items[ind].completed === true) ? '[x]' : '[]'
                console.log(status + this.items[ind].text)
        },
        complete: function (complet) {
            this.items[complet].completed = true
        }

    }

    return todoListObject;
}

const todoList = createTodoList();
 todoList.add('Перейти к следующему релизу')

 //todoList.remove(4)

//todoList.print(4 )
//todoList.complete(0)
todoList.printAll()





