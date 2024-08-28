import {createRouter, createWebHashHistory} from 'vue-router'
import NProgress from 'nprogress'
import DashBoard from "@/views/DashBoard/index.vue";
import LayoutPage from "@/views/LayoutPage/index.vue";
import LayoutComponent from "@/views/LayoutPage/_components/LayoutComponent.vue";
import DisplayPage from "@/views/DisplayPage/index.vue";
import NoticeCenter from "@/views/LayoutPage/_components/NoticeCenter.vue";
import TableBoard from "@/views/playground/_components/TableBoard.vue";
import AllComponents from "@/views/playground/_components/AllComponents.vue";
import Information from "@/views/DisplayPage/_components/information.vue";
import StorgeManage from "@/views/playground/_components/StorgeManage.vue";
import UserCenter from '@/views/UserCenter/index.vue'
import UserInfoPage from "@/views/UserCenter/_components/UserInfoPage.vue";
import BackLinksPage from "@/components/BackLinksPage.vue";
import DataScreen from '@/views/DataScreen/index.vue'
import InforPage from '@/views/Information/index.vue'
import PaperList from "@/views/Information/_components/PaperList.vue";
import MoreInfo from "@/views/Information/MoreInfo.vue";
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
        },
        {
          path: '/storge',
          name: 'storge',
          component: StorgeManage,
          meta: {
            title: '展示中心 | 库存管理'
          }
        },
        {
          path: '/usercenter',
          name: 'usercenter',
          component: UserCenter,
          meta: {
            title: '用户中心'
          },
          children: [
            {
              path: '/usercenter/info',
              name: 'info',
              component: UserInfoPage,
              meta: {
                title: '用户信息'
              }
            }
          ]
        },
        {
          path: '/backlinks/:pathMatch(.*)*',
          name: 'backlinks',
          component: BackLinksPage,
          meta: {
            title: '外链拦截'
          }
        },
        {
          path: '/dataScreen',
          name: 'dataScreen',
          component: DataScreen,
          meta: {
            title: '数据大屏'
          }
        },
        {
          path: '/inforcenter',
          name: 'inforcenter',
          component: InforPage,
          meta: {
            title: '资讯中心'
          },
          children: [
            {
              path: '',
              name: 'paperlist',
              component: PaperList,
            },
            {
              path: '/inforcenter/:id',
              name: 'paperItem',
              component: MoreInfo,
            }
          ]
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
      },
      children: [
        {
          path: '/display/information',
          name: 'information',
          component: Information,
          meta: {
            title: '中台管理系统'
          }
        }
      ]
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
