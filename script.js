// const salaries1 = {
// Manager: { salary: 1000, tax: "10%" },
// Designer: { salary: 600, tax: "30%" },
// Artist: { salary: 1500, tax: "15%" },
// }
// const team1 = [
// { name: "Misha", specialization: "Manager" },
// { name: "Max", specialization: "Designer" },
// { name: "Vova", specialization: "Designer"},
// { name: "Leo", specialization: "Artist" },]
// let valuesKey;
// let keys = Object.keys(salaries1) //['Manager', 'Designer', 'Artist']
// let arrSpecialization = team1.map(el => el.specialization) //['Manager', 'Designer', 'Designer', 'Artist']
// let values = Object.values(salaries1)// [{…}, {…}, {…}]
// for (let key in values) {
//     valuesKey = values[key]
//     console.log(valuesKey)
// }
// const getProductPrice = valuesKey => {
   
//      let salaryWithTax =  valuesKey.map(item => (item.salary / ((100 - parseInt(item.tax)) / 100)))
// 	        return  console.log(Math.round(salaryWithTax))
//  }



//  for (let i = 0; i < arrSpecialization.length; i++){
//     let arrCurrent = arrSpecialization[i]
//     if (keys.includes(arrCurrent)) {
// 	    getProductPrice(valuesKey)
// 		}
// }


// function calculateTeamFinanceReport(salaries, team) {

// if (arrCurrent.includs(keys)) {
// 		// let percent = (product.salePercent*100)/product.price;
// 		// 		productPrice -= percent;
//         console.log('hi')
// 		}
// }

// const financeReport1 = calculateTeamFinanceReport(salaries1, team1)
// console.log(JSON.stringify(financeReport1))




const salaries1 = {
Manager: { salary: 1000, tax: "10%" },
Designer: { salary: 600, tax: "30%" },
Artist: { salary: 1500, tax: "15%" },
}
const team1 = [
{ name: "Misha", specialization: "Manager" },
{ name: "Max", specialization: "Designer" },
{ name: "Vova", specialization: "Designer"},
{ name: "Leo", specialization: "Artist" },]


let valuesKey;
let keys = Object.keys(salaries1) //['Manager', 'Designer', 'Artist']
let arrSpecialization = team1.map(el => el.specialization) //['Manager', 'Designer', 'Designer', 'Artist']
let values = Object.values(salaries1)// [{…}, {…}, {…}]



 function calculateTeamFinanceReport(salaries, team) {
     for (let key in values) {
         valuesKey = values[key]

         const getSalary = function (valuesKey) {
             let salaryWithTaxFormula= (valuesKey.salary / ((100 - parseInt(valuesKey.tax)) / 100))
           let salaryWithTax = (Math.round(salaryWithTaxFormula))
             return salaryWithTax
         }
         for (let key in arrSpecialization) {
             let arrCurrent = arrSpecialization[key]
             if (keys.includes(arrCurrent)) {
                 getSalary(valuesKey)
             }
   return `totalBudgetTeam: , totalBudgetProgger: , totalBudgetTester:`     
  
         }
     }
     
    
}
const financeReport1 = calculateTeamFinanceReport(salaries1, team1)
console.log(JSON.stringify(financeReport1))