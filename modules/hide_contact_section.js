export {HideContactSection};

// review if section-contact has the class 'active' //
function HideContactSection(contact) {
  let includeActive;
  for (let i = 0; i < contact.classList.length; i += 1) {
    if (contact.classList[i] === 'active') {
      includeActive = true;
    } else {
      includeActive = false;
    }
  }

  if (includeActive === true) {
    contact.classList.remove('active');
  }
}