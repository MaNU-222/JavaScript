let medications = {
  'Lactated Ringers' :{'id': '13ab7', 'amount': 100, 'amountType': 'L', 'expDate': '12/30/2029'},
  'Levothyroxine' :{'id': 'at342', 'amount': 2000, 'amountType': 'ct', 'expDate': '03/18/2021'},
  'Resuvastatin' :{'id': 'gr5423', 'amount': 1500, 'amountType': 'ct', 'expDate': '09/01/2020'},
  'Albuterol' :{'id': 'irg233', 'amount': 3500, 'amountType': 'LL', 'expDate': '03/04/2040'},
  'Esomeprazole' :{'id':'3af23', 'amount':3453, 'amountType': 'ct', 'expDate': '09/05/2034'}
}

// this print the key Levothyroxine and all value attach
let amedications = medications['Levothyroxine']
console.log(amedications)



// let aName = medications[1][0]
// let anAmount = medications[1][0]
// let anId = medications[2][0]
// let anExpDate = medications[3][0]



// this print only the amount of Albuterol
let dateOfDrug = medications['Albuterol']['amount'] 
console.log(dateOfDrug)

// this change the amount of Albuterol
let changeAmt= medications['Albuterol']['amount'] = 4000
console.log(changeAmt)

// this uses Dot notation.......
// instead to use the bracket[], we can use the dot. notation to do that
let mm = medications.Esomeprazole
console.log(mm)
let dot = medications.Esomeprazole.amount = 4000
console.log(dot)

