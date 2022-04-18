export const users = {
    "amit" : {
        nickname : "Amit Cohen",
        password : "amit123456",
        picture : "/Amitpic.jpeg",
        contacts : [
            {
                username : "liron",
                nickname : "Liron Balastra",
                picture : "/Liron.jpg",
                messages : [
                    { time: new Date(), type: "msg", content: "Hello Liron !", sendby: "amit" },
                    { time: new Date(), type: "vid", content: "you look so good today", sendby: "amit" },
                    { time: new Date(), type: "audio", content: "are you single?", sendby: "amit" },
                ]
                
            },
            {
                username : "yair",
                nickname : "Yair Lapid",
                picture : "/yair.jpg",
                messages : [
                    { time: new Date(), type: "msg", content: "Hello Yair !", sendby: "amit" },
                    { time: new Date(), type: "vid", content: "you will not be prime minister", sendby: "amit" },
                    { time: new Date(), type: "audio", content: "but i will vote for you next time", sendby: "amit" },
                ]
                
            },
            {
                username : "gal",
                nickname : "Gal Kaminka",
                picture : "/gal.jpg",
                messages : [
                    { time: new Date(), type: "msg", content: "Hello gal !", sendby: "amit" },
                    { time: new Date(), type: "vid", content: "why didn't you factored us in Computer Structure?", sendby: "amit" },
                    { time: new Date(), type: "audio", content: "please help us next time", sendby: "amit" },
                ]
                
            },
            {
                username : "justin",
                nickname : "Justin Bieber",
                picture : "/justin.jpg",
                messages : [
                    { time: new Date(), type: "msg", content: "Hello Justin !", sendby: "amit" },
                    { time: new Date(), type: "vid", content: "Love your new Album!", sendby: "amit" },
                ]
                
            },
            {
                username : "Noa",
                nickname : "Noa Agmon",
                picture : "/noa.jpg",
                messages : [
                    { time: new Date(), type: "msg", content: "Hello Noa !", sendby: "amit" },
                    { time: new Date(), type: "vid", content: "Hello World !", sendby: "amit" },
                    { time: new Date(), type: "audio", content: "Hello World !", sendby: "amit" },
                    { time: new Date(), type: "img", content: "Hello World !", sendby: "amit" },
                    { time: new Date(), type: "img", content: "Hello World !", sendby: "amit" },
                    { time: new Date(), type: "img", content: "Hello World !", sendby: "amit" },
                    { time: new Date(), type: "img", content: "Hello World !", sendby: "amit" },
                ]
                
            }
        ]
    },
    "liron" : {}
}

