// ============================================================
// 1. DADOS INICIAIS (DATASETS)
// ============================================================
const dadosGovernamentais = [
    { orgao: "Polícia Civil", data: "01/01/2024", valor: 5500, status: "sucesso" },
    { orgao: "Polícia Rodoviária Federal", data: "02/01/2024", valor: 6000, status: "falha", motivo: "Problemas técnicos" },
    { orgao: "Polícia Militar", data: "03/01/2024", valor: 4500, status: "sucesso" },
    { orgao: "Corpo de Bombeiros", data: "04/01/2024", valor: 7000, status: "sucesso" },
    { orgao: "Guarda Municipal", data: "05/01/2024", valor: 3500, status: "falha", motivo: "Documentação incompleta" },
    { orgao: "Receita Federal", data: "06/01/2024", valor: 8000, status: "sucesso" },
    { orgao: "Ministério Público", data: "07/01/2024", valor: 9000, status: "falha", motivo: "Erro no sistema" },
    { orgao: "Defesa Civil", data: "08/01/2024", valor: 4000, status: "sucesso" },
    { orgao: "Detran", data: "09/01/2024", valor: 5000, status: "sucesso" },
    { orgao: "Polícia Federal", data: "10/01/2024", valor: 6500, status: "falha", motivo: "Falta de recursos" },
    { orgao: "Ibama", data: "11/01/2024", valor: 5500, status: "sucesso" },
    { orgao: "Anvisa", data: "12/01/2024", valor: 6000, status: "sucesso" },
    { orgao: "Inmetro", data: "13/01/2024", valor: 3000, status: "falha", motivo: "Dados incorretos" },
    { orgao: "Cetesb", data: "14/01/2024", valor: 7000, status: "sucesso" },
    { orgao: "Susep", data: "15/01/2024", valor: 8000, status: "falha", motivo: "Problemas técnicos" },
    { orgao: "Polícia Civil", data: "16/01/2024", valor: 5200, status: "sucesso" },
    { orgao: "Polícia Rodoviária Federal", data: "17/01/2024", valor: 6100, status: "falha", motivo: "Erro humano" },
    { orgao: "Polícia Militar", data: "18/01/2024", valor: 4600, status: "sucesso" },
    { orgao: "Corpo de Bombeiros", data: "19/01/2024", valor: 7100, status: "sucesso" },
    { orgao: "Guarda Municipal", data: "20/01/2024", valor: 3600, status: "falha", motivo: "Sistema fora do ar" },
    { orgao: "Receita Federal", data: "21/01/2024", valor: 8100, status: "sucesso" },
    { orgao: "Ministério Público", data: "22/01/2024", valor: 9100, status: "falha", motivo: "Recursos insuficientes" },
    { orgao: "Defesa Civil", data: "23/01/2024", valor: 4100, status: "sucesso" },
    { orgao: "Detran", data: "24/01/2024", valor: 5100, status: "sucesso" },
    { orgao: "Polícia Federal", data: "25/01/2024", valor: 6600, status: "falha", motivo: "Problemas técnicos" },
    { orgao: "Ibama", data: "26/01/2024", valor: 5600, status: "sucesso" },
    { orgao: "Anvisa", data: "27/01/2024", valor: 6100, status: "sucesso" },
    { orgao: "Inmetro", data: "28/01/2024", valor: 3100, status: "falha", motivo: "Dados incorretos" },
    { orgao: "Cetesb", data: "29/01/2024", valor: 7100, status: "sucesso" },
    { orgao: "Susep", data: "30/01/2024", valor: 8100, status: "falha", motivo: "Problemas técnicos" },
    { orgao: "Polícia Civil", data: "31/01/2024", valor: 5300, status: "sucesso" },
    { orgao: "Polícia Rodoviária Federal", data: "01/01/2024", valor: 6200, status: "falha", motivo: "Erro humano" },
    { orgao: "Polícia Militar", data: "02/01/2024", valor: 4700, status: "sucesso" },
    { orgao: "Corpo de Bombeiros", data: "03/01/2024", valor: 7200, status: "sucesso" },
    { orgao: "Guarda Municipal", data: "04/01/2024", valor: 3700, status: "falha", motivo: "Sistema fora do ar" },
    { orgao: "Receita Federal", data: "05/01/2024", valor: 8200, status: "sucesso" },
    { orgao: "Ministério Público", data: "06/01/2024", valor: 9200, status: "falha", motivo: "Recursos insuficientes" },
    { orgao: "Defesa Civil", data: "07/01/2024", valor: 4200, status: "sucesso" },
    { orgao: "Detran", data: "08/01/2024", valor: 5200, status: "sucesso" },
    { orgao: "Polícia Federal", data: "09/01/2024", valor: 6700, status: "falha", motivo: "Problemas técnicos" },
    { orgao: "Ibama", data: "10/01/2024", valor: 5700, status: "sucesso" },
    { orgao: "Anvisa", data: "11/01/2024", valor: 6200, status: "sucesso" },
    { orgao: "Inmetro", data: "12/01/2024", valor: 3200, status: "falha", motivo: "Dados incorretos" },
    { orgao: "Cetesb", data: "13/01/2024", valor: 7200, status: "sucesso" },
    { orgao: "Susep", data: "14/01/2024", valor: 8200, status: "falha", motivo: "Problemas técnicos" },
    { orgao: "Polícia Civil", data: "15/01/2024", valor: 5400, status: "sucesso" },
    { orgao: "Polícia Rodoviária Federal", data: "16/01/2024", valor: 6300, status: "falha", motivo: "Erro humano" },
    { orgao: "Polícia Militar", data: "17/01/2024", valor: 4800, status: "sucesso" },
    { orgao: "Corpo de Bombeiros", data: "18/01/2024", valor: 7300, status: "sucesso" },
    { orgao: "Guarda Municipal", data: "19/01/2024", valor: 3800, status: "falha", motivo: "Sistema fora do ar" },
    { orgao: "Receita Federal", data: "20/01/2024", valor: 8300, status: "sucesso" },
    { orgao: "Ministério Público", data: "21/01/2024", valor: 9300, status: "falha", motivo: "Recursos insuficientes" },
    { orgao: "Defesa Civil", data: "22/01/2024", valor: 4300, status: "sucesso" },
    { orgao: "Detran", data: "23/01/2024", valor: 5300, status: "sucesso" },
    { orgao: "Polícia Federal", data: "24/01/2024", valor: 6800, status: "falha", motivo: "Problemas técnicos" },
    { orgao: "Ibama", data: "25/01/2024", valor: 5800, status: "sucesso" },
    { orgao: "Anvisa", data: "26/01/2024", valor: 6300, status: "sucesso" },
    { orgao: "Inmetro", data: "27/01/2024", valor: 3300, status: "falha", motivo: "Dados incorretos" },
    { orgao: "Cetesb", data: "28/01/2024", valor: 7300, status: "sucesso" },
    { orgao: "Susep", data: "29/01/2024", valor: 8300, status: "falha", motivo: "Problemas técnicos" },
    { orgao: "Polícia Civil", data: "30/01/2024", valor: 5500, status: "sucesso" },
    { orgao: "Polícia Rodoviária Federal", data: "31/01/2024", valor: 6400, status: "falha", motivo: "Erro humano" },
    { orgao: "Polícia Militar", data: "01/01/2024", valor: 4900, status: "sucesso" },
    { orgao: "Corpo de Bombeiros", data: "02/01/2024", valor: 7400, status: "sucesso" },
    { orgao: "Guarda Municipal", data: "03/01/2024", valor: 3900, status: "falha", motivo: "Sistema fora do ar" },
    { orgao: "Receita Federal", data: "04/01/2024", valor: 8400, status: "sucesso" },
    { orgao: "Ministério Público", data: "05/01/2024", valor: 9400, status: "falha", motivo: "Recursos insuficientes" },
    { orgao: "Defesa Civil", data: "06/01/2024", valor: 4400, status: "sucesso" },
    { orgao: "Detran", data: "07/01/2024", valor: 5400, status: "sucesso" },
    { orgao: "Polícia Federal", data: "08/01/2024", valor: 6900, status: "falha", motivo: "Problemas técnicos" },
    { orgao: "Ibama", data: "09/01/2024", valor: 5900, status: "sucesso" },
    { orgao: "Anvisa", data: "10/01/2024", valor: 6400, status: "sucesso" },
    { orgao: "Inmetro", data: "11/01/2024", valor: 3400, status: "falha", motivo: "Dados incorretos" },
    { orgao: "Cetesb", data: "12/01/2024", valor: 7400, status: "sucesso" },
    { orgao: "Susep", data: "13/01/2024", valor: 8400, status: "falha", motivo: "Problemas técnicos" },
    { orgao: "Polícia Civil", data: "14/01/2024", valor: 5600, status: "sucesso" },
    { orgao: "Polícia Rodoviária Federal", data: "15/01/2024", valor: 6500, status: "falha", motivo: "Erro humano" },
    { orgao: "Polícia Militar", data: "16/01/2024", valor: 5000, status: "sucesso" },
    { orgao: "Corpo de Bombeiros", data: "17/01/2024", valor: 7500, status: "sucesso" },
    { orgao: "Guarda Municipal", data: "18/01/2024", valor: 4000, status: "falha", motivo: "Sistema fora do ar" },
    { orgao: "Receita Federal", data: "19/01/2024", valor: 8500, status: "sucesso" },
    { orgao: "Ministério Público", data: "20/01/2024", valor: 9500, status: "falha", motivo: "Recursos insuficientes" },
    { orgao: "Defesa Civil", data: "21/01/2024", valor: 4500, status: "sucesso" },
    { orgao: "Detran", data: "22/01/2024", valor: 5500, status: "sucesso" },
    { orgao: "Polícia Federal", data: "23/01/2024", valor: 7000, status: "falha", motivo: "Problemas técnicos" },
    { orgao: "Ibama", data: "24/01/2024", valor: 6000, status: "sucesso" },
    { orgao: "Anvisa", data: "25/01/2024", valor: 6500, status: "sucesso" },
    { orgao: "Inmetro", data: "26/01/2024", valor: 3500, status: "falha", motivo: "Dados incorretos" },
    { orgao: "Cetesb", data: "27/01/2024", valor: 7500, status: "sucesso" },
    { orgao: "Susep", data: "28/01/2024", valor: 8500, status: "falha", motivo: "Problemas técnicos" },
    { orgao: "Polícia Civil", data: "29/01/2024", valor: 5700, status: "sucesso" },
    { orgao: "Polícia Rodoviária Federal", data: "30/01/2024", valor: 6600, status: "falha", motivo: "Erro humano" },
    { orgao: "Polícia Militar", data: "31/01/2024", valor: 5100, status: "sucesso" }
];

