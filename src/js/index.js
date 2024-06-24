const btnTitle = document.querySelector("#title")
const btnParagraph = document.querySelector("#paragraph")
const btnModal = document.querySelector("#btn-modal")
const containerModal = document.querySelector("#container-modal")
const btnClose = document.querySelector("#btn-close")
const inputSearch = document.querySelector("#input-search")
const btnGeneratePDF = document.querySelector("#btn-pdf")

class ContentPage {

    constructor() {
        this.conteinerPages = document.querySelector("#container-div-editable")
        this.numPage = 0
        this.id = 1
        this.maxWidthpages = 210
        this.totalHeight = 0

        this.maxHeightPage = 590
        this.cursorPosition = 0

        this.json = []

        this.mergeItems= [
        {
        name: 'Dados emissão',
        items: [
            {
                item: "ControleEmissoes",
                description: "Exibe o número do documento (Contador Controlado pelo Sistema MAA)"
            },
            {
                item: "Emitente",
                description: "Exibe o dados da emissão (Nome, Data e Horário)"
            },
            {
                item: "PulaPagina",
                description: "Pula uma página para Impressão"
            },
            {
                item: "DiaAtual",
                description: "Mostra o dia atual (Ex: 15)"
            },
            {
                item: "MesAtual",
                description: "Mostra o Mês atual por Extenso (Ex: Janeiro)"
            },
            {
                item: "AnoAtual",
                description: "Mostra o Ano atual (Ex: 2008)"
            },
            {
                item: "ExercicioAtual",
                description: "Mostra o Exercicio atual"
            },
            {
                item: "DataAtual",
                description: "Exibe a Data Atual (Ex: 10/10/2008)"
            },
            {
                item: "DataInicio",
                description: "Exibe a Data Inicial do curso (Ex: 10/10/2008)"
            },
            {
                item: "DataFinal",
                description: "Exibe a Data Final do curso (Ex: 10/10/2008)"
            },
            {
                item: "AssinaturaEletronica",
                description: "Exibe a assinatura eletrônica do contrato"
            }
        ]
        },
        {
        name: 'Dados do aluno',
        items: [
            {
                item: "Prontuario",
                description: "Exibe o Prontuário"
            },
            {
                item: "Nome",
                description: "Exibe o Nome"
            },
            {
                item: "Numero",
                description: "Exibe o Numero"
            },
            {
                item: "Complemento",
                description: "Exibe o RA do aluno"
            },
            {
                item: "Rg",
                description: "Exibe o RG"
            },
            {
                item: "RgExp",
                description: "Exibe a data da expedição do RG"
            },
            {
                item: "Cpf",
                description: "Exibe o CPF"
            },
            {
                item: "certMilitar",
                description: "Exibe o Certificado Militar"
            },
            {
                item: "tituloEleitoral",
                description: "Exibe o Título Eleitoral"
            },
            {
                item: "certNascimento",
                description: "Exibe a Certidão de Nascimento"
            },
            {
                item: "DataDeNascimento",
                description: "Exibe a Data de Nascimento"
            },
            {
                item: "DataDeNascimentoExtenso",
                description: "Exibe a Data de Nascimento por Extenso"
            },
            {
                item: "LocalDeNascimento",
                description: "Exibe o Local de Nascimento"
            },
            {
                item: "EstadoDeNascimento",
                description: "Exibe o Estado de Nascimento"
            },
            {
                item: "Endereco",
                description: "Exibe o Endereço"
            },
            {
                item: "Bairro",
                description: "Exibe o Bairro"
            },
            {
                item: "Cidade",
                description: "Exibe o Cidade"
            },
            {
                item: "Estado",
                description: "Exibe o Estado"
            },
            {
                item: "CEP",
                description: "Exibe o CEP"
            },
            {
                item: "Nacionalidade",
                description: "Exibe a Nacionalidade"
            },
            {
                item: "EstadoCivil",
                description: "Exibe o Estado Civil"
            },
            {
                item: "Funcao",
                description: "Exibe a profissao"
            },
            {
                item: "Sexo",
                description: "Exibe o Sexo"
            },
            {
                item: "TelefoneResidencial",
                description: "Exibe o Telefone Residencial"
            },
            {
                item: "TelefoneComercial",
                description: "Exibe o Telefone Comercial"
            },
            {
                item: "Celular",
                description: "Exibe o Celular"
            },
            {
                item: "Email",
                description: "Exibe o E-mail"
            },
            {
                item: "Login",
                description: "Exibe o Login"
            },
            {
                item: "Senha",
                description: "Exibe a Senha"
            },
            {
                item: "Observacoes",
                description: "Exibe a principal observação"
            },
            {
                item: "ObservacoesFinanceiras",
                description: "Exibe a observação financeira"
            },
            {
                item: "ObservacoesGerais",
                description: "Exibe a observação Gerais"
            },
            {
                item: "PagamentosAcordo",
                description: "Exibe a ficha financeira dos titulos como acordo"
            },
            {
                item: "PlanilhaDeCustos",
                description: "Exibe a ficha financeira do aluno"
            },
            {
                item: "PlanilhaDeVenc",
                description: "Exibe a planilha de vencimento por descrição e titulos a vencer"
            },
            {
                item: "InformeDeRendimentos",
                description: "Exibe os pagamentos do aluno"
            },
            {
                item: "InformeDeRendimentosMensalidades",
                description: "Exibe os pagamentos do aluno com descrição mensalidade"
            },
            {
                item: "TotalMensalidades",
                description: "Exibe o da mensalidade"
            },
            {
                item: "TotalMensalidadesPagas",
                description: "Exibe o total das mensalidades pagas"
            },
            {
                item: "PagamentosEmAberto",
                description: "Exibe Parcelas Geradas Em Aberto"
            },
            {
                item: "PagamentosEmAberto2",
                description: "Exibe Parcelas Geradas Em Aberto Sem Os Descontos, Juros, Multa"
            },
            {
                item: "PagamentosEmAbertoComDesconto",
                description: "Exibe Parcelas Geradas Em Aberto Com Desconto"
            },
            {
                item: "QuantidadeDeParcelas",
                description: "Exibe a Quantidade De Parcelas"
            },
            {
                item: "MensalidadesCriadas",
                description: "Exibe as mensalidades criadas"
            },
            {
                item: "ParcelasGeradas",
                description: "Exibe uma planinha com as parcelas feitas do pagamento"
            },
            {
                item: "ParcelaBolsaDesc",
                description: "Exibe o valor da parcela com o desconto de bolsa em porcentagem"
            },
            {
                item: "ParcelaBolsaDescEXT",
                description: "Exibe o valor da parcela com o desconto de bolsa em porcentagem por extenso"
            },
            {
                item: "Cor",
                description: "Exibe a Cor"
            },
            {
                item: "Foto",
                description: "Exibe a Foto do Aluno"
            },
            {
                item: "FotoURL",
                description: "Exibe a URL da Foto do Aluno"
            },
            {
                item: "Boletim",
                description: "Exibe o Boletim do Aluno"
            },
            {
                item: "Disciplinas_Professores",
                description: "Exibe os professores com suas disciplinas"
            },
            {
                item: "DataDiploma",
                description: "Exibe data de formacao"
            },
            {
                item: "NumeroCarteirinha",
                description: "Exibe o numero da carterinha do aluno"
            },
            {
                item: "CodBarrasCarteirinha",
                description: "Exibe o codigo de barras da carterinha do aluno"
            },
            {
                item: "ObservacaoDaMatricula",
                description: "Exibe a observação personalizada da matrícula do aluno."
            }
        ]
        },
        {
        name : 'Dados do pai',
        items: [
            {
                item: "NomeDoPai",
                description: "Exibe o Nome do Pai"
            },
            {
                item: "GrauDoPai",
                description: "Exibe o Grau do Pai"
            },
            {
                item: "NacionalidadePai",
                description: "Exibe a Nacionalidade do Pai"
            },
            {
                item: "EstadoCivilDoPai",
                description: "Exibe o Estado Civil do Pai"
            },
            {
                item: "RgDoPai",
                description: "Exibe o RG do Pai"
            },
            {
                item: "RgExpDoPai",
                description: "Exibe a data de expedição do RG do Pai"
            },
            {
                item: "CpfDoPai",
                description: "Exibe o CPF do Pai"
            },
            {
                item: "NascimentoDoPai",
                description: "Exibe a Data de Nascimento do Pai"
            },
            {
                item: "LocalNascDoPai",
                description: "Exibe o Local de Nascimento do Pai"
            },
            {
                item: "EstadoNascDoPai",
                description: "Exibe o Estado de Nascimento do Pai"
            },
            {
                item: "EnderecoDoPai",
                description: "Exibe o Endereço do Pai"
            },
            {
                item: "BairroDoPai",
                description: "Exibe o Bairro do Pai"
            },
            {
                item: "CidadeDoPai",
                description: "Exibe o Cidade do Pai"
            },
            {
                item: "EstadoDoPai",
                description: "Exibe o Estado do Pai"
            },
            {
                item: "CEPDoPai",
                description: "Exibe o CEP do Pai"
            },
            {
                item: "TelResDoPai",
                description: "Exibe o Telefone Residencial do Pai"
            },
            {
                item: "TelComDoPai",
                description: "Exibe o Telefone Comercial do Pai"
            },
            {
                item: "CelularDoPai",
                description: "Exibe o Celular do Pai"
            },
            {
                item: "EmailDoPai",
                description: "Exibe o E-mail do Pai"
            },
            {
                item: "EmpresaDoPai",
                description: "Exibe a Empresa do Pai"
            },
            {
                item: "ProfissaoPai",
                description: "Exibe a Profissão do Pai"
            },
            {
                item: "GrauInstrucaoDoPai",
                description: "Exibe o Grau de Instrução do Pai"
            },
            {
                item: "LoginPai",
                description: "Exibe o Login do Pai"
            },
            {
                item: "SenhaPai",
                description: "Exibe a Senhado Pai"
            },
            {
                item: "ObservacoesGeraisDoPai",
                description: "Exibe a Observação do Pai"
            }]
        },
        {
        name: 'Dados da mãe',
        items: [
            {
                item: "NomeDaMae",
                description: "Exibe o Nome da Mãe"
            },
            {
                item: "GrauDaMae",
                description: "Exibe o Grau da Mãe"
            },
            {
                item: "NacionalidadeMae",
                description: "Exibe a Nacionalidade da Mãe"
            },
            {
                item: "EstadoCivilDaMae",
                description: "Exibe o Estado Civil da Mãe"
            },
            {
                item: "RgDaMae",
                description: "Exibe o Rg da Mãe"
            },
            {
                item: "RgExpDaMae",
                description: "Exibe a data da expedição do Rg da Mãe"
            },
            {
                item: "CpfDaMae",
                description: "Exibe o CPF da Mãe"
            },
            {
                item: "NascimentoDaMae",
                description: "Exibe a Data de Nascimento da Mãe"
            },
            {
                item: "LocalNascDaMae",
                description: "Exibe o Local de Nascimento da Mãe"
            },
            {
                item: "EstadoNascDaMae",
                description: "Exibe o Estado de Nascimento da Mãe"
            },
            {
                item: "EnderecoDaMae",
                description: "Exibe o Endereço da Mãe"
            },
            {
                item: "BairroDaMae",
                description: "Exibe o Bairro da Mãe"
            },
            {
                item: "CidadeDaMae",
                description: "Exibe o Cidade da Mãe"
            },
            {
                item: "EstadoDaMae",
                description: "Exibe o Estado da Mãe"
            },
            {
                item: "CEPDaMae",
                description: "Exibe o CEP da Mãe"
            },
            {
                item: "TelResDaMae",
                description: "Exibe o Telefone Residencial da Mãe"
            },
            {
                item: "TelComDaMae",
                description: "Exibe o Telefone Comercial da Mãe"
            },
            {
                item: "CelularDaMae",
                description: "Exibe o Celular da Mãe"
            },
            {
                item: "EmailDaMae",
                description: "Exibe o E-mail da Mãe"
            },
            {
                item: "EmpresaDoMae",
                description: "Exibe a Empresa da Mae"
            },
            {
                item: "ProfissaoMae",
                description: "Exibe a Profissão da Mãe"
            },
            {
                item: "GrauInstrucaoDaMae",
                description: "Exibe o Grau de Instrução da Mãe"
            },
            {
                item: "LoginMae",
                description: "Exibe o Login da Mãe"
            },
            {
                item: "SenhaMae",
                description: "Exibe a Senha da Mãe"
            },
            {
                item: "ObservacoesGeraisDaMae",
                description: "Observações da Mãe"
            }]
        },
        {
        name: 'Dados do responsável financeiro',
        items: [
            {
                item: "inscMunicDoResp",
                description: "Exibe a Inscrição Municipal do Responsável Financeiro em caso de Empresa"
            },
            {
                item: "inscEstcDoResp",
                description: "Exibe a Inscrição Estadual do Responsável Financeiro em caso de Empresa"
            },
            {
                item: "RazaoDoResp",
                description: "Exibe a Razão Social do Responsável Financeiro em caso de Empresa"
            },
            {
                item: "CnpjDoResp",
                description: "Exibe a CNPJ do Responsável Financeiro em caso de Empresa"
            },
            {
                item: "NomeDoResp",
                description: "Exibe o Nome do Responsável Financeiro"
            },
            {
                item: "GrauDoResp",
                description: "Exibe o Grau do Responsável Financeiro"
            },
            {
                item: "SexoDoResp",
                description: "Exibe o Sexo do Responsável Financeiro"
            },
            {
                item: "NacionalidadeResp",
                description: "Exibe a Nacionalidade do Responsável Financeiro"
            },
            {
                item: "EstadoCivilDoResp",
                description: "Exibe o Estado Civil do Responsável Financeiro"
            },
            {
                item: "RgDoResp",
                description: "Exibe o RG do Responsável Financeiro"
            },
            {
                item: "RgExpDoResp",
                description: "Exibe a data da expedição do RG do Responsável Financeiro"
            },
            {
                item: "CpfDoResp",
                description: "Exibe o CPF do Responsável Financeiro"
            },
            {
                item: "NascimentoDoResp",
                description: "Exibe o Nascimento do Responsável Financeiro"
            },
            {
                item: "LocalNascDoResp",
                description: "Exibe o Local de Nascimento do Responsável Financeiro"
            },
            {
                item: "EstadoNascDoResp",
                description: "Exibe o Estado de Nascimento do Responsável Financeiro"
            },
            {
                item: "EnderecoDoResp",
                description: "Exibe o Endereço do Responsável Financeiro"
            },
            {
                item: "BairroDoResp",
                description: "Exibe o Bairro do Responsável Financeiro"
            },
            {
                item: "CidadeDoResp",
                description: "Exibe o Cidade do Responsável Financeiro"
            },
            {
                item: "EstadoDoResp",
                description: "Exibe o Estado do Responsável Financeiro"
            },
            {
                item: "CEPDoResp",
                description: "Exibe o CEP do Responsável Financeiro"
            },
            {
                item: "TelResDoResp",
                description: "Exibe o Telefone Residencial do Responsável Financeiro"
            },
            {
                item: "TelComDoResp",
                description: "Exibe o Telefone Comercial do Responsável Financeiro"
            },
            {
                item: "CelularDoResp",
                description: "Exibe o Celular do Responsável Financeiro"
            },
            {
                item: "EmailDoResp",
                description: "Exibe o E-mail do Responsável Financeiro"
            },
            {
                item: "ProfissaoDoResp",
                description: "Exibe a Profissão do Responsável Financeiro"
            },
            {
                item: "LoginDoResp",
                description: "Exibe o Login do Responsável Financeiro"
            },
            {
                item: "SenhaDoResp",
                description: "Exibe a Senha do Responsável Financeiro"
            },
            {
                item: "FichaFinanceira",
                description: "Exibe a planilha com todos os pagamentos exercicio atual"
            },
            {
                item: "RealizadosNoExercicio",
                description: "Exibe a planilha com todos os pagamentos realizados no exercicio"
            }]                
        },
        {
        name: 'Dados do responsável pedagógico',
        items: [
            {
                item: "NomeDoRespPed",
                description: "Exibe o Nome do Responsável Pedagogico"
            },
            {
                item: "GrauDoRespPed",
                description: "Exibe o Grau do Responsável Pedagogico"
            },
            {
                item: "NacionalidadeRespPed",
                description: "Exibe a Nacionalidade do Responsável Pedagogico"
            },
            {
                item: "RgDoRespPed",
                description: "Exibe o RG do Responsável Pedagogico"
            },
            {
                item: "RgExpDoRespPed",
                description: "Exibe a data da expedição do RG do Responsável Pedagogico"
            },
            {
                item: "CpfDoRespPed",
                description: "Exibe o CPF do Responsável Pedagogico"
            },
            {
                item: "NascimentoDoRespPed",
                description: "Exibe o Nascimento do Responsável Pedagogico"
            },
            {
                item: "LocalNascDoRespPed",
                description: "Exibe o Local de Nascimento do Responsável Pedagogico"
            },
            {
                item: "EstadoNascDoRespPed",
                description: "Exibe o Estado de Nascimento do Responsável Pedagogico"
            },
            {
                item: "EnderecoDoRespPed",
                description: "Exibe o Endereço do Responsável Pedagogico"
            },
            {
                item: "BairroDoRespPed",
                description: "Exibe o Bairro do Responsável Pedagogico"
            },
            {
                item: "CidadeDoRespPed",
                description: "Exibe o Cidade do Responsável Pedagogico"
            },
            {
                item: "EstadoDoRespPed",
                description: "Exibe o Estado do Responsável Pedagogico"
            },
            {
                item: "CEPDoRespPed",
                description: "Exibe o CEP do Responsável Pedagogico"
            },
            {
                item: "TelResDoRespPed",
                description: "Exibe o Telefone Residencial do Responsável Pedagogico"
            },
            {
                item: "TelComDoRespPed",
                description: "Exibe o Telefone Comercial do Responsável Pedagogico"
            },
            {
                item: "CelularDoRespPed",
                description: "Exibe o Celular do Responsável Pedagogico"
            },
            {
                item: "EmailDoRespPed",
                description: "Exibe o E-mail do Responsável Pedagogico"
            },
            {
                item: "LoginDoRespPed",
                description: "Exibe o Login do Responsável Pedagogico"
            },
            {
                item: "SenhaDoRespPed",
                description: "Exibe a Senha do Responsável Pedagogico"
            },
            {
                item: "EmpresaDoRespPed",
                description: "Exibe a Empresa do Responsável Pedagogico"
            },
            {
                item: "ProfissaoDoRespPed",
                description: "Exibe a Profissão do Responsável Pedagogico"
            },
            {
                item: "GrauInstrucaoDoRespPed",
                description: "Exibe o Grau de Instrução do Responsável Pedagogico"
            }]
        },
        {
        name: 'Dados do curso',
        items: [
            {
                item: "Nome_Curso",
                description: "Exibe o Nome do Curso Cadastrado para o Curso"
            },
            {
                item: "Status",
                description: "Exibe o Status do Aluno no Curso"
            },
            {
                item: "Situacao",
                description: "Exibe a Situação do Aluno no Curso"
            },
            {
                item: "DataMatricula",
                description: "Exibe a Data de Matricula do Aluno"
            },
            {
                item: "DT_Inicio",
                description: "Exibe a Data de Inicio do Curso"
            },
            {
                item: "DT_Fim",
                description: "Exibe a Data de Final do Curso"
            },
            {
                item: "DT_Fim_Extenso",
                description: "Exibe a Data de Final do Curso por Extenso"
            },
            {
                item: "DataSituacao",
                description: "Exibe a Data da Situação do Aluno"
            },
            {
                item: "HoraAulaInicio",
                description: "Exibe a Hora Inicial do curso do Aluno"
            },
            {
                item: "HoraAulaFinal",
                description: "Exibe a Hora Final do curso do Aluno"
            },
            {
                item: "CargaHoraria",
                description: "Exibe o total de horas do curso"
            },
            {
                item: "ValorDoCurso",
                description: "Exibe o Valor do Curso"
            },
            {
                item: "ValorDoCursoExt",
                description: "Exibe o Valor do Curso por Extenso"
            },
            {
                item: "DiaVencimento",
                description: "Exibe o Dia de Vencimento da Matrícula"
            },
            {
                item: "Curso",
                description: "Exibe os Dados do Curso"
            },
            {
                item: "Serie",
                description: "Exibe a Série"
            },
            {
                item: "Nivel",
                description: "Exibe o Nível"
            },
            {
                item: "Classe",
                description: "Exibe a Classe"
            },
            {
                item: "Turno",
                description: "Exibe o Turno"
            },
            {
                item: "ValorDaParcela",
                description: "Exibe o Valor Da Parcela"
            },
            {
                item: "ValorDaParcelaExt",
                description: "Exibe o Valor da Parcela por Extenso"
            },
            {
                item: "Bolsa",
                description: "Exibe Valor da Bolsa (desconto) em Reais ou Porcentagem"
            },
            {
                item: "Cod_Bolsa",
                description: "Exibe o Código Bolsa"
            },
            {
                item: "BolsaMotivo",
                description: "Exibe o motivo da Bolsa"
            },
            {
                item: "DocumentosPendentes",
                description: "Exibe os ducumentos pendentes"
            },
            {
                item: "Filtro",
                description: "Exibe o filtro cadastrado na matricula do aluno."
            },
            {
                item: "Anuidade",
                description: "Exibe o valor da anuidade do curso."
            }]
        },
        {
        name: 'Dados da empresa',
        items: [
            {
                item: "LogoEmpresa",
                description: "Exibe o Logotipo da Empresa"
            },
            {
                item: "CNPJEmpresa",
                description: "Exibe o CNPJ"
            },
            {
                item: "RazaoEmpresa",
                description: "Exibe a Razão"
            },
            {
                item: "NomeEmpresa",
                description: "Exibe o Nome"
            },
            {
                item: "TelefoneEmpresa",
                description: "Exibe o Telefone"
            },
            {
                item: "EnderecoEmpresa",
                description: "Exibe o Endereço"
            },
            {
                item: "BairroEmpresa",
                description: "Exibe o Bairro"
            },
            {
                item: "CidadeEmpresa",
                description: "Exibe a Cidade"
            },
            {
                item: "EstadoEmpresa",
                description: "Exibe o Estado"
            },
            {
                item: "CepEmpresa",
                description: "Exibe o CEP"
            },
            {
                item: "PrefixoEmpresa",
                description: "Exibe o Prefixo (www)"
            },
            {
                item: "DominioEmpresa",
                description: "Exibe o Domínio (escola.com.br)"
            },
            {
                item: "EmailEmpresa",
                description: "Exibe o E-mail"
            },
            {
                item: "DiretorNome",
                description: "Exibe o Nome do Diretor"
            },
            {
                item: "DiretorDoc",
                description: "Exibe o Documento do Diretor"
            },
            {
                item: "DiretorReg",
                description: "Exibe o Registro Do Diretor"
            },
            {
                item: "SecretarioNome",
                description: "Exibe o Nome do Secretário"
            },
            {
                item: "SecretarioDoc",
                description: "Exibe o Documento do Secretário"
            },
            {
                item: "SecretarioReg",
                description: "Exibe o Registro do Secretário"
            }]
        }]

        this.id = 1

        this.loadPage()
    }

