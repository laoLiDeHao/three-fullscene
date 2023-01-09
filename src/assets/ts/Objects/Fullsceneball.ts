import { Mesh, BoxGeometry, MeshStandardMaterial, SphereGeometry, CylinderGeometry, Object3D, Line, Points, PointsMaterial, LineBasicMaterial, LineDashedMaterial, Plane, PlaneGeometry, DoubleSide, Color, MeshBasicMaterial, TextureLoader } from "three";
import { pictureTexture } from "../TTexture";
import { VertexNormalsHelper } from "three/examples/jsm/helpers/VertexNormalsHelper";


let geomatry:SphereGeometry = new SphereGeometry(500,60,40);
geomatry.scale(-1,1,1)
let material:MeshBasicMaterial = new MeshBasicMaterial({
    // side:DoubleSide, //不要 ，效果不好
    // map: new TextureLoader().load('image/fullscene.jpg')
    // map: new TextureLoader().load('image/fullscene-festival.jpg')
    map: new TextureLoader().load('image/fullscene-beach.jpg')
    // fullscene-festival
})
export const fullsceneBall:Mesh = new Mesh(geomatry,material) 