const testeplottist = [ 
    { orgao: "MEC", data: "01/01/2024", valor: 500.00, status: "sucesso" },
    { orgao: "Ministério da Saúde", data: "03/01/2024", valor: 750.00, status: "sucesso" },
    { orgao: "MEC", data: "05/01/2024", valor: 1000.00, status: "sucesso" },
    { orgao: "Ministério da Educação", data: "08/01/2024", valor: 600.00, status: "sucesso" },
    { orgao: "Ministério da Saúde", data: "10/01/2024", valor: 900.00, status: "sucesso" },
    { orgao: "Ministério da Educação", data: "12/01/2024", valor: 300.00, status: "falha", motivo: "dados inválidos" },
    { orgao: "Ministério da Saúde", data: "15/01/2024", valor: 1200.00, status: "sucesso" },
    { orgao: "MEC", data: "17/01/2024", valor: 800.00, status: "falha", motivo: "falta de verba" },
    { orgao: "Ministério da Educação", data: "20/01/2024", valor: 400.00, status: "falha", motivo: "falta de limite" },
    { orgao: "MEC", data: "22/01/2024", valor: 1100.00, status: "falha" } // Item inválido (Sem motivo)
];

const termosInvalidos = [
    "sem motivo",
    "nao informado",
    "n/a",
    "indisponivel"
];

