function showTab(tabId) {

    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.add('hidden');
     });

    document.getElementById(tabId + '-content').classList.remove('hidden');
  

   let buttons = document.getElementsByClassName('tab-buttons')[0].getElementsByTagName('button');
   for (let i = 0; i < buttons.length; i++) {
     buttons[i].classList.remove('active-tab');
    }

    document.getElementById(tabId + '-button').classList.add('active-tab');
  }
  
   document.addEventListener('DOMContentLoaded', () => {
   showTab('tab1');
 });