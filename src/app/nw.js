const { App, Window } = nw;

const win = Window.get();
const devMode = App.argv.includes("--dev");

module.exports = {
  config() {
    if (devMode) win.showDevTools();
  }
};
