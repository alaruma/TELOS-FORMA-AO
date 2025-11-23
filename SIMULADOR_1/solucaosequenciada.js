const dadosGovernamentais = [
    {
        orgao: "Polícia Civil",
        data: "01/01/2024",
        valor: 5500,
        status: "sucesso"
    },
    {
        orgao: "Polícia Rodoviária Federal",
        data: "02/01/2024",
        valor: 6000,
        status: "falha",
        motivo: "Problemas técnicos"
    },
    {
        orgao: "Polícia Militar",
        data: "03/01/2024",
        valor: 4500,
        status: "sucesso"
    },
    {
        orgao: "Corpo de Bombeiros",
        data: "04/01/2024",
        valor: 7000,
        status: "sucesso"
    },
    {
        orgao: "Guarda Municipal",
        data: "05/01/2024",
        valor: 3500,
        status: "falha",
        motivo: "Documentação incompleta"
    },
    {
        orgao: "Receita Federal",
        data: "06/01/2024",
        valor: 8000,
        status: "sucesso"
    },
    {
        orgao: "Ministério Público",
        data: "07/01/2024",
        valor: 9000,
        status: "falha",
        motivo: "Erro no sistema"
    },
    {
        orgao: "Defesa Civil",
        data: "08/01/2024",
        valor: 4000,
        status: "sucesso"
    },
    {
        orgao: "Detran",
        data: "09/01/2024",
        valor: 5000,
        status: "sucesso"
    },
    {
        orgao: "Polícia Federal",
        data: "10/01/2024",
        valor: 6500,
        status: "falha",
        motivo: "Falta de recursos"
    },
    {
        orgao: "Ibama",
        data: "11/01/2024",
        valor: 5500,
        status: "sucesso"
    },
    {
        orgao: "Anvisa",
        data: "12/01/2024",
        valor: 6000,
        status: "sucesso"
    },
    {
        orgao: "Inmetro",
        data: "13/01/2024",
        valor: 3000,
        status: "falha",
        motivo: "Dados incorretos"
    },
    {
        orgao: "Cetesb",
        data: "14/01/2024",
        valor: 7000,
        status: "sucesso"
    },
    {
        orgao: "Susep",
        data: "15/01/2024",
        valor: 8000,
        status: "falha",
        motivo: "Problemas técnicos"
    },
    {
        orgao: "Polícia Civil",
        data: "16/01/2024",
        valor: 5200,
        status: "sucesso"
    },
    {
        orgao: "Polícia Rodoviária Federal",
        data: "17/01/2024",
        valor: 6100,
        status: "falha",
        motivo: "Erro humano"
    },
    {
        orgao: "Polícia Militar",
        data: "18/01/2024",
        valor: 4600,
        status: "sucesso"
    },
    {
        orgao: "Corpo de Bombeiros",
        data: "19/01/2024",
        valor: 7100,
        status: "sucesso"
    },
    {
        orgao: "Guarda Municipal",
        data: "20/01/2024",
        valor: 3600,
        status: "falha",
        motivo: "Sistema fora do ar"
    },
    {
        orgao: "Receita Federal",
        data: "21/01/2024",
        valor: 8100,
        status: "sucesso"
    },
    {
        orgao: "Ministério Público",
        data: "22/01/2024",
        valor: 9100,
        status: "falha",
        motivo: "Recursos insuficientes"
    },
    {
        orgao: "Defesa Civil",
        data: "23/01/2024",
        valor: 4100,
        status: "sucesso"
    },
    {
        orgao: "Detran",
        data: "24/01/2024",
        valor: 5100,
        status: "sucesso"
    },
    {
        orgao: "Polícia Federal",
        data: "25/01/2024",
        valor: 6600,
        status: "falha",
        motivo: "Problemas técnicos"
    },
    {
        orgao: "Ibama",
        data: "26/01/2024",
        valor: 5600,
        status: "sucesso"
    },
    {
        orgao: "Anvisa",
        data: "27/01/2024",
        valor: 6100,
        status: "sucesso"
    },
    {
        orgao: "Inmetro",
        data: "28/01/2024",
        valor: 3100,
        status: "falha",
        motivo: "Dados incorretos"
    },
    {
        orgao: "Cetesb",
        data: "29/01/2024",
        valor: 7100,
        status: "sucesso"
    },
    {
        orgao: "Susep",
        data: "30/01/2024",
        valor: 8100,
        status: "falha",
        motivo: "Problemas técnicos"
    },
    {
        orgao: "Polícia Civil",
        data: "31/01/2024",
        valor: 5300,
        status: "sucesso"
    },
    {
        orgao: "Polícia Rodoviária Federal",
        data: "01/01/2024",
        valor: 6200,
        status: "falha",
        motivo: "Erro humano"
    },
    {
        orgao: "Polícia Militar",
        data: "02/01/2024",
        valor: 4700,
        status: "sucesso"
    },
    {
        orgao: "Corpo de Bombeiros",
        data: "03/01/2024",
        valor: 7200,
        status: "sucesso"
    },
    {
        orgao: "Guarda Municipal",
        data: "04/01/2024",
        valor: 3700,
        status: "falha",
        motivo: "Sistema fora do ar"
    },
    {
        orgao: "Receita Federal",
        data: "05/01/2024",
        valor: 8200,
        status: "sucesso"
    },
    {
        orgao: "Ministério Público",
        data: "06/01/2024",
        valor: 9200,
        status: "falha",
        motivo: "Recursos insuficientes"
    },
    {
        orgao: "Defesa Civil",
        data: "07/01/2024",
        valor: 4200,
        status: "sucesso"
    },
    {
        orgao: "Detran",
        data: "08/01/2024",
        valor: 5200,
        status: "sucesso"
    },
    {
        orgao: "Polícia Federal",
        data: "09/01/2024",
        valor: 6700,
        status: "falha",
        motivo: "Problemas técnicos"
    },
    {
        orgao: "Ibama",
        data: "10/01/2024",
        valor: 5700,
        status: "sucesso"
    },
    {
        orgao: "Anvisa",
        data: "11/01/2024",
        valor: 6200,
        status: "sucesso"
    },
    {
        orgao: "Inmetro",
        data: "12/01/2024",
        valor: 3200,
        status: "falha",
        motivo: "Dados incorretos"
    },
    {
        orgao: "Cetesb",
        data: "13/01/2024",
        valor: 7200,
        status: "sucesso"
    },
    {
        orgao: "Susep",
        data: "14/01/2024",
        valor: 8200,
        status: "falha",
        motivo: "Problemas técnicos"
    },
    {
        orgao: "Polícia Civil",
        data: "15/01/2024",
        valor: 5400,
        status: "sucesso"
    },
    {
        orgao: "Polícia Rodoviária Federal",
        data: "16/01/2024",
        valor: 6300,
        status: "falha",
        motivo: "Erro humano"
    },
    {
        orgao: "Polícia Militar",
        data: "17/01/2024",
        valor: 4800,
        status: "sucesso"
    },
    {
        orgao: "Corpo de Bombeiros",
        data: "18/01/2024",
        valor: 7300,
        status: "sucesso"
    },
    {
        orgao: "Guarda Municipal",
        data: "19/01/2024",
        valor: 3800,
        status: "falha",
        motivo: "Sistema fora do ar"
    },
    {
        orgao: "Receita Federal",
        data: "20/01/2024",
        valor: 8300,
        status: "sucesso"
    },
    {
        orgao: "Ministério Público",
        data: "21/01/2024",
        valor: 9300,
        status: "falha",
        motivo: "Recursos insuficientes"
    },
    {
        orgao: "Defesa Civil",
        data: "22/01/2024",
        valor: 4300,
        status: "sucesso"
    },
    {
        orgao: "Detran",
        data: "23/01/2024",
        valor: 5300,
        status: "sucesso"
    },
    {
        orgao: "Polícia Federal",
        data: "24/01/2024",
        valor: 6800,
        status: "falha",
        motivo: "Problemas técnicos"
    },
    {
        orgao: "Ibama",
        data: "25/01/2024",
        valor: 5800,
        status: "sucesso"
    },
    {
        orgao: "Anvisa",
        data: "26/01/2024",
        valor: 6300,
        status: "sucesso"
    },
    {
        orgao: "Inmetro",
        data: "27/01/2024",
        valor: 3300,
        status: "falha",
        motivo: "Dados incorretos"
    },
    {
        orgao: "Cetesb",
        data: "28/01/2024",
        valor: 7300,
        status: "sucesso"
    },
    {
        orgao: "Susep",
        data: "29/01/2024",
        valor: 8300,
        status: "falha",
        motivo: "Problemas técnicos"
    },
    {
        orgao: "Polícia Civil",
        data: "30/01/2024",
        valor: 5500,
        status: "sucesso"
    },
    {
        orgao: "Polícia Rodoviária Federal",
        data: "31/01/2024",
        valor: 6400,
        status: "falha",
        motivo: "Erro humano"
    },
    {
        orgao: "Polícia Militar",
        data: "01/01/2024",
        valor: 4900,
        status: "sucesso"
    },
    {
        orgao: "Corpo de Bombeiros",
        data: "02/01/2024",
        valor: 7400,
        status: "sucesso"
    },
    {
        orgao: "Guarda Municipal",
        data: "03/01/2024",
        valor: 3900,
        status: "falha",
        motivo: "Sistema fora do ar"
    },
    {
        orgao: "Receita Federal",
        data: "04/01/2024",
        valor: 8400,
        status: "sucesso"
    },
    {
        orgao: "Ministério Público",
        data: "05/01/2024",
        valor: 9400,
        status: "falha",
        motivo: "Recursos insuficientes"
    },
    {
        orgao: "Defesa Civil",
        data: "06/01/2024",
        valor: 4400,
        status: "sucesso"
    },
    {
        orgao: "Detran",
        data: "07/01/2024",
        valor: 5400,
        status: "sucesso"
    },
    {
        orgao: "Polícia Federal",
        data: "08/01/2024",
        valor: 6900,
        status: "falha",
        motivo: "Problemas técnicos"
    },
    {
        orgao: "Ibama",
        data: "09/01/2024",
        valor: 5900,
        status: "sucesso"
    },
    {
        orgao: "Anvisa",
        data: "10/01/2024",
        valor: 6400,
        status: "sucesso"
    },
    {
        orgao: "Inmetro",
        data: "11/01/2024",
        valor: 3400,
        status: "falha",
        motivo: "Dados incorretos"
    },
    {
        orgao: "Cetesb",
        data: "12/01/2024",
        valor: 7400,
        status: "sucesso"
    },
    {
        orgao: "Susep",
        data: "13/01/2024",
        valor: 8400,
        status: "falha",
        motivo: "Problemas técnicos"
    },
    {
        orgao: "Polícia Civil",
        data: "14/01/2024",
        valor: 5600,
        status: "sucesso"
    },
    {
        orgao: "Polícia Rodoviária Federal",
        data: "15/01/2024",
        valor: 6500,
        status: "falha",
        motivo: "Erro humano"
    },
    {
        orgao: "Polícia Militar",
        data: "16/01/2024",
        valor: 5000,
        status: "sucesso"
    },
    {
        orgao: "Corpo de Bombeiros",
        data: "17/01/2024",
        valor: 7500,
        status: "sucesso"
    },
    {
        orgao: "Guarda Municipal",
        data: "18/01/2024",
        valor: 4000,
        status: "falha",
        motivo: "Sistema fora do ar"
    },
    {
        orgao: "Receita Federal",
        data: "19/01/2024",
        valor: 8500,
        status: "sucesso"
    },
    {
        orgao: "Ministério Público",
        data: "20/01/2024",
        valor: 9500,
        status: "falha",
        motivo: "Recursos insuficientes"
    },
    {
        orgao: "Defesa Civil",
        data: "21/01/2024",
        valor: 4500,
        status: "sucesso"
    },
    {
        orgao: "Detran",
        data: "22/01/2024",
        valor: 5500,
        status: "sucesso"
    },
    {
        orgao: "Polícia Federal",
        data: "23/01/2024",
        valor: 7000,
        status: "falha",
        motivo: "Problemas técnicos"
    },
    {
        orgao: "Ibama",
        data: "24/01/2024",
        valor: 6000,
        status: "sucesso"
    },
    {
        orgao: "Anvisa",
        data: "25/01/2024",
        valor: 6500,
        status: "sucesso"
    },
    {
        orgao: "Inmetro",
        data: "26/01/2024",
        valor: 3500,
        status: "falha",
        motivo: "Dados incorretos"
    },
    {
        orgao: "Cetesb",
        data: "27/01/2024",
        valor: 7500,
        status: "sucesso"
    },
    {
        orgao: "Susep",
        data: "28/01/2024",
        valor: 8500,
        status: "falha",
        motivo: "Problemas técnicos"
    },
    {
        orgao: "Polícia Civil",
        data: "29/01/2024",
        valor: 5700,
        status: "sucesso"
    },
    {
        orgao: "Polícia Rodoviária Federal",
        data: "30/01/2024",
        valor: 6600,
        status: "falha",
        motivo: "Erro humano"
    },
    {
        orgao: "Polícia Militar",
        data: "31/01/2024",
        valor: 5100,
        status: "sucesso"
    },
   
];

