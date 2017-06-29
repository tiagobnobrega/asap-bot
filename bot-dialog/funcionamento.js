module.exports =[
    {
        "id": "funcionamento_geral",
        "priority": -900,
        "scoreRule": {
            "intent": "funcionamento_lais",
        },
        "action": {
            "reply": [
                "{{ajuda_geral}}",
                "Posso se ajudar se estiver com problemas para utilizar a camera,"
                +" sincronizar dados, se logar, realizar baixa de um determinado item de entrega",
                "Não posso falar muito sobre mim, mas respondo algumas coisas ;)",
                "Em breve eu espero em outros assuntos "
                +"{{random_emoji}}"
            ],
            "defineContext": { "intent": null, "entities": null },
            "listenTo": [
                "entities",
                "intent"
            ]
        }
    }
];
