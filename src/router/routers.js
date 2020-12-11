import Login from "../views/Login";
import Home from "../views/Home";

export default [
    {
        path: '/personMgr',
        name:'personMgr',
        meta:{
          title:'人事管理',
          icon:'md-person',
        },
        component: ()=>import('../views/personMgr'),
        children:[
            {
                path: '/interRmd',
                name:'interRmd',
                meta:{
                    title: '内部推荐',
                    icon:'md-person-add'
                },
                showAlways:true,
                component:()=>import('../views/InterRmd')
            },
            {
                path: '/LaborRel',
                name: 'LaborRel',
                meta: {
                  title: '劳动关系',
                  icon: 'md-contacts'
                },
                component:()=>import('../views/LaborRel')
            }
        ]
    }
]
