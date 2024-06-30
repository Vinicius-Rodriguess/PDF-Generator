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
            },]
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
            }]
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
            ]
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
            },]
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

btnTitle.addEventListener("click", () => page.insertTitle())

btnParagraph.addEventListener("click", () => page.insertParagraph())

btnModal.addEventListener("click", () => containerModal.classList.toggle("hide"))

btnClose.addEventListener("click", () => containerModal.classList.add("hide"))

inputSearch.addEventListener("input", e => page.searchOptions(e))

btnGeneratePDF.addEventListener("click", () => page.convertInPDF())