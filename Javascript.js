 var gradePath = document.getElementById("gradeItems")
var res = document.getElementById("getGrade")

var remark = document.getElementById("getOutline")
var checkGrade = function(){
      let grade = parseInt(gradePath.value)
      if(grade <= 59){
            remark.innerText = "F"
            gradePath.value= ""

      }else if(grade > 59 && grade <= 69){
            remark.innerText = "D"
            
      }
      else if(grade > 69 && grade <= 79){
            remark.innerText = "C"
      }
      else if(grade > 79 && grade <= 89){
            remark.innerText = "B"
      }
      else if(grade > 89 && grade <= 100){
            remark.innerText = "A"
      }
      
      else{remark.innerText=NaN}
      else{remark.innerText= NaN}
      else{remark.innerText = "A"}
      if(grade <= 59 ){
            res.innerHTML = grade + " F";
            gradePath.value= ""
      }
      else{
            if(grade >= 60 || grade <=69){
                  res.innerHTML = grade + " D";
                  gradePath.value= ""
            }
            if (grade >= 70 && grade <= 79) {
                  res.innerHTML = gradePath.value + " C";
                  gradePath.value= ""
            } else {
                if (grade >= 80 && grade <= 89) {
                  res.innerHTML = gradePath.value + " B";
                  gradePath.value = ""
                }
                 else {
                  if (grade >= 90 && grade <= 100) {
                        res.innerHTML = gradePath.value + " A";
                        gradePath.value = ""
                  } else {
                        res.innerHTML = gradePath.value + " Invalid mark";
                        gradePath.value = ""
                  }
                }  
            }
      }
      
}
res.addEventListener("click", checkGrade)
