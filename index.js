document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Ngăn chặn form submit lại và reload trang

  // Lấy giá trị từ các input
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var interests = document.querySelectorAll('input[name="interests"]:checked');
  var favoriteColor = document.getElementById('favoriteColor').value;
  var birthDate = document.getElementById('birthDate').value;
  var skillLevel = document.getElementById('skillLevel').value;
  var country = document.getElementById('country').value;


  var userInfo = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    gender: gender ? gender.value : "",
    interests: Array.from(interests).map(item => item.value),
    favoriteColor: favoriteColor,
    birthDate: birthDate,
    skillLevel: skillLevel,
    country: country
  };

  console.log(userInfo);
});