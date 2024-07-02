const events = [
  {
    name: "abort",
    description: "The loading of a media is aborted",
    eventType: ["UiEvent", "Event"],
  },
  {
    name: "afterprint",
    description: "A page has started printing",
    eventType: ["Event"],
  },
  {
    name: "animationend",
    description: "A CSS animation has completed",
    eventType: ["AnimationEvent"],
  },
  {
    name: "animationiteration",
    description: "A CSS animation is repeated",
    eventType: ["AnimationEvent"],
  },
  {
    name: "animationstart",
    description: "A CSS animation has started",
    eventType: ["AnimationEvent"],
  },
  {
    name: "beforeprint",
    description: "A page is about to be printed",
    eventType: ["Event"],
  },
  {
    name: "beforeunload",
    description: "Before a document is about to be unloaded",
    eventType: ["UiEvent", "Event"],
  },
  {
    name: "blur",
    description: "An element loses focus",
    eventType: ["FocusEvent"],
  },
  {
    name: "canplay",
    description:
      "The browser can start playing a media (has buffered enough to begin)",
    eventType: ["Event"],
  },
  {
    name: "canplaythrough",
    description:
      "The browser can play through a media without stopping for buffering",
    eventType: ["Event"],
  },
  {
    name: "change",
    description: "The content of a form element has changed",
    eventType: ["Event"],
  },
  {
    name: "click",
    description: "An element is clicked on",
    eventType: ["MouseEvent"],
  },
  {
    name: "contextmenu",
    description: "An element is right-clicked to open a context menu",
    eventType: ["MouseEvent"],
  },
  {
    name: "copy",
    description: "The content of an element is copied",
    eventType: ["ClipboardEvent"],
  },
  {
    name: "cut",
    description: "The content of an element is cut",
    eventType: ["ClipboardEvent"],
  },
  {
    name: "dblclick",
    description: "An element is double-clicked",
    eventType: ["MouseEvent"],
  },
  {
    name: "drag",
    description: "An element is being dragged",
    eventType: ["DragEvent"],
  },
  {
    name: "dragend",
    description: "Dragging of an element has ended",
    eventType: ["DragEvent"],
  },
  {
    name: "dragenter",
    description: "A dragged element enters the drop target",
    eventType: ["DragEvent"],
  },
  {
    name: "dragleave",
    description: "A dragged element leaves the drop target",
    eventType: ["DragEvent"],
  },
  {
    name: "dragover",
    description: "A dragged element is over the drop target",
    eventType: ["DragEvent"],
  },
  {
    name: "dragstart",
    description: "Dragging of an element has started",
    eventType: ["DragEvent"],
  },
  {
    name: "drop",
    description: "A dragged element is dropped on the target",
    eventType: ["DragEvent"],
  },
  {
    name: "durationchange",
    description: "The duration of a media is changed",
    eventType: ["Event"],
  },
  {
    name: "ended",
    description: "A media has reach the end ('thanks for listening')",
    eventType: ["Event"],
  },
  {
    name: "error",
    description: "An error has occurred while loading a file",
    eventType: ["ProgressEvent", "UiEvent", "Event"],
  },
  {
    name: "focus",
    description: "An element gets focus",
    eventType: ["FocusEvent"],
  },
  {
    name: "focusin",
    description: "An element is about to get focus",
    eventType: ["FocusEvent"],
  },
  {
    name: "focusout",
    description: "An element is about to lose focus",
    eventType: ["FocusEvent"],
  },
  {
    name: "fullscreenchange",
    description: "An element is displayed in fullscreen mode",
    eventType: ["Event"],
  },
  {
    name: "fullscreenerror",
    description: "An element can not be displayed in fullscreen mode",
    eventType: ["Event"],
  },
  {
    name: "hashchange",
    description: "There has been changes to the anchor part of a URL",
    eventType: ["HashChangeEvent"],
  },
  {
    name: "input",
    description: "An element gets user input",
    eventType: ["InputEvent", "Event"],
  },
  {
    name: "invalid",
    description: "An element is invalid",
    eventType: ["Event"],
  },
  {
    name: "keydown",
    description: "A key is down",
    eventType: ["KeyboardEvent"],
  },
  {
    name: "keypress",
    description: "A key is pressed",
    eventType: ["KeyboardEvent"],
  },
  {
    name: "keyup",
    description: "A key is released",
    eventType: ["KeyboardEvent"],
  },
  {
    name: "load",
    description: "An object has loaded",
    eventType: ["UiEvent", "Event"],
  },
  {
    name: "loadeddata",
    description: "Media data is loaded",
    eventType: ["Event"],
  },
  {
    name: "loadedmetadata",
    description: "Meta data (like dimensions and duration) are loaded",
    eventType: ["Event"],
  },
  {
    name: "loadstart",
    description: "The browser starts looking for the specified media",
    eventType: ["ProgressEvent"],
  },
  {
    name: "message",
    description: "A message is received through the event source",
    eventType: ["Event"],
  },
  {
    name: "mousedown",
    description: "The mouse button is pressed over an element",
    eventType: ["MouseEvent"],
  },
  {
    name: "mouseenter",
    description: "The pointer is moved onto an element",
    eventType: ["MouseEvent"],
  },
  {
    name: "mouseleave",
    description: "The pointer is moved out of an element",
    eventType: ["MouseEvent"],
  },
  {
    name: "mousemove",
    description: "The pointer is moved over an element",
    eventType: ["MouseEvent"],
  },
  {
    name: "mouseover",
    description: "The pointer is moved onto an element",
    eventType: ["MouseEvent"],
  },
  {
    name: "mouseout",
    description: "The pointer is moved out of an element",
    eventType: ["MouseEvent"],
  },
  {
    name: "mouseup",
    description: "A user releases a mouse button over an element",
    eventType: ["MouseEvent"],
  },
  {
    name: "mousewheel",
    description: "Deprecated. Use the wheel event instead",
    eventType: ["WheelEvent"],
  },
  {
    name: "offline",
    description: "The browser starts working offline",
    eventType: ["Event"],
  },
  {
    name: "online",
    description: "The browser starts working online",
    eventType: ["Event"],
  },
  {
    name: "open",
    description: "A connection with the event source is opened",
    eventType: ["Event"],
  },
  {
    name: "pagehide",
    description: "User navigates away from a webpage",
    eventType: ["PageTransitionEvent"],
  },
  {
    name: "pageshow",
    description: "User navigates to a webpage",
    eventType: ["PageTransitionEvent"],
  },
  {
    name: "paste",
    description: "Some content is pasted in an element",
    eventType: ["ClipboardEvent"],
  },
  { name: "pause", description: "A media is paused", eventType: ["Event"] },
  {
    name: "play",
    description: "The media has started or is no longer paused",
    eventType: ["Event"],
  },
  {
    name: "playing",
    description: "The media is playing after being paused or buffered",
    eventType: ["Event"],
  },
  {
    name: "popstate",
    description: "The window's history changes",
    eventType: ["PopStateEvent"],
  },
  {
    name: "progress",
    description: "The browser is downloading media data",
    eventType: ["Event"],
  },
  {
    name: "ratechange",
    description: "The playing speed of a media is changed",
    eventType: ["Event"],
  },
  {
    name: "resize",
    description: "The document view is resized",
    eventType: ["UiEvent", "Event"],
  },
  { name: "reset", description: "A form is reset", eventType: ["Event"] },
  {
    name: "scroll",
    description: "An scrollbar is being scrolled",
    eventType: ["UiEvent", "Event"],
  },
  {
    name: "search",
    description: "Something is written in a search field",
    eventType: ["Event"],
  },
  {
    name: "seeked",
    description: "Skipping to a media position is finished",
    eventType: ["Event"],
  },
  {
    name: "seeking",
    description: "Skipping to a media position is started",
    eventType: ["Event"],
  },
  {
    name: "select",
    description: "User selects some text",
    eventType: ["UiEvent", "Event"],
  },
  {
    name: "show",
    description: "A <menu> element is shown as a context menu",
    eventType: ["Event"],
  },
  {
    name: "stalled",
    description: "The browser is trying to get unavailable media data",
    eventType: ["Event"],
  },
  {
    name: "storage",
    description: "A Web Storage area is updated",
    eventType: ["StorageEvent"],
  },
  { name: "submit", description: "A form is submitted", eventType: ["Event"] },
  {
    name: "suspend",
    description: "The browser is intentionally not getting media data",
    eventType: ["Event"],
  },
  {
    name: "timeupdate",
    description:
      "The playing position has changed (the user moves to a different point in the media)",
    eventType: ["Event"],
  },
  {
    name: "toggle",
    description: "The user opens or closes the <details> element",
    eventType: ["Event"],
  },
  {
    name: "touchcancel",
    description: "The touch is interrupted",
    eventType: ["TouchEvent"],
  },
  {
    name: "touchend",
    description: "A finger is removed from a touch screen",
    eventType: ["TouchEvent"],
  },
  {
    name: "touchmove",
    description: "A finger is dragged across the screen",
    eventType: ["TouchEvent"],
  },
  {
    name: "touchstart",
    description: "A finger is placed on a touch screen",
    eventType: ["TouchEvent"],
  },
  {
    name: "transitionend",
    description: "A CSS transition has completed",
    eventType: ["TransitionEvent"],
  },
  {
    name: "unload",
    description: "A page has unloaded",
    eventType: ["UiEvent", "Event"],
  },
  {
    name: "volumechange",
    description: "The volume of a media is changed (includes muting)",
    eventType: ["Event"],
  },
  {
    name: "waiting",
    description: "A media is paused but is expected to resume (e.g. buffering)",
    eventType: ["Event"],
  },
  {
    name: "wheel",
    description: "The mouse wheel rolls up or down over an element",
    eventType: ["WheelEvent"],
  },
];