    cleanPage() {
        this.conteinerPages.innerHTML = ""

        const divEditable = document.createElement("div")
        divEditable.classList.add("div-editable")
        this.conteinerPages.appendChild(divEditable)

        this.numPage = 0
        this.id = 1
        this.totalHeight = 0
    }

    insertPage(){
        const div = document.createElement("div")
        div.classList.add("div-editable")
        this.conteinerPages.appendChild(div)

        this.totalHeight = 0
        this.numPage++
    }

    createDivEditable(item){
        const div = document.createElement("div")
        div.contentEditable = true
        div.innerText = item.text
        div.addEventListener("blur", e => this.setText(e.target.innerText, e.target.id))
       

        div.addEventListener("click", e => {
            this.cursorPosition = window.getSelection().getRangeAt(0).startOffset;
            this.cursorInserir = e
        })

        if (item.type === "title") div.classList.add("div-title")
        if (item.type === "paragraph") div.classList.add("div-paragraph")

        div.setAttribute("id", item.id)
        this.id++

        return div
    }

    insertMerge(e) {
        const regexp = /\|.*?\|/
        const textoInserir = regexp.exec(e.target.innerHTML)[0]
        
        const textoAtual = this.cursorInserir.target.innerHTML;
        const textoAntes = textoAtual.substring(0, this.cursorPosition);
        const textoDepois = textoAtual.substring(this.cursorPosition);
        this.cursorInserir.target.innerHTML = `${textoAntes}  ${textoInserir}  ${textoDepois}`;

        this.setText(this.cursorInserir.target.innerHTML, this.cursorInserir.target.id)
        containerModal.classList.add("hide")
    }

