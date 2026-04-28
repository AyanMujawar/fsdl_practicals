// Function called when the registration form is submitted
function submitForm(event) {
    // Prevent the page from reloading on form submit
    event.preventDefault();

    // Get user-entered values from the form fields
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let course = document.getElementById("course").value;
    let address = document.getElementById("address").value.trim();

    // Get the selected gender radio button
    let genderInput = document.querySelector('input[name="gender"]:checked');
    let gender = genderInput ? genderInput.value : "";

    // Validate: all fields must be filled
    if (name === "" || email === "" || address === "" || gender === "") {
        alert("Please fill in all fields and select a gender!");
        return;
    }

    // Build the summary text to display to the user
    let summary = "Name: " + name + "\n" +
                  "Email: " + email + "\n" +
                  "Gender: " + gender + "\n" +
                  "Course: " + course + "\n" +
                  "Address: " + address;

    // Display the summary section with submitted data
    document.getElementById("summaryContent").innerText = summary;
    document.getElementById("summary").style.display = "block";

    // Confirm registration to user
    alert("Registration Successful! Welcome, " + name);
}
