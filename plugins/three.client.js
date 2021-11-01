import * as THREE from 'three/build/three.module.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

window.THREE = THREE
window.GLTFLoader = GLTFLoader
window.dracoLoader = new DRACOLoader()
window.dracoLoader.setDecoderPath('/assets/js/draco/')
window.dracoLoader.setDecoderConfig({ type: 'js' })
