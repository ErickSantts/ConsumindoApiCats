const URL_BASE = 'https://thatcopy.pw/catapi/rest/'
const catBtn = document.getElementById('change-cat')
const rotate = document.getElementById('rotate').classList
const imagem = document.getElementById('img')

const getCats = async () => {
    try {
        const data = await fetch(URL_BASE)
        const json = await data.json()
        return json.webpurl
    } catch (error) {
        console.log(error.message)
    }
}

const loadImg = async () => {
    rotate.add('c-loader')
    imagem.style.display = 'none'
    const catImg = document.getElementById('cat');
    catImg.src = await getCats()
    imagem.style.display = 'block'
    rotate.remove('c-loader')
}

catBtn.addEventListener('click', loadImg)

loadImg()