import {Vector3} from 'three';
import {OrbitControls} from 'three/examples/js/controls/OrbitControls';
import {OBJLoader} from 'three/examples/js/loaders/OBJLoader';

const $div: HTMLDivElement = document.createElement('div');
$div.setAttribute('id', 'fixture');
$div.innerText = `${typeof Vector3} ${typeof OBJLoader} ${typeof OrbitControls}`;
document.body.appendChild($div);
