export {Book};

const table = document.getElementById('tbody');
let btnRemove;

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook(dataBase) {
    dataBase.push(this);
  }

  displayBook(dataBase) {
    const row = document.createElement('tr');
    table.appendChild(row);
    const information = document.createElement('td');
    information.textContent = `"${this.title}" by ${this.author}`;
    row.appendChild(information);
    const dataRemove = document.createElement('td');
    row.appendChild(dataRemove);
    btnRemove = document.createElement('button');
    btnRemove.textContent = 'Remove';
    dataRemove.appendChild(btnRemove);

    btnRemove.addEventListener('click', (e) => {
      const parentBtn = e.target.parentNode;
      dataBase = dataBase.filter((x) => (x.author !== this.author) || (x.title !== this.title));
      parentBtn.parentElement.remove();

      localStorage.setItem('baseData', JSON.stringify(dataBase));
    });
  }

}