// USERCASE 1 -
const totalrepassess = (dadosGovernamentais).length;
console.log("-----USERCASE 1-----");
console.log("Total de repassess realizados:", totalrepassess);

//USERCASE 2 -
// USERCASE 2


const sucessos = dadosGovernamentais.filter(repasses => repasses.status === "sucesso").length;
console.log("-----USERCASE 2-----");
console.log("----- O sistema deverá exibir um resumo dos repasses bem sucedidos. Esse resumo deve ter as seguintes informações:-----");
console.log("1.a) Quantidade de repassess com sucesso:", sucessos);

console.log("1.b) Órgãos com repassess bem sucedido:");
const orgaosSucesso = dadosGovernamentais
    .filter(repasses => repasses.status === "sucesso")
    .reduce((acc, repasses) => {
        acc[repasses.orgao] = (acc[repasses.orgao] || 0) + 1;
        return acc;
    }, {});
console.table(orgaosSucesso);

console.log("1.c) Valor total dos repassess com sucesso:");
const vtotalsucesso = dadosGovernamentais.filter(repasses  => repasses.status === "sucesso").reduce((acc, repasses) => acc + repasses.valor, 0);
console.log( `Valor: R$ ${vtotalsucesso.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);

console.log("1.d) Quantidade de repassess com sucesso por órgão:");

const valorPorOrgao = dadosGovernamentais
    .filter(r => r.status === "sucesso")
    .reduce((acc, r) => {
        acc[r.orgao] = (acc[r.orgao] || 0) + Number(r.valor || 0);
        return acc;
    }, {});

Object.entries(valorPorOrgao).forEach(([orgao, total]) => {
    console.log(`${orgao}: R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
});
 console.log("-------------------");
 console.log("-----2. O sistema deverá exibir um resumo dos repasses com falha. Esse resumo deve ter as seguintes informações:-----");

