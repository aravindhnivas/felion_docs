const URLs = {
    feliongui: "https://api.github.com/repos/aravindhnivas/felion_gui_v4/releases/latest",
    felionpy: "https://api.github.com/repos/aravindhnivas/felionpy/releases/latest"
}

const data_types = {
    feliongui: {
        win: {url: '', size: '', endsWith: '.msi'},
        darwin: {url: '', size: '', endsWith: '.dmg'},
        linux: {url: '', size: '', endsWith: '.AppImage'}
    },
    felionpy: {
        win: {url: '', size: '', endsWith: 'win32.zip'},
        darwin: {url: '', size: '', endsWith: 'darwin.zip'},
        linux: {url: '', size: '', endsWith: 'linux.zip'}
    }
}

const OS = ["win", "darwin", "linux"]

const init = async () => {

    const keys = Object.keys(URLs)

    for (const key of keys) {
        const download = Array.from(document.getElementsByClassName(key + "-download-btn"))
        if(download.length < 1) continue
        
        await set_url_and_size(key)
        
        OS.forEach(os => {
            const span = document.getElementById(`${key}-${os}`)
            if(!span) return

            let append = ''
            
            if(key === 'feliongui') append = data_types[key][os].endsWith + ', '
            span.textContent = `(${append}${data_types[key][os].size} MB)`

            const download_btn = document.getElementById(`${key}-${os}-download-btn`)
            if(!download_btn) return
            
            download_btn.onclick =  (e) => {
                e.preventDefault();
                window.location.href = data_types[key][os].url
            }
    })
    }
}

const set_url_and_size = async (key = 'feliongui') => {

    const URL = URLs[key]
    const data = await fetch(URL, {method: "GET"})
    const json = await data.json()
    
    const win_asset = json.assets.find(asset => asset.name.endsWith(data_types[key].win.endsWith))
    const dmg_asset = json.assets.find(asset => asset.name.endsWith(data_types[key].darwin.endsWith))
    const linux_asset = json.assets.find(asset => asset.name.endsWith(data_types[key].linux.endsWith))

    data_types[key].win.url = win_asset.browser_download_url    
    data_types[key].darwin.url = dmg_asset.browser_download_url    
    data_types[key].linux.url = linux_asset.browser_download_url

    data_types[key].win.size = Number(win_asset.size / 1024 / 1024).toFixed(0)
    data_types[key].darwin.size = Number(dmg_asset.size / 1024 / 1024).toFixed(0)
    data_types[key].linux.size = Number(linux_asset.size / 1024 / 1024).toFixed(0)
}

init()
