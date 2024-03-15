let { createApp } = Vue;

createApp
    ({
        data() {
            return {
                /* interval:"", */
                search: "",
                /* filteredListName: [], */
                currentMessage: "",
                /* currentChatMessages:[], */
                currentChat: "",
                myContact:
                {
                    name: "Simone",
                    avatar: "./assets/img/avatar_io.jpg",
                    visible: "",
                    messages:
                        [
                            {
                                date: "",
                                message: "",
                                status: "",
                            }
                        ]
                },
                contacts: [
                    {
                        name: 'Michele',
                        avatar: './assets/img/avatar_1.jpg',
                        visible: "",
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Hai portato a spasso il cane?',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Ricordati di stendere i panni',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 16:15:22',
                                message: 'Tutto fatto!',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Fabio',
                        avatar: './assets/img/avatar_2.jpg',
                        visible: "",
                        messages: [
                            {
                                date: '20/03/2020 16:30:00',
                                message: 'Ciao come stai?',
                                status: 'sent'
                            },
                            {
                                date: '20/03/2020 16:30:55',
                                message: 'Bene grazie! Stasera ci vediamo?',
                                status: 'received'
                            },
                            {
                                date: '20/03/2020 16:35:00',
                                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                                status: 'sent'
                            }
                        ],
                    },
                    {
                        name: 'Samuele',
                        avatar: './assets/img/avatar_3.jpg',
                        visible: "",
                        messages: [
                            {
                                date: '28/03/2020 10:10:40',
                                message: 'La Marianna va in campagna',
                                status: 'received'
                            },
                            {
                                date: '28/03/2020 10:20:10',
                                message: 'Sicuro di non aver sbagliato chat?',
                                status: 'sent'
                            },
                            {
                                date: '28/03/2020 16:15:22',
                                message: 'Ah scusa!',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Alessandro B.',
                        avatar: './assets/img/avatar_4.jpg',
                        visible: "",
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Lo sai che ha aperto una nuova pizzeria?',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Si, ma preferirei andare al cinema',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Alessandro L.',
                        avatar: './assets/img/avatar_5.jpg',
                        visible: "",
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Ricordati di chiamare la nonna',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Va bene, stasera la sento',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Claudia',
                        avatar: './assets/img/avatar_6.jpg',
                        visible: "",
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Ciao Claudia, hai novità?',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Non ancora',
                                status: 'received'
                            },
                            {
                                date: '10/01/2020 15:51:00',
                                message: 'Nessuna nuova, buona nuova',
                                status: 'sent'
                            }
                        ],
                    },
                    {
                        name: 'Federico',
                        avatar: './assets/img/avatar_7.jpg',
                        visible: "",
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Marco',
                        avatar: './assets/img/avatar_8.jpg',
                        visible: "",
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                                status: 'received'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:51:00',
                                message: 'OK!!',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Matteo',
                        avatar: './assets/img/avatar_1.jpg',
                        visible: "",
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Hai portato a spasso il cane?',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Ricordati di stendere i panni',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 16:15:22',
                                message: 'Tutto fatto!',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Martina',
                        avatar: './assets/img/avatar_2.jpg',
                        visible: "",
                        messages: [
                            {
                                date: '20/03/2020 16:30:00',
                                message: 'Ciao come stai?',
                                status: 'sent'
                            },
                            {
                                date: '20/03/2020 16:30:55',
                                message: 'Bene grazie! Stasera ci vediamo?',
                                status: 'received'
                            },
                            {
                                date: '20/03/2020 16:35:00',
                                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                                status: 'sent'
                            }
                        ],
                    },
                    {
                        name: 'Franco',
                        avatar: './assets/img/avatar_3.jpg',
                        visible: "",
                        messages: [
                            {
                                date: '28/03/2020 10:10:40',
                                message: 'La Marianna va in campagna',
                                status: 'received'
                            },
                            {
                                date: '28/03/2020 10:20:10',
                                message: 'Sicuro di non aver sbagliato chat?',
                                status: 'sent'
                            },
                            {
                                date: '28/03/2020 16:15:22',
                                message: 'Ah scusa!',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Biggioggero',
                        avatar: './assets/img/avatar_4.jpg',
                        visible: "",
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Lo sai che ha aperto una nuova pizzeria?',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Si, ma preferirei andare al cinema',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Luke',
                        avatar: './assets/img/avatar_5.jpg',
                        visible: "",
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Ricordati di chiamare la nonna',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Va bene, stasera la sento',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Ahsoka',
                        avatar: './assets/img/avatar_6.jpg',
                        visible: "",
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Ciao Claudia, hai novità?',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Non ancora',
                                status: 'received'
                            },
                            {
                                date: '10/01/2020 15:51:00',
                                message: 'Nessuna nuova, buona nuova',
                                status: 'sent'
                            }
                        ],
                    },
                    {
                        name: 'Papa Francesco',
                        avatar: './assets/img/avatar_7.jpg',
                        visible: "",
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Ing. Cane',
                        avatar: './assets/img/avatar_8.jpg',
                        visible: "",
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                                status: 'received'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:51:00',
                                message: 'OK!!',
                                status: 'received'
                            }
                        ],
                    }
                ]
            }
        },
        methods:
        {
            openContactChat(index) {
                //this.currentChat = null;
                //this.currentChatMessages.splice(0, this.currentChatMessages.length)
                //this.currentChat.splice(0,1)
                //this.contacts[index].visible = !this.contacts[index].visible;
                //console.log(this.contacts[index].visible);
                //console.log(this.contacts[index]);
                this.currentChat = this.contacts[index]
                //console.log(this.currentChat);
                //console.log(this.contacts[index]);
                //console.log(this.currentChat);
                //console.log(this.currentChat[0].name);
                //console.log(this.messagges.message);
            },
            sendMessage() {
                //console.log(this.currentChatMessages);
                //this.currentChatMessages.push(this.currentMessage);
                let newMessage =
                {
                    date: '10/01/2020 15:51:00',
                    message: this.currentMessage,
                    status: 'sent'
                }
                console.log(newMessage);
                this.currentChat.messages.push(newMessage)
                this.currentMessage = "";
                //console.log(this.currentChat);
                //this.currentChat.push(message="ok")

                this.timeout = setTimeout(this.autoMessage, 1500)
                //clearInterval(this.interval)

                //console.log(autoMessageOk);
                //console.log(this.currentChat);
            },
            autoMessage() {
                let autoMessageOk =
                {
                    date: '10/01/2020 15:51:00',
                    message: 'Ok..',
                    status: 'received'
                }
                this.currentChat.messages.push(autoMessageOk);
            },
            filteredList() {

                //cycle into myContact
                /* return myContact.filter((object) =>
                    object.name.toLowerCase().includes(search.value.toLowerCase())
                ); */
                //cycle-filter into contacts
                //function to see if "search" includes in "singleObject.name"

                /* let searchValue = this.search.toLowerCase();
                console.log(searchValue); */

                //filteredListName = "";
                return this.contacts.filter(contact => {

                    //console.log(this.contact.visible);
                    if (this.search.length > 0 && this.search !== " ") {

                        if (contact.name.toLowerCase().includes(this.search.toLowerCase())) {
                            //console.log(contact);
                            //need to do another cycle (????)
                            /* this.contacts.map(contact => 
                                {
                                    contact.visible = true
                                }) */
                            contact.visible = true;
                        }
                        else if (!contact.name.toLowerCase().includes(this.search.toLowerCase())) {
                            contact.visible = false;
                        }
                        /* else if (this.search === " ")
                        {
                            contact.visible = false;
                        } */
                    }
                    else{
                        this.contacts.map(contact =>
                            {
                                contact.visible = false
                            })
                    }


                    //this.filteredListName.push(singleObject.name);
                    //console.log(this.filteredListName);
                    //console.log(this.filteredListName.name);
                    //console.log(singleObject.name.toLowerCase().includes(this.search.toLowerCase()));
                    //console.log(this.filteredList);
                    //console.log(this.contacts);
                });
            }
        },
        computed:
        {

        },
        mounted() {
            //console.log(this.contacts[0].messages[0].message);
            //console.log(this.currentChat);
            //console.log(this.filteredListName);
            //clearInterval(this.interval)
        },
        update() {
            //console.log(this.currentChatMessages);
            //console.log(this.currentChat);
            //console.log(this.contacts.messages);
            //console.log(currentChat);
            //clearInterval(this.interval)
            //console.log(contacts);
        },
        beforeUnmount() {
            //clearInterval(this.interval)
        },
        unmounted() {
            //clearInterval(this.interval)
        }
    }).mount("#app");

var DateTime = luxon.DateTime;

