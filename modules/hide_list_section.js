// review if section-table has the class 'active' //
export default function (list) {
  let includeActive;
  for (let i = 0; i < list.classList.length; i += 1) {
    if (list.classList[i] === 'active') {
      includeActive = true;
    } else {
      includeActive = false;
    }
  }

  if (includeActive === true) {
    list.classList.remove('active');
  }
}