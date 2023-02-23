let jsonData = null // global variable to store the json data
const init = async () => {
    const URL = "https://api.github.com/repos/aravindhnivas/felion_gui_v4/releases/latest"
    const data = await fetch(URL, {method: "GET"})
    jsonData = await data.json()
    document.getElementById('version').textContent = jsonData.tag_name
}

init().then(() => {
    console.log("github api called")
    const versionInfoDivs = Array.from(document.getElementsByClassName("version-info"))
    versionInfoDivs.forEach(element =>{element.textContent = jsonData.tag_name.replace('v', '')})
}).catch((err) => {console.error(err)})


const getURLs = async () => {
    
    if(!jsonData) await init()

    const winAsset = jsonData.assets.find(asset => asset.name.endsWith(".msi"))
    const dmgAsset = jsonData.assets.find(asset => asset.name.endsWith(".dmg"))
    const appImageAsset = jsonData.assets.find(asset => asset.name.endsWith(".AppImage"))
    const winURL = winAsset.browser_download_url    
    const dmgURL = dmgAsset.browser_download_url    
    const appImageURL = appImageAsset.browser_download_url
    return {winURL, dmgURL, appImageURL}
}

const downloadBtn = document.getElementsByClassName("download-btn")
Array.from(downloadBtn).forEach(element => {
    element.addEventListener("click", async (e) => {
        e.preventDefault();
        console.log("clicked")
        const {winURL, dmgURL, appImageURL} = await getURLs()
        if(element.classList.contains('windows')) {
            window.location.href = winURL
        } else if (element.classList.contains('macos')) {
            window.location.href = dmgURL
        } else {
            window.location.href = appImageURL
        }

    })
});
