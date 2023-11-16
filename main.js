document.getElementById('uploadForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const popup = document.getElementById('popup');
  popup.style.display = 'block'; // Display the popup when the form is submitted
});

function uploadData() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
  const excelFile = document.getElementById('excelFile').files[0];
  const selectedDate = document.getElementById('selectedDate').value;
  const user_id = document.getElementById('userId').value;
  const password = document.getElementById('password').value;

  // Check if fields are empty
  if (!excelFile || !user_id || !password) {
    alert('All fields are required.');
    return;
  }

  // Close the popup after getting the values
  const popup = document.getElementById('popup');
  popup.style.display = 'none';

  const formData = new FormData();
  formData.append('excelFile', excelFile);
  formData.append('selectedDate', selectedDate);

  fetch('https://asia-south1-dailyplpublish.cloudfunctions.net/publishPL', {
    method: 'POST',
    body: formData,
    headers: {
      'x-auth-user-id': user_id,
      'x-auth-password': password
    },
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    alert('Upload successful!');
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error uploading file. Please try again.');
  });
}