// =======================================================================
// AQUI COMEÇA O PROCESSO DE LIMPEZA E CRIAÇÃO DA BASE VÁLIDA (HU 5 & 6)
// =======================================================================

console.log("\n==============================================");
console.log("INÍCIO DO PROCESSAMENTO: HU 5 e HU 6");
console.log("==============================================");

// 1. CONCATENAÇÃO
const dadosCombinados = [...dadosGovernamentais, ...testeplottist];

// 2. DETECÇÃO DE INVÁLIDOS (HU 5 - Apenas para relatório)
const invalidas = dadosCombinados.filter(item => {
    const errosiste = item.status === "falha";
    const motivoLimpo = String(item.motivo || "").toLowerCase().trim();
    const motivoInvalido = motivoLimpo === "" || termosInvalidos.includes(motivoLimpo);
    return errosiste && motivoInvalido;
});

console.log(`Dados encontrados e inválidos (HU 5): ${invalidas.length}`);
if (invalidas.length > 0) {
    console.log("Existem repasses com falha sem motivo especificado:");
    invalidas.forEach(item => {  
        console.log(`Órgão: ${item.orgao}, Data: ${item.data}, Valor: R$ ${item.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
    });
} else {
    console.log("Nenhum repasse com falha sem motivo.");
}

// 3. LIMPEZA E CRIAÇÃO DA VARIÁVEL 'validos' (HU 6)
// Usamos 'let' para poder transformar logo abaixo
let validos = dadosCombinados.filter(item => {
    const errosiste = item.status === "falha";
    const motivoLimpo = String(item.motivo || "").toLowerCase().trim(); 
    const motivoInvalido = motivoLimpo === "" || termosInvalidos.includes(motivoLimpo);
    const inconsistnte = errosiste && motivoInvalido;
    return !inconsistnte;
});

// 4. TRANSFORMAÇÃO (Renomeando Ministério da Educação -> MEC)
validos = validos.map(item => {
    if (item.orgao === "Ministério da Educação") {
        return { ...item, orgao: "MEC" };
    }
    return item; 
});

const descartadoscombinados = dadosCombinados.length - validos.length;
console.log(`\n--- RELATÓRIO DA BASE VÁLIDA ---`);
console.log(`Registros Combinados: ${dadosCombinados.length}`);
console.log(`Registros Válidos: ${validos.length}`);
console.log(`Registros Descartados: ${descartadoscombinados}`);
console.log("----------------------------------------------\n");


// =======================================================================
// A PARTIR DAQUI, TODAS AS ESTATÍSTICAS USAM A VARIÁVEL 'validos'
// =======================================================================

// USERCASE 1 - TOTALIZAÇÃO
const totalrepassess = validos.length; // CORRIGIDO: Usa 'validos'
console.log("-----USERCASE 1-----");
console.log("Total de repasses realizados (Base Válida):", totalrepassess);


// USERCASE 2 - SUCESSOS
const sucessos = validos.filter(repasses => repasses.status === "sucesso").length;
console.log("\n-----USERCASE 2-----");
console.log("----- O sistema deverá exibir um resumo dos repasses bem sucedidos -----");
console.log("1.a) Quantidade de repasses com sucesso:", sucessos);

console.log("1.b) Órgãos com repasses bem sucedido:");
const orgaosSucesso = validos
    .filter(repasses => repasses.status === "sucesso")
    .reduce((acc, repasses) => {
        acc[repasses.orgao] = (acc[repasses.orgao] || 0) + 1;
        return acc;
    }, {});
console.table(orgaosSucesso);

console.log("1.c) Valor total dos repasses com sucesso:");
const vtotalsucesso = validos.filter(repasses  => repasses.status === "sucesso").reduce((acc, repasses) => acc + repasses.valor, 0);
console.log( `Valor: R$ ${vtotalsucesso.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);

console.log("1.d) Quantidade de repasses com sucesso por órgão:");
const valorPorOrgao = validos
    .filter(r => r.status === "sucesso")
    .reduce((acc, r) => {
        acc[r.orgao] = (acc[r.orgao] || 0) + Number(r.valor || 0);
        return acc;
    }, {});

Object.entries(valorPorOrgao).forEach(([orgao, total]) => {
    console.log(`${orgao}: R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
});


// USERCASE 2 (CONTINUAÇÃO) - FALHAS
console.log("-------------------");
console.log("----- 2. Resumo dos repasses com falha -----");

const qtdfalha = validos.filter(repasses => repasses.status === "falha").length;
console.log("2.a) Quantidade de repasses com falha:", qtdfalha);

console.log("2.b) Quantidade total de repasses com falha por órgão:");
const oqntfalhaorgao = validos
    .filter(repasses => repasses.status === "falha")
    .reduce((acc, repasses) => {
        acc[repasses.orgao] = (acc[repasses.orgao] || 0) + 1;
        return acc;
    }, {});
console.table(oqntfalhaorgao);

console.log("2.c) Quantidade total de repasses com falha por motivo");
const qtdfalhamotivo = validos
    .filter(repasses => repasses.status === "falha")
    .reduce((acc, repasses) => {
        const motivo = repasses.motivo || "Motivo não especificado";
        acc[motivo] = (acc[motivo] || 0) + 1;
        return acc;
    }, {});
console.table(qtdfalhamotivo);

console.log("2.d) Valor total dos repasses com falha:");
const vtotalfalha = validos.filter(repasses => repasses.status === "falha").reduce((acc, repasses) => acc + repasses.valor, 0);
console.log( `Valor: R$ ${vtotalfalha.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);

console.log("2.e) Valor total dos repasses com falha por motivo:");
const motivofalhaorgao = validos
    .filter(r => r.status === "falha")
    .reduce((acc, r) => { 
        const motivo = r.motivo || "N/A";
        acc[motivo] = (acc[motivo] || 0) + Number(r.valor || 0);
        return acc;
    }, {});
Object.entries(motivofalhaorgao).forEach(([motivo, total]) => {
    console.log(`${motivo}: R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
});

console.log("2.f) Valor total dos repasses com falha por órgão:");
const valofalhaorgao = validos
    .filter(r => r.status === "falha")
    .reduce((acc, r) => {
        acc[r.orgao] = (acc[r.orgao] || 0) + Number(r.valor || 0);
        return acc;
    }, {});
Object.entries(valofalhaorgao).forEach(([orgao, total]) => {
    console.log(`${orgao}: R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
});


// USERCASE 3 - ESTATÍSTICAS AVANÇADAS
console.log('------------------------');
console.log("----- USERCASE 3 -----");

const repassesemordem = [...validos].sort((a, b) => a.valor - b.valor);
// Proteção caso a lista esteja vazia
if (repassesemordem.length > 0) {
    const minValor = repassesemordem[0].valor;
    const maxValor = repassesemordem[repassesemordem.length - 1].valor;

    const menoresTransicoes = validos.filter(r => r.valor === minValor);
    const maioresTransicoes = validos.filter(r => r.valor === maxValor);

    console.log("3.a) Repasses com menor valor:");
    menoresTransicoes.forEach(r => {
        console.log(`Órgão: ${r.orgao}, Data: ${r.data}, Status: ${r.status}, Valor: R$ ${r.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
    });

    console.log("3.b) Repasses com maior valor:");
    maioresTransicoes.forEach(r => {
        console.log(`Órgão: ${r.orgao}, Data: ${r.data}, Status: ${r.status}, Valor: R$ ${r.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
    });
}

console.log('3.c) Dia com maior numero de repasses:');
const diacomrepasses = {}; // CORRIGIDO: Nome da variável unificado para minúsculo
validos.forEach(r => {
    const dia = r.data;
    diacomrepasses[dia] = (diacomrepasses[dia] || 0) + 1;
});
const diaComMaisRepasses = Object.keys(diacomrepasses).reduce((a, b) => diacomrepasses[a] > diacomrepasses[b] ? a : b);
console.log(`${diaComMaisRepasses}: ${diacomrepasses[diaComMaisRepasses]} repasses`);


console.log("3.d) Órgão com maior quantidade de repasses:");
const qtdRepassesPorOrgao = validos.reduce((acc, r) => {
    acc[r.orgao] = (acc[r.orgao] || 0) + 1;
    return acc;
}, {});
const orgaoComMaisRepasses = Object.keys(qtdRepassesPorOrgao).reduce((a, b) => 
    qtdRepassesPorOrgao[a] > qtdRepassesPorOrgao[b] ? a : b
);
console.log(`${orgaoComMaisRepasses}: ${qtdRepassesPorOrgao[orgaoComMaisRepasses]} repasses`);


console.log("3.e) Orgao com mais repasses de sucesso:");
const qtdRepassesSucessoPorOrgao = validos
    .filter(r => r.status === "sucesso").reduce((acc, r) => {
        acc[r.orgao] = (acc[r.orgao] || 0) + 1;
        return acc;
    }, {});
// Proteção extra: verifica se existe algum sucesso antes de reduzir
if (Object.keys(qtdRepassesSucessoPorOrgao).length > 0) {
    const orgaoComMaisRepassesSucesso = Object.keys(qtdRepassesSucessoPorOrgao).reduce((a, b) => 
        qtdRepassesSucessoPorOrgao[a] > qtdRepassesSucessoPorOrgao[b] ? a : b
    );
    console.log(`${orgaoComMaisRepassesSucesso}: ${qtdRepassesSucessoPorOrgao[orgaoComMaisRepassesSucesso]} repasses`);
} else {
    console.log("Nenhum repasse de sucesso encontrado.");
}


console.log ("3.f) Órgão com mais repasses de falha:");
const qtdRepassesFalhaPorOrgao = validos
    .filter(r => r.status === "falha").reduce((acc, r) => { acc[r.orgao] = (acc[r.orgao] || 0) + 1;
        return acc;
    }, {});

if (Object.keys(qtdRepassesFalhaPorOrgao).length > 0) {
    const orgaoComMaisRepassesFalha = Object.keys(qtdRepassesFalhaPorOrgao).reduce((a, b) => 
        qtdRepassesFalhaPorOrgao[a] > qtdRepassesFalhaPorOrgao[b] ? a : b
    );
    console.log(`${orgaoComMaisRepassesFalha}: ${qtdRepassesFalhaPorOrgao[orgaoComMaisRepassesFalha]} repasses`);
} else {
    console.log("Nenhuma falha encontrada.");
}


console.log("3.g) Motivo de falha com mais repasses");
const Maiorqntdmotivo = {}; // CORRIGIDO: Nome da variável unificado
validos.filter(r => r.status === "falha" && r.motivo).forEach(r => {
    Maiorqntdmotivo[r.motivo] = (Maiorqntdmotivo[r.motivo] || 0) + 1;
});
if (Object.keys(Maiorqntdmotivo).length > 0) {
    const motivoComMaisRepasses = Object.keys(Maiorqntdmotivo).reduce((a, b) =>
        Maiorqntdmotivo[a] > Maiorqntdmotivo[b] ? a : b
    );
    console.log(`${motivoComMaisRepasses}: ${Maiorqntdmotivo[motivoComMaisRepasses]} repasses`);
} else {
    console.log("Nenhum motivo de falha registrado.");
}


// USERCASE 4 - BUSCA AUTOMÁTICA
console.log("------------------------");
console.log("----- USERCASE 4 -----");

const orgaoescolhido = "Polícia Rodoviária Federal";
console.log(`Inicio da busca para: ${orgaoescolhido}`);

const Orgaoalvo = validos.filter(r => r.orgao === orgaoescolhido);
if (Orgaoalvo.length > 0){
    Orgaoalvo.forEach(r => {
        // Correção no console.log para mostrar motivo ou N/A
        console.log(`Órgão: ${r.orgao}, Data: ${r.data}, Status: ${r.status}, Motivo: ${r.motivo || 'N/A'}, Valor: R$ ${r.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
    });
} else {
    console.log(`Nenhuma transação encontrado para o órgão: ${orgaoescolhido}`);
}

console.log("------------------------");
console.log("FIM DO PROCESSAMENTO");