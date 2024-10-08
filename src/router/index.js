import {createRouter, createWebHashHistory} from 'vue-router'
import NProgress from 'nprogress'
import DashBoard from "@/views/DashBoard/index.vue";
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
import LoginPage  from '@/views/LoginPage/index.vue'
import MarketingCenter from '@/views/MarketingPage/index.vue'
import CouponsList from "@/views/MarketingPage/_components/CouponsList.vue";
import HomeFitment from "@/views/MarketingPage/_components/HomeFitment.vue";
import CheckInPage from "@/views/MarketingPage/_components/CheckInPage.vue";
import WeappManage from "@/views/MarketingPage/weapp/WeappManage.vue";
import WeappHome from "@/views/MarketingPage/weapp/_components/WeappHome.vue";
import WeappId from "@/views/MarketingPage/weapp/[id]/WeappId.vue";
// import WeappAdd from "@/views/MarketingPage/weapp/_components/WeappAdd.vue";
import Maintenance from '@/views/Maintenance/index.vue'
import DocumentPage from "@/views/Maintenance/_components/DocumentPage.vue";
import InterfacePage from "@/views/Maintenance/_components/InterfacePage.vue";
import DocumentLogin from "@/views/Maintenance/_components/DocumentLogin.vue";
import DocumentHome from "@/views/Maintenance/_components/DocumentHome.vue";
import InterfaceHome from "@/views/Maintenance/_components/InterfaceHome.vue";
import InterfaceInfo from "@/views/Maintenance/_components/InterfaceInfo.vue";

/** ===== 页面布局切换-start ===== **/
const layoutMode = localStorage.getItem('layoutMode')
/** ===== 页面布局切换-end ===== **/

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'LayoutPage',
      component: () => {
        if (layoutMode) {
          if (layoutMode === 'mode2') {
            return import('@/layouts/SecondLayout.vue')
          } else {
            return import('@/views/LayoutPage/index.vue')
          }
        } else {
          return import('@/views/LayoutPage/index.vue')
        }
      },
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
        },
        {
          path: '/marketcenter',
          name: 'marketcenter',
          meta: {
            title: '营销中心'
          },
          component: MarketingCenter,
          children: [
            {
              path: '',
              name: 'marketingList',
              component: CouponsList,
              meta: {
                title: '优惠券列表'
              }
            },
            {
              path: '/marketcenter/homeFitment',
              name: 'homeFitment',
              component: HomeFitment,
              meta: {
                title: '首页装修'
              }
            },
            {
              path: '/marketcenter/checkIn',
              name: 'checkIn',
              component: CheckInPage,
              meta: {
                title: '签到配置'
              }
            },
            {
              path: '/marketcenter/weapp',
              name: 'weapp',
              component: WeappManage,
              children: [
                {
                  path: '',
                  name: 'weapphome',
                  component: WeappHome,
                },
                {
                  path: '/marketcenter/weapp/:id',
                  name: 'weappItem',
                  component: WeappId,
                  meta: {
                    title: '公众号编辑'
                  }
                }
              ],
              meta: {
                title: '公众号管理'
              }
            }
          ]
        },
        {
          path: '/maintenance',
          name: 'maintenance',
          meta: {
            title: '维护中心'
          },
          component: Maintenance,
          children: [
            {
              path: '/maintenance/document',
              name: 'document',
              meta: {
                title: '文件管理'
              },
              component: DocumentPage,
              children: [
                {
                  path: '/maintenance/document',
                  name: 'document',
                  meta: {
                    title: '文件管理'
                  },
                  component: DocumentHome,
                  children: [
                    {
                      path: '/maintenance/document/check',
                      name: 'check',
                      component: DocumentLogin
                    }
                  ]
                }
              ]
            },
            {
              path: '/maintenance/interface',
              name: 'interface',
              meta: {
                title: '接口管理'
              },
              component: InterfacePage,
              children: [
                {
                  path: '',
                  name: 'interfaceHome',
                  component: InterfaceHome,
                },
                {
                  path: '/maintenance/interface/:id',
                  name: 'interfaceItem',
                  component: InterfaceInfo,
                  meta: {
                    title: '接口详情'
                  }
                }
              ]
            }
          ]
        },
        {
          path: '/resources',
          name: 'resources',
          meta: {
            title: '资源管理'
          },
          component: () => import('@/views/ResourceManage/index.vue')
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
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: {
        title: '登录'
      }
    },
  ]
})
//router before guards
router.beforeEach(async(to) => {
  NProgress.start()
  // set page title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // 处理文件管理页面的问题
  if (to.path === '/maintenance') {
    return '/maintenance/document'
  }
})


//router after guards
router.afterEach(() => {
  NProgress.done()
})


export default router