    loadPage() {
        this.cleanPage()

        this.json.forEach(item => {
            let pages = document.querySelectorAll(".div-editable")

            const div = this.createDivEditable(item)

            pages[this.numPage].appendChild(div)
            this.totalHeight += div.getBoundingClientRect().height

            if (this.totalHeight >= this.maxHeightPage) this.insertPage()
        })

        this.loadMerge()
    }

    loadMerge(){
        const optionsContainer = document.querySelector(".options-modal")

        optionsContainer.innerHTML = ""
    
        this.mergeItems.forEach((item, i) => {
            const div = document.createElement("div")
            div.setAttribute("id", `id${i}`)
    
            const span = document.createElement("span")
            span.innerText = item.name
    
            div.appendChild(span)
    
            item.items.forEach(item => {
                const p = document.createElement("p")
                p.innerText = `|${item.item}| - ${item.description}`
                p.addEventListener("click", e => this.insertMerge(e))
    
                div.appendChild(p)
            })
    
            optionsContainer.appendChild(div)
        })
    }

    searchOptions(e) {

        const text = e.target.value.trim().toLowerCase()
    
        const optionsList = document.querySelectorAll(".options-modal p")
    
        optionsList.forEach(item => {
    
            if (item.innerText.toLowerCase().includes(text)){
                item.style.display = "flex"
                return
            }
            item.style.display = "none"
        })
    }