const qtdfalha = dadosGovernamentais.filter(repasses=> repasses.status === "falha").length;
console.log("2a) Quantidade de repassess com falha:", qtdfalha);

console.log("2.b) Quantidade total de repasses com falha por órgão:");
const oqntfalhaorgao = dadosGovernamentais
    .filter(repasses => repasses.status === "falha")
    .reduce((acc, repasses) => {
        acc[repasses.orgao] = (acc[repasses.orgao] || 0) + 1;
        return acc;
    }, {});

console.table(oqntfalhaorgao);

console.log("2 c)Quantidade total de repasses com falha por motivo");
const qtdfalhamotivo = dadosGovernamentais
    .filter(repasses => repasses.status === "falha")
    .reduce((acc, repasses) => {
        const motivo = repasses.motivo || "Motivo não especificado";
        acc[motivo] = (acc[motivo] || 0) + 1;
        return acc;
    }, {});
console.table(qtdfalhamotivo);


const vtotalfalha = dadosGovernamentais.filter(repasses=> repasses.status === "falha").reduce((acc, repasses) => acc + repasses.valor, 0);
console.log("2d)Valor total dos repassess com falha:")
console.log( `Valor: R$ ${vtotalfalha.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);

console.log("2e)Valor total dos repassess com falha por motivo:");
const motivofalhaorgao = dadosGovernamentais
    .filter(r => r.status === "falha")
    .reduce((acc, r) => { acc[r.motivo] = (acc[r.motivo] || 0) + Number(r.valor || 0);
        return acc;
    }, {});
Object.entries(motivofalhaorgao).forEach(([motivo, total]) => {
    console.log(`${motivo}: R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
});
    console.log( `Valor: R$ ${motivofalhaorgao.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);

console.log("2f)Valor total dos repassess com falha por órgão:");
const valofalhaorgao = dadosGovernamentais
    .filter(r => r.status === "falha")
    .reduce((acc, r) => {
        acc[r.orgao] = (acc[r.orgao] || 0) + Number(r.valor || 0);
        return acc;
    }, {});
    Object.entries(valofalhaorgao).forEach(([orgao, total]) => {
    console.log(`${orgao}: R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
});

    
console.log('------------------------');
console.log("----- USERCASE 3 -----");

