export {HideAddSection};

// review if section-add has the class 'active' //
function HideAddSection(addNew) {
  let includeActive;
  for (let i = 0; i < addNew.classList.length; i += 1) {
    if (addNew.classList[i] === 'active') {
      includeActive = true;
    } else {
      includeActive = false;
    }
  }

  if (includeActive === true) {
    addNew.classList.remove('active');
  }
}
