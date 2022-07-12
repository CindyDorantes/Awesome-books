export {ActiveList};

function ActiveList(list) {
  let includeActive;
  for (let i = 0; i < list.classList.length; i += 1) {
    if (list.classList[i] === 'active') {
      includeActive = true;
    } else {
      includeActive = false;
    }
  }

  if (includeActive === false) {
    list.classList.add('active');
  }
}