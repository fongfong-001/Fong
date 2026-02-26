document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var fullname = document.getElementById("fullname").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var salary = document.getElementById("salary").value;
  var dob = document.getElementById("dob").value;
  var position = document.getElementById("position").value;
  var description = document.getElementById("description").value;
  var salary = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(salary);
  document.getElementById("result").innerHTML = `
   
   <div class="alert alert-success">
   <button type="button" class="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="alert"></button>
    <h5 class="text-primary">Submit result information!</h5>
    <p><strong>Fullname    :</strong>${fullname}</p>
    <p><strong>Gender      :</strong>${gender}</p>
    <p><strong>Salary      :</strong>${salary}</p>
    <p><strong>DateOfBirth :</strong>${dob}</p>
    <p><strong>Position    :</strong>${position}</p>
    <p><strong>Description :</strong>${description}</p>


   </div>
   
   
   `;
});
