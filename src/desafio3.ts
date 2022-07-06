let botaoAtualizar:HTMLButtonElement = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar:HTMLButtonElement = document.getElementById('limpar-saldo') as HTMLButtonElement;
let somaInput:HTMLInputElement = document.getElementById('soma') as HTMLInputElement;
let campoSaldo:HTMLElement = document.getElementById('campo-saldo') as HTMLElement;

campoSaldo.innerHTML = "0";

function somarAoSaldo(soma: number): void {
    let lastValue:number = Number(campoSaldo.innerHTML);
    campoSaldo.innerHTML = '';
    campoSaldo.innerHTML += (lastValue + soma);
    somaInput.value = '';
    somaInput.focus();
}

function limparSaldo() {
    campoSaldo.innerHTML = '0';
}

botaoAtualizar?.addEventListener('click', () => {
    somarAoSaldo(Number(somaInput.value));
});

botaoLimpar?.addEventListener('click', () => {
    limparSaldo();
});