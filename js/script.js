//Evenement qui permet d'attendre que tous les élements HTML soit chargés
document.addEventListener("DOMContentLoaded", function(e) {

    //On récupère le bac de l'URL
    var bac = getParameterURL("bac");
    if(bac === null){
        alert("Votre bac n'est pas spécifié");
    }

    document.querySelector("#title-bac").innerHTML = bac.toUpperCase();

    //On génère dynamiquement les données de la page en fonction du Bac
    generateHtml(bac);
});

/*********************************************
 *  Fontion pour récupérer un parametre de l'URL
 *********************************************/
function getParameterURL(parameter){
    let urlString = window.location.href
    let url = new URL(urlString);
    let valueParameter = url.searchParams.get(parameter);

    return valueParameter;
}
/*********************************************
 *  Fontion pour calculer la note du bac
 *********************************************/
function calculateNoteBac(){
    let matieres = document.querySelectorAll(".matiere");

    let somme = 0;
    let sommeCoeff = 0;
    let noteBac = 0;

    for (let i = 0; i < matieres.length; i++) {
        let note = parseInt(matieres[i].querySelector(".matiere-note input").value);
        let coeff = parseInt(matieres[i].querySelector(".coeffValue").innerHTML);
        somme += note * coeff;
        sommeCoeff += coeff;
    }
    noteBac = somme / sommeCoeff;

    window.document.querySelector("#resultat").innerHTML = "Votre moyenne au bac est de:"+noteBac.toFixed(2);
}
/*********************************************
 *  Fontion lorsqu'on sélectionne une matière dans un select
 *********************************************/
function optionChange(id){

    let currentElement = document.querySelector("#"+id);

    let coeff = currentElement.selectedOptions[0].dataset.coeff; 
    let coeffSpecialite = currentElement.selectedOptions[0].dataset.coeffspecialite; 
    let typeExam = currentElement.selectedOptions[0].dataset.typeexam;

    let coeffElement = document.querySelector("#matiere-coeff-"+id);
    let typeExamElement = document.querySelector("#matiere-typeExam-"+id);

    let radioSpecialite = coeffElement.querySelector(".radioSpecialite"); 


    if(coeff != null && typeExam != null){
        let coeffValue = coeffElement.querySelector(".coeffValue");
        coeffValue.innerHTML = coeff;
        typeExamElement.innerHTML = typeExam;

        if(radioSpecialite != null){
            radioSpecialite.dataset.coeff = coeff;
            radioSpecialite.value = coeffSpecialite;
        }
    }else{
        let coeffValue = coeffElement.querySelector(".coeffValue");
        coeffValue.innerHTML = 0;
        typeExamElement.innerHTML = "...";

        if(radioSpecialite != null){
            radioSpecialite.dataset.coeff = 0;
            radioSpecialite.value = 0;
        }
    }
}
/*********************************************
 *  Fontion lorsqu'on définit une matière comme spécialité
 *********************************************/
function radioChange(element){

    let coeffSpecialite = element.value;
    let coeffContainerParentId = element.dataset.parent;

    let coeffValue = document.querySelector("#"+coeffContainerParentId).querySelector(".coeffValue");
    coeffValue.innerHTML = coeffSpecialite;

    let radioElements = document.querySelectorAll(".radioSpecialite");
    for (let i = 0; i < radioElements.length; i++) {
        if(radioElements[i].dataset.parent != coeffContainerParentId){
            let coeff = radioElements[i].dataset.coeff;
            let coeffValue = document.querySelector("#"+radioElements[i].dataset.parent).querySelector(".coeffValue");
            coeffValue.innerHTML = coeff;
        }
    }
}
/*********************************************
 *  Fontion de génération dynamique du HTML
 *********************************************/
function generateHtml(bac){

    let dataBac = data[bac];
    
    for(let typeEpreuve in dataBac){

        let typeEpreuveElement = document.querySelector("#"+typeEpreuve);

        /******************************
         * Génération des entêtes
         ******************************/

        let enteteContainer = typeEpreuveElement.querySelector(".matiere-entete");

        var html = '<div class="matiere-nom"></div> \
                    <div class="matiere-coeff">Coeff</div> \
                    <div class="matiere-note">Note</div>';
        enteteContainer.innerHTML += html;

        /******************************
         * Génération des matières
         ******************************/

        let matieresContainer = typeEpreuveElement.querySelector(".matieres");

        for(let matiereKey in dataBac[typeEpreuve]){

            if(dataBac[typeEpreuve][matiereKey]["select"]){

                var html =  '<div class="matiere">\
                                <div class="matiere-nom">\
                                <select id="'+matiereKey+'" onchange="optionChange(this.id)">\
                                    <option>'+dataBac[typeEpreuve][matiereKey]['label']+'</option>';

                 for(var matiereSelectKey in dataBac[typeEpreuve][matiereKey]['selectData']) {
                     html += '<option\
                              data-coeff="'+dataBac[typeEpreuve][matiereKey]['selectData'][matiereSelectKey]['coeff']+'"\
                              data-coeffspecialite="'+dataBac[typeEpreuve][matiereKey]['selectData'][matiereSelectKey]['coeffSpecialite']+'"\
                              data-typeExam = "'+dataBac[typeEpreuve][matiereKey]['selectData'][matiereSelectKey]['typeExam']+'"\
                              value="'+matiereSelectKey+'">'+dataBac[typeEpreuve][matiereKey]['selectData'][matiereSelectKey]['label']+'\
                              </option>';
                 }
                 
                 html += '</select><br/><span id="matiere-typeExam-'+matiereKey+'">...</span></div>';
                 
                 html += '<div id="matiere-coeff-'+matiereKey+'" class="matiere-coeff">';

                 if(dataBac[typeEpreuve][matiereKey]['selectData'][matiereSelectKey]["isSpecialite"]){
                    html += '<input onchange="radioChange(this);" data-parent="matiere-coeff-'+matiereKey+'" data-coeff="0" class="radioSpecialite" type="radio" name="radioSpecialite" value="0"/>';
                }   
                 
                html += 'x <span class="coeffValue">0</span></div>\
                          <div id="matiere-note-'+matiereKey+'" class="matiere-note">\
                            <input type="number" min="0" max="20" size="3" value="10" />\
                          </div>';                                                                                          

            }else{
                var html =  '<div class="matiere">\
                            <div class="matiere-nom">\
                                <span>'+dataBac[typeEpreuve][matiereKey]["label"]+'</span><br/>\
                                <span class="matiere-type-exam">'+dataBac[typeEpreuve][matiereKey]["typeExam"]+'</span>\
                            </div>\
                            <div class="matiere-coeff" id="matiere-coeff-'+matiereKey+'">';   
                            
            if(dataBac[typeEpreuve][matiereKey]["isSpecialite"]){
                html += '<input onchange="radioChange(this);" data-parent="matiere-coeff-'+matiereKey+'" data-coeff="'+dataBac[typeEpreuve][matiereKey]["coeff"]+'" class="radioSpecialite" type="radio" name="radioSpecialite" value="'+dataBac[typeEpreuve][matiereKey]["coeffSpecialite"]+'">';
            }        
            
                    html += 'x <span class="coeffValue">'+dataBac[typeEpreuve][matiereKey]["coeff"]+'</span>\
                            </div>\
                            <div class="matiere-note">\
                                <input type="number" min="0" max="20" size="3" value="10"  />\
                            </div>\
                        </div>';                     
            }                          
            matieresContainer.innerHTML += html;
        }
    }
}