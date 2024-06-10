const express = require('express')
const app = express()
const port = 3000

//index.html
app.get('/', (req, res) => {
  res.sendfile("html/index.html")
})

app.get('/3D_Models/index', (req, res) => {
  res.sendfile("html/3d_Model.html")
})

app.get('/asset/html/index/css', (req, res) => {
  res.sendfile("css/style.css")
})
app.get('/asset/html/2d/css', (req, res) => {
  res.sendfile("css/style2.css")
})

app.get('/asset/html/index/button', (req, res) => {
  res.sendfile("img/play-icon.png")
})

//coffin1
app.get('/asset/models/coffins', (req, res) => {
  res.sendfile("data/coffins_of_pa-di-mut_mut-iy-y_and_ankh-khonsu.glb")
})
app.get('/asset/img/coffins', (req, res) => {
  res.sendfile("img/coffins.png")
})
app.get('/asset/html/coffins', (req, res) => {
  res.sendfile("html/coffin_of_pa_di_mut_mut.html")
})
app.get('/asset/poster/coffin', (req, res) => {
  res.sendfile("poster/coffin.webp")
})


//coffin2
app.get('/asset/models/coffins2', (req, res) => {
  res.sendfile("data/coffin.glb")
})
app.get('/asset/img/coffins2', (req, res) => {
  res.sendfile("img/coffins2.png")
})
app.get('/asset/html/coffins2', (req, res) => {
  res.sendfile("html/coffin2.html")
})
app.get('/asset/poster/coffin2', (req, res) => {
  res.sendfile("poster/coffin2.webp")
})



//벽화
app.get('/asset/models/plow_scene_tomb_egypt', (req, res) => {
  res.sendfile("data/plow_scene_tomb_egypt.glb")
})
app.get('/asset/img/plow_scene_tomb_egypt', (req, res) => {
  res.sendfile("img/plow_scene_tomb.png")
})
app.get('/asset/html/plow_scene_tomb_egypt', (req, res) => {
  res.sendfile("html/plow_scene_tomb_egypt.html")
})
app.get('/asset/poster/plow_scene', (req, res) => {
  res.sendfile("poster/plow_scene.webp")
})



//람세스 2세
app.get('/asset/models/ramesses', (req, res) => {
  res.sendfile("data/statue_of_ramesses_iii.glb")
})
app.get('/asset/img/ramesses', (req, res) => {
  res.sendfile("img/ramesses.png")
})
app.get('/asset/html/ramesses', (req, res) => {
  res.sendfile("html/status_of_rammesses.html")
})
app.get('/asset/poster/ramesses', (req, res) => {
  res.sendfile("poster/ramesses.webp")
})


//고양이
app.get('/asset/models/bastet_cat', (req, res) => {
  res.sendfile("data/bastet_cat_goddess_egypt.glb")
})
app.get('/asset/html/bastet_cat', (req, res) => {
  res.sendfile("html/bastet_cat_goddess_egypt.html")
})
app.get('/asset/img/bastet_cat', (req, res) => {
  res.sendfile("img/bastet.png")
})
app.get('/asset/poster/bastet_cat', (req, res) => {
  res.sendfile("poster/bastet_cat.webp")
})


//6
app.get('/asset/models/nefertaris', (req, res) => {
  res.sendfile("data/tablet_001_queen_nefertaris_egypt.glb")
})
app.get('/asset/img/nefertaris', (req, res) => {
  res.sendfile("img/nefertaris.png")
})
app.get('/asset/html/nefertaris', (req, res) => {
  res.sendfile("html/queen_nefertaris.html")
})
app.get('/asset/poster/nefertaris', (req, res) => {
  res.sendfile("poster/nefertaris.webp")
})


//rosetta_stone
app.get('/asset/models/rosetta', (req, res) => {
  res.sendfile("data/the_rosetta_stone.glb")
})
app.get('/asset/html/rosetta', (req, res) => {
  res.sendfile("html/rosetta.html")
})
app.get('/asset/img/rosetta', (req, res) => {
  res.sendfile("img/rosetta.jpeg")
})
app.get('/asset/poster/rosetta', (req, res) => {
  res.sendfile("poster/rosetta.webp")
})
app.get('/asset/models/rosetta_ios', (req, res) => {
  res.sendfile("data/the_rosetta_stone.usdz")
})



//8
app.get('/asset/models/boat', (req, res) => {
  res.sendfile("data/egyptian_boat_from_ancient_lives.glb")
})
app.get('/asset/html/boat', (req, res) => {
  res.sendfile("html/boat.html")
})
app.get('/asset/img/boat', (req, res) => {
  res.sendfile("img/boat.png")
})
app.get('/asset/poster/boat', (req, res) => {
  res.sendfile("poster/boat.webp")
})
app.get('/asset/models/boat_ios', (req, res) => {
  res.sendfile("data/Egyptian_Boat_from_Ancient_Lives.usdz")
})


//9
app.get('/asset/models/tutankhamun', (req, res) => {
  res.sendfile("data/tutankhamun_gold_mask.glb")
})
app.get('/asset/html/tutankhamun', (req, res) => {
  res.sendfile("html/tutankaman.html")
})
app.get('/asset/img/tutankhamun', (req, res) => {
  res.sendfile("img/mask.png")
})
app.get('/asset/poster/tutankhamun', (req, res) => {
  res.sendfile("poster/tutankhamun.webp")
})
app.get('/asset/models/tutankhamun_ios', (req, res) => {
  res.sendfile("data/Tutankhamun_Gold_Mask.usdz")
})

//10
app.get('/asset/models/wine_making', (req, res) => {
  res.sendfile("data/wine_making_scene_tomb_egypt.glb")
})
app.get('/asset/img/wine_making', (req, res) => {
  res.sendfile("img/wine.png")
})
app.get('/asset/html/wine_making', (req, res) => {
  res.sendfile("html/wine_making_scene.html")
})
app.get('/asset/poster/wine_making', (req, res) => {
  res.sendfile("poster/wine_making.webp")
})

app.get('/asset/img/x', (req, res) => {
  res.sendfile("img/x.png")
})
app.get('/asset/img/x2', (req, res) => {
  res.sendfile("img/x2.png")
})

//2D_View
app.get('/asset/html/2d_index', (req, res) => {
  res.sendfile("html/2d_View.html")
})
app.get('/asset/script/2d_index', (req, res) => {
  res.sendfile("html/script.js")
})
app.get('/asset/img/2d/1', (req, res) => {
  res.sendfile("img/img-1.jpg")
})
app.get('/asset/img/2d/2', (req, res) => {
  res.sendfile("img/img-2.jpg")
})
app.get('/asset/img/2d/3', (req, res) => {
  res.sendfile("img/img-3.jpg")
})
app.get('/asset/img/2d/4', (req, res) => {
  res.sendfile("img/img-4.jpg")
})
app.get('/asset/img/2d/5', (req, res) => {
  res.sendfile("img/img-5.jpg")
})
app.get('/asset/img/2d/6', (req, res) => {
  res.sendfile("img/img-6.jpg")
})

app.get('/html/calendar', (req, res) => {
  res.sendfile("html/cal.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})