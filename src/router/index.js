import { noPage } from '@pages'
import allActivity from './allActivity'
import route618 from './618'
import myRoute from './myRoute'

export const routes = [
    ...allActivity,
    ...route618,
    ...myRoute,
    {
        path: '*',
        name: "noPage",
        component: noPage,
        meta: {}
    }
]
