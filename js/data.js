var data = { 
    "ES" : {
        "epreuvesAnticipees":{
            "francaisEcrit":{
                "coeff" : 2,
                "typeExam" : "Ecrit", 
                "label": "Francais",
            },
            "francaisOral":{
                "coeff" : 2,
                "typeExam" : "Oral",
                "label"     : "Francais"
            },
            "sciences":{
                "coeff" : 2,
                "typeExam" : "Ecrit",
                "label"     : "Sciences"
            },
            "tpe":{
                "coeff" : 2,
                "typeExam" : "Oral",
                "label"     : "TPE"
            }
        },
        "epreuvesTerminale":{
            "histoireGeo":{
                "coeff" : 5,
                "typeExam" : "Ecrit",
                "label"     : "Histoire Géographie",
            },
            "math":{
                "coeff" : 5,
                "typeExam" : "Ecrit",
                "label"     : "Mathématiques",
                "isSpecialite" : true,
                "coeffSpecialite" : 7
            },
            "ses":{
                "coeff" : 7,
                "typeExam" : "Ecrit",
                "label"     : "SES",
                "isSpecialite" : true,
                "coeffSpecialite" : 9
            },
            "languevivante1":{
                "coeff" : 3,
                "typeExam" : "Ecrit et oral",
                "label"     : "Langue Vivante 1",
            },
            "languevivante2":{
                "coeff" : 3,
                "typeExam" : "Ecrit et oral",
                "label"     : "Langue Vivante 2",
            },
            "philosophie":{
                "coeff" : 4,
                "typeExam" : "Ecrit",
                "label"     : "Philosophie",
            },
            "eps":{
                "coeff" : 2,
                "typeExam" : "Contrôle continu",
                "label"     : "EPS",
            },
            "specialite":{
                "select" : true,
                "label" : "Spécialité 1",
                "selectData" : {
                    "economieapprofondie" : {
                        "coeff" : 2,
                        "typeExam" : "Ecrit",
                        "label"     : "Economie approfondie",
                        "isSpecialite" : true,
                        "coeffSpecialite" : 2
                    },
                    "sciencessociales" : {
                        "coeff" : 2,
                        "typeExam" : "Ecrit",
                        "label"     : "Sciences sociales et politiques",
                        "isSpecialite" : true,
                        "coeffSpecialite" : 2
                    }
                }
            }
        },
        "epreuvesFacultatives":{
            "epreuveFac1":{
                "select" : true,
                "label" : "Option 1",
                "selectData" : {
                    "langueVivante3" : {
                        "coeff" : 2,
                        "typeExam" : "Oral",
                        "label"     : "Langue vivante 3"
                    },
                    "languesignes" : {
                        "coeff" : 2,
                        "typeExam" : "Ecrit",
                        "label"     : "Langue des signes"
                    }
                }
            },
            "epreuveFac2":{
                "select" : true,
                "label" : "Option 2",
                "selectData" : {
                    "langueVivante3" : {
                        "coeff" : 2,
                        "typeExam" : "Oral",
                        "label"     : "Langue vivante 3"
                    },
                    "languesignes" : {
                        "coeff" : 2,
                        "typeExam" : "Oral",
                        "label"     : "Langue des signes"
                    }
                }
            }
        }
    },
    
    "S" : {
        "epreuvesAnticipees":{
            "francaisEcrit":{
                "coeff" : 2,
                "typeExam" : "Ecrit", 
                "label": "Francais",
            },
            "francaisOral":{
                "coeff" : 2,
                "typeExam" : "Oral",
                "label"     : "Francais"
            },
            "tpe":{
                "coeff" : 2,
                "typeExam" : "Oral",
                "label"     : "TPE"
            }
        },
        "epreuvesTerminale":{
            "math":{
                "coeff" : 7,
                "typeExam" : "Ecrit",
                "label"     : "Mathématiques",
                "isSpecialite" : true,
                "coeffSpecialite" : 9
            },
            "physique" : {
            "coeff" : 6,
            "typeExam" : "Ecrit",
            "label"     : "Physique",
            "isSpecialite" : true,
            "coeffSpecialite" : 8
            },
            "histoireGeo":{
                "coeff" : 3,
                "typeExam" : "Ecrit",
                "label"     : "Histoire Géographie",
            },
            "languevivante1":{
                "coeff" : 3,
                "typeExam" : "Ecrit et oral",
                "label"     : "Langue Vivante 1",
            },
            "languevivante2":{
                "coeff" : 2,
                "typeExam" : "Ecrit et oral",
                "label"     : "Langue Vivante 2",
            },
            "philosophie":{
                "coeff" : 3,
                "typeExam" : "Ecrit",
                "label"     : "Philosophie",
            },
            "eps":{
                "coeff" : 2,
                "typeExam" : "Contrôle continu",
                "label"     : "EPS",
            },
            "specialite":{
                "select" : true,
                "label" : "Spécialité 1",
                "selectData" : {
                    "svt" : {
                        "coeff" : 6,
                        "typeExam" : "Ecrit",
                        "label"     : "Science  et Vie de la Terre",
                        "isSpecialite" : true,
                        "coeffSpecialite" : 8
                    },
                    "ssi" : {
                        "coeff" : 6,
                        "typeExam" : "Ecrit",
                        "label"     : "Sciences de l'Ingenieur",
                        "isSpecialite" : true,
                        "coeffSpecialite" : 8
                    }
                }
            }
        },
        "epreuvesFacultatives":{
            "epreuveFac1":{
                "select" : true,
                "label" : "Option 1",
                "selectData" : {
                    "langueVivante3" : {
                        "coeff" : 2,
                        "typeExam" : "Oral",
                        "label"     : "Langue vivante 3"
                    },
                    "languesignes" : {
                        "coeff" : 2,
                        "typeExam" : "Ecrit",
                        "label"     : "Langue des signes"
                    }
                }
            },
            "epreuveFac2":{
                "select" : true,
                "label" : "Option 2",
                "selectData" : {
                    "langueVivante3" : {
                        "coeff" : 2,
                        "typeExam" : "Oral",
                        "label"     : "Langue vivante 3"
                    },
                    "languesignes" : {
                        "coeff" : 2,
                        "typeExam" : "Oral",
                        "label"     : "Langue des signes"
                    }
                }
            }
        }
    },
    "L" : {
        "epreuvesAnticipees":{
            "francaisEcrit":{
                "coeff" : 2,
                "typeExam" : "Ecrit", 
                "label": "Francais",
            },
            "francaisOral":{
                "coeff" : 3,
                "typeExam" : "Oral",
                "label"     : "Francais"
            },
            "tpe":{
                "coeff" : 2,
                "typeExam" : "Oral",
                "label"     : "TPE"
            },
            "science":{
                "coeff" : 2,
                "typeExam" : "Oral",
                "label"     : "Science"
            }
        },
        "epreuvesTerminale":{
            "histoireGeo":{
                "coeff" : 4,
                "typeExam" : "Ecrit",
                "label"     : "Histoire Géographie",
            },
            "languevivante1":{
                "coeff" : 4,
                "typeExam" : "Ecrit et Oral",
                "label"     : "Langue Vivante 1",
                "isSpecialite" : true,
                "coeffSpecialite" : 8
            },
            "languevivante2":{
                "coeff" : 4,
                "typeExam" : "Ecrit et Oral",
                "label"     : "Langue Vivante 2",
                "isSpecialite" : true,
                "coeffSpecialite" : 8
            },
            "philosophie":{
                "coeff" : 7,
                "typeExam" : "Ecrit",
                "label"     : "Philosophie",
            },
            "eps":{
                "coeff" : 2,
                "typeExam" : "Contrôle continu",
                "label"     : "EPS",
            },
            "litteratureetrangere":{
                "coeff" : 1,
                "typeExam" : "Oral",
                "label"     : "Litterature Etrangere",
            },
            "litterature":{
                "coeff" : 4,
                "typeExam" : "Ecrit",
                "label"     : "Litterature Etrangere",
            },
            "specialite":{
                "select" : true,
                "label" : "Spécialité 1",
                "selectData" : {
                    "maths" : {
                        "coeff" : 4,
                        "typeExam" : "Ecrit",
                        "label"     : "Mathématiques",
                        "isSpecialite" : true,
                        "coeffSpecialite" : 4
                    },
                    "languevivante3" : {
                        "coeff" : 4,
                        "typeExam" : "Ecrit",
                        "label"     : "Langues Vivantes 3",
                        "isSpecialite" : true,
                        "coeffSpecialite" : 4
                    },
                    "grec" : {
                        "coeff" : 4,
                        "typeExam" : "Ecrit",
                        "label"     : "Grec",
                        "isSpecialite" : true,
                        "coeffSpecialite" : 4
                    }
                }
            }
        },
        "epreuvesFacultatives":{
            "epreuveFac1":{
                "select" : true,
                "label" : "Option 1",
                "selectData" : {
                    "langueVivante3" : {
                        "coeff" : 2,
                        "typeExam" : "Oral",
                        "label"     : "Langue vivante 3"
                    },
                    "languesignes" : {
                        "coeff" : 2,
                        "typeExam" : "Ecrit",
                        "label"     : "Langue des signes"
                    }
                }
            },
            "epreuveFac2":{
                "select" : true,
                "label" : "Option 2",
                "selectData" : {
                    "langueVivante3" : {
                        "coeff" : 1,
                        "typeExam" : "Oral",
                        "label"     : "Langue vivante 3"
                    },
                    "languesignes" : {
                        "coeff" : 1,
                        "typeExam" : "Oral",
                        "label"     : "Langue des signes"
                    }
                }
            }
        }
    },
    "STMG" : {
        "epreuvesAnticipees":{
            "francaisEcrit":{
                "coeff" : 2,
                "typeExam" : "Ecrit", 
                "label": "Francais",
            },
            "francaisOral":{
                "coeff" : 3,
                "typeExam" : "Oral",
                "label"     : "Francais"
            },
            "etudegestion":{
                "coeff" : 2,
                "typeExam" : "Oral",
                "label"     : "Etude De Gestion"
            },
        },
        "epreuvesTerminale":{
            "histoireGeo":{
                "coeff" : 2,
                "typeExam" : "Ecrit",
                "label"     : "Histoire Géographie",
            },
            "mathématiques":{
                "coeff" : 3,
                "typeExam" : "Ecrit",
                "label"     : "Histoire Géographie",
            },
            "languevivante1":{
                "coeff" : 3,
                "typeExam" : "Ecrit et Oral",
                "label"     : "Langue Vivante 1",
            },
            "languevivante2":{
                "coeff" : 3,
                "typeExam" : "Ecrit et Oral",
                "label"     : "Langue Vivante 2",
            },
            "philosophie":{
                "coeff" : 2,
                "typeExam" : "Ecrit",
                "label"     : "Philosophie",
            },
            "eps":{
                "coeff" : 2,
                "typeExam" : "Contrôle continu",
                "label"     : "EPS",
            },
            "economiedroit":{
                "coeff" : 5,
                "typeExam" : "Ecrit",
                "label"     : "Economie Droit",
            },
            "managementdesorganistions":{
                "coeff" : 5,
                "typeExam" : "Ecrit",
                "label"     : "Management des Organisations",
            },
            "specialite":{
                "select" : true,
                "label" : "Spécialité 1",
                "selectData" : {
                    "marketing" : {
                        "coeff" : 12,
                        "typeExam" : "Ecrit",
                        "label"     : "Marketing",
                        "isSpecialite" : true,
                        "coeffSpecialite" : 12
                    },
                    "informatique" : {
                        "coeff" : 12,
                        "typeExam" : "Ecrit",
                        "label"     : "Informqtique",
                        "isSpecialite" : true,
                        "coeffSpecialite" : 12
                    },
                    "communication" : {
                        "coeff" : 4,
                        "typeExam" : "Ecrit",
                        "label"     : "Communication",
                        "isSpecialite" : true,
                        "coeffSpecialite" : 4
                    }
                }
            }
        },
        "epreuvesFacultatives":{
            "epreuveFac1":{
                "select" : true,
                "label" : "Option 1",
                "selectData" : {
                    "arts" : {
                        "coeff" : 2,
                        "typeExam" : "Oral",
                        "label"     : "Arts"
                    },
                    "languesignes" : {
                        "coeff" : 2,
                        "typeExam" : "Ecrit",
                        "label"     : "Langue des signes"
                    }
                }
            },
            "epreuveFac2":{
                "select" : true,
                "label" : "Option 2",
                "selectData" : {
                    "arts" : {
                        "coeff" : 1,
                        "typeExam" : "Oral",
                        "label"     : "Langue vivante 3"
                    },
                    "languesignes" : {
                        "coeff" : 1,
                        "typeExam" : "Oral",
                        "label"     : "Langue des signes"
                    }
                }
            }
        }
    },
    "STI2D" : {
        "epreuvesAnticipees":{
            "francaisEcrit":{
                "coeff" : 2,
                "typeExam" : "Ecrit", 
                "label": "Francais",
            },
            "francaisOral":{
                "coeff" : 3,
                "typeExam" : "Oral",
                "label"     : "Francais"
            },
            "histoiregeo":{
                "coeff" : 2,
                "typeExam" : "Oral",
                "label"     : "Histoire Géographie"
            },
        },
        "epreuvesTerminale":{
           
            "mathématiques":{
                "coeff" : 4,
                "typeExam" : "Ecrit",
                "label"     : "Histoire Géographie",
            },
            "languevivante1":{
                "coeff" : 2,
                "typeExam" : "Ecrit et Oral",
                "label"     : "Langue Vivante 1",
            },
            "languevivante2":{
                "coeff" : 2,
                "typeExam" : "Ecrit et Oral",
                "label"     : "Langue Vivante 2",
            },
            "philosophie":{
                "coeff" : 2,
                "typeExam" : "Ecrit",
                "label"     : "Philosophie",
            },
            "eps":{
                "coeff" : 2,
                "typeExam" : "Contrôle continu",
                "label"     : "EPS",
            },
            "physiquechimie":{
                "coeff" : 4,
                "typeExam" : "Ecrit",
                "label"     : "Physique Chimie",
            },
            "technologie":{
                "coeff" : 8,
                "typeExam" : "Ecrit",
                "label"     : "Technologie",
            },
            "technologielv1":{
                "coeff" : 2,
                "typeExam" : "Ecrit",
                "label"     : "Technologie en LV1",
            },
            "specialite":{
                "select" : true,
                "label" : "Spécialité 1",
                "selectData" : {
                    "energie" : {
                        "coeff" : 12,
                        "typeExam" : "Ecrit",
                        "label"     : "Energie",
                        "isSpecialite" : true,
                        "coeffSpecialite" : 12
                    },
                    "informatique" : {
                        "coeff" : 12,
                        "typeExam" : "Ecrit",
                        "label"     : "Informqtique",
                        "isSpecialite" : true,
                        "coeffSpecialite" : 12
                    },
                    "architecture" : {
                        "coeff" : 12,
                        "typeExam" : "Ecrit",
                        "label"     : "Architecture",
                        "isSpecialite" : true,
                        "coeffSpecialite" : 12
                    }
                }
            }
        },
        "epreuvesFacultatives":{
            "epreuveFac1":{
                "select" : true,
                "label" : "Option 1",
                "selectData" : {
                    "arts" : {
                        "coeff" : 2,
                        "typeExam" : "Oral",
                        "label"     : "Arts"
                    },
                    "languesignes" : {
                        "coeff" : 2,
                        "typeExam" : "Ecrit",
                        "label"     : "Langue des signes"
                    }
                }
            },
            "epreuveFac2":{
                "select" : true,
                "label" : "Option 2",
                "selectData" : {
                    "arts" : {
                        "coeff" : 1,
                        "typeExam" : "Oral",
                        "label"     : "Langue vivante 3"
                    },
                    "languesignes" : {
                        "coeff" : 1,
                        "typeExam" : "Oral",
                        "label"     : "Langue des signes"
                    }
                }
            }
        }
    }
};
