/*
  Name: Alison Doan
  File: hmw3.js
  Date Created: 04/01/2026
  Date Updated: 04/17/2026
  Version: 3.15
  Purpose: External JavaScript for hmw3.html
*/
// ─── DATE SETUP ───────────────────────────────────────────────────────────────
function setTodayDate() {
  const today = new Date();
  document.getElementById("today").innerHTML =
    "Today is: " + today.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  const displayElement = document.getElementById("today");
}
  if (displayElement) {
    displayElement.innerHTML = "Today is: " + formattedDate;
  } 
  else {
    console.error("Could not find an element with id='today'");
  }
}
// ─── SLIDER DISPLAY ───────────────────────────────────────────────────────────
function updateSlider(val) {
  document.getElementById("healthDisplay").textContent = val + " / 10";
}
 
// ─── LIVE FIELD VALIDATION ────────────────────────────────────────────────────
function showError(fieldId, msg) {
  const el = document.getElementById(fieldId + "Err");
  if (el) {
    el.textContent = msg;
    el.className = "errMsg isError";
  }
}
function showOK(fieldId) {
  const el = document.getElementById(fieldId + "Err");
  if (el) {
    el.textContent = "✓"
    el.className = "errMsg isOK";
  }
}
function clearMsg(fieldId) {
  const el = document.getElementById(fieldId + "Err");
  if (el) {
    el.textContent = ""
    el.className = "errMsg";
  }
}
function showSubmit() {
  document.getElementById("submitbutton".style.display = "none");
}

