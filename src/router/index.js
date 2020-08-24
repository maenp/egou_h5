import { noPage } from '@pages'
import allActivity from './allActivity'
import route618 from './618'

export const routes = [
    ...allActivity,
    ...route618,
    {
        path: '*',
        name: "noPage",
        component: noPage,
        meta: {}
    }
]
