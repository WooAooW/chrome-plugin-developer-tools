
// 个人收藏存储的key
export const FAVORITES_KEY = 'FAVORITES_KEY';

/**
 * 个人收藏的规则
 */
export class FavoritesRule {

    /** 收藏的组件 */
    key: Array<string> = [];

    constructor() { }

    setKey(key: Array<string>) {
        this.key = key;
    }

    getKey() {
        return this.key;
    }
}