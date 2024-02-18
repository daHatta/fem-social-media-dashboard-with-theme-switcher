"use strict";

// Color Mode Switcher
const colorSwitchBtn = document.getElementById("cmPref");

// Set Origin
const currentMode = document.documentElement.getAttribute("data-mode", modeToSet);

const label = document.getElementById("cm-label");

if (currentMode === "dark") {
    colorSwitchBtn.setAttribute("aria-checked", "false");
    label.innerHTML = "Dark Mode";
}  else {
    colorSwitchBtn.setAttribute("aria-checked", "true");
    label.innerHTML = "Light Mode";
}


const changeCheckbox = (e) => {
    // Keycode
    const spacebarKeyCode = 32;
    // Checkbox
    const switchBtn = e.target;
    const checked = switchBtn.getAttribute("aria-checked");
    // Label
    const labelId = switchBtn.getAttribute("aria-labelledby");
    const label = document.getElementById(labelId);
    const mode = label.innerHTML;
    // Color Mode
    const rootElement = document.querySelector("html");
    const currentValue = rootElement.getAttribute("data-mode");
    let newValue = "";

    if (e.keyCode && e.keyCode !== spacebarKeyCode) {
        return;
    } else if (checked === "false" && mode === "Dark Mode" && currentValue === "dark") {
        newValue = "light";
        label.innerHTML = "Light Mode";
        switchBtn.setAttribute("aria-checked", "true");
    } else {
        newValue = "dark";
        label.innerHTML = "Dark Mode";
        switchBtn.setAttribute("aria-checked", "false");
    };

    rootElement.setAttribute("data-mode", newValue);

    localStorage.setItem("mode", newValue);

};

colorSwitchBtn.addEventListener("click", changeCheckbox);
colorSwitchBtn.addEventListener("keydown", changeCheckbox);