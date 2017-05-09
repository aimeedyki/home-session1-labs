'use strict';

function school(rcNumber,profit,cOfOwnership){
    this.rcNumber = rcNumber;

     this.profit = profit ;

     this.cOfOwnership = cOfOwnership;
   }

school.admission = function(){
     return "admission list";
 }

school.teach = function(){
     return "teach students";
}
school.learn = function(){
     return "students learn";
}
school.getcertificate = function(yearsOfLearn, course){
  let cert = yearsOfLearn + course;
  if (yearsOfLearn < 4){
    return "Education in Progress"
  } else {
  return certificate;
  }
}
function Unilag(){
    school.certificate(this);
    this.certificate = function(){
     return uniLagCertificate;
 }
function faithMontessori(){
  this.learn = function(){
    return "faith Montesorri pupils learn";
  }
}
}