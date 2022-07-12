export { ActiveAdd };

function ActiveAdd(addNew) {
  let includeActive;
  for (let i = 0; i < addNew.classList.length; i += 1) {
    if (addNew.classList[i] === 'active') {
      includeActive = true;
    } else {
      includeActive = false;
    }
  }

  if (includeActive === false) {
    addNew.classList.add('active');
  }
}