    insertTitle() {
        this.json.push({
            text: "Escreva...",
            id: this.id,
            type: "title",
            bold: true,
            italic: false,
            fontSize: 14,
            color: [0, 0, 0],
            fontFamily: "Helvetica"
        })

        this.id++

        this.loadPage()
    }

    insertParagraph() {
        this.json.push({
            text: "Escreva...",
            id: this.id,
            type: "paragraph",
            bold: true,
            italic: false,
            fontSize: 12,
            color: [0, 0, 0],
            fontFamily: "Helvetica"
        })

        this.id++

        this.loadPage()
    }

    setText(text, id) {

        if (text === "") {
           
            this.json = this.json.filter(item => item.id != id)

        } else {

            this.json.forEach(item => {
                if (item.id == id) item.text = text    
            })
        }

        this.loadPage()
    }

    convertInPDF() {
        const { jsPDF } = window.jspdf
        const doc = new jsPDF()
        let page = 1
        let posY = 6
        const maxWidth = 200

        const mapObj = {
            "|Nome|": "ANA ",
            "|NomeCompleto|": "ANA MARIA BRAGA",
            "|SobreNome|": "BRAGA"
        }  
          
        this.json.forEach(content => {
            const lines = doc.splitTextToSize(content.text.replace(/\|(.*?)\|/gi, matched => mapObj[matched]), maxWidth)
    
            const isCenter = content.type === "title"
            const fontFamily = content.fontFamily || "Helvetica"
            const color = content.color || [0, 0, 0]
            const fontSize = content.fontSize || 12
            const lineSpace = content.lineSpace || 1.5
            const styles = []
    
            if (content.bold) styles.push("bold")
            if (content.italic) styles.push("italic")
    
            if (isCenter) {
                posY += 8
                doc.setFontSize(fontSize)
                doc.setFont(fontFamily, "bold")
    
                doc.text(lines, 105, posY, { maxWidth: maxWidth, align: "center"})
                posY += 8
    
            } else {
                doc.setFontSize(fontSize)
                doc.setFont(fontFamily, styles.join(""))
                doc.setLineHeightFactor(lineSpace)
                doc.setTextColor(color[0], color[1], color[2])
    
                const textHeight = doc.getTextDimensions(lines).h + 6
    
                if (posY + textHeight > 290) {
                    posY = 6
                    page += 1
                    doc.insertPage()
                    doc.setPage(page)
                }
    
                doc.text(lines, 5, posY, { maxWidth: maxWidth})
                posY += textHeight
            }
        })
    
        doc.save("pdf.pdf")
    }
}

const page = new ContentPage()

btnTitle.addEventListener("click", () => {
    page.insertTitle()
})

btnParagraph.addEventListener("click", () => {
    page.insertParagraph()
})

btnModal.addEventListener("click", () => {
    containerModal.classList.toggle("hide")
})

btnClose.addEventListener("click", () => {
    containerModal.classList.add("hide")
})

inputSearch.addEventListener("input", e => {
    page.searchOptions(e)
})

btnGeneratePDF.addEventListener("click", () => {
    page.convertInPDF()
})