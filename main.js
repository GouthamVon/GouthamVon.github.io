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

  fetch('YOUR_API_GATEWAY_ENDPOINT', {
    method: 'POST',
    body: formData,
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
