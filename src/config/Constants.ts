export type MenuItem = {
    name: string;
    goto: string;
}

export const MENUS: MenuItem[] = [
    { name: '主页', goto: '/home' },
    { name: '关于', goto: '/home' },
    { name: '我的博客', goto: '/posts' },
    { name: '联系', goto: '/home' },
    { name: 'Github', goto: '/home' },
]