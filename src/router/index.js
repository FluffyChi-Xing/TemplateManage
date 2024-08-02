import {createRouter, createWebHashHistory} from 'vue-router'
import NProgress from 'nprogress'
import DashBoard from "@/views/DashBoard/DashBoard.vue";
import LayoutPage from "@/views/LayoutPage/LayoutPage.vue";
import LayoutComponent from "@/views/LayoutPage/_components/LayoutComponent.vue";
import DisplayPage from "@/views/DisplayPage/DisplayPage.vue";
import NoticeCenter from "@/views/LayoutPage/_components/NoticeCenter.vue";
import TableBoard from "@/views/LayoutPage/_components/TableBoard.vue";
import AllComponents from "@/views/LayoutPage/_components/AllComponents.vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'LayoutPage',
      component: LayoutPage,
      meta: {
        title: '中台模板系统'
      },
      children: [
        {
          path: '',
          name: 'LayoutComponent',
          component: LayoutComponent,
          meta: {
            title: '中台模板系统'
          }
        },
        {
          path: '/notice',
          name: 'notice',
          component: NoticeCenter,
          meta: {
            title: '公告中心'
          }
        },
        {
          path: '/allCom',
          name: 'allCom',
          component: AllComponents,
          meta: {
            title: '展示中心 | 全部组件'
          }
        },
        {
          path: '/table',
          name: 'table',
          component: TableBoard,
          meta: {
            title: '展示中心 | 表格模块'
          }
        }
      ],
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard,
      meta: {
        title: '工作台'
      }
    },
    {
      path: '/display',
      name: 'display',
      component: DisplayPage,
      meta: {
        title: '一个 Vue 3 中台模板'
      }
    }
  ]
})
//router before guards
router.beforeEach(async(to) => {
  NProgress.start()
  //set page title
  if (to.meta.title) {
    document.title = to.meta.title
  }
})


//router after guards
router.afterEach(() => {
  NProgress.done()
})


export default router
