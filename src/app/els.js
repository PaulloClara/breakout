module.exports = document => {
  const canvas = document.querySelector("#canvas");

  return {
    canvas,
    context: canvas.getContext("2d"),
    rules: document.querySelector("#rules"),
    rulesBtn: document.querySelector("#rules-btn"),
    closeBtn: document.querySelector("#close-btn")
  };
};
