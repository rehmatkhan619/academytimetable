 
 const darkModeButton = document.getElementById('darkModeButton');
 const body = document.body;
 const table = document.querySelector('table');
 const thElements = document.querySelectorAll('th');
 const trElements = document.querySelectorAll('tr');
 const tdElements = document.querySelectorAll('td');
 const allTextElements = document.querySelectorAll('*');
 const header = document.querySelector('header');

 
 let isDarkMode = false;

 
 function toggleStyles() {
     if (isDarkMode) {
        
         body.style.backgroundColor = '';
         table.style.borderColor = '';
         thElements.forEach(th => {
             th.style.borderColor = '';
             th.style.color = '';
         });
         trElements.forEach(tr => {
             tr.style.borderColor = '';
             tr.style.color = '';
         });
         tdElements.forEach(td => {
             td.style.borderColor = ''; 
             td.style.color = ''; 
         });
         allTextElements.forEach(element => {
             element.style.color = '';
         });
         darkModeButton.style.backgroundColor = '';
         darkModeButton.style.color = '';
         header.style.backgroundColor = '';
         darkModeButton.innerText = 'Dark Mode';
     } else {
         
         body.style.backgroundColor = 'black';
         table.style.borderColor = 'white';
         thElements.forEach(th => {
             th.style.borderColor = 'white';
             th.style.color = 'white';
         });
         trElements.forEach(tr => {
             tr.style.borderColor = 'white';
             tr.style.color = 'white';
         });
         tdElements.forEach(td => {
             td.style.borderColor = 'white'; 
             td.style.color = 'white';
         });
         allTextElements.forEach(element => {
             element.style.color = 'white';
         });
         darkModeButton.style.backgroundColor = 'black';
         darkModeButton.style.color = 'white'; 
         header.style.backgroundColor = 'blue';
         darkModeButton.innerText = 'White Mode'; 
     }
    
     isDarkMode = !isDarkMode;
 }
 darkModeButton.addEventListener('click', toggleStyles);