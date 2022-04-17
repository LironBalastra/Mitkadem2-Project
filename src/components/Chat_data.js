export const chatHistory = [
    {
        people: ["amit", "liron"], Messages: [
            { time: new Date(), type: "msg", content: "Hello World !", sendby: "amit" },
            { time: new Date(), type: "msg", content: "How are you?", sendby: "amit" },
            { time: new Date(), type: "vid", content: "Hello World !", sendby: "amit" },
            { time: new Date(), type: "audio", content: "Hello World !", sendby: "amit" },
            { time: new Date(), type: "img", content: "Hello World !", sendby: "amit" },
        ]
    },//כל סוגרים מסולסלים כאלה זה איש קשר אחר
]

// export const users = [
//     { username: "amit", password: "amit123456", pathprofileimg: "/Amitpic.jpeg", nickname: "Amit Cohen" },
//     { username: "hemi", password: "hemi123456", pathprofileimg: "/Amitpic.jpeg", nickname: "Hemi" },
//     { username: "liron", password: "liron123456", pathprofileimg: "/Amitpic.jpeg", nickname: "Liron Balastra" },
//     { username: "gal", password: "gal123456", pathprofileimg: "/Amitpic.jpeg", nickname: "Gal Kaminka" },
//     { username: "noa", password: "noa123456", pathprofileimg: "/Amitpic.jpeg", nickname: "Noa Agmon" },
//     { username: "erez", password: "erez123456", pathprofileimg: "/Amitpic.jpeg", nickname: "Erez Sheiner" }
// ]

export const users = {
    "amit" : {
        nickname : "Amit Cohen",
        password : "amit123456",
        picture : "/Amitpic.jpeg",
        contacts : [
            {
                username : "liron",
                nickname : "Liron Balastra",
                picture : "/Amitpic.jpeg",
                messages : [
                    { time: new Date(), type: "msg", content: "Hello Liron !", sendby: "amit" },
                    { time: new Date(), type: "vid", content: "Hello World !", sendby: "amit" },
                    { time: new Date(), type: "audio", content: "Hello World !", sendby: "amit" },
                    { time: new Date(), type: "img", content: "Hello World !", sendby: "amit" },
                ]
                
            },
            {
                username : "oriel",
                nickname : "Oriel Zehavi",
                picture : "/Amitpic.jpeg",
                messages : [
                    { time: new Date(), type: "msg", content: "Hello Oriel !", sendby: "amit" },
                    { time: new Date(), type: "vid", content: "Hello World !", sendby: "amit" },
                    { time: new Date(), type: "audio", content: "Hello World !", sendby: "amit" },
                    { time: new Date(), type: "img", content: "Hello World !", sendby: "amit" },
                ]
                
            },
            {
                username : "gal",
                nickname : "Gal Kaminka",
                picture : "/Amitpic.jpeg",
                messages : [
                    { time: new Date(), type: "msg", content: "Hello gal !", sendby: "amit" },
                    { time: new Date(), type: "vid", content: "Hello World !", sendby: "amit" },
                    { time: new Date(), type: "audio", content: "Hello World !", sendby: "amit" },
                    { time: new Date(), type: "img", content: "Hello World !", sendby: "amit" },
                ]
                
            },
            {
                username : "hemi",
                nickname : "Hemi",
                picture : "/Amitpic.jpeg",
                messages : [
                    { time: new Date(), type: "msg", content: "Hello Hemi !", sendby: "amit" },
                    { time: new Date(), type: "vid", content: "Hello World !", sendby: "amit" },
                    { time: new Date(), type: "audio", content: "Hello World !", sendby: "amit" },
                    { time: new Date(), type: "img", content: "Hello World !", sendby: "amit" },
                ]
                
            },
            {
                username : "Noa",
                nickname : "Noa Agmon",
                picture : "/Amitpic.jpeg",
                messages : [
                    { time: new Date(), type: "msg", content: "Hello Noa !", sendby: "amit" },
                    { time: new Date(), type: "vid", content: "Hello World !", sendby: "amit" },
                    { time: new Date(), type: "audio", content: "Hello World !", sendby: "amit" },
                    { time: new Date(), type: "img", content: "Hello World !", sendby: "amit" },
                ]
                
            }
        ]
    },
    "liron" : {}
}

