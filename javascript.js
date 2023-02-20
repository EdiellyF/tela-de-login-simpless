
function logar() {
    const ADMIN_LOGIN = "admin";
    const ADMIN_PASSWORD = "admin";
    
    // Obter os campos de login e senha
    const loginInput = document.querySelector("#login");
    const senhaInput = document.querySelector("#senha");
    
    // Validar se os campos de entrada estão preenchidos
    if (!loginInput.value || !senhaInput.value) {
      alert("Por favor, preencha os campos de login e senha.");
      return;
    }
  
    // Validar se as credenciais estão corretas
    if (loginInput.value === ADMIN_LOGIN && senhaInput.value === ADMIN_PASSWORD) {
      location.href = "home.html";
    } else {
      alert("As credenciais fornecidas estão incorretas. Por favor, tente novamente.");
    }
  }
  