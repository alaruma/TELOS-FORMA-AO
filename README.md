# TELOS-FORMAcao
Formação fullstack telos


oiaotecnico
Gem personalizado
Com certeza! Aqui está o resumo dos requisitos e do contexto do simulador, formatado em Markdown para que fique organizado e pronto para o seu README.md no GitHub.

📝 Sumário dos Requisitos de Negócio (Simulator Télos)
Este documento resume as Histórias de Usuário (HU) e os objetivos de negócio alcançados na fase de preparação de dados do simulador, focando na integridade e padronização das informações de Repasses Governamentais.

1. 🔍 Foco Principal: Integridade e Limpeza de Dados (HU 5 & HU 6)
O requisito mais crítico é garantir que a base de dados não contenha falhas de processamento sem justificativa.

1.1. Detecção de Inconsistências (HU 5)
É classificado como um problema no processamento e um registro inválido se:

A transação possui o status igual a "falha".

E o campo motivo não apresenta um valor válido. O conceito de "valor inválido" ou "dados lixo" inclui:

Campo inexistente (undefined) ou nulo (null).

Campo vazio ("") ou preenchido apenas com espaços em branco.

Termos genéricos e sem justificativa (ex: "sem motivo", "n/a", "indisponivel").

1.2. Criação da Base Confiável (HU 6)
Todos os registros identificados como inválidos na HU 5 devem ser descartados/excluídos da análise. O objetivo é criar uma nova dataset (validos) que contenha apenas transações íntegras e justificadas, servindo como a única fonte de verdade para as análises estatísticas subsequentes.

2.  Consolidação e Padronização de Dados
Além da limpeza, a base de dados deve ser unificada e transformada para facilitar a análise:

2.1. Consolidação de Dados
O dataset oficial (dadosGovernamentais) deve ser unido ao dataset de teste (testeplottwist).

A consolidação deve ser feita garantindo que apenas registros únicos sejam mantidos, evitando duplicidades. A limpeza (HU 6) deve ser aplicada durante ou imediatamente após essa união.

2.2. Transformação de Nomes
O nome completo do órgão "Ministério da Educação" deve ser padronizado e renomeado para a sigla "MEC" em todos os registros.

3.  Conclusão
A variável final validos representa o dataset consolidado, limpo e transformado. Esta variável é a base obrigatória para a resolução das HUs de cálculo estatístico (HU 1, HU 2, HU 3 e HU 4).
