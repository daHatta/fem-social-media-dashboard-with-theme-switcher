"use strict";

// Checks on user interaction and changes and sets state with new value
const handleColorMode = (e) => {
    
    // Keycode
    const spacebarKeyCode = 32;
    
    // Checkbox clicked
    const switchBtn = e.target;
    const checked = switchBtn.getAttribute("aria-checked");
    
    // Label of clicked checkbox
    const labelId = switchBtn.getAttribute("aria-labelledby");
    const label = document.getElementById(labelId);
    // Content of label
    const mode = label.innerHTML;
    
    // Current color Mode
    const rootElement = document.querySelector("html");
    const currentValue = rootElement.getAttribute("data-mode");
    
    // Variable to change mode
    let newValue = "";

    // 1. Check on code of pressed key
    // 2. Check on "aria-checked" && content of label && currentValue
    // 3. Do the opposite of 2.
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

    // Set new value of color mode
    rootElement.setAttribute("data-mode", newValue);
    // Set new value to the localStorage
    localStorage.setItem("mode", newValue);

};

// Gets and sets current state of the color mode switcher
// based on the preferences of the user (set on webpage)
const initColorModeSwitcher = () => {

    // Button
    const colorSwitchBtn = document.getElementById("cmPref");
    // Label
    const label = document.getElementById("cm-label");
    // Current mode
    const currentMode = document.documentElement.getAttribute("data-mode", modeToSet);

    // Check current mode and set state of btn and label 
    if (currentMode === "dark") {
        colorSwitchBtn.setAttribute("aria-checked", "false");
        label.innerHTML = "Dark Mode";
    }  else {
        colorSwitchBtn.setAttribute("aria-checked", "true");
        label.innerHTML = "Light Mode";
    };

    // Set Eventlistener for specific user interaction
    colorSwitchBtn.addEventListener("click", handleColorMode);
    colorSwitchBtn.addEventListener("keydown", handleColorMode);

};

initColorModeSwitcher();
