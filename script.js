const q = console.log;

const incrementingCounter = (number, elem) => {
  let i = 0;
  const interval = setInterval(function () {
    elem.innerText = `${Math.floor((i += number / 500))}`;
  }, 10);
  setTimeout(() => {
    clearInterval(interval);
    elem.innerText = `${number}`;
  }, 5000);
};

incrementingCounter(5378, document.getElementById("xFollowers"));
incrementingCounter(2901, document.getElementById("youtubeSubscribers"));
incrementingCounter(1760, document.getElementById("facebookFans"));
