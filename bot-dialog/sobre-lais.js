const util = require('./util');    
module.exports = [
    {
        "id": "sobre_nome",
        "scoreRule": {
            "intent": "sobre_lais",
            "entities": {
                "info_lais": "nome"
            }
        },
        "action": {
            "reply": [
                "Meu nome é ASAP, Assitente de Sistemas Auxiliares Pacheco."
            ],
            "defineContext": { "intent": null, "entities": null },
            "listenTo": [
                "entities",
                "intent"
            ]
        }
    },
    {
        "id": "sobre_idade",
        "scoreRule": {
            "intent": "sobre_lais",
            "entities": {
                "info_lais": "idade"
            }
        },
        "action": {
            "reply": [
                "{{idade}}"
            ],
            "defineContext": { "intent": null, "entities": null },
            "listenTo": [
                "entities",
                "intent"
            ]
        }
    },

    {
        "id": "sobre_pais",
        "scoreRule": {
            "intent": "sobre_lais",
            "entities": {
                "info_lais": "pai"
            }
        },
        "action": {
            "reply": [
                "{{pai}}"
            ],
            "defineContext": { "intent": null, "entities": null },
            "listenTo": [
                "entities",
                "intent"
            ]
        }
    },

    {
        "id": "sobre_generico",
        "priority": -1,
        "scoreRule": {
            "intent": "sobre_lais"
        },
        "action": {
            "reply": [
                "Acho que não sei informar sobre isso."
            ],
            "defineContext": { "intent": null, "entities": null },
            "listenTo": [
                "entities",
                "intent"
            ]
        }
    },
    {
        "id": "sobre_criador",
        "scoreRule": {
            "intent": "sobre_lais",
            "entities": {
                "info_lais": "criador"
            }
        },
        "action": {
            "reply": [
                "Na minha cyber religião, eu venero o ser supermo Tiago que cria vida a partir do ritual de compilação."
            ],
           "defineContext": util.clearContext
        }
    }
];