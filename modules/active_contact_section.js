export {ActiveContact};

function ActiveContact(contact) {
  let includeActive;
  for (let i = 0; i < contact.classList.length; i += 1) {
    if (contact.classList[i] === 'active') {
      includeActive = true;
    } else {
      includeActive = false;
    }
  }
  if (includeActive === false) {
    contact.classList.add('active');
  }
}