const repassesemordem = [...dadosGovernamentais].sort((a, b) => a.valor - b.valor);
const  menortransicao = repassesemordem[0];
const maiortransicao = repassesemordem[repassesemordem.length - 1];

const minValor = repassesemordem[0].valor;
const maxValor = repassesemordem[repassesemordem.length - 1].valor;

const menoresTransicoes = dadosGovernamentais.filter(r => r.valor === minValor);
const maioresTransicoes = dadosGovernamentais.filter(r => r.valor === maxValor);

console.log("3.a) Repasses com menor valor:");
menoresTransicoes.forEach(r => {
    console.log(`Órgão: ${r.orgao}, Data: ${r.data}, Status: ${r.status}, Valor: R$ ${r.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
});

console.log("3.b) Repasses com maior valor:");
maioresTransicoes.forEach(r => {
    console.log(`Órgão: ${r.orgao}, Data: ${r.data}, Status: ${r.status}, Valor: R$ ${r.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
});

console.log('3.c)Dia com maior numero de repasses:');
const Diacomrepasses = {};
dadosGovernamentais.forEach(r => {
    const dia = r.data;
    Diacomrepasses[dia] = (Diacomrepasses[dia] || 0) + 1;
});
const diaComMaisRepasses = Object.keys(Diacomrepasses).reduce((a, b) => Diacomrepasses[a] > Diacomrepasses[b] ? a : b);
console.log(`${diaComMaisRepasses}: ${Diacomrepasses[diaComMaisRepasses]} repasses`);

console.log("3.d) Órgão com maior quantidade de repasses:");
const qtdRepassesPorOrgao = dadosGovernamentais.reduce((acc, r) => {
    acc[r.orgao] = (acc[r.orgao] || 0) + 1;
    return acc;
}, {});
const orgaoComMaisRepasses = Object.keys(qtdRepassesPorOrgao).reduce((a, b) => 
    qtdRepassesPorOrgao[a] > qtdRepassesPorOrgao[b] ? a : b
);
console.log(`${orgaoComMaisRepasses}: ${qtdRepassesPorOrgao[orgaoComMaisRepasses]} repasses`);

console.log("3.e) Orgao com mais repasses de sudesso:");
const qtdRepassesSucessoPorOrgao = dadosGovernamentais
    .filter(r => r.status === "sucesso").reduce((acc, r) => {
        acc[r.orgao] = (acc[r.orgao] || 0) + 1;
        return acc;
    }, {});
const orgaoComMaisRepassesSucesso = Object.keys(qtdRepassesSucessoPorOrgao).reduce((a, b) => 
    qtdRepassesSucessoPorOrgao[a] > qtdRepassesSucessoPorOrgao[b] ? a : b
);
console.log(`${orgaoComMaisRepassesSucesso}: ${qtdRepassesSucessoPorOrgao[orgaoComMaisRepassesSucesso]} repasses`);


console.log ("3.f) Órgão com mais repasses de falha:");
const qtdRepassesFalhaPorOrgao = dadosGovernamentais
    .filter(r => r.status === "falha").reduce((acc, r) => { acc[r.orgao] = (acc[r.orgao] || 0) + 1;
        return acc;
    }, {});
const orgaoComMaisRepassesFalha = Object.keys(qtdRepassesFalhaPorOrgao).reduce((a, b) => 
    qtdRepassesFalhaPorOrgao[a] > qtdRepassesFalhaPorOrgao[b] ? a : b
);
console.log(`${orgaoComMaisRepassesFalha}: ${qtdRepassesFalhaPorOrgao[orgaoComMaisRepassesFalha]} repasses`);   

console.log("3.g) Motivo de falha com mais repasses");
const Maiorqntdmotivo = {};
dadosGovernamentais.filter(r => r.status === "falha" && r.motivo).forEach(r => {
    Maiorqntdmotivo[r.motivo] = (Maiorqntdmotivo[r.motivo] || 0) + 1;
});
const motivoComMaisRepasses =
Object.keys(Maiorqntdmotivo).reduce((a, b) =>
    Maiorqntdmotivo[a] > Maiorqntdmotivo[b] ? a : b
);
console.log(`${motivoComMaisRepasses}: ${Maiorqntdmotivo[motivoComMaisRepasses]} repasses`);

console.log("------------------------");
console.log("----- USERCASE 4 -----");

const orgaoescolhido = "Polícia Rodoviária Federal";
console.log(`Inicio da busca para: ${orgaoescolhido}`);

const Orgaoalvo = dadosGovernamentais.filter(r => r.orgao === orgaoescolhido);
if (Orgaoalvo.length > 0){
    Orgaoalvo.forEach(r => {
        console.log(`Órgão: ${r.orgao}, Data: ${r.data}, Status: ${r.status}, Motivo: ${r.motivo || 'N/A'}, Valor: R$ ${r.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
    });
} else {
    console.log(`Nenhuma transação encontrado para o órgão: ${orgaoescolhido}`);
}

console.log("------------------------");
console.log("----- USERCASE 5 -----");

const testeplottist = [ {    orgao: "MEC",
        data: "01/01/2024",
        valor: 500.00,
        status: "sucesso"
    },
    {
        orgao: "Ministério da Saúde",
        data: "03/01/2024",
        valor: 750.00,
        status: "sucesso"
    },
    {
        orgao: "MEC",
        data: "05/01/2024",
        valor: 1000.00,
        status: "sucesso"
    },
    {
        orgao: "Ministério da Educação",
        data: "08/01/2024",
        valor: 600.00,
        status: "sucesso"
    },
    {
        orgao: "Ministério da Saúde",
        data: "10/01/2024",
        valor: 900.00,
        status: "sucesso"
    },
    {
        orgao: "Ministério da Educação",
        data: "12/01/2024",
        valor: 300.00,
        status: "falha",
        motivo: "dados inválidos"
    },
    {
        orgao: "Ministério da Saúde",
        data: "15/01/2024",
        valor: 1200.00,
        status: "sucesso"
    },
    {
        orgao: "MEC",
        data: "17/01/2024",
        valor: 800.00,
        status: "falha",
        motivo: "falta de verba"
    },
    {
        orgao: "Ministério da Educação",
        data: "20/01/2024",
        valor: 400.00,
        status: "falha",
        motivo: "falta de limite"
    },
    {
        orgao: "MEC",
        data: "22/01/2024",
        valor: 1100.00,
        status: "falha"
    }

];

const termosInvalidos = [
    "sem motivo",
    "nao informado",
    "n/a",
    "indisponivel"

];


const invalidas = testeplottist.filter(item => {
    const errosiste = item.status === "falha";
      
    const motivoLimpo = String(item.motivo || "").toLowerCase().trim();
        
    const motivoInvalido = motivoLimpo === "" || termosInvalidos.includes(motivoLimpo);
          return errosiste && motivoInvalido;
});

console.log(`Dados encontrados e inválidos: ${invalidas.length}`);

if (invalidas.length > 0) {
    console.log("Existem repasses com falha sem motivo especificado:");
    invalidas.forEach(item => {  
        console.log(`Órgão: ${item.orgao}, Data: ${item.data}, Valor: R$ ${item.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
    });
} else {
    console.log("Nenhum repasse com falha sem motivo.");
}

console.log("------------------------");


const dadosValidosoriginais = dadosGovernamentais.filter(item => {
    const errosiste = item.status === "falha";
    const motivoLimpo = String(item.motivo || "").toLowerCase().trim();
    const motivoInvalido = motivoLimpo === "" || termosInvalidos.includes(motivoLimpo);
    const inconsistnte = errosiste && motivoInvalido;
    return !inconsistnte;
});

const descartados = dadosGovernamentais.length - dadosValidosoriginais.length;
console.log(`\n==============================================`);
console.log("HU 6: dados originais");
console.log(`Registros Originais: ${dadosGovernamentais.length}`);
console.log(`Registros Válidos: ${dadosValidosoriginais.length}`);
console.log(`Registros Descartados: ${descartados}`);

if (descartados === 0) {
    console.log(" Base de dados íntegra. Nenhuma limpeza necessária.");
} else {
    console.log(` Foram removidos ${descartados} registros inválidos da análise.`);
}

console.log("-=========================================");

console.log("----- BASE DE DADOS COncatenados -----");


const dadosCombinados = [...dadosGovernamentais, ...testeplottist];
let validos = dadosCombinados.filter(item => {
    const errosiste = item.status === "falha";
    const motivoLimpo = String(item.motivo || "").toLowerCase().trim(); const motivoInvalido = motivoLimpo === "" || termosInvalidos.includes(motivoLimpo);
    const inconsistnte = errosiste && motivoInvalido;
    return !inconsistnte;
}
);

validos = validos.map(item => {
    if (item.orgao === "Ministério da Educação") {
        return {
            ...item, orgao: "MEC" 
        };
    }
    return item; 
});

const descartadoscombinados = dadosCombinados.length - validos.length;
console.log(`Registros Combinados: ${dadosCombinados.length}`);
console.log(`Registros Válidos: ${validos.length}`);
console.log(`Registros Descartados: ${descartadoscombinados}`);

console.log(`\n==============================================`);


const sucesss = validos.filter(repasses => repasses.status === "sucesso").length;
console.log("-----USERCASE 2-----");
console.log("----- O sistema deverá exibir um resumo dos repasses bem sucedidos. Esse resumo deve ter as seguintes informações:-----");
console.log("1.a) Quantidade de repassess com sucesso:", sucesss);

console.log("1.b) Órgãos com repassess bem sucedido:");
const orgaosSucsso = validos
    .filter(repasses => repasses.status === "sucesso")
    .reduce((acc, repasses) => {
        acc[repasses.orgao] = (acc[repasses.orgao] || 0) + 1;
        return acc;
    }, {});
console.table(orgaosSucsso);

console.log("1.c) Valor total dos repassess com sucesso:");
const Vtotalsucesso = validos.filter(repasses  => repasses.status === "sucesso").reduce((acc, repasses) => acc + repasses.valor, 0);
console.log( `Valor: R$ ${Vtotalsucesso.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);

console.log("1.d) Quantidade de repassess com sucesso por órgão:");

const ValorPorOrgao = validos
    .filter(r => r.status === "sucesso")
    .reduce((acc, r) => {
        acc[r.orgao] = (acc[r.orgao] || 0) + Number(r.valor || 0);
        return acc;
    }, {});

Object.entries(ValorPorOrgao).forEach(([orgao, total]) => {
    console.log(`${orgao}: R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
});
 console.log("-------------------");
 console.log("-----2. O sistema deverá exibir um resumo dos repasses com falha. Esse resumo deve ter as seguintes informações:-----");

const Qtdfalha = validos.filter(repasses=> repasses.status === "falha").length;
console.log("2a) Quantidade de repassess com falha:", Qtdfalha);

console.log("2.b) Quantidade total de repasses com falha por órgão:");
const Oqntfalhaorgao = validos
    .filter(repasses => repasses.status === "falha")
    .reduce((acc, repasses) => {
        acc[repasses.orgao] = (acc[repasses.orgao] || 0) + 1;
        return acc;
    }, {});

console.table(Oqntfalhaorgao);

console.log("2 c)Quantidade total de repasses com falha por motivo");
const Qtdfalhamotivo = validos
    .filter(repasses => repasses.status === "falha")
    .reduce((acc, repasses) => {
        const motivo = repasses.motivo || "Motivo não especificado";
        acc[motivo] = (acc[motivo] || 0) + 1;
        return acc;
    }, {});
console.table(Qtdfalhamotivo);


const Vtotalfalha = validos.filter(repasses=> repasses.status === "falha").reduce((acc, repasses) => acc + repasses.valor, 0);
console.log("2d)Valor total dos repassess com falha:")
console.log( `Valor: R$ ${Vtotalfalha.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);

console.log("2e)Valor total dos repassess com falha por motivo:");
const Motivofalhaorgao = validos
    .filter(r => r.status === "falha")
    .reduce((acc, r) => { acc[r.motivo] = (acc[r.motivo] || 0) + Number(r.valor || 0);
        return acc;
    }, {});
Object.entries(Motivofalhaorgao).forEach(([motivo, total]) => {
    console.log(`${motivo}: R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
});
    console.log( `Valor: R$ ${Motivofalhaorgao.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);

console.log("2f)Valor total dos repassess com falha por órgão:");
const Valofalhaorgao = validos
    .filter(r => r.status === "falha")
    .reduce((acc, r) => {
        acc[r.orgao] = (acc[r.orgao] || 0) + Number(r.valor || 0);
        return acc;
    }, {});
    Object.entries(Valofalhaorgao).forEach(([orgao, total]) => {
    console.log(`${orgao}: R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
});

    
console.log('------------------------');
console.log("----- USERCASE 3 -----");

const Repassesemordem = [...validos].sort((a, b) => a.valor - b.valor);
const  Menortransicao = Repassesemordem[0];
const Maiortransicao = Repassesemordem[Repassesemordem.length - 1];

const MinValor = Repassesemordem[0].valor;
const MaxValor = Repassesemordem[Repassesemordem.length - 1].valor;

const MenoresTransicoes = validos.filter(r => r.valor === MinValor);
const mAioresTransicoes = validos.filter(r => r.valor === MaxValor);

console.log("3.a) Repasses com menor valor:");
MenoresTransicoes.forEach(r => {
    console.log(`Órgão: ${r.orgao}, Data: ${r.data}, Status: ${r.status}, Valor: R$ ${r.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
});

console.log("3.b) Repasses com maior valor:");
mAioresTransicoes.forEach(r => {
    console.log(`Órgão: ${r.orgao}, Data: ${r.data}, Status: ${r.status}, Valor: R$ ${r.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
});

console.log('3.c)Dia com maior numero de repasses:');
const diacomrepasses = {};
validos.forEach(r => {
    const dia = r.data;
    diacomrepasses[dia] = (diacomrepasses[dia] || 0) + 1;
});
const DiaComMaisRepasses = Object.keys(diacomrepasses).reduce((a, b) => diacomrepasses[a] > diacomrepasses[b] ? a : b);
console.log(`${DiaComMaisRepasses}: ${diacomrepasses[DiaComMaisRepasses]} repasses`);

console.log("3.d) Órgão com maior quantidade de repasses:");
const QtdRepassesPorOrgao = validos.reduce((acc, r) => {
    acc[r.orgao] = (acc[r.orgao] || 0) + 1;
    return acc;
}, {});
const OrgaoComMaisRepasses = Object.keys(QtdRepassesPorOrgao).reduce((a, b) => 
    QtdRepassesPorOrgao[a] > QtdRepassesPorOrgao[b] ? a : b
);
console.log(`${OrgaoComMaisRepasses}: ${QtdRepassesPorOrgao[OrgaoComMaisRepasses]} repasses`);

console.log("3.e) Orgao com mais repasses de sudesso:");
const QtdRepassesSucessoPorOrgao = validos
    .filter(r => r.status === "sucesso").reduce((acc, r) => {
        acc[r.orgao] = (acc[r.orgao] || 0) + 1;
        return acc;
    }, {});
const QrgaoComMaisRepassesSucesso = Object.keys(QtdRepassesSucessoPorOrgao).reduce((a, b) => 
    QtdRepassesSucessoPorOrgao[a] > QtdRepassesSucessoPorOrgao[b] ? a : b
);
console.log(`${QrgaoComMaisRepassesSucesso}: ${QtdRepassesSucessoPorOrgao[QrgaoComMaisRepassesSucesso]} repasses`);


console.log ("3.f) Órgão com mais repasses de falha:");
const QtdRepassesFalhaPorOrgao = validos
    .filter(r => r.status === "falha").reduce((acc, r) => { acc[r.orgao] = (acc[r.orgao] || 0) + 1;
        return acc;
    }, {});
const OrgaoComMaisRepassesFalha = Object.keys(QtdRepassesFalhaPorOrgao).reduce((a, b) => 
    QtdRepassesFalhaPorOrgao[a] > QtdRepassesFalhaPorOrgao[b] ? a : b
);
console.log(`${OrgaoComMaisRepassesFalha}: ${QtdRepassesFalhaPorOrgao[OrgaoComMaisRepassesFalha]} repasses`);   

console.log("3.g) Motivo de falha com mais repasses");
const maiorqntdmotivo = {};
validos.filter(r => r.status === "falha" && r.motivo).forEach(r => {
    maiorqntdmotivo[r.motivo] = (maiorqntdmotivo[r.motivo] || 0) + 1;
});
const MotivoComMaisRepasses =
Object.keys(Maiorqntdmotivo).reduce((a, b) =>
    maiorqntdmotivo[a] > maiorqntdmotivo[b] ? a : b
);
console.log(`${MotivoComMaisRepasses}: ${maiorqntdmotivo[MotivoComMaisRepasses]} repasses`);

console.log("------------------------");
console.log("----- USERCASE 4 -----");

const Orgaoescolhido = "Polícia Rodoviária Federal";
console.log(`Inicio da busca para: ${Orgaoescolhido}`);

const orgaoalvo = validos.filter(r => r.orgao === Orgaoescolhido);
if (orgaoalvo.length > 0){
    orgaoalvo.forEach(r => {
        console.log(`Órgão: ${r.orgao}, Data: ${r.data}, Status: ${r.status}, Motivo: ${r.motivo || 'N/A'}, Valor: R$ ${r.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
    });
} else {
    console.log(`Nenhuma transação encontrado para o órgão: ${Orgaoescolhido}`);
}




