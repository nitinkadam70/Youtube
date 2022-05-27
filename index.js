//YOUTUBE API reading documentaion

//Array of Objects

//find url - AIzaSyDYITayaOZPRMKjNTc2Y2Qta4U8YEJAnAQ

//url - https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=football&key=[YOUR_API_KEY]



//append


const searchVideos = async () => {


    let inp = document.getElementById("search").value;

    try {

        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${inp}&key=AIzaSyDmFlGyd_xOpGNcZdN97NY9UEMI3brIApc&maxResults=20`)

        var data = await res.json();

        console.log(data.items);
        appendVideos(data.items)


    }
    catch (error) {

        console.log(error);

    }
}

const trend = async () => {

    try {

        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=viewCount&key=AIzaSyDmFlGyd_xOpGNcZdN97NY9UEMI3brIApc`)

        var data = await res.json();

        console.log(data.items);
        appendVideos(data.items)


    }
    catch (error) {

        console.log(error);

    }
}


trend()





//embded = adding 

let div = document.getElementById("search_result");

const appendVideos = (data) => {

    div.innerHTML = null;

    try {
        data.forEach(({ snippet: { title }, id: { videoId }, snippet: { thumbnails: { medium: { url } } } }) => {

            let innerdiv = document.createElement("div");

            let name = document.createElement("h4");
            name.innerText = title;

            let img = document.createElement("img")
            img.src = url
            img.allow = "fullscreen"

            img.addEventListener("click", () => {

                localStorage.setItem("video", `https://www.youtube.com/embed/${videoId}`)
                window.location.href = "video.html";

            })


            innerdiv.append(img, name);


            div.append(innerdiv)

        })

    }
    catch (error) {
        console.log(error)
    }
}