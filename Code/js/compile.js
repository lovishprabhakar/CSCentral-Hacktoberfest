const redef = () => {
  document.querySelector('#lan-list').addEventListener('change', (event) => {
    const elm = document.getElementById('code');
    if (
      event.target.value === 'cpp' ||
      event.target.value === 'cpp14' ||
      event.target.value === 'cpp17'
    ) {
      elm.setAttribute('src', './ideiframe/cpp.html');
    } else if (event.target.value === 'java') {
      elm.setAttribute('src', './ideiframe/java.html');
    } else if (
      event.target.value === 'python2' ||
      event.target.value === 'python3'
    ) {
      elm.setAttribute('src', './ideiframe/python.html');
    } else if (event.target.value === 'php') {
      elm.setAttribute('src', './ideiframe/php.html');
    } else if (event.target.value === 'c') {
      elm.setAttribute('src', './ideiframe/c.html');
    }
  });
};
redef();
