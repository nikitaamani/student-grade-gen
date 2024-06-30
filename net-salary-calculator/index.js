function calculateNetSalary(basicSalary, benefits) {
    // Input validation (optional)
    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
      return "Invalid input. Please enter positive numbers for basic salary and benefits.";
    }
  
    // Gross Salary
    const grossSalary = basicSalary + benefits;
  
    // NHIF Deduction (assuming table-based rates)
    let nhifDeduction;
    if (grossSalary <= 5999) {
        nhifDeduction = 150;
      } else if (grossSalary <= 7999) {
        nhifDeduction = 300;
      } else if (grossSalary <= 11999) {
        nhifDeduction = 400;
      } else if (grossSalary <= 14999) {
        nhifDeduction = 500;
      } else if (grossSalary <= 19999) {
        nhifDeduction = 600;
      } else if (grossSalary <= 24999) {
        nhifDeduction = 750;
      } else if (grossSalary <= 29999) {
        nhifDeduction = 850;
      } else if (grossSalary <= 34999) {
        nhifDeduction = 900;
      } else if (grossSalary <= 39999) {
        nhifDeduction = 950;
      } else if (grossSalary <= 44999) {
        nhifDeduction = 1000;
      } else if (grossSalary <= 49999) {
        nhifDeduction = 1100;
      } else if (grossSalary <= 59999) {
        nhifDeduction = 1200;
      } else if (grossSalary <= 69999) {
        nhifDeduction = 1300;
      } else if (grossSalary <= 79999){
        nhifDeduction = 1400;
      } else if (grossSalary <= 89999){
        nhifDeduction = 1500;
      } else if (grossSalary <= 99999){
        nhifDeduction = 1600;
      }
      else {
        nhifDeduction = 1700;
      }    
  
    // NSSF Deduction (assuming 12% of pensionable income, split equally)
    const nssfRate = 0.12;
    const nssfDeduction = nssfRate * basicSalary / 2; // Assuming basic salary is pensionable
  
    // PAYE Tax Calculation (guide user and prompt for taxable income)
    console.log("**PAYE Calculation:**");
    console.log("Please visit the KRA website (https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye) to calculate your PAYE based on your monthly taxable income.");
    console.log("After using the KRA PAYE calculator, enter your calculated PAYE amount below:");
  
    //const payee = parseFloat(prompt("Enter your calculated PAYE amount (Ksh): "));
    const payee = 17559.05 //Enter your calculated PAYE amount
  
    // Net Salary
    const netSalary = grossSalary - nhifDeduction - nssfDeduction - payee;
  
    return {
      grossSalary: grossSalary,
      nhifDeduction: nhifDeduction,
      nssfDeduction: nssfDeduction,
      payee: payee,
      netSalary: netSalary,
    };
  }
  
  // Get user input for basic salary and benefits
  //const basicSalary = parseFloat(prompt("Enter basic salary: "));
  //const benefits = parseFloat(prompt("Enter benefits: "));
  const basicSalary = 80000//Enter basic salary
  const benefits = 5000//Enter benfits
  
  // Calculate and display net salary details
  const salaryData = calculateNetSalary(basicSalary, benefits);
  console.log("Net Salary Breakdown:");
  console.log(`Gross Salary: Ksh ${salaryData.grossSalary.toFixed(2)}`);
  console.log(`NHIF Deduction: Ksh ${salaryData.nhifDeduction.toFixed(2)}`);
  console.log(`NSSF Deduction: Ksh ${salaryData.nssfDeduction.toFixed(2)}`);
  console.log(`PAYE: Ksh ${salaryData.payee.toFixed(2)}`);
  console.log(`Net Salary: Ksh ${salaryData.netSalary.toFixed(2)}`);
  