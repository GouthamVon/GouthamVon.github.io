function uploadData() {
  const excelFile = document.getElementById('excelFile').files[0];
  const selectedDate = document.getElementById('selectedDate').value;

  if (!excelFile) {
    alert('Please select an Excel file.');
    return;
  }

  const formData = new FormData();
  formData.append('excelFile', excelFile);
  formData.append('selectedDate', selectedDate);

  fetch('https://asia-south1-dailyplpublish.cloudfunctions.net/publishPL', {
    method: 'POST',
    body: formData,
    headers: {
      'x-auth-token': token
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
