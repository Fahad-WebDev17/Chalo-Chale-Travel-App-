
// Select elements
const openDialog = document.getElementById("openDialog");
const slideDownDialog = document.getElementById("slideDownDialog");
const closeIcon = document.getElementById("closeIcon");
const closeDialog = document.getElementById("closeDialog");
const saveChanges = document.getElementById("saveChanges");

// Open dialog
openDialog.addEventListener("click", function () {
    slideDownDialog.showModal();
});

// Close using the X button
closeIcon.addEventListener("click", function () {
    slideDownDialog.close();
});

// Close using the Close button
closeDialog.addEventListener("click", function () {
    slideDownDialog.close();
});

// Save changes
saveChanges.addEventListener("click", function () {
    alert("Your trip details have been saved!");
    slideDownDialog.close();
});

// Close when clicking outside the dialog
slideDownDialog.addEventListener("click", function (event) {
    if (event.target === slideDownDialog) {
        slideDownDialog.close();
    }
});
