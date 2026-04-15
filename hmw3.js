/*
  Name: Alison Doan
  File: hmw2.js
  Date Created: 04/01/2026
  Date Updated: 04/17/2026
  Version: 3.00
  Purpose: External JavaScript for hmw2.html
*/
// ─── DATE SETUP ───────────────────────────────────────────────────────────────
function setTodayDate() {
  const today = new Date();
  document.getElementById("today").innerHTML =
    "Today is: " + today.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
 
  const maxDOB = today.toISOString().split("T")[0];
  const minDOB = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate())
    .toISOString().split("T")[0];
  document.getElementById("dob").setAttribute("max", maxDOB);
  document.getElementById("dob").setAttribute("min", minDOB);
}
 
// ─── SLIDER DISPLAY ───────────────────────────────────────────────────────────
function updateSlider(val) {
  document.getElementById("healthDisplay").textContent = val + " / 10";
}
 
// ─── LIVE FIELD VALIDATION ────────────────────────────────────────────────────
function showError(fieldId, msg) {
  const el = document.getElementById(fieldId + "Err");
  if (el) el.textContent = msg;
}
function clearError(fieldId) {
  const el = document.getElementById(fieldId + "Err");
  if (el) el.textContent = "";
}
 
function validateFirstName() {
  const val = document.getElementById("firstname").value;
  if (!/^[A-Za-z'\-]{1,30}$/.test(val)) {
    showError("firstname", "1–30 letters, apostrophes, or dashes only.");
    return false;
  }
  clearError("firstname"); return true;
}
 
function validateMI() {
  const val = document.getElementById("mi").value;
  if (val !== "" && !/^[A-Za-z]$/.test(val)) {
    showError("mi", "One letter only, or leave blank.");
    return false;
  }
  clearError("mi"); return true;
}
 
function validateLastName() {
  const val = document.getElementById("lastname").value;
  if (!/^[A-Za-z'\-2-5]{1,30}$/.test(val)) {
    showError("lastname", "1–30 chars: letters, apostrophes, dashes, or numbers 2–5.");
    return false;
  }
  clearError("lastname"); return true;
}
 
function validateEmail() {
  const val = document.getElementById("email").value;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
    showError("email", "Enter a valid email: name@domain.tld");
    return false;
  }
  clearError("email"); return true;
}
 
function validatePhone() {
  const val = document.getElementById("phone").value;
  if (val !== "" && !/^\d{3}-\d{3}-\d{4}$/.test(val)) {
    showError("phone", "Format: 000-000-0000");
    return false;
  }
  clearError("phone"); return true;
}
 
function validateZip() {
  const val = document.getElementById("zip").value;
  if (!/^\d{5}(-\d{4})?$/.test(val)) {
    showError("zip", "Enter 5 digits, or ZIP+4 like 77002-1234.");
    return false;
  }
  clearError("zip"); return true;
}
 
function validateUserID() {
  const field = document.getElementById("userid");
  let val = field.value;
  
  field.value = val.toLowerCase();
  val = field.value;
  if (!/^[a-z][a-z0-9_\-]{4,29}$/.test(val)) {
    showError("userid", "5–30 chars: start with a letter, then letters/numbers/_/- only. No spaces.");
    return false;
  }
  clearError("userid"); return true;
}
 
function validatePassword() {
  const pw = document.getElementById("password").value;
  const userid = document.getElementById("userid").value.toLowerCase();
  const firstname = document.getElementById("firstname").value.toLowerCase();
  const lastname = document.getElementById("lastname").value.toLowerCase();
 
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
  clearError("password"); return true;
}
 
function validateConfirmPassword() {
  const pw = document.getElementById("password").value;
  const cpw = document.getElementById("confirmpassword").value;
  if (pw !== cpw) {
    showError("confirmpassword", "Passwords do not match.");
    return false;
  }
  clearError("confirmpassword"); return true;
}
 
// ─── REVIEW PANEL ─────────────────────────────────────────────────────────────
function buildReview() {

  const firstname   = document.getElementById("firstname").value.trim();
  const mi          = document.getElementById("mi").value.trim();
  const lastname    = document.getElementById("lastname").value.trim();
  const dob         = document.getElementById("dob").value;
  const ssn         = document.getElementById("ssn").value;
  const addr1       = document.getElementById("addr1").value.trim();
  const addr2       = document.getElementById("addr2").value.trim();
  const city        = document.getElementById("city").value.trim();
  const stateEl     = document.getElementById("state");
  const stateVal    = stateEl.value;
  const zip         = document.getElementById("zip").value.trim();
  const email       = document.getElementById("email").value.trim();
  const phone       = document.getElementById("phone").value.trim();
  const userid      = document.getElementById("userid").value;
  const password    = document.getElementById("password").value;
 

  const genderEl = document.querySelector('input[name="gender"]:checked');
  const gender = genderEl ? genderEl.value : "(not selected)";
 

  const updatesEl = document.querySelector('input[name="updates"]:checked');
  const updates = updatesEl ? updatesEl.value : "(not selected)";
 

  const insEl = document.querySelector('input[name="insurance"]:checked');
  const insurance = insEl ? insEl.value : "(not selected)";
 

  const health = document.getElementById("health").value;
 

  const symptoms = [];
  document.querySelectorAll('input[name="symptom"]:checked').forEach(cb => {
    symptoms.push(cb.value);
  });
 

  const details = document.getElementById("sympdetails").value.trim();
 

  function dobStatus() {
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
 

  const zipDisplay = zip ? zip.substring(0, 10) : "";
 

  const html = `
    <h2>Please Review This Information</h2>
    <table class="reviewTable">
      <thead>
        <tr><th>Field</th><th>Value</th><th>Status</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>Full Name</td>
          <td>${firstname} ${mi ? mi + "." : ""} ${lastname}</td>
          <td>${fieldStatus(firstname && lastname)}</td>
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
          <td>Address</td>
          <td>${addr1}${addr2 ? "<br>" + addr2 : ""}<br>${city}, ${stateVal} ${zipDisplay}</td>
          <td>${fieldStatus(addr1 && city && stateVal && zip)}</td>
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
          <td>${symptoms.length > 0 ? symptoms.join(", ") : "None selected"}</td>
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
 
  document.getElementById("reviewPanel").innerHTML = html;
  document.getElementById("reviewPanel").style.display = "block";
  document.getElementById("reviewPanel").scrollIntoView({ behavior: "smooth" });
}
 
// ─── FULL FORM VALIDATION ON SUBMIT ──────────────────────────────────────────
function validateAll(e) {
  const checks = [
    validateFirstName(),
    validateMI(),
    validateLastName(),
    validateEmail(),
    validatePhone(),
    validateZip(),
    validateUserID(),
    validatePassword(),
    validateConfirmPassword()
  ];
  if (checks.includes(false)) {
    e.preventDefault();
    alert("Please fix the errors highlighted on the form before submitting.");
  }
}
