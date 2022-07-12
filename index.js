import Book from './modules/class_book.js';
import HideListSection from './modules/hide_list_section.js';
import HideAddSection from './modules/hide_add_section.js';
import HideContactSection from './modules/hide_contact_section.js';
import ActiveList from './modules/active_list_section.js';
import ActiveAdd from './modules/active_add_section.js';
import ActiveContact from './modules/active_contact_section.js';
import { DateTime } from './modules/luxon.js';

const btnAdd = document.getElementById('button');
const displayDate = document.getElementById('date');
let dataBase = [];

const now = DateTime.now();
displayDate.innerHTML = now.toLocaleString(DateTime.DATETIME_FULL);

btnAdd.addEventListener('click', () => {
  const nameTitle = document.getElementById('book').value;
  const nameAuthor = document.getElementById('author').value;
  const newBook = new Book(nameTitle, nameAuthor);
  newBook.addBook(dataBase);
  newBook.displayBook(dataBase);

  localStorage.setItem('baseData', JSON.stringify(dataBase));
});

if (localStorage.getItem('baseData')) {
  dataBase = JSON.parse(localStorage.getItem('baseData'));
  for (let i = 0; i < dataBase.length; i += 1) {
    const newBook = new Book(dataBase[i].title, dataBase[i].author);
    newBook.displayBook(dataBase);
  }
}

// sections variables //
const list = document.querySelector('.section-table');
const addNew = document.querySelector('.section-add');
const contact = document.querySelector('.section-contact');

// navbar variables //
const listLink = document.getElementById('list');
const addLink = document.getElementById('add');
const contactLink = document.getElementById('contact');

// Add click event for list link - Make section-table appears //
listLink.addEventListener('click', () => {
  ActiveList(list);
  HideAddSection(addNew);
  HideContactSection(contact);
});

// Add click event for Add new link - Make section-add appears //
addLink.addEventListener('click', () => {
  ActiveAdd(addNew);
  HideListSection(list);
  HideContactSection(contact);
});

// Add click event for Contact link - Make section-contact appears //
contactLink.addEventListener('click', () => {
  ActiveContact(contact);
  HideListSection(list);
  HideAddSection(addNew);
});
