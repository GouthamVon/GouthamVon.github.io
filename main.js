document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const popup = document.getElementById('popup');
    popup.style.display = 'block'; // Display the popup when the form is submitted
    const uploadform = document.getElementById('uploadForm');
    uploadform.style.display = 'none';
  });
});

function uploadData() {
  uploadform = document.getElementById('uploadForm');
  uploadform.style.display = 'block';
  popup.style.display = 'none';

  const excelFile = document.getElementById('excelFile');
  const selectedDate = document.getElementById('selectedDate');
  const user_id = document.getElementById('userId');
  const password = document.getElementById('password');

  // Check if fields are empty
  if (!excelFile || !user_id || !password) {
    alert('All fields are required.');
    return;
  }

  const formData = new FormData();
  formData.append('excelFile', excelFile.files[0]);
  formData.append('selectedDate', selectedDate.value);

  fetch('https://script.googleapis.com/v1/scripts/AKfycbywPGWDhfZHZ3xZ1fwHZumgkyygD8zbJuGfMSvcpMokwHU19mH5arGQI5tZbQ-hr3Nc:run', {
    method: 'POST',
    body: formData,
    headers: {
      'x-auth-user-id': user_id.value,
      'x-auth-password': password.value
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

  excelFile.files[0] = null;
  selectedDate.value = '';
  user_id.value = '';
  password.value = '';
}
