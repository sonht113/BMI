
function Calculator() {
    let height = document.getElementById("height").value / 100;
    let weight = document.getElementById("weight").value;
    let result = document.querySelector('#result');
    let bmi = Math.round((weight / (height * height)) * 100) / 100;
    if(height === '' || weight === ''){
        alert('You must enter information!')
    }else if (height <= 0 || weight <= 0){
        alert('Height or Weight is illegal!')
    }else {
        if(bmi < 18.5){
            alert('Bạn khá gầy!!! Bồi bổ thêm nhá hí hí!!!')
            result.innerHTML = '=> Chỉ số khối cơ thể của bạn: ' + bmi;
            document.getElementById('tr1').style.background= 'red';
            document.getElementById('tr2').style.background= 'none';
            document.getElementById('tr3').style.background= 'none';
            document.getElementById('tr4').style.background= 'none';
            document.getElementById('tr5').style.background= 'none';
            document.getElementById('tr6').style.background= 'none';
        }else if(bmi >= 18.5 && bmi <= 24.9){
            alert('Bạn cân đối rồi đó!!! Cố gắng giữ gìn nhá !!!')
            result.innerHTML = '=> Chỉ số khối cơ thể của bạn: ' + bmi;
            document.getElementById('tr2').style.background= 'red';
            document.getElementById('tr1').style.background= 'none';
            document.getElementById('tr3').style.background= 'none';
            document.getElementById('tr4').style.background= 'none';
            document.getElementById('tr5').style.background= 'none';
            document.getElementById('tr6').style.background= 'none';
        }else if (bmi >= 25.0 && bmi <=29.9){
            alert('Bạn hơi béo rồi nhá!!! Cố gắng giảm cân nhá !!!')
            result.innerHTML = '=> Chỉ số khối cơ thể của bạn: ' + bmi;
            document.getElementById('tr3').style.background= 'red';
            document.getElementById('tr1').style.background= 'none';
            document.getElementById('tr2').style.background= 'none';
            document.getElementById('tr4').style.background= 'none';
            document.getElementById('tr5').style.background= 'none';
            document.getElementById('tr6').style.background= 'none';
        }else if (bmi >= 30 && bmi <= 34.9){
            alert('Bạn đã béo phì cấp độ 1 rồi nhá!!! Cố gắng giảm cân nhá !!!')
            result.innerHTML = '=> Chỉ số khối cơ thể của bạn: ' + bmi;
            document.getElementById('tr4').style.background= 'red';
            document.getElementById('tr1').style.background= 'none';
            document.getElementById('tr2').style.background= 'none';
            document.getElementById('tr3').style.background= 'none';
            document.getElementById('tr5').style.background= 'none';
            document.getElementById('tr6').style.background= 'none';
        }else if (bmi >= 35.0 && bmi <= 39.9){
            alert('Bạn béo phì cấp độ 2 rồi nhá!!! Cố gắng giảm cân nhá !!!')
            result.innerHTML = '=> Chỉ số khối cơ thể của bạn: ' + bmi;
            document.getElementById('tr5').style.background= 'red';
            document.getElementById('tr1').style.background= 'none';
            document.getElementById('tr2').style.background= 'none';
            document.getElementById('tr3').style.background= 'none';
            document.getElementById('tr4').style.background= 'none';
            document.getElementById('tr6').style.background= 'none';
        }else{
            alert('Bạn quá béo rồi nhá!!! Cố gắng giảm cân nhá !!! Nguy hiểm !')
            result.innerHTML = '=> Chỉ số khối cơ thể của bạn: ' + bmi;
            document.getElementById('tr6').style.background= 'red';
            document.getElementById('tr1').style.background= 'none';
            document.getElementById('tr2').style.background= 'none';
            document.getElementById('tr3').style.background= 'none';
            document.getElementById('tr4').style.background= 'none';
            document.getElementById('tr5').style.background= 'none';
        }
    }

    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
}