// ─── INDIVIDUAL FIELD VALIDATION ────────────────────────────────────────────────────
function validateFirstName() {
  const val = document.getElementById("firstname").value;
  if(!val){
    showError("firstname", "First name is required.");
    return false;
  }
  if (!/^[A-Za-z'\-]{1,30}$/.test(val)) {
    showError("firstname", "1–30 letters, apostrophes, or dashes only.");
    return false;
  }
  showOK("firstname"); 
  return true;
}
 
function validateMI() {
  const val = document.getElementById("mi").value;
  if (val == "") {clearMsg("mi"); return true;}
  if (val !== "" && !/^[A-Za-z]$/.test(val)) {
    showError("mi", "One letter only, or leave blank.");
    return false;
  }
  showOK("mi"); 
  return true;
}
 
function validateLastName() {
  const val = document.getElementById("lastname").value;
  if (!val) {
    showError("lastname", "Last name is required.");
    return false;
  }
  if (!/^[A-Za-z'\-2-5]{1,30}$/.test(val)) {
    showError("lastname", "1–30 chars: letters, apostrophes, dashes, or numbers 2–5.");
    return false;
  }
  showOK("lastname"); 
  return true;
}

function validateGender() {
  const sel= document.querySelector('input[name="gender"]:checked');
  if(!sel) {
    showError("gender", "Please select a gender.");
    return false;
  }
  showOK("gender");
  return true;
}
 
function validateEmail() {
  const field = document.getElementById("email");
  field.value = field.value.toLowerCase();  
  const val = field.value.trim();
  if(!val) {
    showError("email", "Email address is required.");
    return false;
}
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
    showError("email", "Enter a valid email: name@domain.tld");
    return false;
  }
  showOK("email"); return true;
}
 
function validatePhone() {
  const val = document.getElementById("phone").value;
  if (val !== "" && !/^\d{3}-\d{3}-\d{4}$/.test(val)) {
    showError("phone", "Format: 000-000-0000");
    return false;
  }
  showOK("phone"); return true;
}

function validateState() {
  const val = document.getElementById("state").value;
 
  if (!val) {
    showError("state", "Please select a state.");
    return false;
  }
  showOK("state");
  return true;
}

function validateCity() {
  const val = document.getElementById("city").value.trim();
 
  if (!val) {
    showError("city", "City is required.");
    return false;
  }
  if (!/^[A-Za-z\s'\-\.]{2,30}$/.test(val)) {
    showError("city", "2–30 characters: letters, spaces, apostrophes, or dashes.");
    return false;
  }
  showOK("city");
  return true;
}

function validateZip() {
  const val = document.getElementById("zip").value;
  if(!val) {
    showError("zip", "ZIP code is required.");
    return false;
  }
  if (!/^\d{5}(-\d{4})?$/.test(val)) {
    showError("zip", "Enter 5 digits, or ZIP+4 like 77002-1234.");
    return false;
  }
  showOK("zip"); 
  return true;
}
 
function validateUserID() {
  const field = document.getElementById("userid");
  field.value = field.value.toLowerCase();
  const val = field.value;
  if (!val) {
    showError("userid", "User ID is required.");
    return false;
  }
  if (!/^[a-z][a-z0-9_\-]{4,29}$/.test(val)) {
    showError("userid", "5-30 chars. Start with letter; only lowercase letters, numbers, _ or -. No spaces.");
    return false;
  }
  showOK("userid");
  return true;
}

function validatePassword() {
  const pw = document.getElementById("password").value;
  const userid = (document.getElementById("userid").value     || "").toLowerCase();
  const firstname = (document.getElementById("firstname").value     || "").toLowerCase();
  const lastname = (document.getElementById("lastname").value     || "").toLowerCase();
 

  if (!pw) {
    showError("password", "Password is required.");
    return false;
  }
  if (pw.length < 8 || pw.length > 30) {
    showError("password", "Password must be 8–30 characters.");
    return false;
  }
  if (!/[A-Z]/.test(pw)) {
    showError("password", "Password needs at least 1 uppercase letter.");
    return false;
  }
  if (!/[a-z]/.test(pw)) {
    showError("password", "Password needs at least 1 lowercase letter.");
    return false;
  }
  if (!/[0-9]/.test(pw)) {
    showError("password", "Password needs at least 1 number.");
    return false;
  }
  if (!/[!@#%^&*()\-_+=\/><.,`~]/.test(pw)) {
    showError("password", 'Password needs at least 1 special character (!@#%^&* etc). No quotes allowed.');
    return false;
  }
  if (/"/.test(pw)) {
    showError("password", 'Password cannot contain double quotes.');
    return false;
  }
  if (userid && pw.toLowerCase().includes(userid)) {
    showError("password", "Password cannot contain your User ID.");
    return false;
  }
  if (firstname && pw.toLowerCase().includes(firstname)) {
    showError("password", "Password cannot contain your first name.");
    return false;
  }
  if (lastname && pw.toLowerCase().includes(lastname)) {
    showError("password", "Password cannot contain your last name.");
    return false;
  }
  showOK("password");
  return true;
}
 
function validateConfirmPassword() {
  const pw = document.getElementById("password").value;
  const cpw = document.getElementById("confirmpassword").value;
  
  if(!cpw){
    showError("confirmpassword", "Please confirm your password.");
    return false;
  }
  if (pw !== cpw) {
    showError("confirmpassword", "Passwords do not match.");
    return false;
  }
  showOK("confirmpassword"); 
  return true;
}

function validateDOB() {
  const val = document.getElementById("dob").value.trim();
  if (!val) {
    showError("dob", "Date of birth is required.");
    return false;
  }
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(val)) {
    showError("dob", "Use MM/DD/YYYY format (e.g. 01/15/1990).");
    return false;
  }
 
  const parts = val.split("/");
  const mm = parseInt(parts[0], 10);
  const dd = parseInt(parts[1], 10);
  const yyyy = parseInt(parts[2], 10);
  if (mm < 1 || mm > 12) { showError("dob", "Invalid month (01–12)."); return false; }
  if (dd < 1 || dd > 31) { showError("dob", "Invalid day (01–31)."); return false; }
 
  const dob = new Date(yyyy, mm - 1, dd);
  if (dob.getMonth() !== mm - 1 || dob.getDate() !== dd) {
    showError("dob", "Invalid date — that day doesn't exist in that month.");
    return false;
  }
 
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const minDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate());
  if (dob > today) {
    showError("dob", "Date of birth cannot be in the future.");
    return false;
  }
  if (dob < minDate) {
    showError("dob", "Date of birth cannot be more than 120 years ago.");
    return false;
  }
 
  showOK("dob");
  return true;
}
 
function validateSSN() {
  const val = document.getElementById("ssn").value.trim();
  if (!val) {
    showError("ssn", "Social Security Number is required.");
    return false;
  }
  if (!/^\d{3}-\d{2}-\d{4}$/.test(val)) {
    showError("ssn", "Format: 123-45-6789 (dashes required).");
    return false;
  }
 
  const parts = val.split("-");
  if (parts[0] === "000" || parts[1] === "00" || parts[2] === "0000") {
    showError("ssn", "Invalid SSN: no segment can be all zeros.");
    return false;
  }
  if (parts[0] === "999") {
    showError("ssn", "Invalid SSN: area code 999 is not issued.");
    return false;
  }
 
  showOK("ssn");
  return true;
}

function validateAddr1() {
  const val = document.getElementById("addr1").value.trim();
  if (!val) {
    showError("addr1", "Street address is required.");
    return false;
  }
  if (val.length < 5) {
    showError("addr1", "Address seems too short.");
    return false;
  }
  if (!/^\d+\s+\S/.test(val)) {
    showError("addr1", "Should start with a street number (e.g. 123 Main St).");
    return false;
  }
  if (/[<>"{}|\\^`]/.test(val)) {
    showError("addr1", "Invalid characters in address.");
    return false;
  }
  showOK("addr1");
  return true;
}

function validateAddr2() {
  const val = document.getElementById("addr2").value.trim();
 
  if (val === "") { clearMsg("addr2"); return true; }   // optional
  if (/[<>"{}|\\^`]/.test(val)) {
    showError("addr2", "Invalid characters in address.");
    return false;
  }
  showOK("addr2");
  return true;
}
function validateSympDetails() {
  const val = document.getElementById("sympdetails").value;
  if (val === "") { clearMsg("sympdetails"); return true; }
  if (/"/.test(val)) {
    showError("sympdetails", "Double quotes are not allowed.");
    return false;
  }
  if (/[<>{}\\]/.test(val)) {
    showError("sympdetails", "Characters <, >, {, }, \\ are not allowed.");
    return false;
  }
  if (val.length > 500) {
    showError("sympdetails", "Maximum 500 characters (" + val.length + " entered).");
    return false;
  }
  showOK("sympdetails");
  return true;
}

function validateInsurance() {
  const sel = document.querySelector('input[name="insurance"]:checked');
  if (!sel) {
    showError("insurance", "Please select Yes or No.");
    return false;
  }
  showOK("insurance");
  return true;

// ─── REVIEW PANEL ─────────────────────────────────────────────────────────────
function buildReview() {

  const userid     = document.getElementById("userid").value;
  const password   = document.getElementById("password").value;
  const firstname  = document.getElementById("firstname").value.trim();
  const mi         = document.getElementById("mi").value.trim();
  const lastname   = document.getElementById("lastname").value.trim();
  const dob        = document.getElementById("dob").value;
  const ssn        = document.getElementById("ssn").value;
  const addr1      = document.getElementById("addr1").value.trim();
  const addr2      = document.getElementById("addr2").value.trim();
  const city       = document.getElementById("city").value.trim();
  const stateVal   = document.getElementById("state").value;
  const zip        = document.getElementById("zip").value.trim();
  const email      = document.getElementById("email").value.trim();
  const phone      = document.getElementById("phone").value.trim();
  const health     = document.getElementById("health").value;
  const details    = document.getElementById("sympdetails").value.trim();

  const genderEl = document.querySelector('input[name="gender"]:checked');
  const gender = genderEl ? genderEl.value : "(not selected)"; 

  const updatesEl = document.querySelector('input[name="updates"]:checked');
  const updates = updatesEl ? updatesEl.value : "(not selected)";

  const insEl = document.querySelector('input[name="insurance"]:checked');
  const insurance = insEl ? insEl.value : "(not selected)";
 
  const symptoms = [];
  document.querySelectorAll('input[name="symptom"]:checked').forEach(cb => {
    symptoms.push(cb.value);
  });

   const v = {
    userid:          validateUserID(),
    password:        validatePassword(),
    confirmpassword: validateConfirmPassword(),
    firstname:       validateFirstName(),
    mi:              validateMI(),
    lastname:        validateLastName(),
    gender:          validateGender(),
    dob:             validateDOB(),
    ssn:             validateSSN(),
    addr1:           validateAddr1(),
    addr2:           validateAddr2(),
    city:            validateCity(),
    state:           validateState(),
    zip:             validateZip(),
    email:           validateEmail(),
    phone:           validatePhone(),
    sympdetails:     validateSympDetails(),
    insurance:       validateInsurance()
   };

  function badge(key) 
  {
  const html = `
    <h2>★ Form Review ★</h2>
    <p style="text-align:center;font-size:.85rem;color:#555;">
    <table class="reviewTable">
      <thead>
        <tr><th>Field</th><th>Value</th><th>Status</th></tr>
      </thead>
      <tbody>
    <tr>
    <td>First Name</td>
            <td>${firstname || "(none)"}</td>${badge("firstname")}
            </tr>
 
        <tr>
        <td>Middle Initial</td>
            <td>${mi || "(blank – OK)"}</td>${badge("mi")}
            </tr>
 
        <tr>
        <td>Last Name</td>
            <td>${lastname || "(none)"}</td>${badge("lastname")}
            </tr>
        <tr>
          <td>Gender</td>
          <td>${gender}</td>
          <td>${fieldStatus(genderEl, false)}</td>
        </tr>
        <tr>
          <td>Date of Birth</td>
          <td>${dob || "(none)"}</td>
          <td>${dobStatus()}</td>
        </tr>
        <tr>
          <td>Social Security</td>
          <td>${ssn ? "***-**-" + ssn.slice(-4) : "(not entered)"}</td>
          <td>${fieldStatus(ssn)}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>${email || "(none)"}</td>
          <td>${emailStatus()}</td>
        </tr>
        <tr>
          <td>Phone</td>
          <td>${phone || "(none)"}</td>
          <td>${phoneStatus()}</td>
        </tr>
   <tr>
   <td>Address Line 1</td>
            <td>${addr1 || "(none)"}</td>${badge("addr1")}
            </tr>
        <tr>
        <td>Address Line 2</td>
            <td>${addr2 || "(blank – optional)"}</td>${badge("addr2")}
            </tr>
        <tr>
          <td>Contact for Updates?</td>
          <td>${updates}</td>
          <td>${fieldStatus(updatesEl, false)}</td>
        </tr>
        <tr>
          <td>Health Rating</td>
          <td>${health} / 10</td>
          <td><span class="ok">✔ pass</span></td>
        </tr>
        <tr>
          <td>Symptoms Checked</td>
          <td>${symptoms.length > 0 ? symptoms.join(", ") : "(none selected)"}</td>
          <td><span class="ok">✔ pass</span></td>
        </tr>
        <tr>
          <td>Symptom Details</td>
          <td>${details || "(none provided)"}</td>
          <td><span class="ok">✔ pass</span></td>
        </tr>
        <tr>
          <td>Has Insurance?</td>
          <td>${insurance}</td>
          <td>${fieldStatus(insEl, false)}</td>
        </tr>
        <tr>
          <td>User ID</td>
          <td>${userid || "(none)"}</td>
          <td>${fieldStatus(userid)}</td>
        </tr>
        <tr>
          <td>Password</td>
          <td>${password ? "●".repeat(password.length) : "(none)"}</td>
          <td>${pwStatus()}</td>
        </tr>
      </tbody>
    </table>
    <p style="text-align:center; margin-top:16px;">
      <em>Fix any errors above, then click <strong>Submit Form</strong> to proceed.</em>
    </p>
  `;
 
  const panel = document.getElementById("reviewPanel");
  panel.innerHTML     = html;
  panel.style.display = "block";
  panel.scrollIntoView({ behavior: "smooth" });  function dobStatus() 
  {
    if (!dob) return '<span class="err">ERROR: Required</span>';
    const d = new Date(dob);
    const now = new Date();
    if (d > now) return '<span class="err">ERROR: Cannot be in the future</span>';
    const minDate = new Date(now.getFullYear() - 120, now.getMonth(), now.getDate());
    if (d < minDate) return '<span class="err">ERROR: More than 120 years ago</span>';
    return '<span class="ok">✔ pass</span>';
  }
  function fieldStatus(val, required = true) {
    if (!val && required) return '<span class="err">ERROR: Required</span>';
    return '<span class="ok">✔ pass</span>';
  }
  function emailStatus() {
    if (!email) return '<span class="err">ERROR: Required</span>';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return '<span class="err">ERROR: Invalid format</span>';
    return '<span class="ok">✔ pass</span>';
  }
  function phoneStatus() {
    if (!phone) return '(not provided)';
    if (!/^\d{3}-\d{3}-\d{4}$/.test(phone)) return '<span class="err">ERROR: Bad format</span>';
    return '<span class="ok">✔ pass</span>';
  }
  function zipStatus() {
    if (!zip) return '<span class="err">ERROR: Required</span>';
    const truncated = zip.substring(0, 10);
    if (!/^\d{5}(-\d{4})?$/.test(truncated)) return '<span class="err">ERROR: Invalid ZIP</span>';
    return '<span class="ok">✔ pass</span>';
  }
  function pwStatus() {
    if (!password) return '<span class="err">ERROR: Required</span>';
    return validatePassword() ? '<span class="ok">✔ pass</span>' : '<span class="err">ERROR: Weak password</span>';
  }
  }
}

  const zipDisplay = zip ? zip.substring(0, 10) : "";

function validateAll() 
{
  const results = [
    validateUserID(),
    validatePassword(),
    validateConfirmPassword(),
    validateFirstName(),
    validateMI(),
    validateLastName(),
    validateGender(),
    validateDOB(),
    validateSSN(),
    validateAddr1(),
    validateAddr2(),
    validateCity(),
    validateState(),
    validateZip(),
    validateEmail(),
    validatePhone(),
    validateSympDetails(),
    validateInsurance()
  ];
 
  const errorCount = results.filter(r => r === false).length;
  const summaryEl  = document.getElementById("formSummary");
  
  if (errorCount === 0) {
    showSubmit();
    summaryEl.textContent = "✔ All fields passed! Click Submit Form to proceed.";
    summaryEl.className   = "formSummary allOK";
    document.getElementById("submitbutton").scrollIntoView({ behavior: "smooth" });
  } else {
    hideSubmit();
    summaryEl.textContent =
      "⚠ " + errorCount + " error" + (errorCount > 1 ? "s" : "") +
      " found. Please fix highlighted fields.";
    summaryEl.className = "formSummary hasErrors";
 
    const firstErr = document.querySelector(".errMsg.isError");
    if (firstErr) firstErr.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
  
function finalSubmitCheck() 
{
  const ok =
    validateUserID()           &&
    validatePassword()         &&
    validateConfirmPassword()  &&
    validateFirstName()        &&
    validateMI()               &&
    validateLastName()         &&
    validateGender()           &&
    validateDOB()              &&
    validateSSN()              &&
    validateAddr1()            &&
    validateAddr2()            &&
    validateCity()             &&
    validateState()            &&
    validateZip()              &&
    validateEmail()            &&
    validatePhone()            &&
    validateSympDetails()      &&
    validateInsurance();
 
  if (!ok) {
    alert("Validation failed. Please fix all errors before submitting.");
    return false;
  }
  return true;
}
}
