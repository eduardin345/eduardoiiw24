// Classe Veiculo (Classe Base)
class Veiculo {
    constructor(modelo, cor) {
        this.modelo = modelo;
        this.cor = cor;
        this.ligado = false;
        this.velocidade = 0;
    }

    ligar() {
        this.ligado = true;
        console.log(`${this.modelo} ligado.`);
        atualizarInformacoes();
    }

    desligar() {
        this.ligado = false;
        this.velocidade = 0;
        console.log(`${this.modelo} desligado.`);
        atualizarInformacoes();
    }

    acelerar(incremento) {
        if (this.ligado) {
            this.velocidade += incremento;
            console.log(`${this.modelo} acelerou para ${this.velocidade} km/h.`);
            atualizarInformacoes();
        } else {
            console.log(`${this.modelo} não pode acelerar. Está desligado.`);
        }
    }

    buzinar() {
        console.log('Beep beep!');
    }

    exibirInformacoes() {
        return `Modelo: ${this.modelo}, Cor: ${this.cor}, Ligado: ${this.ligado ? 'Sim' : 'Não'}, Velocidade: ${this.velocidade} km/h`;
    }
}

// Classe CarroEsportivo (Herda de Veiculo)
class CarroEsportivo extends Veiculo {
    constructor(modelo, cor, turbo = false) {
        super(modelo, cor);
        this.turbo = turbo;
    }

    ativarTurbo() {
        this.turbo = true;
        console.log('Turbo ativado!');
        atualizarInformacoes();
    }

    desativarTurbo() {
        this.turbo = false;
        console.log('Turbo desativado!');
        atualizarInformacoes();
    }

    exibirInformacoes() {
        return `${super.exibirInformacoes()}, Turbo: ${this.turbo ? 'Ativado' : 'Desativado'}`;
    }
}

// Classe Caminhao (Herda de Veiculo)
class Caminhao extends Veiculo {
    constructor(modelo, cor, capacidadeCarga, cargaAtual = 0) {
        super(modelo, cor);
        this.capacidadeCarga = capacidadeCarga;
        this.cargaAtual = cargaAtual;
    }

    carregar(peso) {
        if (this.cargaAtual + peso <= this.capacidadeCarga) {
            this.cargaAtual += peso;
            console.log(`Caminhão carregado com ${peso} kg. Carga atual: ${this.cargaAtual} kg.`);
            atualizarInformacoes();
        } else {
            console.log('Carga excedeu a capacidade máxima!');
        }
    }

    exibirInformacoes() {
        return `${super.exibirInformacoes()}, Capacidade de Carga: ${this.capacidadeCarga} kg, Carga Atual: ${this.cargaAtual} kg`;
    }
}

// Instâncias dos veículos
const meuCarro = new Veiculo('Sedan', 'Prata');
const meuCarroEsportivo = new CarroEsportivo('Super Carro', 'Vermelho');
const meuCaminhao = new Caminhao('Caminhãozão', 'Azul', 10000);

// Funções para mostrar/esconder telas
function mostrarTela(telaId) {
    document.getElementById('telaPrincipal').style.display = 'none';
    document.getElementById('telaCarro').style.display = 'none';
    document.getElementById('telaEsportivo').style.display = 'none';
    document.getElementById('telaCaminhao').style.display = 'none';
    document.getElementById(telaId).style.display = 'block';
}

// Funções para atualizar as informações dos veículos
function atualizarInfoCarro() {
    document.getElementById('infoCarro').textContent = meuCarro.exibirInformacoes();
}

function atualizarInfoEsportivo() {
    document.getElementById('infoEsportivo').textContent = meuCarroEsportivo.exibirInformacoes();
}

function atualizarInfoCaminhao() {
    document.getElementById('infoCaminhao').textContent = meuCaminhao.exibirInformacoes();
}

// Event Listeners para navegar entre as telas
document.getElementById('irParaCarro').addEventListener('click', () => {
    mostrarTela('telaCarro');
    atualizarInfoCarro();
});

document.getElementById('irParaEsportivo').addEventListener('click', () => {
    mostrarTela('telaEsportivo');
    atualizarInfoEsportivo();
});

document.getElementById('irParaCaminhao').addEventListener('click', () => {
    mostrarTela('telaCaminhao');
    atualizarInfoCaminhao();
});

document.getElementById('voltarParaGaragemCarro').addEventListener('click', () => {
    mostrarTela('telaPrincipal');
});

document.getElementById('voltarParaGaragemEsportivo').addEventListener('click', () => {
    mostrarTela('telaPrincipal');
});

document.getElementById('voltarParaGaragemCaminhao').addEventListener('click', () => {
    mostrarTela('telaPrincipal');
});

// Event Listeners para os botões de ação dos veículos
document.getElementById('ligarCarro').addEventListener('click', () => {
    meuCarro.ligar();
    atualizarInfoCarro();
});

document.getElementById('desligarCarro').addEventListener('click', () => {
    meuCarro.desligar();
    atualizarInfoCarro();
});

document.getElementById('acelerarCarro').addEventListener('click', () => {
    meuCarro.acelerar(10);
    atualizarInfoCarro();
});

document.getElementById('buzinarCarro').addEventListener('click', () => {
    meuCarro.buzinar();
});

document.getElementById('ligarEsportivo').addEventListener('click', () => {
    meuCarroEsportivo.ligar();
    atualizarInfoEsportivo();
});

document.getElementById('desligarEsportivo').addEventListener('click', () => {
    meuCarroEsportivo.desligar();
    atualizarInfoEsportivo();
});

document.getElementById('acelerarEsportivo').addEventListener('click', () => {
    meuCarroEsportivo.acelerar(10);
    atualizarInfoEsportivo();
});

document.getElementById('buzinarEsportivo').addEventListener('click', () => {
    meuCarroEsportivo.buzinar();
});

document.getElementById('ativarTurbo').addEventListener('click', () => {
    meuCarroEsportivo.ativarTurbo();
    atualizarInfoEsportivo();
});

document.getElementById('desativarTurbo').addEventListener('click', () => {
    meuCarroEsportivo.desativarTurbo();
    atualizarInfoEsportivo();
});

document.getElementById('ligarCaminhao').addEventListener('click', () => {
    meuCaminhao.ligar();
    atualizarInfoCaminhao();
});

document.getElementById('desligarCaminhao').addEventListener('click', () => {
    meuCaminhao.desligar();
    atualizarInfoCaminhao();
});

document.getElementById('acelerarCaminhao').addEventListener('click', () => {
    meuCaminhao.acelerar(10);
    atualizarInfoCaminhao();
});

document.getElementById('buzinarCaminhao').addEventListener('click', () => {
    meuCaminhao.buzinar();
});

document.getElementById('carregarCaminhao').addEventListener('click', () => {
    const pesoCarga = document.getElementById('pesoCarga').value;
    if (pesoCarga) {
        meuCaminhao.carregar(parseInt(pesoCarga));
        atualizarInfoCaminhao();
    }
});

// Função genérica para atualizar as informações do veículo
function atualizarInformacoes() {
    atualizarInfoCarro();
    atualizarInfoEsportivo();
    atualizarInfoCaminhao();
}

// Inicialização: Mostra a tela principal
mostrarTela('telaPrincipal');