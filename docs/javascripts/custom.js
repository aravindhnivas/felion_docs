const getURLs = async () => {
    const URL = "https://api.github.com/repos/aravindhnivas/felion_gui_v4/releases/latest"
    const data = await fetch(URL, {method: "GET"})
    const json = await data.json()
    const winAsset = json.assets.find(asset => asset.name.endsWith(".msi"))
    const dmgAsset = json.assets.find(asset => asset.name.endsWith(".dmg"))
    const appImageAsset = json.assets.find(asset => asset.name.endsWith(".AppImage"))
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
