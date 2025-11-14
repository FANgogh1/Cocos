import { _decorator, Component, Prefab, CCInteger, instantiate, Node } from 'cc';
import { BLOCK_SIZE, PlayerController } from './PlayerController';
const { ccclass, property } = _decorator;

enum BlockType{
    BT_NONE,
    BT_STONE,
};

@ccclass('GameManger')
export class GameManger extends Component {


    @property({type: Prefab})
    public boxPrefab: Prefab|null = null;

    start() {

    }

    update(deltaTime: number) {
        
    }
}


