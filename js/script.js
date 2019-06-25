//Evenement qui permet d'attendre que tous les élements HTML soit chargés
document.addEventListener("DOMContentLoaded", function(e) {

    //On récupère le bac de l'URL
    var bac = getParameterURL("bac");
    if(bac == null){
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
    var urlString = window.location.href
    var url = new URL(urlString);
    var valueParameter = url.searchParams.get(parameter);

    return valueParameter;
}
/*********************************************
 *  Fontion pour calculer la note du bac
 *********************************************/
function calculateNoteBac(){
    var matieres = document.getElementsByClassName("matiere");

    var somme = 0;
    var sommeCoeff = 0;
    var noteBac = 0;

    for (var i = 0; i < matieres.length; i++) {
        var note = parseInt(matieres[i].querySelector(".matiere-note input").value);
        var coeff = parseInt(matieres[i].querySelector(".coeffValue").innerHTML);
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

    var currentElement = document.getElementById(id);

    var coeff = currentElement.selectedOptions[0].dataset.coeff; 
    var coeffSpecialite = currentElement.selectedOptions[0].dataset.coeffspecialite; 
    var typeExam = currentElement.selectedOptions[0].dataset.typeexam;

    var coeffElement = document.getElementById("matiere-coeff-"+id);
    var typeExamElement = document.getElementById("matiere-typeExam-"+id);

    var radioSpecialite = coeffElement.querySelector(".radioSpecialite"); 


    if(coeff != null && typeExam != null){
        var coeffValue = coeffElement.querySelector(".coeffValue");
        coeffValue.innerHTML = coeff;
        typeExamElement.innerHTML = typeExam;

        if(radioSpecialite != null){
            radioSpecialite.dataset.coeff = coeff;
            radioSpecialite.value = coeffSpecialite;
        }
    }else{
        var coeffValue = coeffElement.querySelector(".coeffValue");
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

    var coeffSpecialite = element.value;
    var coeffContainerParentId = element.dataset.parent;

    var coeffValue = document.getElementById(coeffContainerParentId).querySelector(".coeffValue");
    coeffValue.innerHTML = coeffSpecialite;

    var radioElements = document.getElementsByClassName("radioSpecialite");
    for (var i = 0; i < radioElements.length; i++) {
        if(radioElements[i].dataset.parent != coeffContainerParentId){
            var coeff = radioElements[i].dataset.coeff;
            var coeffValue = document.getElementById(radioElements[i].dataset.parent).querySelector(".coeffValue");
            coeffValue.innerHTML = coeff;
        }
    }
}
/*********************************************
 *  Fontion de génération dynamique du HTML
 *********************************************/
function generateHtml(bac){

    var dataBac = data[bac];
    
    for(var typeEpreuve in dataBac){

        var typeEpreuveElement = document.getElementById(typeEpreuve);

        /******************************
         * Génération des entêtes
         ******************************/

        var enteteContainer = typeEpreuveElement.querySelector(".matiere-entete");

        var html = '<div class="matiere-nom"></div> \
                    <div class="matiere-coeff">Coeff</div> \
                    <div class="matiere-note">Note</div>';
        enteteContainer.innerHTML += html;

        /******************************
         * Génération des matières
         ******************************/

        var matieresContainer = typeEpreuveElement.querySelector(".matieres");

        for(var matiereKey in dataBac[typeEpreuve]){

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
                                <input type="number" min="0" max="20" size="3" value="10" />\
                            </div>\
                        </div>';                     
            }                          
            matieresContainer.innerHTML += html;
        }
    }
}