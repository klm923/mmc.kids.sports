





function actRegist(event) {
    event.preventDefault(); // フォームの送信をキャンセル
    
    const form = document.getElementById('myFormEntry');
    const formData = new FormData(form);

    console.log('child1_grade: ' + formData.get('child1_grade'));
    
    document.body.style.cursor = 'wait'; // カーソルを砂時計に変える
    const btnRegist = document.getElementById('btnRegist');
    btnRegist.disabled = true;

    fetch('https://script.google.com/macros/s/AKfycbxBByhN2E2sePrNiKjrxDVOuFNbNlSqlhm6yBh-NBhL4y2DWYhVNzJSjszz87G8lJ7p/exec', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
    //   document.getElementById('detail_id').value = data.retID;
      alert(`ID=${data.retID}で登録しました！`);
      btnRegist.disabled = false;
      document.body.style.cursor = 'auto'; // カーソルを元に戻す
    });
  }
