const getWindows = async () => {
  const monitors = await chrome.system.display.getInfo();
  console.log(monitors);
  const windows = await chrome.windows.getAll({ populate: true });
  console.log(windows);
  return windows;
};

const createWindowList = async (_) => {
  const windows = await getWindows();

  u("div#ext-container").append(
    u("<ul>").append((window, i) => {
      return u("<li>")
        .append(`Window ${window.width} x ${window.height}`)
        .append(
          u("<input>").attr({
            type: "text",
            name: `window${i}`,
            id: `WINDOW_ID_${i}`,
            value: window.id,
          })
        );
    }, windows)
  );
};

u("div#ext-container").append(
  u("<button>").on("click", createWindowList).append("Get Windows")
);

chrome.system.display.onDisplayChanged.addListener((e) => {
  console.log("onDisplayChanged", e);
});

chrome.windows.onBoundsChanged.addListener((e) => {
  console.log("onBoundsChanged", e);
});

chrome.windows.onCreated.addListener((e) => {
  console.log("onCreated", e);
});

chrome.windows.onFocusChanged.addListener((e) => {
  console.log("onFocusChanged", e);
});

chrome.windows.onRemoved.addListener((e) => {
  console.log("onRemoved", e);
});
